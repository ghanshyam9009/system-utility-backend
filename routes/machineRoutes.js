import express from "express";
import { fetchAllMachines, advancedFilterMachines } from "../controllers/machineController.js";

const router = express.Router();

// Fetch all machines (full data)
router.get("/all-machines", fetchAllMachines);

// Advanced filter API
router.get("/machines/filter", advancedFilterMachines);

export default router;
