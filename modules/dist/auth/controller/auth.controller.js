"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_model_js_1 = require("../models/auth.model.js");
const res_err_fun_js_1 = require("../../utils/res.err.fun.js");
const res_err_fun_js_2 = require("../../utils/res.err.fun.js");
const res_err_fun_js_3 = require("../../utils/res.err.fun.js");
class AuthControllerFunc {
    async GetUser(req, res) {
        try {
            const { id } = req.params;
            const users = await auth_model_js_1.AuthModel.findOne({ _id: id });
            if (!users) {
                res
                    .status(404)
                    .json({ status: 404, errorMsg: "User not found", error: true });
                return;
            }
            return res.status(200).send((0, res_err_fun_js_3.userGet)(200, users, false));
        }
        catch (error) {
            console.log(error.message);
            res.status(500).json((0, res_err_fun_js_2.errFun)(500, error.message, true));
        }
    }
    async SignUp(req, res) {
        try {
            const { username, email, password } = req.body;
            const SALT_ROUND = 10;
            const hashPassword = bcrypt_1.default.hashSync(password, SALT_ROUND);
            const userObjCreated = {
                username: username,
                email: email,
                password: hashPassword,
            };
            delete req.body.password;
            if (!userObjCreated.username ||
                !userObjCreated.email ||
                !userObjCreated.password) {
                res.status(400).json((0, res_err_fun_js_2.errFun)(400, "invalid body", true));
                return;
            }
            const TokenUser = {
                email: userObjCreated.email,
            };
            const token = jsonwebtoken_1.default.sign(TokenUser, "n126");
            const createUserObj = await auth_model_js_1.AuthModel.create(userObjCreated);
            await createUserObj.save();
            res.status(201).send((0, res_err_fun_js_1.resFun)(201, token, userObjCreated, false));
            return;
        }
        catch (error) {
            res
                .status(500)
                .json({ status: 500, errorMsg: error.message, error: true });
            return;
        }
    }
    async SignIn(req, res) {
        try {
            const { email, password } = req.body;
            const user = await auth_model_js_1.AuthModel.findOne({ email: email });
            const SALT_ROUND = 10;
            const tokenobj = {
                email,
            };
            const token = jsonwebtoken_1.default.sign(tokenobj, "n126");
            return res
                .status(201)
                .send({ status: 201, data: token, dataObj: user, error: false });
        }
        catch (error) {
            console.log(error.message);
            return res
                .status(500)
                .json({ status: 500, errorMsg: error.message, error: true });
        }
    }
}
exports.AuthController = new AuthControllerFunc();
