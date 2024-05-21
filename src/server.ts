require("module-alias/register");
import "@root/env";
import express, { NextFunction, Request, Response } from "express";
import { json } from "body-parser";
import admin from "firebase-admin";
import { WebSocketServer } from "@root/websockets";
import auth from "@root/auth";
import http from "http";

import { categoriesRoute } from "@api/categories";
import { emailRoute } from "@api/email";
import { filesRoute } from "@api/files";
import { gamesRoute } from "@api/games";
import { postsRoute } from "@api/posts";
import { staticRoute } from "@root/controllers/static";
import { tenthingsCategoriesRoute } from "@api/tenthings/categories";
import { tenthingsGamesRoute } from "@api/tenthings/games";
import { tenthingsLanguagesRoute } from "@api/tenthings/languages";
import { tenthingsListsRoute } from "@api/tenthings/lists";
import { tenthingsPauseRoute } from "@api/tenthings/pause";
import { tenthingsPlayersRoute } from "@api/tenthings/players";
import { usersRoute } from "@api/users";
import { tenthingsBotRoute } from "@tenthings/main";
import { redisConnect, subscribe } from "@root/queue";
import bot from "./connections/telegram";

const serviceAccount = require("../keys/resume-172205-firebase-adminsdk-r34t7-0028c702be.json");

admin.initializeApp(
  {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://resume-172205.firebaseio.com",
  },
  "resume"
);

const app = express();
app.use(json({ limit: "5mb" }));

app.use(auth);
app.use("/api/categories", categoriesRoute);
app.use("/api/email", emailRoute);
app.use("/api/files", filesRoute);
app.use("/api/games", gamesRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);

app.use("/api/tenthings/categories", tenthingsCategoriesRoute);
app.use("/api/tenthings/games", tenthingsGamesRoute);
app.use("/api/tenthings/languages", tenthingsLanguagesRoute);
app.use("/api/tenthings/lists", tenthingsListsRoute);
app.use("/api/tenthings/pause", tenthingsPauseRoute);
app.use("/api/tenthings/players", tenthingsPlayersRoute);
/*
app.use(logger('dev', {
  skip: (req, res) => {
    console.log(req.method, req.url);
    return req.method.indexOf('/bots/tenthings') > -1;
  }
}));
*/
app.use("/bots/tenthings", tenthingsBotRoute);

app.use(staticRoute);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
/*
app.use((req, res) => {
  let buffs = [];
  req.on('data', (chunk) => {
    buffs.push(chunk);
  });
  req.on('end', () => {
    res.write(Buffer.concat(buffs));
    res.end();
  });
});
*/
const port = process.env.PORT || 3000;
const server = http.createServer(app);

const websocketServer = new WebSocketServer(server);
export default websocketServer;

server.listen(port, async () => {
  console.log("Server ", process.pid, " listening on", port);
  redisConnect();
  if (process.env.NODE_ENV === "production") {
    bot.notifyAdmin("<b>Started Ten Things</b>");
  }
  await subscribe("new_post", (post: any) => {
    websocketServer.broadcast("new_post", post);
  });
});

process
  .on("unhandledRejection", (reason, p) => {
    console.error(reason, "Unhandled Rejection at Promise", p);
    console.trace();
  })
  .on("uncaughtException", (err) => {
    console.error(err, "Uncaught Exception thrown");
    console.trace();
    process.exit(1);
  });
