import express, { Response, Router } from "express";
import path from "path";
export const staticRoute = Router();

staticRoute.use(express.static(path.resolve(__dirname, "../../dist/client")));
staticRoute.use(express.static(__dirname + "/../../assets"));
staticRoute.use(express.static(__dirname + "/../../resources"));
staticRoute.use(express.static(__dirname + "/../../images"));
staticRoute.use(express.static(__dirname + "/../../sounds"));
staticRoute.use(express.static(__dirname + "/../../data"));

staticRoute.get("/*", function (_, res: Response) {
  const reactIndex = path.resolve(__dirname, "../../dist/client/index.html");
  res.sendFile(reactIndex);
});
