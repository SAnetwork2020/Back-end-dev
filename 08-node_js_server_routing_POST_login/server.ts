import { IncomingMessage, Server, ServerResponse } from "http";
import http from 'http';

const hostname:string = '127.0.0.1';
const port:number = 5000;

const server: Server = http.createServer((req:IncomingMessage,res:ServerResponse)=>{
    res.statusCode = 200;
    res.setHeader("ContentType","text/html");

    // URL & POST
    if (req.url === "/login" && req.method == "POST") {
        try {
            let body:any = '';
            req.on('data',(chuck)=>{
                body += chuck;
            }).on('end',()=>{
                let formData = JSON.parse(body);
                if (formData.userName === "Rajan" && formData.password === "rajan@123") {
                    res.end(`<h3 style="font-family: Lato, sans-serif; color:green">Login successful!</h3>`);
                }
                else{
                    res.end(`<h3 style="font-family: Lato, sans-serif; color:darkRed">Invalid Credentials!</h3>`);

                }
            });
        } catch (error) {
            console.log(error);
        }
        
    }
});
server.listen(port,hostname,()=>{
    console.log(`Node JS Server is started at http://${hostname}:${port}`);
});