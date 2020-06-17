const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const path = require("path");

const app = express();
const server = http.createServer(app);

const io = socketio(server);

var clientPath = path.join(__dirname, "../");
console.log(clientPath);

app.use(express.static(clientPath));

var portNumber = 8080;

io.on("connection",(sock)=>{
    sock.emit("message","Hi, you are connected");
    sock.on("send-message",(message)=>
    {
        sock.broadcast.emit("chat-message",message);
        console.log(message);
    });
});

server.on("error",()=>{
    console.log(`Server is not running on Port: ${portNumber}`);
});

server.listen(portNumber,()=>{
    console.log(`Server is listening to Port: ${portNumber}`);
});