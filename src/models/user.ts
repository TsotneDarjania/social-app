import mongoose, { Document, Model, Schema } from "mongoose";

// Define the User interface
export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  friends: string[];
  friendRequests: string[];
}

// Create the User schema
const userSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  friends: { type: [String], default: [] },
  friendRequests: { type: [String], default: [] },
});

// Create the User model
const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
