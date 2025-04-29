import express from 'express';
import { hostname } from 'os';
import apiRouter from './router/api_router';
import userRouter from './router/user_router';
import appLogger from './middleware/app_logger';


const app:express.Application = express();
const port:number = 5000;

// Middleware configuration
app.use(appLogger);

// Routes Configuration
app.use('/api',apiRouter)
app.use('/users',userRouter);

// Listen to the Server Changes
app.listen(port,()=>{
    console.log(`Express Server is start at http://${hostname}:${port}`);
});