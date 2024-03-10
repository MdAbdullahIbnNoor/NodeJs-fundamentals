const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} Now Req Recieved\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        // res.end("Hello From Server Again");
        switch(req.url){
            case '/': res.end("Home Page");
            break
            case '/about': res.end("About Us Page");
            break
            case '/contact': res.end("Contact Us Page");
            break
            default: res.end("404 Not Found");
        }
    });
});

myServer.listen(8000, () => console.log("Hello From Server"));