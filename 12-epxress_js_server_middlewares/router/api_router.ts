import express from 'express';
import appLogger from '../middleware/app_logger';
const apiRouter:express.Router = express.Router();

apiRouter.get('/',(req:express.Request,res:express.Response)=>{
    res.status(200).send(`<h3 style= "font-family:Lato, sans-serif; color:green">Welcome to Api Router</h3>`);
});
export default apiRouter;