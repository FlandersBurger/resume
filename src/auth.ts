import { NextFunction, Request, Response } from "express";

import UserModels from "@models/user";
import { RENEWED_TOKEN_HEADER, readToken, renewal } from "@root/tokens";
const User = UserModels();

/** A test account whose token must never authorize anything. */
const BLOCKED_USER_ID = "5ece428af848aa2fc392d099";

/**
 * Signs the request in from its `X-Auth` token. A missing, bad or expired token leaves it
 * anonymous, never a 500; database errors still throw. A token past half its life comes back
 * renewed in the X-Auth-Renewed header, so a User who keeps visiting stays signed in.
 */
export default async (req: Request, res: Response, next: NextFunction) => {
  res.locals.isAuthorized = false;
  res.locals.isAdmin = false;
  const token = req.headers["x-auth"];
  const claims = typeof token === "string" && token ? readToken(token) : null;
  const user = claims ? await User.findOne({ _id: claims.userid }) : null;
  if (claims && user) {
    res.locals.user = user;
    res.locals.isAuthorized = String(user._id) !== BLOCKED_USER_ID;
    res.locals.isAdmin = !!user.admin;
    const renewed = user.banned ? null : renewal(claims);
    if (renewed) res.setHeader(RENEWED_TOKEN_HEADER, renewed);
  }
  next();
};
