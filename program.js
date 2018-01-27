/* JUGGLING ASYNC ================= */

const http = require('http');
const concat = require('concat-stream');
const urls = process.argv.slice(2);
const numberOfUrls = process.argv.length -2;
const resultArray = new Array(urls.length);
let counter = 0;

function fetchUrl(url, index) {
    http.get(url, res => {
        res.pipe(concat(data => {            
            resultArray[index] = data;
            counter++;            
            if(counter === urls.length) {
                printResults();
            }            
        }));
    });
}

for(let i = 0; i < urls.length; i++) {
    fetchUrl(urls[i], i);
}

function printResults() {
    for(let i = 0; i < resultArray.length; i++) {
        console.log(resultArray[i].toString());
    }
}