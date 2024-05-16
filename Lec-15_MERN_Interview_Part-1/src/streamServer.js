const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res)=>{
   fs.readFile('./src/big.file', (err, data)=>{
    if(err) throw err;
    res.end(data);
   });
})


server.listen(3000, ()=>{
    console.log('Server is up and running on 3000');
})