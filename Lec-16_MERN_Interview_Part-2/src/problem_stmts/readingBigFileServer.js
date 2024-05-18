const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer();

server.on('request', (req, res)=>{
//    fs.readFile('./src/big.file', (err, data)=>{
//     if(err) throw err;
//     res.end(data);
//    });

const filePath = path.join(__dirname,'big.file');
console.log(__dirname);
console.log(filePath);

const fileReadStream = fs.createReadStream(filePath);
fileReadStream.pipe(res);
})


server.listen(3000, ()=>{
    console.log('Server is up and running on 3000');
})