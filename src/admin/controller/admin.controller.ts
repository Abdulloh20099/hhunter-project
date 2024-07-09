import { adminModel } from "../model/admin.model.js";
import { Response, Request } from "express";
import { errFun } from "../../utils/res.err.fun.js";
import { userGet } from "../../utils/res.err.fun.js";
import { categoryModel } from "../../category/model/category.model.js";

class adminController {
  async findAdmin(res: Response, req: Request) {
    // try {
    // } catch (error:any) {
    //    return res.status(500).json({status:500,errorMsg:error.message,error:true})
    // }
  }
  // async deleteCategory (res:Response,req:Request){
  //     try {

  //         const { id } = req.params;
  //         const users = await categoryModel.findOne({ _id: id });
  //         if (!users) {
  //           res
  //             .status(404)
  //             .json({ status: 404, errorMsg: "category not found", error: true });
  //           return;
  //         }
  //         return res.status(200).send(userGet(200, users, false));
  //     } catch (error:any) {
  //         console.log(error.message);
  //         res.status(500).json(errFun(500,error.message,true));
  //         return;
  //     }
  // }
}

export const admincont = new adminController();
