#!/usr/bin/env python3
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client.adl
collection = db.adlmodels

for data in collection.find():
    print(data)
