from flask import Flask, request
from models import CAPM
from stock_pricing.crud_utils import save_CAPM_model_to_mongo, get_prev_prices_capms

app = Flask(__name__)

@app.route("/api/price/capm", methods=['POST'])
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
        successful = save_CAPM_model_to_mongo(result)
        if(successful): 
            return result , 200
        else:
            return "Database error occured", 402
    
    except Exception as e:
        return "An error Occurred", 400
    

@app.route("/api/price/capm/prev", methods=['GET'])
def get_previously_priced_assets():
    try:
        #maybe here userID as cookie?
        userID = request.args['userID']
        query_dic = {'userID': userID}
        result = get_prev_prices_capms(query_dic)
        if(result is None):
            return "Database error occured Please try again later", 400
        else:
            return result, 200

    except Exception as e:
        return "Function error occured in the route handler", 400




if __name__ == "__main__":
    app.run(debug=True)
