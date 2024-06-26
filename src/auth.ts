import { NextFunction, Request, Response } from "express";
import jwt from "jwt-simple";

import UserModels from "@models/user";
const User = UserModels();

export default async (req: Request, res: Response, next: NextFunction) => {
  res.locals.isAuthorized = false;
  res.locals.isAdmin = false;
  let authCode;
  if (req.headers["x-auth"]) {
    authCode = jwt.decode(req.headers["x-auth"] as string, process.env.SECRET!);
  }
  if (authCode?.userid) {
    const user = await User.findOne({ _id: authCode.userid });
    if (user) {
      res.locals.user = user;
      res.locals.isAuthorized = !!user && authCode.userid != "5ece428af848aa2fc392d099";
      res.locals.isAdmin = !!user && user.admin;
    }
  }
  next();
};
