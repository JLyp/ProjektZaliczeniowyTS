import { Router } from "express";
import { createEmployee, deleteEmployee, editEmployee, getAllEmployees, getEmployee } from "../controllers/employeeController";

const router = Router();

router.post("/add", createEmployee);
router.get("/all", getAllEmployees);
router.get("/:employeeId", getEmployee);
router.delete("/delete/:employeeID", deleteEmployee);
router.put("/edit/:employeeId", editEmployee);

export default router;
