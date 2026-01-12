import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

import gigRoutes from "./routes/gigRoutes.js";

app.use("/api/gigs", gigRoutes);

import authRoutes from "./routes/authRoutes.js";

app.use("/api/auth", authRoutes);

export default app;
