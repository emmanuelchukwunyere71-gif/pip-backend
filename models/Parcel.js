import mongoose from "mongoose";

const parcelSchema = new mongoose.Schema({
  trackingCode: { type: String, required: true, unique: true },
  senderName: String,
  receiverName: String,
  origin: String,
  destination: String,
  status: String,
  location: String,
  history: Array
}, { timestamps: true });

export default mongoose.model("Parcel", parcelSchema);
