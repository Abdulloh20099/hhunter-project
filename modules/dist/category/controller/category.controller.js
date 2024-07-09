"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.category = void 0;
const res_err_fun_js_1 = require("../../utils/res.err.fun.js");
const category_model_js_1 = require("../model/category.model.js");
class categoryController {
    async createCategory(req, res) {
        try {
            const { categoryName } = req.body;
            if (categoryName == undefined) {
                res.status(401).json({
                    status: 401,
                    errorMsg: "name must not be empty",
                    error: true,
                });
                return;
            }
            const categoryObj = {
                categoryName: categoryName,
            };
            const created = await category_model_js_1.categoryModel.create(categoryObj);
            await created.save();
            res.status(201).send({ status: 201, data: created, error: false });
            return;
        }
        catch (error) {
            res
                .status(500)
                .json({ status: 500, errorMsg: error.message, error: true });
            return;
        }
    }
    async deleteCategory(req, res) {
        try {
            //    const { categoryName } = req.body;
            //  const find = await categoryModel.findOne({categoryName})
            //    if (!find) {
            //      return res
            //        .status(404)
            //       .json({ status: 404, errorMsg: "not found category", error: true });
            //    }
            //    await categoryModel.deleteOne({ categoryName });
            //  return res
            //    .status(200)
            //    .json({ status: 200, data: categoryName, error: false });
            const { id } = req.params;
            const users = await category_model_js_1.categoryModel.findOne({ _id: id });
            if (!users) {
                res
                    .status(404)
                    .json({ status: 404, errorMsg: "category not found", error: true });
                return;
            }
            await category_model_js_1.categoryModel.deleteOne({ _id: id });
            return res.status(200).send((0, res_err_fun_js_1.userGet)(200, users, false));
        }
        catch (error) {
            console.log(error.message);
            return res
                .status(500)
                .json({ status: 500, errorMsg: error.message, error: true });
        }
    }
}
exports.category = new categoryController();
