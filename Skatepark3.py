import json

data_json = open("Skaters.json")
data_list = json.load(data_json)
data_json.close()

def check_age_experience(skaters):
    for skater in skaters:
        name = skater.get('name', 'key not found')
        age = skater.get('age', 0)
        is_experienced = skater.get('is_experienced', False)

        if age >= 13 and is_experienced:
            print(f"Hi {name}, welcome to the skate park!")


check_age_experience(data_list) # what's this last line for??
