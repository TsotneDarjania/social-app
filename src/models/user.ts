import mongoose, { Document, Model, Schema } from "mongoose";

// Define the User interface
export interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
  friends: string[];
  friendRequests: string[];
  sentFriendRequests: string[];
}

// Create the User schema
const userSchema: Schema<IUser> = new Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  friends: { type: [String], default: [] },
  friendRequests: { type: [String], default: [] },
  sentFriendRequests: { type: [String], default: [] },
});

// Create the User model
const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);

export default User;
