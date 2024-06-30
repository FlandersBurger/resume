import "express";
import { IUser } from "@models/user";
import { SortOrder } from "mongoose";

declare module "express" {
  export interface QueryableRequest {
    query: {
      page: string;
      limit: string;
      sort_by: string;
      order_by: string;
      search: string;
    };
  }
  export interface Response {
    locals: {
      isAuthorized?: boolean;
      isAdmin?: boolean;
      auth?: { userid: string };
      user?: IUser;
    };
  }
}
