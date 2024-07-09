import { Request, Response } from "express";
import { errFun, resFun, userGet } from "../../utils/res.err.fun.js";
import { AuthModel } from "../../auth/models/auth.model.js";
import { categoryModel } from "../../category/model/category.model.js";
import { JobModel } from "../models/job.model.js";

class jobsController {
  async createJobs(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const findUser = await AuthModel.findOne({ _id: id });
      console.log(findUser);
      

      const { _id } = req.params;

      const categoryFind = await categoryModel.findOne({ _id });

      const { name, price } = req.body;

      const Job = await JobModel.create({
        name,
        price,
        categoryId: categoryFind,
        userId: findUser,
      });

      categoryFind?.jobs.push(Job as any);
      findUser?.jobs.push(Job as any)
      await categoryFind?.save();
      await findUser?.save()

      return res.status(201).send(userGet(201, Job, false));
    } catch (error: any) {
      return res.status(500).json(errFun(500, error.message, true));
    }
  }
  // async deleteJobs (req:Request,res:Response){
  //   try {

  //     const {id}=req.params;
  //     const findUser = await AuthModel.findOne({_id:id});

  //     const {idJob}=req.body;

  //     const findJob = await JobModel.findOne({_id:idJob});

  //     if (!findJob) {
  //       res
  //         .status(404)
  //         .json({ status: 404, errorMsg: "Job not found", error: true });
  //       return;
  //     }

  //     if(!findUser?.jobs == findJob.id){
  //       return res.status(401).json(errFun(401,'this is not u job',true));
  //     }

  //     await JobModel.deleteOne(findJob as any);


  //     return res.status(201).send(userGet(201,findJob as any,false))


  //   } catch (error:any) {
  //     return res.status(500).json(errFun(500,error.message,true));
  //   }
  // }
}

export const jobController = new jobsController();
