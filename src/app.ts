import express, { type Application, type Request, type Response } from "express";
import path from "path";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import router from "./routes/routes";

dotenv.config();

const app: Application = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// API Routes
app.use("/api/v1", router);
// Serve static files from public directory
app.use(express.static(path.join(process.cwd(), "public")));

// Root API route
app.get("/", (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Express + TypeScript server is running!",
  });
});

export default app;