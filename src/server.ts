require("module-alias/register");
import "@root/env";
import express, { NextFunction, Request, Response } from "express";
import { json } from "body-parser";
import admin from "firebase-admin";
import { WebSocketServer } from "@root/websockets";
import auth from "@root/auth";
import http from "http";

import { emailRoute } from "@api/email";
import { quizzesRoute } from "@api/quizzes";
import { gamesRoute } from "@api/games";
import { postsRoute } from "@api/posts";
import { staticRoute } from "@root/controllers/static";
import { tenthingsCategoriesRoute } from "@api/tenthings/categories";
import { tenthingsGamesRoute } from "@api/tenthings/games";
import { tenthingsLanguagesRoute } from "@api/tenthings/languages";
import { tenthingsListsRoute } from "@api/tenthings/lists";
import { tenthingsPauseRoute } from "@api/tenthings/pause";
import { tenthingsPlayersRoute } from "@api/tenthings/players";
import { tenthingsStatsRoute } from "@api/tenthings/stats";
import { tenthingsSearchRoute } from "@api/tenthings/search";
import { usersRoute } from "@api/users";
import { tenthingsTelegramBotRoute } from "@api/tenthings/telegram";
import { redisConnect, subscribe } from "@root/queue";
import bot from "./connections/telegram";
import { tenthingsWebBotRoute } from "./controllers/api/tenthings/web";

const serviceAccount = require("../keys/resume-172205-firebase-adminsdk-r34t7-0028c702be.json");

export const firebase = admin.initializeApp(
  {
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://resume-172205.firebaseio.com",
  },
  "resume",
);

const app = express();
app.use(json({ limit: "5mb" }));

app.use(auth);
app.use("/api/email", emailRoute);
app.use("/api/games", gamesRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);
app.use("/api/quizzes", quizzesRoute);

app.use("/api/tenthings/categories", tenthingsCategoriesRoute);
app.use("/api/tenthings/games", tenthingsGamesRoute);
app.use("/api/tenthings/languages", tenthingsLanguagesRoute);
app.use("/api/tenthings/lists", tenthingsListsRoute);
app.use("/api/tenthings/pause", tenthingsPauseRoute);
app.use("/api/tenthings/players", tenthingsPlayersRoute);
app.use("/api/tenthings/stats", tenthingsStatsRoute);
app.use("/api/tenthings/search", tenthingsSearchRoute);
app.use("/api/tenthings/web", tenthingsWebBotRoute);

app.use("/bots/tenthings", tenthingsTelegramBotRoute);

app.use(staticRoute);

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
const port = process.env.PORT || 3000;
const server = http.createServer(app);

export const websocketServer = new WebSocketServer(server);

server.listen(port, async () => {
  console.log("Server ", process.pid, " listening on", port);
  redisConnect();
  if (process.env.NODE_ENV === "production") {
    bot.notifyAdmin("<b>Started Ten Things</b>");
  }
  //bot.setWebhook("tenthings");
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
