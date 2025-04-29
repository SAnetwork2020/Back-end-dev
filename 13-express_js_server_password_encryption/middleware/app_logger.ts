import chalk from 'chalk';
import express, { NextFunction } from 'express';
let appLogger = (req:express.Request,res:express.Response,next:NextFunction)=>{
    // url, time, date, method
    let url = req.originalUrl;
    let method = req.method;
    let date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    let result:string = `${chalk.blue(`[${url}]`)} - ${chalk.green(`[${method}]`)} ${chalk.red(`[${date}]`)} - ${chalk.yellow(`[${time}]`)}`
    console.log(result);
    next();

}
export default appLogger