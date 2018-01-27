/* HTTP COLLECT =============== */

const http = require('http');
const url = process.argv[2];
const concat = require('concat-stream');


http.get(url, (res) => {
    res.pipe(concat(function (data) {
        // console.log(data, data.toString());
        data = data.toString();
        console.log(data.length);
        console.log(data);

    }));
});