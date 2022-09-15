import { Router } from "express";
import { createDish, deleteDish, editDish, getAllDishs, getDish } from "../controllers/dishController";

const router = Router();

router.post("/add", createDish);
router.get("/all", getAllDishs);
router.get("/:dishId", getDish);
router.delete("/delete/:dishID", deleteDish);
router.put("/edit/:dishId", editDish);

export default router;
