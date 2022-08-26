const { exec } = require('child_process');

function runner(x){
    switch(x){
        case 1:
            cmd = 'node "./readData.js"' 
            exec(cmd)
        case 2:
            cmd2 = 'cd OCR && python -u "./getURLs.py"'
            exec(cmd2)
        case 3:
            cmd3 = 'cd OCR && node ./screenshot.js'
            exec(cmd3)
        case 4:
            cmd4 = 'cd OCR && python -u "./reader.py"'
            exec(cmd4)
        case 5:
            cmd5 = 'cd OCR && python -u "./keyWordMatching.py"'
            exec(cmd5)
    }}



for (let index = 1; index <= 5; index++) {
    runner(index);    
}