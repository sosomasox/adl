#!/usr/bin/env python3

import ast
import datetime
import json
import os
import pprint
import requests
import tqdm

ADL_URL = 'http://localhost:3001/api/v1/activities/'

os.chdir("../data")

for file_name_str in tqdm.tqdm(sorted(os.listdir("./"))):
    with open(file_name_str, 'r') as fpr:
        for data in tqdm.tqdm(fpr.readlines()):
            payload = ast.literal_eval(data[:-1])
            headers = {'content-type': 'application/json'}
            res = requests.post(ADL_URL, data=json.dumps(payload), headers=headers)
            ret = json.loads(res.text)

print("done")
