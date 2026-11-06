import json

data_json = open("ramps.json") # not a dict
data_dict = json.load(data_json) # is a dict

for k, v in data_dict():
    print(f"{k}s favorite ramp is {v}")
