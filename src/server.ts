require("module-alias/register");
import "@root/env";
import express, { NextFunction, Request, Response } from "express";
import { json } from "body-parser";
import admin from "firebase-admin";
import { WebSocketServer } from "@root/websockets";
import auth from "@root/auth";
import http from "http";

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
import { tenthingsStatsRoute } from "@api/tenthings/stats";
import { tenthingsSearchRoute } from "@api/tenthings/search";
import { usersRoute } from "@api/users";
import { tenthingsBotRoute } from "@tenthings/main";
import { redisConnect, subscribe } from "@root/queue";
import bot from "./connections/telegram";
import { convertGameCategories, convertListCategories } from "./controllers/bots/tenthings/categories-new";
import { Game, List } from "./models";

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
app.use("/api/tenthings/stats", tenthingsStatsRoute);
app.use("/api/tenthings/search", tenthingsSearchRoute);

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

export const websocketServer = new WebSocketServer(server);

server.listen(port, async () => {
  console.log("Server ", process.pid, " listening on", port);
  redisConnect();
  if (process.env.NODE_ENV === "production") {
    bot.notifyAdmin("<b>Started Ten Things</b>");
  }
  const lists = await List.find().select("categories");
  let i = 0;
  console.log(`Converting ${lists.length} lists`);
  for (const list of lists) {
    await convertListCategories(list);
    i++;
    if (i % 500 === 0) console.log(`${i}/${lists.length}`);
  }
  console.log(`Converted ${lists.length} lists`);
  let N = 0;
  const count = await Game.count();
  const gameCursor = await Game.find().cursor();
  await gameCursor.eachAsync(async (game) => {
    N++;
    if (N % 500 === 0) console.log(`${N}/${count} games synced`);
    try {
      await convertGameCategories(game);
    } catch (e) {
      console.error(game.date);
    }
    return Promise.resolve();
  });
  //bot.setWebhook("tenthings");
  await subscribe("new_post", (post: any) => {
    websocketServer.broadcast("new_post", post);
  });
  // Player.find({ id: { $type: "string" } })
  //   .select("_id id")
  //   .then((players) => {
  //     console.log("players", players.length);
  //     players.forEach(async (player, i) => {
  //       if (i % 1000 === 0) console.log(`${i + 1}/${players.length}`);
  //       const result = await Player.findOneAndUpdate(
  //         { _id: player._id },
  //         { $set: { id: parseInt(player.id) } },
  //         { returnOriginal: false }
  //       );
  //     });
  //     console.log("done");
  //   });
  // Game.find({ chat_id: { $type: "string" } })
  //   .select("_id id")
  //   .then((games) => {
  //     console.log("games", games.length);
  //     games.forEach(async (game, i) => {
  //       if (i % 1000 === 0) console.log(`${i + 1}/${games.length}`);
  //       const result = await Game.findOneAndUpdate(
  //         { _id: game._id },
  //         { $set: { chat_id: parseInt(game.chat_id as any) } },
  //         { returnOriginal: false }
  //       );
  //     });
  //     console.log("done");
  //   });
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
