from urllib.parse import urlparse
from time import sleep
import requests
import re
import json
#from googlesearch import search
try:
    from googlesearch import search
except ImportError:
    print("No module named 'google' found")
not_chek = ["www.imdb.com", "www.pinterest.com","www.sonyliv.com"]
# to search
query = input('What you want to search?\n')
list = []

for j in search(query, tld='com', lang='en', tbs='0', safe='off', num=4, start=0, stop=4, pause=2.0, country='', extra_params=None, user_agent=None, verify_ssl=True):
    list.append(j)

p= {}
for ur in list:
    x = []
    x.append(ur)
    for m in x:
        data = requests.get(m)
        sleep(1)
        #data = requests.get(m)
        xe = re.findall('(?:(?:https?|ftp):\/\/)?[\w/\-?=%.]+\.[\w/\-&?=%.]+',data.text)
        sleep(1)
        j=[]
        for k in xe:
            if k.startswith("http") and not k.endswith("jpg") and not k.endswith("png") and "php" not in k and not k.endswith("js") and "wp-content" not in k and "google" not in k and "css" not in k:
                if k not in x:
                    x.append(k)
        if len(x) > 20:
            break
    print("done")
    y = {x[0]:x}
    filename = 'url.json'
    entry = y
    with open(filename, "r+") as file:
        data = json.load(file)
        data.append(entry)
        file.seek(0)
        json.dump(data, file)