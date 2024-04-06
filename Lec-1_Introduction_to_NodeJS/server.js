const http = require('http');

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/plain');

    res.write("Hello and Welcome in the NodeJS HTTP world!");

    res.end();
});


const port = 3001;

const hostname = 'localhost';

server.listen(port, hostname, ()=>{
    console.log(`Server is listening to http://${hostname}:${port}`);
})