import re
from math import log10
import os
preset = ["free","movie","hd", 'download', 'd0wnl0ad' ]
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
    return (log10(rating)+1,f)
allkeys(["thor"])
for i in os.listdir('./textData'):
    print(opening('./textData/'+str(i),preset))
