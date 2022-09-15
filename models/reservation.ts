import mongoose, { model, Schema } from "mongoose";

export interface IReservation{
    start: String;
    end: String;
    client: String;
}

const reservationSchema = new Schema<IReservation>(
    {
        start: { type: String, required: true },
        end: { type: String, required: true },
        client: { type: String, required: true },
    },
    {
      timestamps: true,
    }
  );
  
  export const Reservation = model<IReservation>("Reservation", reservationSchema);
  