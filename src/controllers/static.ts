import express, { Response, Router } from "express";
import path from "path";
export const staticRoute = Router();

staticRoute.use(express.static(__dirname + "/../../assets"));
staticRoute.use(express.static(__dirname + "/../../resources"));
staticRoute.use(express.static(__dirname + "/../../images"));
staticRoute.use(express.static(__dirname + "/../../sounds"));
staticRoute.use(express.static(__dirname + "/../../pages"));
staticRoute.use(express.static(__dirname + "/../../data"));

staticRoute.get("/*", function (_, res: Response) {
  res.sendFile(path.resolve(__dirname + "/../../index.html"));
});
