import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/jobify");

const db = mongoose.connection;

export default db;
