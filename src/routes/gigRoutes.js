import express from "express";
import { getGigs, createGig } from "../controllers/gigController.js";

const router = express.Router();

router.get("/", getGigs);
router.post("/", createGig);

export default router;
