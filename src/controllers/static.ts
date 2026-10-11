import express, { Response, Router } from "express";
import path from "path";
export const staticRoute = Router();

// Vite's /assets files are content-hashed, so they can be cached forever; index.html must always revalidate.
staticRoute.use(
  express.static(path.resolve(__dirname, "../../dist/client"), {
    setHeaders: (res, filePath) => {
      if (filePath.includes(`${path.sep}assets${path.sep}`)) {
        res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
      }
    },
  }),
);
staticRoute.use(express.static(__dirname + "/../../data"));
staticRoute.use(express.static(__dirname + "/../../resources", { maxAge: "1d" }));
staticRoute.use(express.static(__dirname + "/../../images", { maxAge: "1d" }));
staticRoute.use(express.static(__dirname + "/../../sounds", { maxAge: "1d" }));
staticRoute.use(express.static(__dirname + "/../../data"));

// A missing hashed chunk means a tab from a previous deploy; don't answer it with index.html.
staticRoute.use("/assets", (_, res: Response) => {
  res.sendStatus(404);
});

staticRoute.get("/*splat", function (_, res: Response) {
  const reactIndex = path.resolve(__dirname, "../../dist/client/index.html");
  res.sendFile(reactIndex);
});
