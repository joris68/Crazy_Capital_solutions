from pymongo import MongoClient
from dotenv import load_dotenv
import os
from datetime import datetime
import json


load_dotenv()


def save_CAPM_model_to_mongo(asset_dic: dict) -> bool:
    '''
    Here we want to store the previous priced assets from a User. Maximum 5.
    Asset dict also contains information about the user id
    '''

    try:
        asset_dic['createdAt'] = int(datetime.now().timestamp())

        client = MongoClient(os.environ['MONGO'])
        print("conncected to Mongo URi")
        database = client["crazy_capital"]
        camp_assets = database["priced_assets"]
        print("got the collection")

        doc_count = camp_assets.count_documents({})
        print("docs got counted")
        if(doc_count < 6):
            camp_assets.insert_one(asset_dic)
            print("Document was successfully inserted into the collection")
            return True
        else :
            earliest_asset = camp_assets.find_many({}).sort("createdAt", -1).limit(1).next()
            print("This was the earliest Document" +json.dumps(earliest_asset))
            doc_id = earliest_asset['_id']
            result = camp_assets.delete_one({"_id": doc_id})
            if(result['deleted_count'] == 1):
                #insert document now
                 camp_assets.insertOne(asset_dic)
                 print("inserted new document now")
                 return True
            else:
                print("very weird number of documents")
                return False


    except Exception as e:
        print(f"error when savinf to mongoDB {e}")
        return False
    finally:
         client.close()

def get_prev_prices_capms() -> list[dict]:
    '''
    Getting all previously priced assets from a certain user
    '''
    
    try:
        client = MongoClient(os.environ['MONGO'])
        print("conncected to Mongo URi")
        database = client.get_database("crazy_capital")
        camp_assets = database.get_collection("priced_assets")
        docs = []
        for x in camp_assets.find({}):
            docs.append(x)
        print(docs)
        print(len(docs))
        if(len(docs) > 5):
            print("return list more than 5 entries ==> how is this possible?")
            docs = docs[0, 5] # slicing the too ling list
        return docs
    except Exception as e:
        print(f"This was the database error {e}")
        return None
    finally:
        client.close()





