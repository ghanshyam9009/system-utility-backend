import mongoose from "mongoose";

const AntivirusHistorySchema = new mongoose.Schema({
  machineId: { type: String, required: true },
  avInstalled: Boolean,
  avList: [String],
  active: Boolean,
  details: [
    {
      name: String,
      status: String,
    },
  ],
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("AntivirusHistory", AntivirusHistorySchema);
