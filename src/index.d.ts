import "express";
import { IUser } from "@/models/user";

declare module "express" {
  export interface Response {
    locals: {
      isAuthorized?: boolean;
      isAdmin?: boolean;
      auth?: { userid: string };
      user?: IUser;
    };
  }
}
