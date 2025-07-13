import express from "express";
import dotenv from "dotenv";

import morgan from "morgan";
import tourRouter from "./routes/tourRoutes.mjs";
import userRouter from "./routes/userRoutes.mjs";
import { dirname } from "path";
import { fileURLToPath } from "url";

dotenv.config({ path: "./config.env" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

// ROUTES
app.use("/api/v1/tours", tourRouter);
app.use("/api/v1/users", userRouter);

export default app;
