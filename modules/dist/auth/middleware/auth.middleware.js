"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddlewaree = void 0;
const auth_model_js_1 = require("../models/auth.model.js");
const bcrypt_1 = __importDefault(require("bcrypt"));
class AuthMiddleware {
    async middlewareSignUp(req, res, next) {
        try {
            const { username, email, password } = req.body;
            const user = await auth_model_js_1.AuthModel.findOne({ email });
            if (!username || !email || !password) {
                res
                    .status(400)
                    .json({ status: 400, errorMsg: "invalid body", error: true });
                return;
            }
            if (user) {
                return res
                    .status(403)
                    .json({
                    status: 403,
                    errorMsg: "such a user already exists",
                    error: true,
                });
            }
            next();
        }
        catch (error) {
            console.log(error.message);
            return res
                .status(500)
                .json({ status: 500, errorMsg: error.message, error: true });
        }
    }
    async middlewareSignIn(req, res, next) {
        try {
            const { email, password } = req.body;
            const user = await auth_model_js_1.AuthModel.findOne({ email: email });
            if (!user) {
                return res
                    .status(404)
                    .json({ staus: 404, errorMsg: "User not found", error: true });
            }
            const compare = bcrypt_1.default.compareSync(password, user?.password);
            if (!compare) {
                return res
                    .status(403)
                    .json({ status: 403, errorMsg: "Wrong password", error: true });
            }
            next();
        }
        catch (error) {
            console.log(error.message);
            return res
                .status(500)
                .json({ status: 500, errorMsg: error.message, error: true });
        }
    }
}
exports.AuthMiddlewaree = new AuthMiddleware();
