"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ICategorySchema = void 0;
const mongoose_1 = require("mongoose");
exports.ICategorySchema = new mongoose_1.Schema({
    categoryName: {
        type: String,
        required: true,
    },
    jobs: [{ type: mongoose_1.Types.ObjectId, ref: "jobs" }],
});
