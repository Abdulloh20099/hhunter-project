import mongoose from "mongoose";
import { AuthSchema, IAuthSchema } from "../schema/auth.schema.js";

export const AuthModel = mongoose.model<AuthSchema>("users", IAuthSchema);
