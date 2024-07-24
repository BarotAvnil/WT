const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
    
    if (req.url == '/home') {
        fs.readFile('home.html', (err, data) => {
            if (err) {
                req.end(err);
            }
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }

    else if (req.url == '/about') {
        fs.readFile('about.html', (err, data) => {
            if (err) {
                res.end(err);
            }
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }
    else if (req.url == '/contact') {
        fs.readFile('contact.html', (err, data) => {
            if (err) {
                res.end(err);
            }
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }

    else {
        res.end("Welcome to my website");
    }
});

server.listen(3350, () => {
    console.log("Server is running on port 3350");
});
