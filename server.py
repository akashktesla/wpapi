from flask import Flask
import json

with open("cmd.json") as f:
    data = json.load(f)
    print(data)
app = Flask('app')
@app.route('/')

def run():
    return data['cmd']

app.run(host = 'localhost', port = 8080)

