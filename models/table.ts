import { model, Schema } from "mongoose";

export interface ITable{
    name: String;
    noOfPeople: number;
    status: String;
}

const tableSchema = new Schema<ITable>(
    {
        name: { type: String, required: true },
        noOfPeople: { type: Number, required: true },
        status: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );
  
  export const Table = model<ITable>("Table", tableSchema);