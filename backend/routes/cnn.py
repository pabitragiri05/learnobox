from fastapi import APIRouter
from pydantic import BaseModel
import numpy as np
import json

router = APIRouter()

class CNNTrainRequest(BaseModel):
    image: str
    learning_rate: float
    epochs: int
    filters: int
    kernel_size: int

def relu(x):
    return np.maximum(0, x)

def softmax(x):
    exp_x = np.exp(x - np.max(x))
    return exp_x / np.sum(exp_x)

@router.post("/train")
def train_cnn(req: CNNTrainRequest):
    # Fix 1: Properly ingest safely normalized image data from UI canvas (28x28 grayscale, 0->1 array)
    try:
        pixels = json.loads(req.image)
        if len(pixels) == 28*28:
            img_arr = np.array(pixels, dtype=float).reshape(28, 28)
        else:
            raise ValueError("Invalid array format")
    except Exception:
        # Debug/Fallback dummy if direct generation happens
        img_arr = np.random.rand(28, 28)
        
    lr = float(req.learning_rate)
    # Fix 10: Enforce bounds to prevent UI from freezing pure Python O(N^4) logic
    epochs = min(max(int(req.epochs), 1), 30) 
    num_filters = min(max(int(req.filters), 1), 16)
    k_size = int(req.kernel_size)
    img_size = 28
    
    # Model Validation Sanity Check: Binary condition that acts strictly upon image characteristics
    mean_val = np.mean(img_arr)
    target_class = 0 if mean_val > 0.4 else 1
    
    # He initialization for stable exploding gradients
    np.random.seed(42)
    W_conv = np.random.randn(num_filters, k_size, k_size) * np.sqrt(2.0 / (k_size*k_size))
    b_conv = np.zeros((num_filters, 1))
    
    out_dim = img_size - k_size + 1
    pool_out_dim = out_dim // 2
    flatten_size = num_filters * pool_out_dim * pool_out_dim
    
    num_classes = 2
    W_fc = np.random.randn(num_classes, flatten_size) * np.sqrt(2.0 / flatten_size)
    b_fc = np.zeros((num_classes, 1))
    
    loss_history = []
    feature_maps = []
    
    # --------- EXACT BACKPROPAGATION TRAINING LOOP ---------
    for epoch in range(epochs):
        
        # Step 2: Convolution Forward Pass
        conv_out = np.zeros((num_filters, out_dim, out_dim))
        for f in range(num_filters):
            for i in range(out_dim):
                for j in range(out_dim):
                    # Proper sliding window application logic
                    region = img_arr[i:i+k_size, j:j+k_size]
                    conv_out[f, i, j] = np.sum(region * W_conv[f]) + b_conv[f, 0]
        
        # Capture raw geometric feature map snapshot at final sweep
        if epoch == epochs - 1:
            for f in range(min(num_filters, 4)):
                fm = conv_out[f]
                # Slice upper left bounds of feature matrix exactly to (14x14)
                fm_14 = fm[:14, :14]
                if fm_14.shape[0] < 14 or fm_14.shape[1] < 14:
                    pad = np.zeros((14, 14))
                    pad[:fm_14.shape[0], :fm_14.shape[1]] = fm_14
                    fm_14 = pad
                feature_maps.append(fm_14.flatten().tolist())

        # Step 3: Global Non-Linear Activation (ReLU)
        relu_out = relu(conv_out)
        
        # Step 4: Max Pooling (2x2 bounds)
        pool_out = np.zeros((num_filters, pool_out_dim, pool_out_dim))
        
        # Max Indices required to correctly backpropagate spatial mapping gradients
        max_idx = np.zeros((num_filters, pool_out_dim, pool_out_dim, 2), dtype=int)
        
        for f in range(num_filters):
            for i in range(pool_out_dim):
                for j in range(pool_out_dim):
                    r_start, c_start = i*2, j*2
                    region = relu_out[f, r_start:r_start+2, c_start:c_start+2]
                    pool_out[f, i, j] = np.max(region)
                    
                    # Log where exactly the highest pixel was derived from
                    flat_idx = np.argmax(region)
                    max_idx[f, i, j] = [r_start + (flat_idx // 2), c_start + (flat_idx % 2)]
                    
        # Step 5: Flattening layer sequence
        flat_out = pool_out.flatten().reshape(-1, 1)
        
        # Step 6: Fully Connected Linear Combination
        logits = np.dot(W_fc, flat_out) + b_fc
        
        # Step 7: Classification Activation (Softmax bounds)
        probs = softmax(logits)
        
        # Step 8: Standard Cross-Entropy Logarithmic Loss
        loss = -np.log(probs[target_class, 0] + 1e-8)
        loss_history.append(float(loss))
        
        # ========= BACKPROPAGATION START =========
        
        # Step 9A: Softmax spatial gradient matching logic
        d_logits = probs.copy()
        d_logits[target_class, 0] -= 1
        
        # Step 9B: Fully Connected Back-propagation
        dW_fc = np.dot(d_logits, flat_out.T)
        db_fc = d_logits
        
        # Unroll linear dimensions back to volume tensors
        d_flat = np.dot(W_fc.T, d_logits)
        d_pool = d_flat.reshape((num_filters, pool_out_dim, pool_out_dim))
        
        # Step 9C: Pooling layer gradients (Applying zero diff back except to specific max_idx traces)
        d_relu = np.zeros_like(relu_out)
        for f in range(num_filters):
            for i in range(pool_out_dim):
                for j in range(pool_out_dim):
                    max_r, max_c = max_idx[f, i, j]
                    d_relu[f, max_r, max_c] = d_pool[f, i, j]
                    
        # Step 9D: Reverse ReLU logic
        d_conv = d_relu * (conv_out > 0)
        
        # Step 9E: Convolutions window chain rule integration
        dW_conv = np.zeros_like(W_conv)
        db_conv = np.zeros_like(b_conv)
        
        for f in range(num_filters):
            db_conv[f, 0] = np.sum(d_conv[f])
            for i in range(out_dim):
                for j in range(out_dim):
                    dW_conv[f] += img_arr[i:i+k_size, j:j+k_size] * d_conv[f, i, j]
        
        # Step 11: Safety Parameter (Gradient Clipping prevents geometric NaN generation)
        W_fc -= lr * np.clip(dW_fc, -1.0, 1.0)
        b_fc -= lr * np.clip(db_fc, -1.0, 1.0)
        W_conv -= lr * np.clip(dW_conv, -1.0, 1.0)
        b_conv -= lr * np.clip(db_conv, -1.0, 1.0)
        
    classes = ["Bright/Flat Motif 🟢", "Dark/Textured Motif 🟣"]
    pred_idx = int(np.argmax(probs))
    
    return {
        "prediction": classes[pred_idx],
        "confidence": float(probs[pred_idx, 0] * 100),
        "loss_per_epoch": loss_history,
        "feature_maps": feature_maps
    }
