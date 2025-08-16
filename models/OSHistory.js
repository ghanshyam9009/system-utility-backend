import mongoose from "mongoose";

const OSHistorySchema = new mongoose.Schema({
  machineId: { type: String, required: true },
  currentVersion: String,
  lastUpdate: Date,
  isLatest: Boolean,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("OSHistory", OSHistorySchema);
