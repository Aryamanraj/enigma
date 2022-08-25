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
not_chek = ["imdb", "pinterest","sonyliv","hotstar","netflix","amazon","twitch", "facebook", "appstore", "playstore", "font"]
# to search
query = input('What you want to search?\n')
list = []

for j in search(query, tld='com', lang='en', tbs='0', safe='off', num=5, start=0, stop=5, pause=2.0, country='India', extra_params=None, user_agent=None, verify_ssl=True):
    list.append(j)

p= {}
lst = []
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
        if len(x) > 10:
            break
    print("done")
    newx = []
    for i in x:
        for j in not_chek:
            flag = 0
            if j in i:
                flag = 1
                break
        if flag == 0:
                newx.append(i)
    print(newx)
    #print(x)
    y = {newx[0]:newx}
    #print(y)
    lst.append(y)
filename = 'url.json'
entry = lst
with open(filename, "r+") as file:
    # data = json.load(file)
    # data.append(entry)
    # file.seek(0)
    json.dump(entry, file)