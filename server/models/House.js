import mongoose from "mongoose";

const Schema = mongoose.Schema

const House = new Schema({

  price: { type: Number, required: true },
  bedrooms: { type: Number, require: true },
  bathrooms: { type: Number, require: true },
  year: { type: Number },
  imgUrl: { type: String },
  description: { type: String }
})

export default House