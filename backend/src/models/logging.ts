import mongoose from "mongoose";

const LoggingSchema = new mongoose.Schema({
  searchTerm: {
    type: String,
    required: true,
  },
  userId: {
    type: Number,
    default: null,
  },

}, { timestamps: true });

LoggingSchema.index({ searchTerm: 1 });
export default mongoose.model("Log", LoggingSchema);
