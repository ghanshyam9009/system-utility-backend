import mongoose from "mongoose";

const DiskHistorySchema = new mongoose.Schema({
  machineId: { type: String, required: true },
  diskEncrypted: Boolean,
  tool: String,
  percent: Number,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("DiskHistory", DiskHistorySchema);
