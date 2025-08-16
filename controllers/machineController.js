import MainSystemData from "../models/MainSystemData.js";

// Fetch all machines (full data)
export const fetchAllMachines = async (req, res) => {
  try {
    const machines = await MainSystemData.find().sort({ timestamp: -1 });
    res.status(200).json(machines);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Advanced filter API
export const advancedFilterMachines = async (req, res) => {
  try {
    const query = {};
    let projection = { machineId: 1, timestamp: 1 }; // default fields

    // =========================
    // Filters
    // =========================

    // Sleep
    if (req.query.sleepMin) {
      query["sleep.sleepSeconds"] = { ...query["sleep.sleepSeconds"], $gte: Number(req.query.sleepMin) };
    }
    if (req.query.sleepMax) {
      query["sleep.sleepSeconds"] = { ...query["sleep.sleepSeconds"], $lte: Number(req.query.sleepMax) };
    }

    // Antivirus
    if (req.query.avActive === "true") query["antivirus.active"] = true;
    if (req.query.avActive === "false") query["antivirus.active"] = false;

    // Disk encryption
    if (req.query.diskEncrypted === "true") query["diskEncryption.diskEncrypted"] = true;
    if (req.query.diskEncrypted === "false") query["diskEncryption.diskEncrypted"] = false;

    // OS Update
    if (req.query.osLatest === "true") query["osUpdate.isLatest"] = true;
    if (req.query.osLatest === "false") query["osUpdate.isLatest"] = false;

    // Hostname / Platform filters
    if (req.query.hostname) query["hostname"] = req.query.hostname;
    if (req.query.platform) query["platform"] = req.query.platform;

    // =========================
    // Projection (select only fields)
    // =========================
    switch (req.query.only) {
      case "antivirus":
        projection = { machineId: 1, timestamp: 1, antivirus: 1 };
        break;
      case "os":
        projection = { machineId: 1, timestamp: 1, osUpdate: 1 };
        break;
      case "disk":
        projection = { machineId: 1, timestamp: 1, diskEncryption: 1 };
        break;
      case "sleep":
        projection = { machineId: 1, timestamp: 1, sleep: 1 };
        break;
      default:
        projection = { machineId: 1, timestamp: 1 }; // only these 2 if no "only" param
    }

    const machines = await MainSystemData.find(query, projection).sort({ timestamp: -1 });
    res.status(200).json(machines);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
