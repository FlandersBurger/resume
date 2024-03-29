import express from "express";
import { json } from "body-parser";
import admin from "firebase-admin";
import { WebSocketServer } from "./websockets";
import auth from "./auth";
import http from "http";

import { categoriesRoute } from "./controllers/api/categories";
import { emailRoute } from "./controllers/api/email";
import { filesRoute } from "./controllers/api/files";
import { gamesRoute } from "./controllers/api/games";
import { postsRoute } from "./controllers/api/posts";
import { staticRoute } from "./controllers/static";
import { tenthingsCategoriesRoute } from "./controllers/api/tenthings/categories";
import { tenthingsGamesRoute } from "./controllers/api/tenthings/games";
import { tenthingsLanguagesRoute } from "./controllers/api/tenthings/languages";
import { tenthingsListsRoute } from "./controllers/api/tenthings/lists";
import { tenthingsPauseRoute } from "./controllers/api/tenthings/pause";
import { tenthingsPlayersRoute } from "./controllers/api/tenthings/players";
import { usersRoute } from "./controllers/api/users";
import { tenthingsBotRoute } from "./controllers/bots/tenthings/main";

require("dotenv").config();

const serviceAccount = require("./keys/resume-172205-firebase-adminsdk-r34t7-0028c702be.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://resume-172205.firebaseio.com",
});

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

server.listen(port, async () => {
  console.log("Server ", process.pid, " listening on", port);
  // redisClient.connect();
});

/*
var server = app.listen(8080, function () {
  console.log('Server Listening at http://162.243.132.240 on', 8080);
})
*/
const websocketServer = new WebSocketServer(server);
export default websocketServer;
