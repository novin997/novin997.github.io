const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const path = require("path");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

const io = socketio(server);

var clientPath = path.join(__dirname, "../../");
console.log(clientPath);

app.use(cors());
app.use(express.json());
app.use(express.static(clientPath));

var portNumber = process.env.PORT || 8080;

io.on("connection",(sock)=>{
    sock.emit("message","Hi, you are connected");
    sock.on("send-message",(message)=>
    {
        sock.broadcast.emit("chat-message",message);
    });
    sock.on("player-move",(message)=>
    {
        sock.broadcast.emit("move-message",message);
    });
    sock.on("name-message",(name)=>
    {
        sock.broadcast.emit("name-broadcast",name);
    });
    sock.on("reply-name",(name)=>
    {
        sock.broadcast.emit("reply-name-broadcast",name);
    });
});

server.on("error",()=>{
    console.log(`Server is not running on Port: ${portNumber}`);
});

app.get("/download",(req,res)=>
{
    res.download(path.join(__dirname,"../../img/steins_gate.jpg"));
})

server.listen(portNumber,()=>{
    console.log(`Server is listening to Port: ${portNumber}`);
});