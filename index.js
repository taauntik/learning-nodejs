const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadStream.on('data', (chunk) => {
//     ourWriteStream.write(chunk);
// });

// using pipe for write stream
ourReadStream.pipe(ourWriteStream);
