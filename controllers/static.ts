import express from "express";
import path from "path";
export const router = express.Router();

router.use(express.static(__dirname + "/../assets"));
router.use(express.static(__dirname + "/../resources"));
router.use(express.static(__dirname + "/../images"));
router.use(express.static(__dirname + "/../sounds"));
router.use(express.static(__dirname + "/../pages"));
router.use(express.static(__dirname + "/../data"));

router.get("/*", function (req, res) {
  res.sendFile(path.resolve(__dirname + "/../index.html"));
});
