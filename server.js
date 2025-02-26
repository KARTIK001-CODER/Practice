const http = require("http");
const port = 3000;

const Server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type" : "Plain.Text"});
    res.end("Hello Kartik , Welcome Back");
})


Server.listen(port , ()=>{
    console.log(`Port is Running on ${port} `)
})