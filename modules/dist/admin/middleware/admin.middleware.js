"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_model_js_1 = require("../../auth/models/auth.model.js");
class adminMiddle {
    async adminCheck(req, res, next) {
        try {
            const tokenUser = req.headers.authorization || "";
            // const { categoryName } = req.body;
            if (!tokenUser) {
                return res
                    .status(401)
                    .json({ status: 401, errorMsg: "no token", error: true });
            }
            // if (!categoryName) {
            //   return res
            //     .status(401)
            //     .json({ status: 401, errorMsg: "invalid body", error: true });
            // }
            const decodedToken = jsonwebtoken_1.default.verify(tokenUser, process.env.SECRET_KEY);
            const key_admin = process.env.ADMIN_KEY;
            if (decodedToken.email == key_admin) {
                next();
            }
            if (decodedToken.email != key_admin) {
                return res
                    .status(403)
                    .json({ status: 403, errorMsg: "You are not admin", error: true });
            }
        }
        catch (error) {
            console.log(error.message);
            return res
                .status(500)
                .json({ status: 500, errorMsg: error.message, error: true });
        }
    }
    async adminFind(res, req, next) {
        try {
            const KEY = process.env.ADMIN_KEY;
            const findAdmin = await auth_model_js_1.AuthModel.find();
        }
        catch (error) {
            return res
                .status(500)
                .json({ status: 500, errorMsg: error.message, error: true });
        }
    }
}
exports.admin = new adminMiddle();
