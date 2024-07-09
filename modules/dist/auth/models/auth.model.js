"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const auth_schema_js_1 = require("../schema/auth.schema.js");
exports.AuthModel = mongoose_1.default.model("users", auth_schema_js_1.IAuthSchema);
