import mongoose from "mongoose";

const parcelSchema = new mongoose.Schema(
  {
    trackingCode: {
      type: String,
      required: true,
      unique: true
    },
    senderName: {
      type: String,
      required: true
    },
    receiverName: {
      type: String,
      required: true
    },
    origin: {
      type: String,
      required: true
    },
    destination: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: "Pending"
    },
    history: [
      {
        location: String,
        status: String,
        date: {
          type: Date,
          default: Date.now
        }
      }
    ]
  },
  { timestamps: true }
);

const Parcel = mongoose.model("Parcel", parcelSchema);

export default Parcel;
