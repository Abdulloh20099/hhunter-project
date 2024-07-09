"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const job_schema_js_1 = require("../schema/job.schema.js");
exports.JobModel = mongoose_1.default.model("jobs", job_schema_js_1.IJobSchema);
