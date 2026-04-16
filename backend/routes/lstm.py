from fastapi import APIRouter
from pydantic import BaseModel
from typing import Any, List, Dict
import numpy as np

router = APIRouter()

class LSTMTrainRequest(BaseModel):
    sequence: List[Any]
    mode: str
    learning_rate: float
    epochs: int
    hidden_units: int
    sequence_length: int

def sigmoid(x):
    x = np.clip(x, -50, 50)
    return 1 / (1 + np.exp(-x))

def tanh(x):
    return np.tanh(x)

@router.post("/train")
def train_lstm(req: LSTMTrainRequest):
    np.random.seed(42)

    seq = req.sequence
    if not seq or len(seq) < 3:
        return {"error": "Sequence too small"}

    mode = req.mode
    lr = float(req.learning_rate)
    epochs = int(req.epochs)
    hidden_size = int(req.hidden_units)
    seq_len = int(req.sequence_length)

    # -------------------------------
    # 🔹 TEXT MODE FIX
    # -------------------------------
    if mode == "text":
        words = seq if isinstance(seq, list) else seq.split()
        vocab = sorted(list(set(words)))

        word_to_int = {w: i for i, w in enumerate(vocab)}
        int_to_word = {i: w for w, i in word_to_int.items()}

        data = [word_to_int[w] for w in words]
        output_size = len(vocab)

    # -------------------------------
    # 🔹 NUMBER MODE FIX
    # -------------------------------
    else:
        data = np.array(seq, dtype=float)

        # Normalize properly
        mean = np.mean(data)
        std = np.std(data) + 1e-8
        data = (data - mean) / std

        output_size = 1

    # -------------------------------
    # 🔹 CREATE SEQUENCES
    # -------------------------------
    X, Y = [], []
    for i in range(len(data) - seq_len):
        X.append(data[i:i+seq_len])
        Y.append(data[i+seq_len])

    X = np.array(X)
    Y = np.array(Y)

    input_dim = 1

    # -------------------------------
    # 🔹 INIT WEIGHTS (STABLE)
    # -------------------------------
    def init(shape):
        return np.random.randn(*shape) * 0.1

    W_f = init((hidden_size, hidden_size + input_dim))
    b_f = np.zeros((hidden_size, 1))

    W_i = init((hidden_size, hidden_size + input_dim))
    b_i = np.zeros((hidden_size, 1))

    W_c = init((hidden_size, hidden_size + input_dim))
    b_c = np.zeros((hidden_size, 1))

    W_o = init((hidden_size, hidden_size + input_dim))
    b_o = np.zeros((hidden_size, 1))

    W_y = init((output_size, hidden_size))
    b_y = np.zeros((output_size, 1))

    loss_per_epoch = []
    gate_values = {"forget": [], "input": [], "output": []}
    hidden_states = []

    # -------------------------------
    # 🔹 TRAINING LOOP
    # -------------------------------
    for epoch in range(epochs):
        total_loss = 0

        for i in range(len(X)):
            h = np.zeros((hidden_size, 1))
            c = np.zeros((hidden_size, 1))

            x_seq = X[i]
            y_target = Y[i]

            # Forward pass
            for t in range(seq_len):
                xt = np.array([[x_seq[t]]])
                concat = np.vstack((h, xt))

                f = sigmoid(W_f @ concat + b_f)
                i_gate = sigmoid(W_i @ concat + b_i)
                c_tilde = tanh(W_c @ concat + b_c)

                c = f * c + i_gate * c_tilde
                o = sigmoid(W_o @ concat + b_o)
                h = o * tanh(c)

            y_pred = W_y @ h + b_y

            # -------------------------------
            # 🔹 LOSS
            # -------------------------------
            if mode == "text":
                exp = np.exp(y_pred - np.max(y_pred))
                probs = exp / np.sum(exp)

                loss = -np.log(probs[int(y_target)] + 1e-8)

                dy = probs
                dy[int(y_target)] -= 1

            else:
                loss = 0.5 * (y_pred[0,0] - y_target)**2
                dy = np.array([[y_pred[0,0] - y_target]])

            total_loss += loss

            # -------------------------------
            # 🔹 BACKPROP (SIMPLIFIED)
            # -------------------------------
            dW_y = dy @ h.T
            db_y = dy

            # Basic gradient update (educational)
            W_y -= lr * dW_y
            b_y -= lr * db_y

        loss_per_epoch.append(float(total_loss / len(X)))

    # -------------------------------
    # 🔹 FINAL PREDICTION
    # -------------------------------
    h = np.zeros((hidden_size, 1))
    c = np.zeros((hidden_size, 1))

    last_seq = X[-1]

    for t in range(seq_len):
        xt = np.array([[last_seq[t]]])
        concat = np.vstack((h, xt))

        f = sigmoid(W_f @ concat + b_f)
        i_gate = sigmoid(W_i @ concat + b_i)
        c_tilde = tanh(W_c @ concat + b_c)

        c = f * c + i_gate * c_tilde
        o = sigmoid(W_o @ concat + b_o)
        h = o * tanh(c)

        gate_values["forget"].append(float(np.mean(f)))
        gate_values["input"].append(float(np.mean(i_gate)))
        gate_values["output"].append(float(np.mean(o)))
        hidden_states.append(float(np.mean(h)))

    y_final = W_y @ h + b_y

    # -------------------------------
    # 🔹 OUTPUT FIX
    # -------------------------------
    if mode == "text":
        probs = np.exp(y_final) / np.sum(np.exp(y_final))
        idx = int(np.argmax(probs))
        prediction = int_to_word[idx]

    else:
        # Denormalize
        prediction = float(y_final[0,0] * std + mean)
        prediction = round(prediction, 3)

    return {
        "prediction": prediction,
        "loss_per_epoch": loss_per_epoch,
        "hidden_states": hidden_states,
        "gate_values": gate_values
    }