# analyze.py
import pandas as pd
import json

def analyze_data():
    # 예시 데이터
    data = {
        "A": 10,
        "B": 15,
        "C": 7
    }
    return data

if __name__ == "__main__":
    result = analyze_data()
    print(json.dumps(result))
