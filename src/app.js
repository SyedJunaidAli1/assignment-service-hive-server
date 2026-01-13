import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const FRONTEND_ENDPOINT = process.env.FRONTEND_ENDPOINT;

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: FRONTEND_ENDPOINT,
    credentials: true,
  }),
);

import gigRoutes from "./routes/gigRoutes.js";
import bidRoutes from "./routes/bidRoutes.js";
import authRoutes from "./routes/authRoutes.js";

app.use("/api/gigs", gigRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/bids", bidRoutes);

export default app;
