import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import parcelRoutes from "./routes/parcelRoute.js";

dotenv.config();

const app = express();

/* MIDDLEWARE */
app.use(cors({
  origin: "*",   // allow GitHub Pages + mobile
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());

/* ROUTES */
app.use("/api/parcels", parcelRoutes);

/* ROOT */
app.get("/", (req, res) => {
  res.send("PIP Backend is running 🚀");
});

/* DATABASE */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error", err));

/* SERVER */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
