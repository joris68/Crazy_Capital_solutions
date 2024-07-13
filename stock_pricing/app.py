from flask import Flask, request
from models import CAPM

app = Flask(__name__)

@app.route("/api/price/capm", methods=['GET'])
def evaluate_CAPM_model():
    try:
        RISKY_ASSET = request.args['assetname']
        BENCHMARK = request.args['benchmark']
        START_TIME = request.args['starttime']
        END_TIME =  request.args['endtime']
    except Exception as e:
        return "Missing parameters", 400
    

    CAPM.price_asset()

@app.route("/api/hello", methods =['GET'])
def say_hello ():
    name  = request.args['name']
    return "Hello" + name , 200


if __name__ == "__main__":
    app.run(debug=True)
