import express, { json } from 'express';
import { hostname } from 'os';
import appLogger from './middleware/app_logger';
import chalk from 'chalk';
import userRouter from './router/user_router';

const app: express.Application = express();
const port: number = 5000;
//  use of App Logger
app.use(appLogger);
// app configuration with JSON form Data
app.use(express.json());

// Router configuration
app.use('/users',userRouter);

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(`<h3 style= "font-family: Lato, sans-serif; color:green">Welcome to the home server</h3>`);
});

app.listen(port, () => {
    console.log(`Express Server is started at ${chalk.yellow(` http://${hostname()}:${port}`)}`);
})