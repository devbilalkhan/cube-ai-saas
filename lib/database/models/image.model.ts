import { transformationTypes } from "@/constants";
import { Schema, models, model, Document } from "mongoose";


import { Types } from 'mongoose';

export interface IImage extends Document{
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string;
  width?: number;
  height?: number;
  config?: object;
  transformationUrl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author?: {
    _id: string;
    firstName: string;
    lastName: string;
  }
  createdAt?: Date;
  updatedAt?: Date;
}

// create image schema
const ImageScheme = new Schema({
  title: {type: String, required: true},
  transformationType: {type: String, required: true},
  publicId: {type: String, required: true},
  secureUrl: {type: URL, required: true},
  width: {type: Number},
  height: {type: Number},
  config: {type: Object},
  transfomrationUrl: {type: URL},
  aspectRatio: {type: String},
  color: {type: String},
  prompt: {type: String},
  author: {type: Schema.Types.ObjectId, ref: 'User'},
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now} 
})


// create image model
const Image = models?.Image || model('Image', ImageScheme);

export default Image;