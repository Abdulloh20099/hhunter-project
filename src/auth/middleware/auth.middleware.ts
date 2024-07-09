import { NextFunction, Request, Response } from "express";
import { AuthModel } from "../models/auth.model.js";
import bcrypt from "bcrypt";

class AuthMiddleware {
  async middlewareSignUp(req: Request, res: Response, next: NextFunction) {
    try {
      const { username, email, password } = req.body;
      const user = await AuthModel.findOne({ email });

      if (!username || !email || !password) {
        res
          .status(400)
          .json({ status: 400, errorMsg: "invalid body", error: true });
        return;
      }

      if (user) {
        return res
          .status(403)
          .json({
            status: 403,
            errorMsg: "such a user already exists",
            error: true,
          });
      }

      next();
    } catch (error: any) {
      console.log(error.message);
      return res
        .status(500)
        .json({ status: 500, errorMsg: error.message, error: true });
    }
  }
  async middlewareSignIn(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;

      const user = await AuthModel.findOne({ email: email });

      if (!user) {
        return res
          .status(404)
          .json({ staus: 404, errorMsg: "User not found", error: true });
      }
      const compare = bcrypt.compareSync(password, user?.password as any);

      if (!compare) {
        return res
          .status(403)
          .json({ status: 403, errorMsg: "Wrong password", error: true });
      }

      next();
    } catch (error: any) {
      console.log(error.message);
      return res
        .status(500)
        .json({ status: 500, errorMsg: error.message, error: true });
    }
  }
}

export const AuthMiddlewaree = new AuthMiddleware();
