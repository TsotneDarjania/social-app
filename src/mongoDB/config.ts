import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB_GIORGI!);

const db = mongoose.connection;

export default db;
