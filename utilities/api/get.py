#!/usr/bin/env python3

import ast
import requests
import pprint

URL = 'http://localhost:3001/api/v1/activities'

res = requests.get(URL)
data = ast.literal_eval(res.text)
pprint.pprint(data)
