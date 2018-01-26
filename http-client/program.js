/* HTTP CLIENT ========================= */

const http = require('http');
const url = process.argv[2];

http.get(url, (res) => {
    res.setEncoding('utf8');
    res.on('data', (data, err)  => {
        if(err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
    
});