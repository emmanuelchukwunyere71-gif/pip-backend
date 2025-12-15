import express from "express";
import Parcel from "../models/Parcel.js";

const router = express.Router();

/**
 * CREATE PARCEL
 * POST /api/parcels
 */
router.post("/", async (req, res) => {
  try {
    const parcel = await Parcel.create(req.body);
    res.status(201).json(parcel);
  } catch (err) {
    res.status(400).json({
      error: "Parcel creation failed",
      details: err.message
    });
  }
});

/**
 * TRACK PARCEL
 * GET /api/parcels/:trackingCode
 */
router.get("/:trackingCode", async (req, res) => {
  const parcel = await Parcel.findOne({
    trackingCode: req.params.trackingCode
  });

  if (!parcel) {
    return res.status(404).json({ error: "Parcel not found" });
  }

  res.json(parcel);
});

export default router;
