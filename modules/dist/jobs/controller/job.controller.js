"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobController = void 0;
const res_err_fun_js_1 = require("../../utils/res.err.fun.js");
const auth_model_js_1 = require("../../auth/models/auth.model.js");
const category_model_js_1 = require("../../category/model/category.model.js");
const job_model_js_1 = require("../models/job.model.js");
class jobsController {
    async createJobs(req, res) {
        try {
            const { id } = req.params;
            const findUser = await auth_model_js_1.AuthModel.findOne({ _id: id });
            console.log(findUser);
            const { _id } = req.params;
            const categoryFind = await category_model_js_1.categoryModel.findOne({ _id });
            const { name, price } = req.body;
            const Job = await job_model_js_1.JobModel.create({
                name,
                price,
                categoryId: categoryFind,
                userId: findUser,
            });
            categoryFind?.jobs.push(Job);
            findUser?.jobs.push(Job);
            await categoryFind?.save();
            await findUser?.save();
            return res.status(201).send((0, res_err_fun_js_1.userGet)(201, Job, false));
        }
        catch (error) {
            return res.status(500).json((0, res_err_fun_js_1.errFun)(500, error.message, true));
        }
    }
}
exports.jobController = new jobsController();
