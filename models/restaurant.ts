import { model, Schema } from "mongoose";

export interface IRestaurant {
    nazwa: String;
    adres?: String;
    telefon?: String;
    nip?: number;
    email?: String;
    www?: String;
}

const restaurantSchema = new Schema<IRestaurant>(
    {
        nazwa: { type: String, required: true },
        adres: { type: String, required: false },
        telefon: { type: String, required: false },
        nip: { type: Number, required: false },
        email: { type: String, required: false },
        www: { type: String, required: false }
    },
    {
      timestamps: true,
    }
  );
  
  export const Restaurant = model<IRestaurant>("Restaurant", restaurantSchema);
  