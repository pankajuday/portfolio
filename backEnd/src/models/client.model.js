import mongoose, { Schema } from "mongoose";

const clientSchema = new Schema ({
    fullName:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true,

    },
    subject:{
        type:String,
        required:true,

    },
    message:{
        type:String,
        required:true,

    },
},{timestamps:true})

export const Client = new mongoose.model("Client",clientSchema);