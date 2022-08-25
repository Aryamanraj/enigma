import json

filename = 'test.json'
# Old JSON File:
# [{"alice": 24, "bob": 27}]

entry = {'carl': 33}

with open(filename, "r+") as file:
    data = json.load(file)
    data.append(entry)
    file.seek(0)
    json.dump(data, file)

# New JSON file: 
# [{"alice": 24, "bob": 27}, {"carl": 33}]