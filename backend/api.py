import time
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/time')
def get_current_time():
    print("COOOOL", time.time())
    return jsonify(body=time.time())

@app.route('/code')
def get_code():
    print("====Reading code====")
    tokens = []
    with open("code.txt") as f:  
        tokens.append(f.read())
    return jsonify(body=tokens)

@app.route('/everyword')
def get_everyword():
    print("====Reading code====")
    with open('code.txt', 'r') as file:
        content = file.read()
    
    words = content.split()
    print(words)

    return jsonify(body=words)

if __name__ == '__main__':
    app.run(debug=True)