import http, {Server, IncomingMessage, ServerResponse} from "http";
import {StringUtil} from './util/string_util';
import { MathUtil } from "./util/math_util";

const hostname:string = "127.0.0.1";
const port:number = 5000;

const server: Server = http.createServer((request:IncomingMessage, response:ServerResponse)=>{
    response.statusCode = 200;
    response.setHeader("Content-Type","text/html");

//  String util
let customerName:string = 'UiBrains';
let length:number = StringUtil.printLength(customerName);

let channelName: string = "UiBrains Technologies";
let result:string = StringUtil.printTriangle(channelName);

// Math Util
let theNumber:number = 5;
result = MathUtil.printMathTable(theNumber);

    response.end(`<pre style="font-family: Lato, sans-serif; color: green">${result} </pre>`);
});   
server.listen(port,hostname, ()=>{
    console.log(`Node JS Server is started at http://${hostname}:${port}`);
});