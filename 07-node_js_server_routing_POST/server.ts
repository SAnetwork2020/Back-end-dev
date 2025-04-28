import http, {Server, IncomingMessage, ServerResponse} from "http";

const hostname:string = "127.0.0.1";
const port:number = 5000;

const server: Server = http.createServer((request:IncomingMessage, response:ServerResponse)=>{
    response.statusCode = 200;
    response.setHeader("Content-Type","text/html");

// URL & POST
if (request.url === '/user' && request.method === 'POST' ) {
   try {
     let body:any = '';
     request.on('data',(chunk)=>{
         body += chunk;
     }).on('end',()=>{
         let formData = JSON.parse(body);
         response.end(`<pre>${JSON.stringify(formData)}</pre>`);
     });
   } catch (error) {
    console.log(error);
   }
}
});   
server.listen(port,hostname, ()=>{
    console.log(`Node JS Server is started at http://${hostname}:${port}`);
});