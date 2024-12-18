import mongoose from "mongoose";
import { config } from "../config";

const dbConnection = async () => {
  try {
    console.log("Attempting to connect to database.....");
    await mongoose.connect(config.mongo.url, {
      serverApi: { version: "1", strict: true, deprecationErrors: true },
    });
    console.log("Connected to database......");
  } catch (error: any) {
    console.error(`database connection is failed ${error.message}`);
  }
};

export default dbConnection;
