const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const { Server } = require('socket.io');
const { join } = require('path');

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(express.static("src/public"));

/** 
 *  Express (app): Manages the application logic, routing, middleware and it is specific to handle the web request.

    HTTP Server: Manages the lower-level HTTP communication b/w a client and a server for bidirectional communcation
 */

const httpServer = http.createServer(app);

const io = new Server(httpServer);

io.on('connection', (socket)=>{
    console.log('a socket is connected', socket.id);
    //socket.emit("message", "Message from server");

    socket.on("message", (data)=>{

        console.log("recieved message", data);

        socket.broadcast.emit("broadcast", data);
    });

});

app.get('/', (req, res)=>{
    //res.send("<h1>First web socket example</h1>")
    console.log(__dirname);
    res.sendFile(join(__dirname, 'public', 'wsClient.html'));
});

httpServer.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`);
});