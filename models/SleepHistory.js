import mongoose from "mongoose";

const SleepHistorySchema = new mongoose.Schema({
  machineId: { type: String, required: true },
  sleepSeconds: Number,
  compliant: Boolean,
  platform: String,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("SleepHistory", SleepHistorySchema);
