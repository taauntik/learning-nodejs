const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`, 'utf8');

    myReadStream.pipe(res);
});

server.listen(5000);
console.log('server is listening on port 5000');
