import mongoose from "mongoose";
import {Client} from "../models/client.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {ApiRes} from "../utils/ApiRes.js";


const sendMessage = asyncHandler(async(req,res)=>{
    const {fullName, email, subject, message} = req.body;
    if([fullName, email, subject, message].some((field)=> field.trim() === "")) throw new ApiError (400, "All fields are required");

    const messageCreated = await Client.create({
        fullName, 
        email, 
        subject, 
        message
    });
    res.status(200).json(new ApiRes(200,messageCreated,"Successfully Message sended"));


})


export {
    sendMessage
}