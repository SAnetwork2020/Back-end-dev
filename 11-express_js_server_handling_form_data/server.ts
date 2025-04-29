import express from "express";
import { hostname } from "os";
import userRouter from "./router/user_router";


const app: express.Application = express();
const port:number = 5000;

// configure express to receive form data
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.get('/',(req:express.Request,res:express.Response)=>{
    res.status(200).send(`<h3 style="font-family: Lato, sans-serif; color:green">Welcome to Express JS Server</h3>`);
});

// router configuration
app.use('/users',userRouter);

app.listen(port,()=>{
console.log(`Express Server is started at http://${hostname}:${port}`);
}
);
