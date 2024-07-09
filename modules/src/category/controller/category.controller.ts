import { userGet } from "../../utils/res.err.fun.js";
import { categoryModel } from "../model/category.model.js";
import { Request, Response } from "express";

class categoryController {
  async createCategory(req: Request, res: Response) {
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

      const created = await categoryModel.create(categoryObj);
      await created.save();

      res.status(201).send({ status: 201, data: created, error: false });
      return;
    } catch (error: any) {
      res
        .status(500)
        .json({ status: 500, errorMsg: error.message, error: true });
      return;
    }
  }
  async deleteCategory(req: Request, res: Response) {
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
      const users = await categoryModel.findOne({ _id: id });
      if (!users) {
        res
          .status(404)
          .json({ status: 404, errorMsg: "category not found", error: true });
        return;
      }
      await categoryModel.deleteOne({ _id: id });
      return res.status(200).send(userGet(200, users, false));
    } catch (error: any) {
      console.log(error.message);
      return res
        .status(500)
        .json({ status: 500, errorMsg: error.message, error: true });
    }
  }
}

export const category = new categoryController();
