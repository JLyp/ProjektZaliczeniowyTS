import { model, Schema } from "mongoose";

export interface IEmployee{
    name: String;
    surname: String;
    position: String;
}

const employeeSchema = new Schema<IEmployee>(
    {
        name: { type: String, required: true },
        surname: { type: String, required: true },
        position: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );
  
  export const Employee = model<IEmployee>("Employee", employeeSchema);