import { NextFunction, Request, Response } from "express";
import { errFun } from "../../utils/res.err.fun.js";
import { AuthModel } from "../../auth/models/auth.model.js";
import { categoryModel } from "../../category/model/category.model.js";
import { JobModel } from "../models/job.model.js";

class jobMiddleware {
  async middleware(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const findUser = await AuthModel.find({ _id: id });

      if (!findUser) {
        return res.status(404).json(errFun(404, "user not found", true));
      }

      const { _id } = req.params;

      const categoryfind = await categoryModel.find({ _id });

      if (!categoryfind) {
        return res.status(404).json(errFun(404, "category not found", true));
      }

      const { name, price } = req.body;

      if (!name || !price) {
        return res.status(401).json(errFun(401, "invlaid body", true));
      }

      next();
    } catch (error: any) {
      return res.status(500).json(errFun(500, error.message, true));
    }
  }
  async deleteMiddleware (req:Request,res:Response,next:NextFunction){
    try {
      const {id}=req.params;

      if(!id){
        return res.status(401).json(errFun(401,'invalid body',true));
      }

      const {idJob}=req.body;

      if(!idJob){
        return res.status(401).json(errFun(401,'invalid body',true));
      }

      const findUser = await AuthModel.findOne({_id:id});
      const findJob = await JobModel.findOne({_id:idJob})

      

      if(!findUser){
        return res.status(404).json(errFun(404,'not found',true));
      }
      if(!findJob){
        return res.status(404).json(errFun(404,'j not found',true));
      }
      console.log(findJob.userId);
      console.log(findUser.jobs);
      
      

      next()

    } catch (error:any) {
      return res.status(500).json(errFun(500,error.message,true));
    }
  }
}

export const jobsmiddleware = new jobMiddleware();
