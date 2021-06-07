import mongoose from "mongoose";
import { BaseError } from "../middlewares/errorHandler";
import { HttpStatusCode } from "../shared/http";
// const DATABASE_URI = require("config").get("mongodb+srv://patoliyapk:Patoliya.PK@123@test-cluster.2qoii.mongodb.net/test");
const DATABASE_URI = 'mongodb+srv://patoliyapk:Patoliya.PK@123@test-cluster.2qoii.mongodb.net/test'
const connectDB = async () => {
  try {
    await mongoose.connect(DATABASE_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log("✅ Database is connected");
  } catch (err) {
    console.log("🔴 Database failed to connect!");
    throw new BaseError(
      err.name,
      HttpStatusCode.INTERNAL_SERVER,
      err.message,
      false
    );
  }
};

export default connectDB;
