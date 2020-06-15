const http = require("http");
const express = require("express");

const app = express();
const server = http.createServer(app);

var portNumber = 8080;

server.on("error",()=>{
    console.log(`Server is not running on Port: ${portNumber}`);
});

server.listen(portNumber,()=>{
    console.log(`Server is listening to Port: ${portNumber}`);
});