import mongoose from "mongoose";

const FloodReportSchema = new mongoose.Schema({
  lat: Number,
  lon: Number,
  severity: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.FloodReport ||
  mongoose.model("FloodReport", FloodReportSchema);