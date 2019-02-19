from flask import Flask, jsonify, render_template
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def index():
    return render_template('mock.html')

@app.route('/api')
def api():
    return jsonify(
        headline="The test worked",
        paragraph="yes, the test worked."
        )