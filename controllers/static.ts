import express from "express";
import path from "path";
export const staticRoute = express.Router();

staticRoute.use(express.static(__dirname + "/../assets"));
staticRoute.use(express.static(__dirname + "/../resources"));
staticRoute.use(express.static(__dirname + "/../images"));
staticRoute.use(express.static(__dirname + "/../sounds"));
staticRoute.use(express.static(__dirname + "/../pages"));
staticRoute.use(express.static(__dirname + "/../data"));

staticRoute.get("/*", function (req, res) {
  res.sendFile(path.resolve(__dirname + "/../index.html"));
});
