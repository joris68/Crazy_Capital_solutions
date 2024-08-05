

from pymongo.mongo_client import MongoClient
uri = "mongodb+srv://Cluster53807:ekpYRW1UTm9F@cluster53807.onvhe6j.mongodb.net/?retryWrites=true&w=majority&appName=Cluster53807"
# Create a new client and connect to the server
client = MongoClient(uri)
# Send a ping to confirm a successful connection
try:
    client.list_databases()
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)