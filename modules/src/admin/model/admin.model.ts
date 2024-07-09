import mongoose from "mongoose";
import { adminSchema,IadminSchema } from "../schema/admin.schema.js";

export const adminModel = mongoose.model<adminSchema>('admin',IadminSchema)