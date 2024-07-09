import { Schema, Types } from "mongoose";
import { AuthSchema } from "../../auth/schema/auth.schema.js";
import { CategorySchema } from "../../category/schema/category.schema.js";

export interface JoSchema {
  name: String;
  price: Number;
  categoryId?: Array<CategorySchema>;
  userId?: Array<AuthSchema>;
}

export const IJobSchema = new Schema<JoSchema>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: false,
    default: 0,
  },
  categoryId: [{ type: Types.ObjectId, ref: "categories" }],
  userId: [{ type: Types.ObjectId, ref: "users" }],
});
