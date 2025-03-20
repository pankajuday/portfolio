import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import bodyParser from "body-parser";
import dotenv from "dotenv"
dotenv.config()

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  })
);
console.log(process.env.CORS_ORIGIN);


app.use(bodyParser.json())
app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true , limit: "16kb"}));
app.use(cookieParser());

//import routes

import client from "./routes/client.routes.js";


// routes declearations

app.use("/api/client",client);



export {app}
