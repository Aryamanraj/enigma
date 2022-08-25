import re
import os
import json
preset = ["free","movie","hd", 'download', 'd0wnl0ad', 'watch' ]
def allkeys(keywrd):
    global preset
    s = set(preset)
    for i in keywrd:
        s.add(i)
    preset = list(set(s))
def opening(f,preset):
    rating = 0
    ll = []
    x = open(f,'r')
    for i in x.readlines():
        ll.append(i.lower())
    x.close()
    ss = "".join(ll)
    check = re.sub(' ','',ss)
    for i in preset:
        if i == "free":
            for j in preset:
                if j!="free":
                    rating+=min(check.count(i),check.count(j))
    if rating == 0:
        return (rating,f)
    return (rating,f)
allkeys(["thor"])
l = []
for i in list(sorted(os.listdir('./textData'))):
    x = (opening('./textData/'+str(i),preset))
    if x[0] !=0:
        l.append(x)
for i in l:
    print(i)
keysss = set()
for i,j in l:
    keysss.add(j[11])
#print(keysss)


for i in keysss:
    JSONimport = open('url.json')
    dataload = json.load(JSONimport)
    dictJSON = dataload[0]
    keysJSON = list(dictJSON.keys())
    keyJSON = keysJSON[int(i)]

    print('===================')
    print('Suspected links:\n'+keyJSON)