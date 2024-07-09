"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const admin_schema_js_1 = require("../schema/admin.schema.js");
exports.adminModel = mongoose_1.default.model('admin', admin_schema_js_1.IadminSchema);
