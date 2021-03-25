from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client.adl
collection = db.adlmodels
collection.remove({})
#collection.delete_many({"activity":"going_out"})
