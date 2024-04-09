const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // Set response header with Content-Type as text/html
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/' || req.url === '/index.html') {

        // Read the HTML file
        fs.readFile(path.join(__dirname, 'public', 'html', 'demo.html'), 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading HTML file:', err);
                res.statusCode = 500;
                res.end('Internal Server Error');
            } else {
                // Write HTML response
                res.write(data);
                // End the response
                res.end();
            }
        });
    } 

    else if (req.url === '/css/style.css') {

        // Set response header with Content-Type as text/css
        res.setHeader('Content-Type', 'text/css');
        // Read the CSS file
        fs.readFile(path.join(__dirname, 'public', 'css', 'style.css'), 'utf8', (err, data) => {
            if (err) {
                console.error('Error reading CSS file:', err);
                res.statusCode = 500;
                res.end('Internal Server Error');
            } else {
                // Write CSS response
                res.write(data);
                // End the response
                res.end();
            }
        });

    } else {

        // If the requested URL is not found, send a 404 response
        res.statusCode = 404;
        res.end('Not Found');

    }
});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is listening on http://${host}:${port}`);
});