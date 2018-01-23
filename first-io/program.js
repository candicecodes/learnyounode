/* MY FIRST I/O! =========================== */

function countLines(file) {
    const fs = require('fs');
    let bufferObject = fs.readFileSync(process.argv[2]);
    let lines = bufferObject.toString().split('\n').length - 1;
    console.log(lines);
}
countLines();