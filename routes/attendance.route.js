import express from "express";
import {
  postAttendance,
  getAttendanceByID,
  getSummaryMothlyAttendance,
  postAnalysisAttendance,
} from "../controllers/attendance.controller.js";

const app = express();

app.post("/attendance/:id", postAttendance);
app.get("/attendance/:id", getAttendanceByID);
app.get("/attendance/summary/monthly/:id", getSummaryMothlyAttendance);
app.post("/attendance/analysis/:id", postAnalysisAttendance);

export default app;
