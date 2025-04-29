import express from 'express';

const userRouter:express.Router = express.Router();

userRouter.get('/login',(req:express.Request,res:express.Response)=>{
    res.status(200).send(`<h3 style="font-family: Lato, sans-serif; color:green">Welcome to Login Page </h3>`);
});

export default userRouter;