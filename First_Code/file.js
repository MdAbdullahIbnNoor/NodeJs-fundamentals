const fs = require('fs');

// Sync..
// fs.writeFileSync('file.txt', 'Hey There Hows going? ')

// Asynchronous
// fs.writeFile('file.txt', 'Hey There Hows going? ', (err) => {
//     console.log(err);
// })

// const result = fs.readFileSync('./contact.txt', "utf-8");
// console.log(result);

// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//     if(err) {
//         console.log("Error: ", err);
//     }
//     else {
//         console.log(result);
//     }
// })

fs.appendFileSync("./text.txt", new Date().getDate().toLocaleString());