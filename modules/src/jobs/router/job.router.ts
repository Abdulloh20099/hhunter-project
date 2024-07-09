import { Router } from "express";
import { jobsmiddleware } from "../middleware/job.middleware.js";
import { jobController } from "../controller/job.controller.js";

export const routerJobs = Router();

routerJobs.post(
  "/jobs/:id/:_id",
  jobsmiddleware.middleware,
  jobController.createJobs
);
//routerJobs.delete('/jobs/:id',jobsmiddleware.deleteMiddleware,jobController.deleteJobs)