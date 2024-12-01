from flask import Flask, send_file
import os
from flask_cors import CORS

app = Flask(__name__)

CORS(app)

@app.route("/chart")
def get_chart():
    image_path = "D:/Yalancy Projects/React Project/sih2024/dashboard/prediction/chart.png"
    
    if os.path.exists(image_path):
        return send_file(image_path, mimetype='image/png')
    else:
        return "Chart not found", 404

if __name__ == "__main__":
    app.run(debug=True, host="127.0.0.1", port=5000)
