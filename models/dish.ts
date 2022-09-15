import mongoose, { model, Schema } from "mongoose";

export interface IDish{
    name: String;
    price: number;
    category: String;
}

const dishSchema = new Schema<IDish>(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );
  
  export const Dish = model<IDish>("Dish", dishSchema);
  