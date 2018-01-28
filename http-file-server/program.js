/* HTTP FILE SERVER =============== */

const http = require('http');
const fs = require('fs');
const portNumber = Number(process.argv[2]);
const fileToServe = process.argv[3];

const server = http.createServer( (req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    fs.createReadStream(fileToServe).pipe(res);
});
server.listen(portNumber);