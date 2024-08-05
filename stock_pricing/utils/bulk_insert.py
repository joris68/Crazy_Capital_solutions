import pandas as pd
from dotenv import load_dotenv
import os
import json

load_dotenv()

'''This is a bulk insert for a mongoDB collection that stored information of all S&P 500 companies and other information for the Search bar
'''

from pymongo.mongo_client import MongoClient
uri = ""
# Create a new client and connect to the server
client = MongoClient(uri)
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

data = pd.read_csv("/Users/j.gabrisch/Documents/Projects/Finance_project/stock_pricing/utils/constituents.csv")

#client = MongoClient(os.environ['MONGO_URI'])
#print("conncected to Mongo URi")
database = client.get_database("crazy_capital")
s_and_p_assets = database.get_collection("s_and_p_500_assets")

# Convert DataFrame to list of dictionaries
data_json = json.loads(data.to_json(orient='records'))

s_and_p_assets.insert(data_json)





