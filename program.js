/* HTTP UPPERCASERER ================= */

const http = require('http');
const map = require('through2-map');
const inStream = require('in-stream');
// const outStream = require('out-stream');
const portNumber = Number(process.argv[2]);
const file = process.argv[3];

const server = http.createServer( (req, res) => {
    if(req.method !== 'POST') {
        return res.end('Must send POST\n')
    }
    req.pipe(map (function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});
server.listen(portNumber);