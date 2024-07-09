"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IJobSchema = void 0;
const mongoose_1 = require("mongoose");
exports.IJobSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: false,
        default: 0,
    },
    categoryId: [{ type: mongoose_1.Types.ObjectId, ref: "categories" }],
    userId: [{ type: mongoose_1.Types.ObjectId, ref: "users" }],
});
