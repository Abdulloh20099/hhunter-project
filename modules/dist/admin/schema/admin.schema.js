"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IadminSchema = void 0;
const mongoose_1 = require("mongoose");
exports.IadminSchema = new mongoose_1.Schema({
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
