import express from 'express';
const apiRouter:express.Router = express.Router();

// logic
apiRouter.get('/',(req:express.Request ,res:express.Response)=>{
    res.status(200).send(`<h3 style="font-family: Lato, sans-serif; color: green">Welcome to Express JS</h3>`);
});

apiRouter.get('/test',(req:express.Request,res:express.Response)=>{
    res.status(200).send(`<h3 style="font-family: Lato, sans-serif; color: green">Welcome to Express JS TEST path</h3>`);
});
export default apiRouter; 