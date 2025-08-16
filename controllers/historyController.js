import SleepHistory from "../models/SleepHistory.js";
import AntivirusHistory from "../models/AntivirusHistory.js";
import DiskHistory from "../models/DiskHistory.js";
import OSHistory from "../models/OSHistory.js";

// ============================
// Fetch OS history for a machine
// ============================
export const fetchOSHistory = async (req, res) => {
  try {
    const { machineId } = req.query;
    if (!machineId) return res.status(400).json({ error: "machineId is required" });

    const osHistory = await OSHistory.find({ machineId }).sort({ timestamp: -1 });
    res.status(200).json(osHistory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ============================
// Fetch Antivirus history
// ============================
export const fetchAntivirusHistory = async (req, res) => {
  try {
    const { machineId } = req.query;
    if (!machineId) return res.status(400).json({ error: "machineId is required" });

    const avHistory = await AntivirusHistory.find({ machineId }).sort({ timestamp: -1 });
    res.status(200).json(avHistory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ============================
// Fetch Sleep history
// ============================
export const fetchSleepHistory = async (req, res) => {
  try {
    const { machineId } = req.query;
    if (!machineId) return res.status(400).json({ error: "machineId is required" });

    const sleepHistory = await SleepHistory.find({ machineId }).sort({ timestamp: -1 });
    res.status(200).json(sleepHistory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// ============================
// Fetch Disk history
// ============================
export const fetchDiskHistory = async (req, res) => {
  try {
    const { machineId } = req.query;
    if (!machineId) return res.status(400).json({ error: "machineId is required" });

    const diskHistory = await DiskHistory.find({ machineId }).sort({ timestamp: -1 });
    res.status(200).json(diskHistory);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
