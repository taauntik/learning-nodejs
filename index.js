// importing the path module
const path = require('path');

const myPath = '/home/auntik/programming/github/learning-nodejs/index.js';

// This is gonna give us the basename of the path
console.log(path.basename(myPath)); // return index.js

// This is gonna give us the full path of the directory
console.log(path.dirname(myPath)); // return /home/auntik/programming/github/learning-nodejs

// This is gonna give us the extension name of the path
console.log(path.extname(myPath)); // return .js

// This is gonna return an object
console.log(path.parse(myPath)); // return { root, dir, base, ext, name }
