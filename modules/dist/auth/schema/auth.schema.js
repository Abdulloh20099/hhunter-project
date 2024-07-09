"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IAuthSchema = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
exports.IAuthSchema = new mongoose_1.Schema({
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
    jobs: [{ type: mongoose_2.Types.ObjectId, ref: 'jobs' }]
});
