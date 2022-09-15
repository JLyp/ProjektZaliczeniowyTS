import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import dishRoutes from "./routes/dishRoutes";
import employeeRoutes from "./routes/employeeRoutes";
import orderRoutes from "./routes/orderRoutes";
import reservationRoutes from "./routes/reservationRoutes";
import restaurantRoutes from "./routes/restaurantRoutes";
import tableRoutes from "./routes/tableRoutes";

const app = express();
app.use(express.json());

app.use("/dish", dishRoutes);
app.use("/employee", employeeRoutes);
app.use("/order", orderRoutes);
app.use("/reservation", reservationRoutes);
app.use("/restaurant", restaurantRoutes);
app.use("/table", tableRoutes);

mongoose
  .connect(
    `${process.env.MONGO}`
  )
  .then(() => {
    console.log(`run`);
    app.listen(3000);
  })
  .catch((err) => console.log(err));
