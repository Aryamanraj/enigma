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
print(keysss)
jsonset = set()
d = {}
e = {}
for i,j in l:
    x = j.count(".")
    store_ind = 0
    cnt = 0
    for k in range(len(j)):
        if j[k] == ".":
            cnt+=1
        if cnt == x-1:
            store_ind = k
            break
    rem = j[k+1:]
    start = 0
    ans = ""
    while(rem[start]!="."):
        ans+=rem[start]
        start+=1
    if ans not in d:
        d[ans] = []
    jsonset.add(ans)
    store_s = 0
    for m in range(len(j)):
        if j[m] == '/':
            store_s = m
    req = 2
    ll = 0
    indmatch = ""
    remss = j[store_s+1:]
    while(req>0):
        if remss[ll] == ".":
            req-=1
        indmatch+=remss[ll]
        ll+=1
    indmatch = indmatch[:len(indmatch)-1]
    d[ans].append(indmatch)
    e[indmatch] = i
print(e)
final_dict = {i[:len(i)-1]:[] for i in d}
fin = []
for i in d:
     JSONimport = open(f'./URLkaJSON/{i}.json')
     dataload = json.load(JSONimport)
     for j in d[i]:
        xx = j.split(".")
        k1,k2 = int(xx[0]),int(xx[1])
        #print(xx)
        kk = list(dataload[k1].values())
        ff = []
        for ll in kk:
            for kkk in ll:
                ff.append(kkk)
        fin.append([e[j],ff[k2]])
        #print(fin)
        final_dict[i[:len(i)-1]] = fin


print(final_dict)
y = json.dumps(final_dict)

filename = './resultDB/final.json'
with open(filename, 'w') as f:
    f.write(y)
#print(final_dict["Avengers"])
        ##print(dataload[k1])
     #keyJSON = keysJSON[int(i)]


    # print('===================')
    # print('Suspected links:\n'+keyJSON)

# for indexer in l:
#     f = list(indexer)
#     indexing = indexer.index('.')
#     print(indexing)
