import mongoose from "mongoose";
import { IJobSchema, JoSchema } from "../schema/job.schema.js";

export const JobModel = mongoose.model<JoSchema>("jobs", IJobSchema);
