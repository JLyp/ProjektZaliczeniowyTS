import { Router } from "express";
import { createRestaurant, deleteRestaurant, editRestaurant, getAllRestaurants, getRestaurant } from "../controllers/restaurantController";

const router = Router();

router.post("/add", createRestaurant);
router.get("/all", getAllRestaurants);
router.get("/:restaurantId", getRestaurant);
router.delete("/delete/:restaurantID", deleteRestaurant);
router.put("/edit/:restaurantId", editRestaurant);

export default router;
