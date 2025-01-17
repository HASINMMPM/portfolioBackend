import mongoose from "mongoose";

import "dotenv/config";

const dbConnect = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default dbConnect;
