/* MY FIRST ASYNC I/O! ====================== */

const fs = require('fs');

function countLines() {
    fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
        let total = fileContents.toString().split('\n').length - 1;
        console.log(total);
    });
}

countLines();