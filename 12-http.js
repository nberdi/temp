const http = require('http');

// req represents incoming request; res is what we sending back
// const server = http.createServer((req, res) => {
//     res.write("Welcome to our home page");
//     res.end();
// });

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our home page");
    } else if (req.url === '/about') {
        res.end("Here is our short history");
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' }); // 👈 This line is key
        res.end(`<h1>Oops</h1>
<p>We can't seem to find what you are looking for!</p>
<a href="/">Go back</a>`)
    }
}); 

server.listen(3000);