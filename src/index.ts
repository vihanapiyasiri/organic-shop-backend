import express, {Express,Request,Response} from 'express';
import app from "./app";
import dotenv from 'dotenv';

dotenv.config();// Load environment variables from .env file


//2.Define the application port
const port= process.env.PORT || 3000; //access the port from environment variables or default to 3000


//4.Instruts the express app to listen on port 300
app.listen(port,() => {
    console.log(`server is running at http://localhost:${port}`)
})