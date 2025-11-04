import express from "express";
import { authenticate } from "../controllers/auth.controller.js";
const app = express();

app.post("/", authenticate);

export default app;
