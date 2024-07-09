"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
!(async function () {
    try {
        await mongoose_1.default.connect("mongodb://localhost/n126");
        console.log("db connection...");
        return true;
    }
    catch (error) {
        console.log(error.message);
        return true;
    }
})();
