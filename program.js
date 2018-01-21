/* BABY STEPS ============================== */

// function add() {
    // console.log(process.argv);
    //create a total variable and set it equal to 0
    //loop through process.argv array starting at process.argv[2] and ending at process.argv.length -1
    //at each index, add the value to total
    //return total
//     let argv = process.argv;
//     let total = 0;
//     for(let i = 2; i <= argv.length - 1; i++) {
//         total = total + Number(argv[i]);
//     }
//     console.log(total);
// }
// add(1, 2, 3);

/* MY FIRST I/O! =========================== */

// function countLines(file) {
//     const fs = require('fs');
//     let bufferObject = fs.readFileSync(process.argv[2]);
//     let lines = bufferObject.toString().split('\n').length - 1;
//     console.log(lines);
// }
// countLines();

/* MY FIRST ASYNC I/O! ====================== */

const fs = require('fs');

function countLines() {
    fs.readFile(process.argv[2], 'utf8', function doneReading(err, fileContents) {
        let total = fileContents.toString().split('\n').length - 1;
        console.log(total);
    });
}

countLines();
