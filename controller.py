import os
x = input('What to do: ')
match x:
    case '1':
        cmd = 'node "/home/mason/Desktop/Prog/sihproj/enigma/readData.js"' 
        os.system(cmd)
    case '2':
        cmd = ''