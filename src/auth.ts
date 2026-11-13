import { NextFunction, Request, Response } from "express";
import jwt from "jwt-simple";
import { isValidObjectId } from "mongoose";

import UserModels from "@models/user";
const User = UserModels();

/** A test account whose token must never authorize anything. */
const BLOCKED_USER_ID = "5ece428af848aa2fc392d099";

/** The User id in a token, or null when the token is garbled, tampered with or not ours. */
const userIdOf = (token: string): string | null => {
  try {
    const userid = jwt.decode(token, process.env.SECRET!)?.userid;
    return isValidObjectId(userid) ? String(userid) : null;
  } catch {
    return null;
  }
};

/**
 * The User a request's `X-Auth` token belongs to, or null when there is none or the token isn't
 * valid: a bad token makes the request anonymous, never a 500. Database errors still throw.
 */
const userOf = async (token: string) => {
  const userid = userIdOf(token);
  return userid ? User.findOne({ _id: userid }) : null;
};

export default async (req: Request, res: Response, next: NextFunction) => {
  res.locals.isAuthorized = false;
  res.locals.isAdmin = false;
  const token = req.headers["x-auth"];
  const user = typeof token === "string" && token ? await userOf(token) : null;
  if (user) {
    res.locals.user = user;
    res.locals.isAuthorized = String(user._id) !== BLOCKED_USER_ID;
    res.locals.isAdmin = !!user.admin;
  }
  next();
};
