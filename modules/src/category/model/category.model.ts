import mongoose from "mongoose";
import { CategorySchema, ICategorySchema } from "../schema/category.schema.js";

export const categoryModel = mongoose.model<CategorySchema>(
  "category",
  ICategorySchema
);
