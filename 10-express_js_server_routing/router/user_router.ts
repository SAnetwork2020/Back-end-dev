import express from 'express';
const userRouter:express.Application = express();

// Logic
userRouter.get('/',(req:express.Request,res:express.Response)=>{
    res.status(200).send(`<h3 style="font-family: Lato, sans-serif; color:green">Welcome to User Router</h3>`);
});

userRouter.get("/test",(req:express.Request,res:express.Response)=>{
    res.status(200).send(`<h3 style="font-family: Lato, sans-serif; color:green">Welcome to userRouter Test Path</h3>`);
});

export default userRouter;

