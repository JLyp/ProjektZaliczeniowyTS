import mongoose, { model, Schema } from "mongoose";

import { IDish } from "./dish";
import { IEmployee } from "./employee";
import { ITable } from "./table";

export interface IOrder{
    employee: IEmployee;
    dish: IDish;
    table: ITable;
    price: number;
}

const orderSchema = new Schema<IOrder>(
    {
        employee: { type: mongoose.Types.ObjectId, required: true },
        dish: { type: mongoose.Types.ObjectId, required: true },
        table: { type: mongoose.Types.ObjectId, required: true },
        price: { type: Number, required: true },
    },
    {
      timestamps: true,
    }
  );
  
  export const Order = model<IOrder>("Order", orderSchema);
  