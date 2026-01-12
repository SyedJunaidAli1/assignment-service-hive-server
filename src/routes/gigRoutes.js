import express from "express";
import { mockAuth } from "../middleware/mockAuth.js";
import { getGigs, createGig } from "../controller/gigController.js";

const router = express.Router();

router.get("/", getGigs);
router.post("/", mockAuth, createGig);

export default router;
