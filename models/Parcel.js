import mongoose from "mongoose";

const parcelSchema = new mongoose.Schema(
  {
    trackingCode: {
      type: String,
      required: true,
      unique: true
    },
    senderName: String,
    receiverName: String,
    origin: String,
    destination: String,
    status: {
      type: String,
      default: "Registered"
    },
    location: {
      type: String,
      default: "Warehouse"
    },
    history: {
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

const Parcel = mongoose.model("Parcel", parcelSchema);
export default Parcel;
