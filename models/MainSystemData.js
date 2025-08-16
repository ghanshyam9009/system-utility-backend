import mongoose from "mongoose";

const { Schema } = mongoose;

const MainSystemDataSchema = new Schema({
  machineId: { type: String, required: true, unique: true },
  hostname: String,
  platform: String,
  osDistro: String,
  osRelease: String,
  osVersion: String,
  arch: String,
  cpuModel: String,
  totalMemGB: Number,
  diskEncryption: {
    diskEncrypted: Boolean,
    tool: String,
    percent: Number,
  },
  osUpdate: {
    currentVersion: String,
    lastUpdate: Date,
    isLatest: Boolean,
  },
  antivirus: {
    avInstalled: Boolean,
    avList: [String],
    active: Boolean,
    details: [
      {
        name: String,
        status: String,
      },
    ],
  },
  sleep: {
    sleepSeconds: Number,
    compliant: Boolean,
    platform: String,
  },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("MainSystemData", MainSystemDataSchema);
