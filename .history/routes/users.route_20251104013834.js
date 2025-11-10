import express from "express";
import { authorize } from "../controllers/auth.controller.js";
import { isAdmin, isUser } from "../middlewares/role-validation.js";
import { validateUser } from "../middlewares/user-validation.js";

import {
  addUsers,
  changeUsers,
  getUsers,
} from "../controllers/users.controller.js";

const app = express();

app.post("/users", authorize, isAdmin, validateUser, addUsers);
app.put("/users/:id", authorize, isUser, validateUser, changeUsers);
app.get("/users/:id", authorize, isAdmin, getUsers);

export default app;
