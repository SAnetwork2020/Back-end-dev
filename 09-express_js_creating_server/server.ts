import express from 'express';
import { hostname } from 'os';

const app:express.Application = express();
// const hostname:string = "127.0.0.1";
const port:number = 5000;


app.get('/',(req,res) => {
    res.send('<h1>Hello from Express JS!</h1>');
})
app.listen(port,()=>{
    console.log(`Express Server is started at http://${hostname}:${port}`);
});

