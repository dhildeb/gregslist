import mongoose from "mongoose";
const Schema = mongoose.Schema

const Car = new Schema(
  {
    make: { type: String, require: true },
    model: { type: String, require: true },
    price: { type: Number, require: true, min: 0 },
    year: { type: String, min: 1886, max: 9999 },
    imgUrl: { type: String, default: "https://roadster.com/assets/car-placeholder-652ae305f4b4afc9eb5f2d976fa0f77979069acb686b0a16fcc062e210367660.png" },
    description: { type: String, maxLength: 50 }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Car