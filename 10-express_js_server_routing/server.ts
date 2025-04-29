import express from 'express';
import { hostname } from 'os';
import apiRouter from './router/api_router';
import userRouter from './router/user_router';

const app:express.Application = express();
const port:number = 5000;
app.get('/',(req,res)=>{
    res.status(200).send(`<h3 style="font-family: Lato, sans-serif; color: green"> Welcome to Api Router</h3>`);
});

// router configuration
app.use('/api', apiRouter);
app.use("/users",userRouter);

app.listen(port,()=>{
console.log(`Express Server is started at http://${hostname}:${port}`);
});