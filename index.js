import express from "express";
import usersRoutes from "./routes/users.route.js";
import authRoute from "./routes/auth.route.js";
import attendanceRoute from "./routes/attendance.route.js";

const app = express();
const port = 6354;
app.use(express.json());

app.use("/api", usersRoutes);
app.use("/auth", authRoute);
app.use("/api", attendanceRoute);

app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});
