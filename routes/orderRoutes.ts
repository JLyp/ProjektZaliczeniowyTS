import { Router } from "express";
import { createOrder, deleteOrder, editOrder, getAllOrders, getOrder } from "../controllers/orderController";

const router = Router();

router.post("/add/:employeeID/:dishId/:tableId", createOrder);
router.get("/all", getAllOrders);
router.get("/:orderId", getOrder);
router.delete("/delete/:orderID", deleteOrder);
router.put("/edit/:orderId", editOrder);

export default router;
