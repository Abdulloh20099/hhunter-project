import { Schema, Types } from "mongoose";

export interface CategorySchema {
  categoryName: String;
  jobs: Array<"jobs">;
}

export const ICategorySchema = new Schema<CategorySchema>({
  categoryName: {
    type: String,
    required: true,
  },
  jobs: [{ type: Types.ObjectId, ref: "jobs" }],
});
