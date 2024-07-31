from pymongo import MongoClient
from dotenv import load_dotenv
import os
from datetime import datetime


load_dotenv()


def save_CAPM_model_to_mongo(asset_dic: dict) -> bool:
    '''
    Here we want to store the previous priced assets from a User. Maximum 5.
    Asset dict also contains information about the user id
    '''

    try:
        asset_dic['createdAt'] = datetime.now(tz=datetime.timezone.utc)

        client = MongoClient(os.environ['MONGO_URI'])
        print("conncected to Mongo URi")
        database = client.get_database("crazy_capital")
        camp_assets = database.get_collection("pricedAssets")

        # first check amount of records in the database
        doc_count = camp_assets.count_documents({"userID": asset_dic['userid']})
        if(doc_count < 5):
            camp_assets.insertOne(asset_dic)
            print("Document was successfully inserted into the collection")
        else :
            # delete last record
            #sort descending order
            earliest_asset = camp_assets.find_many({"userID": asset_dic["userid"]}).sort("timestamp", -1).limit(1).next()
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
        print("error when savinf to mongoDB")
        return False
    finally:
         client.close()

def get_prev_prices_capms(query_dic: dict) -> list[dict] | None:
    '''
    Getting all previously priced assets from a certain user
    '''
    
    try:
        client = MongoClient(os.environ['MONGO_URI'])
        print("conncected to Mongo URi")
        database = client.get_database("crazy_capital")
        camp_assets = database.get_collection("pricedAssets")
        userID = query_dic['userID']
        curser_result= camp_assets.find({'userID' : userID})
        list_result = list(curser_result)
        if(len(list_result) > 5):
            print("return list more than 5 entries ==> how is this possible?")
            list_result = list_result[0, 5] # slicing the too ling list
        return list_result
    except Exception as e:
        return None





