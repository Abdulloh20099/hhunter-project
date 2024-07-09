import { Response, Request } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthModel } from "../models/auth.model.js";
import { resFun } from "../../utils/res.err.fun.js";
import { errFun } from "../../utils/res.err.fun.js";
import { userGet } from "../../utils/res.err.fun.js";

class AuthControllerFunc {
  async GetUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const users = await AuthModel.findOne({ _id: id });
      if (!users) {
        res
          .status(404)
          .json({ status: 404, errorMsg: "User not found", error: true });
        return;
      }
      return res.status(200).send(userGet(200, users, false));
    } catch (error: any) {
      console.log(error.message);
      res.status(500).json(errFun(500, error.message, true));
    }
  }
  async SignUp(req: Request, res: Response) {
    try {
      const { username, email, password } = req.body;
      const SALT_ROUND = 10;
      const hashPassword = bcrypt.hashSync(password, SALT_ROUND);

      const userObjCreated = {
        username: username,
        email: email,
        password: hashPassword,
      };
      delete req.body.password;

      if (
        !userObjCreated.username ||
        !userObjCreated.email ||
        !userObjCreated.password
      ) {
        res.status(400).json(errFun(400, "invalid body", true));
        return;
      }

      const TokenUser = {
        email: userObjCreated.email,
      };

      const token = jwt.sign(TokenUser, "n126");

      const createUserObj = await AuthModel.create(userObjCreated);
      await createUserObj.save();

      res.status(201).send(resFun(201, token, userObjCreated, false));
      return;
    } catch (error: any) {
      res
        .status(500)
        .json({ status: 500, errorMsg: error.message, error: true });
      return;
    }
  }

  async SignIn(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const user = await AuthModel.findOne({ email: email });

      const SALT_ROUND = 10;

      const tokenobj = {
        email,
      };

      const token = jwt.sign(tokenobj, "n126");

      return res
        .status(201)
        .send({ status: 201, data: token, dataObj: user, error: false });
    } catch (error: any) {
      console.log(error.message);
      return res
        .status(500)
        .json({ status: 500, errorMsg: error.message, error: true });
    }
  }
}

export const AuthController = new AuthControllerFunc();
