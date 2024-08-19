import "express";
import { IUser } from "@models/user";
import { SortOrder } from "mongoose";

declare module "express" {
  export type QueryableRequest = {
    query: {
      page: string;
      limit: string;
      sort_by: string;
      order_by: string;
      search: string;
    };
  };
  export type Response = {
    locals: {
      isAuthorized?: boolean;
      isAdmin?: boolean;
      auth?: { userid: string };
      user?: IUser;
    };
  };
}
