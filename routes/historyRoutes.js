import express from "express";
import {
  fetchOSHistory,
  fetchAntivirusHistory,
  fetchSleepHistory,
  fetchDiskHistory
} from "../controllers/historyController.js";

const router = express.Router();

// Fetch OS history
router.get("/history/os", fetchOSHistory);

// Fetch antivirus history
router.get("/history/antivirus", fetchAntivirusHistory);

// Fetch sleep history
router.get("/history/sleep", fetchSleepHistory);

// Fetch disk history
router.get("/history/disk", fetchDiskHistory);

export default router;
