import mongoose, { Date, Document, Model, Schema } from "mongoose";

export interface Imessage extends Document {
  sender: {
    userId: string;
    userName: string;
  };
  recipient: {
    userId: string;
    userName: string;
  };
  message: string;
  date: Date;
}

const messageSchema = new Schema<Imessage>({
  sender: {
    userId: { type: Schema.Types.ObjectId, required: true },
    userName: { type: String, required: true },
  },
  recipient: {
    userId: { type: Schema.Types.ObjectId, required: true },
    userName: { type: String, required: true },
  },
  message: { type: String, required: true },
  date: { type: String, default: Date.now },
});

export const Message: Model<Imessage> = mongoose.model<Imessage>(
  "message",
  messageSchema
);
