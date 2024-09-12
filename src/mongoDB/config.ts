import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_URI!);

const db = mongoose.connection;

export default db;
