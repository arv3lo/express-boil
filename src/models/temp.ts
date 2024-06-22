import { model, Schema } from "mongoose";

const tempSchema = new Schema({
  city: String,
  min: Number,
  max: Number,
});

export const Temp = model("Temp", tempSchema);
