const fs = require('fs');
const os = require('os');

console.log(os.cpus().length);

// console.log('1');
// Non-blocking operation
fs.readFile("./text.txt", "utf-8", (err, result) => {
    // console.log(result);
})
// console.log('2');