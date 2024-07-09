"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerJobs = void 0;
const express_1 = require("express");
const job_middleware_js_1 = require("../middleware/job.middleware.js");
const job_controller_js_1 = require("../controller/job.controller.js");
exports.routerJobs = (0, express_1.Router)();
exports.routerJobs.post("/jobs/:id/:_id", job_middleware_js_1.jobsmiddleware.middleware, job_controller_js_1.jobController.createJobs);
//routerJobs.delete('/jobs/:id',jobsmiddleware.deleteMiddleware,jobController.deleteJobs)
