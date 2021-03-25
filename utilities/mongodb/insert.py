#!/usr/bin/env python3

from pymongo import MongoClient
import json
import ast

client = MongoClient('mongodb://localhost:27017/')
db = client.adl
collection = db.adlmodels

with open('../data/going_out.jsonl', 'r') as fp:
    for data in fp.readlines():
        data = data.strip()
        data_dit = ast.literal_eval(data)
        collection.insert_one(data_dit)
