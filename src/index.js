import "dotenv/config";

import connectDB from "./db/index.js";
import { app } from "./app.js";

console.log(process.env.PORT);

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Exprees Error : ", error);
      throw error;
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Your Server is listening On PORT :${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed :", err);
  });

/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error : ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log(`Error: `, error);
    throw error;
  }
})();
*/
