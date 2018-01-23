/* FILTERED LS =============================== */

const fs = require('fs');
const path = require('path');
let argv = process.argv[2];
let extension = process.argv[3];
fs.readdir(argv, function doneReading(err, list) {
    for(let i = 0; i <= list.length -1; i++) {
        if(`.${extension}` === path.extname(list[i])) {
            console.log(list[i]);
        }
    }
});