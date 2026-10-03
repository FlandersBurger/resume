import express, { Response, Router } from "express";
import path from "path";
export const staticRoute = Router();

staticRoute.use(express.static(path.resolve(__dirname, "../../dist/client")));
staticRoute.use(express.static(__dirname + "/../../data"));
staticRoute.use(express.static(__dirname + "/../../resources"));
staticRoute.use(express.static(__dirname + "/../../images"));
staticRoute.use(express.static(__dirname + "/../../sounds"));
staticRoute.use(express.static(__dirname + "/../../data"));

// A missing hashed chunk means a tab from a previous deploy; don't answer it with index.html.
staticRoute.use("/assets", (_, res: Response) => {
  res.sendStatus(404);
});

staticRoute.get("/*splat", function (_, res: Response) {
  const reactIndex = path.resolve(__dirname, "../../dist/client/index.html");
  res.sendFile(reactIndex);
});
