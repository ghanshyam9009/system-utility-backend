import MainSystemData from "../models/MainSystemData.js";
import SleepHistory from "../models/SleepHistory.js";
import AntivirusHistory from "../models/AntivirusHistory.js";
import DiskHistory from "../models/DiskHistory.js";
import OSHistory from "../models/OSHistory.js";

export const storeSystemData = async (req, res) => {
  try {
    const payload = req.body;
    const { machineId } = payload;
    if (!machineId) return res.status(400).json({ error: "machineId is required" });

    // 1️⃣ Update main table
    const updatedMain = await MainSystemData.findOneAndUpdate(
      { machineId },
      { ...payload, timestamp: new Date() },
      { upsert: true, new: true }
    );

    // 2️⃣ Store history tables if data present
    if (payload.sleep) {
      const sleepEntry = new SleepHistory({ machineId, ...payload.sleep });
      await sleepEntry.save();
    }

    if (payload.antivirus) {
      const avEntry = new AntivirusHistory({ machineId, ...payload.antivirus });
      await avEntry.save();
    }

    if (payload.diskEncryption) {
      const diskEntry = new DiskHistory({ machineId, ...payload.diskEncryption });
      await diskEntry.save();
    }

    if (payload.osUpdate) {
      const osEntry = new OSHistory({ machineId, ...payload.osUpdate });
      await osEntry.save();
    }

    res.status(200).json({ message: "Data stored and updated successfully", updatedMain });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
