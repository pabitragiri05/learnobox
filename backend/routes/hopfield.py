from fastapi import APIRouter
from pydantic import BaseModel
from typing import List
import numpy as np

router = APIRouter()

# Global store for weights
model_store = {
    "weights": None,
    "size": 0
}

class StoreRequest(BaseModel):
    patterns: List[List[List[int]]]

class RecallRequest(BaseModel):
    input_pattern: List[List[int]]

def to_bipolar(pattern):
    return np.where(pattern == 0, -1, 1)

def to_binary(pattern):
    return np.where(pattern <= 0, 0, 1)

@router.post("/store")
def store_patterns(req: StoreRequest):
    patterns = np.array(req.patterns)
    if len(patterns) == 0:
        return {"error": "No patterns provided"}
    
    num_patterns, rows, cols = patterns.shape
    size = rows * cols
    
    # Initialize weight matrix
    W = np.zeros((size, size))
    
    for p in patterns:
        p_flat = p.flatten()
        p_bipolar = to_bipolar(p_flat)
        W += np.outer(p_bipolar, p_bipolar)
    
    # Set diagonal to 0
    np.fill_diagonal(W, 0)
    
    # Average the weights (optional but good practice for capacity stability)
    W = W / size
    
    model_store["weights"] = W
    model_store["size"] = size
    
    return {"message": "Patterns stored securely in Hopfield Network.", "num_patterns": num_patterns}

def calculate_energy(x, W):
    return float(-0.5 * np.dot(x.T, np.dot(W, x)))

@router.post("/recall")
def recall_pattern(req: RecallRequest):
    if model_store["weights"] is None:
        return {"error": "No patterns stored yet. Please store patterns first."}
    
    W = model_store["weights"]
    
    input_arr = np.array(req.input_pattern)
    rows, cols = input_arr.shape
    
    # Convert input to bipolar and flatten
    x = to_bipolar(input_arr.flatten())
    
    iterations = 0
    max_iter = 100
    energies = []
    
    energies.append(calculate_energy(x, W))
    
    while iterations < max_iter:
        x_new = np.sign(np.dot(W, x))
        # Handle 0 in sign (map to 1 to match bipolar space correctly)
        x_new[x_new == 0] = 1
        
        energies.append(calculate_energy(x_new, W))
        
        if np.array_equal(x, x_new):
            break
            
        x = x_new
        iterations += 1
        
    recovered_pattern = to_binary(x).reshape(rows, cols).tolist()
    
    return {
        "recalled_pattern": recovered_pattern,
        "iterations": iterations,
        "energy": [float(e) for e in energies]
    }
