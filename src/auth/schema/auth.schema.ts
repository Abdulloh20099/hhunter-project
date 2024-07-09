import { Schema } from "mongoose";
import { Types } from "mongoose";

export interface AuthSchema {
  username: String;
  email: String;
  password: String;
  jobs: Array<"jobs">}

export const IAuthSchema = new Schema<AuthSchema>({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  jobs:[{ type: Types.ObjectId,ref:'jobs'}]
});
