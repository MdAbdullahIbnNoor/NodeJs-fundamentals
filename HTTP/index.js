const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {

    if (req.url == '/favicon.ico')
        return res.end('');
    const log = `${Date.now()}: ${req.method} ${req.url} Now Req Recieved\n`;

    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    fs.appendFile("log.txt", log, (err, data) => {
        // res.end("Hello From Server Again");
        switch (myUrl.pathname) {
            case '/': res.end("Home Page");
                if (req.method === "GET") res.end("HomePage")
                break
            case '/about':
                const userName = myUrl.query.myName
                res.end(`Hi ${userName}`);
                break
            case '/contact': res.end("Contact Us Page");
                break
            case '/search':
                const searchUrl = myUrl.query.search_url
                res.end('Here is you result based on your search query ' + searchUrl);
                break;
            case '/signup':
                if(req.method === 'GET') res.end('This is your signup form');
                else if(req.method === 'POST'){
                    // DB Query
                    res.send("Success ! Your account is created");
                }
            default: res.end("404 Not Found");
        }
    });
});

myServer.listen(8000, () => console.log("Hello From Server"));