"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRouter = void 0;
const express_1 = require("express");
const category_controller_js_1 = require("../controller/category.controller.js");
const admin_middleware_js_1 = require("../../admin/middleware/admin.middleware.js");
exports.categoryRouter = (0, express_1.Router)();
exports.categoryRouter.post("/category", admin_middleware_js_1.admin.adminCheck, category_controller_js_1.category.createCategory);
exports.categoryRouter.delete("/category/:id", category_controller_js_1.category.deleteCategory);
