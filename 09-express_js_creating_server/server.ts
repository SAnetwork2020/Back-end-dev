import express from "express";
const app:express.Application = express();
const hostname:string = "127.0.0.1";
const port:number = 5000;

app.get("/",(req:express.Request ,res:express.Response)=>{
    res.status(200).send(`<h3 style="font-family: Lato, sans-serif; color:green">Welcome to Express JS</h3>`)
});

app.listen(port,hostname,()=>{
    console.log(`Express Server is started at http://${hostname}:${port}`);
});