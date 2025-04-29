import express from 'express';
import bcrypt from 'bcryptjs';

const userRouter:express.Router = express.Router();

userRouter.get('/',(req:express.Request,res:express.Response)=>{
    res.status(200).send(`<h3 style = "font-family:Lato, sans-serif; color:green">Welcome to the Register Page</h3>`);
});

userRouter.post('/register', async(req:express.Request,res:express.Response)=>{
    let { name, email, password} = req.body;
   try {
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password,salt);
     res.status(200).json({
        user: {name,email,password},
        hashedPassword: hashedPassword,
     });
   } catch (error) {
    console.error(error);
   }
});
export default userRouter;