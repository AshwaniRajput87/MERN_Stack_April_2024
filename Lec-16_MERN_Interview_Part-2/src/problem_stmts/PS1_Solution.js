/**
    What is Stream?
      ->  It allows data to be processed in small chunks, provide one piece of data at a time without need to load the entire data into the memory.

    Stream uses the zlib:
      -> zlib is a library that os is being oftently used for managing the data efficiently particulary in the network communication and the file manamement.
    
    type of streams: we have 4 types of streams
    1. read - fs.createReadStream(filePath)
    2. write - fs.createWriteSteram(filepath)
    3. duplex - sockets
    4. transformative - change one output into another output (crypto, zlib)

    Streams use the "EventEmitter" as a base class.

    pipe: pipe() is a method of readable Stream and is used to connect a readable stream to writabe stream.

    pipe automatically handles the data transfer from readable stream to writable stream. 

 */

const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer();

const filePath = path.join(__dirname,'big.file');
console.log(__dirname);
console.log(filePath);

const fileReadStream = fs.createReadStream(filePath);
const fileWriteStream = fs.createWriteStream('copyOfBig.file');

fileReadStream.on("data", (chunk)=>{
    console.log(`Recieved ${chunk.length} bytes of data`);
    fileWriteStream.write(chunk);
});

// fileReadStream.on("end", ()=>{
//     fileWriteStream.end();
//     console.log('Finished the reading and writing the file');
// });

// fileReadStream.on("error", (err)=>{
//     console.log(err);
// })

fileReadStream.pipe(fileWriteStream);



server.listen(3080, ()=>{
    console.log('Server is up and running on 3080');
});


