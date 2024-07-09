"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const category_schema_js_1 = require("../schema/category.schema.js");
exports.categoryModel = mongoose_1.default.model("category", category_schema_js_1.ICategorySchema);
