import { Schema, models, model, Document } from "mongoose";


export interface IUser extends Document {
  clerkId: string;
  email: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  photo: string;
  planId: string;
  creditBalance: number;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true},
  email: { type: String, required: true, unique: true},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  photo: { type: String, required: true },
  planId: { type: String, default: 'free' },
  creditBalance: { type: Number, default: 50 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const User = models?.User || model('User', UserSchema);

export default User;