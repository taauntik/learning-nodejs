// importing the os module
const os = require('os');

// This is gonna give us the name of my operating system
console.log(os.platform()); // returning linux

// This is gonna give us the home directory of my operating system
console.log(os.homedir()); // return /home/username

// This is gonna give us how many free memory available
console.log(os.freemem());

// how many core I have
console.log(os.cpus()); // return cores
