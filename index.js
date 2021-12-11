const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write(`
            <html>
                <head>
                    <title></title>
                </head>
                <body>
                    <form method="post" action="/process">
                        <input name="message" />
                    </form>
                </body>
            </html>
        `);
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        const body = [];
        // req.on('data', (chunk) => {
        //     body.push(chunk);
        // });
        req.on('end', () => {
            console.log('stream finished');
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.write('Hello');
            res.end();
        });
    } else {
        res.write('404 not found');
    }
});

server.listen(5000);
console.log('server is listening on port 5000');

// const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

// ourReadStream.on('data', (chunk) => {
//     console.log(chunk);
// });

// console.log('Hello');
