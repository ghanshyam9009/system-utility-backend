import express from "express";
import { storeSystemData } from "../controllers/systemController.js";

const router = express.Router();

// Store system data
router.post("/system-data", storeSystemData);

export default router;
