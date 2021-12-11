// importing fs module
const fs = require('fs');

// To write something in a file
// fs.writeFileSync('myfile.txt', 'Hello programmers');

// To add some text in a file
// fs.appendFileSync('myfile.txt', ' How are you doing?');

// To read a file
fs.readFile('myfile.txt', (err, data) => {
    console.log(data.toString());
});

console.log('hello testing');

// Sync means synchronous
