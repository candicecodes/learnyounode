/* TIME SERVER ======================= */

const net = require('net');
const strftime = require('strftime');
const portNumber = Number(process.argv[2]);

const server = net.createServer( socket => {
    socket.end(strftime('%F %R', new Date()) + '\n');
});
server.listen(portNumber);