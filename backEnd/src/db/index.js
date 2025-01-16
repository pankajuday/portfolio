import mongoose from "mongoose";
import { portfolioDB } from "../constant.js";

const connectingToDB = async () => {
  try {
    
    const connectDBInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${portfolioDB}`
    );
    
    console.log(
      `\n MONGODB connected to DB host ::>>> ${connectDBInstance.connection.host} .....!`
    );
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

export default connectingToDB