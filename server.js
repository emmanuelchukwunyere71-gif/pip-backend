import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import parcelRoutes from "./routes/parcelRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/* 🔗 API ROUTES */
app.use("/api/parcels", parcelRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ Mongo Error:", err));

app.get("/", (req, res) => {
  res.send("PIP Logistics API Running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
