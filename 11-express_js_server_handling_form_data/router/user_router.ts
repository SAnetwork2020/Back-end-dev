import express from 'express';

const userRouter:express.Router = express.Router();
/* 
@usage : to url
@url : http://localhost:5000/users/
@method : GET
@fields : no fields
@access : PUBLIC
*/
userRouter.get('/',(req:express.Request,res:express.Response)=>{
    res.status(200).send(`<h3 style="font-family:Lato, sans-serif;color:green">Welcome to User Router</h3>`);
});

// form data
/* 
@usage : to check the form data
@url : http://localhost:5000/users/login/
@method : POST
@fields : name, password
@access : PUBLIC
*/
userRouter.post('/login',(req:express.Request ,res:express.Response)=>{
let formData = req.body // to receive the from data from the client
res.status(200).json({
    msg : "form Data is received",
    formData: formData,
})
});
export default userRouter;