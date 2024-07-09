import { Router } from "express";
import { category } from "../controller/category.controller.js";
import { createMiddlewareCategory } from "../middleware/category.middleware.js";
import { admin } from "../../admin/middleware/admin.middleware.js";

export const categoryRouter = Router();

categoryRouter.post("/category", admin.adminCheck, category.createCategory);
categoryRouter.delete("/category/:id", category.deleteCategory);
