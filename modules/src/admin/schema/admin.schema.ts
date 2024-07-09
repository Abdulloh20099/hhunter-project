import { Schema } from "mongoose";
import { types } from "util";

export interface adminSchema {
  username: String;
  email: String;
  password: String;
}

export const IadminSchema = new Schema<adminSchema>({
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
});
