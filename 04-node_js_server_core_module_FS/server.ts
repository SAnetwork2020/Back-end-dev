import http, {Server, IncomingMessage, ServerResponse} from "http";
import fs from 'fs';
import path from  "path";
import { error } from 'console';


const hostname:string = "127.0.0.1";
const port:number = 5000;

const server: Server = http.createServer((request:IncomingMessage, response:ServerResponse)=>{
    response.statusCode = 200;
    response.setHeader("Content-Type","text/html");
   
    // // fs module
    // fs.readFile(path.join(__dirname, 'data', 'notes.txt'), 'utf-8',(error,result)=>{
    //     if (error) {
    //         console.log(error);
    //     }
    //     fs.writeFile(path.join(__dirname, 'data', 'data.txt'), result, 'utf-8', (error)=>{
    //         if (error) {
    //             console.log(error);
    //         }
    //         response.end(`<pre>Data is written to a file...</pre>`);
    //     });
    //     response.end(`<pre>${result}</pre>`);
    // });
    // // response.end(`<h3 style = "font-family: Lato, sans-serif; color: green;">Welcome to Node JS Server</h3>`);
    // // Read server file
    // fs.readFile(path.join(__dirname, 'server.ts'), 'utf-8', (error,result)=>{
    //     if (error) {
    //         console.log(error);
    //     }
    //     fs.writeFile(path.join(__dirname, 'server.txt'), result, 'utf-8',(error)=>{
    //         if (error) {
    //             console.log(error);
    //         }
    //         response.end(`<pre>File has been created</pre>`);
            
    //     });
    // });


    // for JSON responses
    fs.readFile(path.join(__dirname,'data','complex_data.json'), 'utf-8',(error,result)=>{
        if (error) {
            console.log(error);
        };
        response.end(`<pre>${result}</pre>`);
    });

});   

server.listen(port,hostname, ()=>{
    console.log(`Node JS Server is started at http://${hostname}:${port}`);
});