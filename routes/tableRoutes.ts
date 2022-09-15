import { Router } from "express";
import { createTable, deleteTable, editTable, getAllTables, getTable } from "../controllers/tableController";

const router = Router();

router.post("/add", createTable);
router.get("/all", getAllTables);
router.get("/:tableId", getTable);
router.delete("/delete/:tableID", deleteTable);
router.put("/edit/:tableId", editTable);

export default router;
