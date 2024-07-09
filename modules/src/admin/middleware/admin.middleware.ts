import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { AuthModel } from "../../auth/models/auth.model.js";

class adminMiddle {
  async adminCheck(req: Request, res: Response, next: NextFunction) {
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

      const decodedToken = jwt.verify(tokenUser, process.env.SECRET_KEY as any);

      const key_admin = process.env.ADMIN_KEY;

      if ((decodedToken as any).email == key_admin) {
        next();
      }
      if ((decodedToken as any).email != key_admin) {
        return res
          .status(403)
          .json({ status: 403, errorMsg: "You are not admin", error: true });
      }
    } catch (error: any) {
      console.log(error.message);

      return res
        .status(500)
        .json({ status: 500, errorMsg: error.message, error: true });
    }
  }
  async adminFind(res: Response, req: Request, next: NextFunction) {
    try {
      const KEY = process.env.ADMIN_KEY;

      const findAdmin = await AuthModel.find();
    } catch (error: any) {
      return res
        .status(500)
        .json({ status: 500, errorMsg: error.message, error: true });
    }
  }
}

export const admin = new adminMiddle();
