import { Router } from "express";
import { AuthController } from "../controller/auth.controller.js";
import { AuthMiddlewaree } from "../middleware/auth.middleware.js";

export const AuthRouter = Router();

AuthRouter.get("/users/getUser/:id", AuthController.GetUser);
AuthRouter.post(
  "/users/SignUp",
  AuthMiddlewaree.middlewareSignUp,
  AuthController.SignUp
);
AuthRouter.put(
  "/users/SignIn",
  AuthMiddlewaree.middlewareSignIn,
  AuthController.SignIn
);
