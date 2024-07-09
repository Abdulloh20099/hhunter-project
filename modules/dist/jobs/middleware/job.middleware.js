"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobsmiddleware = void 0;
const res_err_fun_js_1 = require("../../utils/res.err.fun.js");
const auth_model_js_1 = require("../../auth/models/auth.model.js");
const category_model_js_1 = require("../../category/model/category.model.js");
const job_model_js_1 = require("../models/job.model.js");
class jobMiddleware {
    async middleware(req, res, next) {
        try {
            const { id } = req.params;
            const findUser = await auth_model_js_1.AuthModel.find({ _id: id });
            if (!findUser) {
                return res.status(404).json((0, res_err_fun_js_1.errFun)(404, "user not found", true));
            }
            const { _id } = req.params;
            const categoryfind = await category_model_js_1.categoryModel.find({ _id });
            if (!categoryfind) {
                return res.status(404).json((0, res_err_fun_js_1.errFun)(404, "category not found", true));
            }
            const { name, price } = req.body;
            if (!name || !price) {
                return res.status(401).json((0, res_err_fun_js_1.errFun)(401, "invlaid body", true));
            }
            next();
        }
        catch (error) {
            return res.status(500).json((0, res_err_fun_js_1.errFun)(500, error.message, true));
        }
    }
    async deleteMiddleware(req, res, next) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(401).json((0, res_err_fun_js_1.errFun)(401, 'invalid body', true));
            }
            const { idJob } = req.body;
            if (!idJob) {
                return res.status(401).json((0, res_err_fun_js_1.errFun)(401, 'invalid body', true));
            }
            const findUser = await auth_model_js_1.AuthModel.findOne({ _id: id });
            const findJob = await job_model_js_1.JobModel.findOne({ _id: idJob });
            if (!findUser) {
                return res.status(404).json((0, res_err_fun_js_1.errFun)(404, 'not found', true));
            }
            if (!findJob) {
                return res.status(404).json((0, res_err_fun_js_1.errFun)(404, 'j not found', true));
            }
            console.log(findJob.userId);
            console.log(findUser.jobs);
            next();
        }
        catch (error) {
            return res.status(500).json((0, res_err_fun_js_1.errFun)(500, error.message, true));
        }
    }
}
exports.jobsmiddleware = new jobMiddleware();
