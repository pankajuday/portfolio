import connectingToDB from "./db/index.js";
import { app } from "./app.js";
import dotenv from "dotenv"
dotenv.config({})

connectingToDB()
  .then(() => {
    app.on("error", () => {
      console.log("ERROR", error);
      throw error;
    });
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running at port ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log("MongoDB connection FAILED", error);
  });
