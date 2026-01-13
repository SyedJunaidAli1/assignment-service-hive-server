import express from "express";
import { getGigs, createGig, getGigById } from "../controllers/gigController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getGigs);
router.get("/:id", getGigById);
router.post("/", protect, createGig);

export default router;
