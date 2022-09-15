import { Router } from "express";
import { createReservation, deleteReservation, editReservation, getAllReservations, getReservation } from "../controllers/reservationController";

const router = Router();

router.post("/add", createReservation);
router.get("/all", getAllReservations);
router.get("/:resevationId", getReservation);
router.delete("/delete/:resevationID", deleteReservation);
router.put("/edit/:resevationId", editReservation);

export default router;
