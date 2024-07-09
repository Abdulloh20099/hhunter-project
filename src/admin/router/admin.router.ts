import { Router } from "express";
import { admin } from "../middleware/admin.middleware.js";
import { admincont } from "../controller/admin.controller.js";

export const adminRouter = Router();
