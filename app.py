from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/backend')
def backend():
    return jsonify({"message": "Hello from VM2 (Backend Service)!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
