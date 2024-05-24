import { Schema, models, model, Document } from "mongoose";

const UserSchema = new Schema({
  clerkId: { type: String, required: true, unique: true},
  email: { type: String, required: true, unique: true},
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String },
  lastName: { type: String},
  photo: { type: String, required: true },
  planId: { type: String, default: 'free' },
  creditBalance: { type: Number, default: 50 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const User = models?.User || model('User', UserSchema);

export default User;