from flask import Flask, request
from models.CAPM import CAPM
from crud_utils import save_CAPM_model_to_mongo, get_prev_prices_capms
from dotenv import load_dotenv
import os
import json
from bson.json_util import dumps

load_dotenv()

app = Flask(__name__)




@app.route("/pricing/capm", methods=['POST'])
def evaluate_CAPM_model():
    try:
        RISKY_ASSET = request.args['assetname']
        BENCHMARK = request.args['benchmark']
        START_TIME = request.args['starttime']
        END_TIME =  request.args['endtime']
    except Exception as e:
        return "Missing parameters", 400
    
    try:
        result = CAPM.price_asset(RISKY_ASSET, BENCHMARK, START_TIME, END_TIME)
        print("pricing hat funktioniert")
        successful = save_CAPM_model_to_mongo(result)
        
        print(dumps(result))
        if(successful): 
            return dumps(result) , 200
        else:
            return "Database error occured", 402
    
    except Exception as e:
        return f"An error occurred: {e}", 401
    
@app.route("/", methods=['GET'])
def hello_world():
    return "Hellp from pricing service", 200


@app.route("/pricing/capm/prev", methods=['GET'])
def get_previously_priced_assets():
    try:
        result = get_prev_prices_capms()
        if(result is None):
            return "Database error occured Please try again later", 400
        else:
            return dumps(result), 200

    except Exception as e:
        return "Function error occured in the route handler", 400




if __name__ == "__main__":
    app.run(debug=True)
