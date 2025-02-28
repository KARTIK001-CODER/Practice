// const http = require("http");
const Port = 9000;

// const Server = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type" : "Plain.Text"});
//     res.end("Hello Kartik , Welcome Back");
// })


// Server.listen(port , ()=>{
//     console.log(`Port is Running on ${port} `)
// })

const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Hello There, It good to see you Again!!!");
});

app.listen(Port , ()=>{
    console.log(`Port is running on ${Port}`);
})