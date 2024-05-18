"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
require("./env");
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const websockets_1 = require("./websockets");
const auth_1 = __importDefault(require("./auth"));
const http_1 = __importDefault(require("http"));
const categories_1 = require("./controllers/api/categories");
const email_1 = require("./controllers/api/email");
const files_1 = require("./controllers/api/files");
const games_1 = require("./controllers/api/games");
const posts_1 = require("./controllers/api/posts");
const static_1 = require("./controllers/static");
const categories_2 = require("./controllers/api/tenthings/categories");
const games_2 = require("./controllers/api/tenthings/games");
const languages_1 = require("./controllers/api/tenthings/languages");
const lists_1 = require("./controllers/api/tenthings/lists");
const pause_1 = require("./controllers/api/tenthings/pause");
const players_1 = require("./controllers/api/tenthings/players");
const users_1 = require("./controllers/api/users");
const main_1 = require("./controllers/bots/tenthings/main");
const queue_1 = require("./queue");
const telegram_1 = __importDefault(require("./connections/telegram"));
const serviceAccount = require("../keys/resume-172205-firebase-adminsdk-r34t7-0028c702be.json");
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
    databaseURL: "https://resume-172205.firebaseio.com",
}, "resume");
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)({ limit: "5mb" }));
app.use(auth_1.default);
app.use("/api/categories", categories_1.categoriesRoute);
app.use("/api/email", email_1.emailRoute);
app.use("/api/files", files_1.filesRoute);
app.use("/api/games", games_1.gamesRoute);
app.use("/api/users", users_1.usersRoute);
app.use("/api/posts", posts_1.postsRoute);
app.use("/api/tenthings/categories", categories_2.tenthingsCategoriesRoute);
app.use("/api/tenthings/games", games_2.tenthingsGamesRoute);
app.use("/api/tenthings/languages", languages_1.tenthingsLanguagesRoute);
app.use("/api/tenthings/lists", lists_1.tenthingsListsRoute);
app.use("/api/tenthings/pause", pause_1.tenthingsPauseRoute);
app.use("/api/tenthings/players", players_1.tenthingsPlayersRoute);
/*
app.use(logger('dev', {
  skip: (req, res) => {
    console.log(req.method, req.url);
    return req.method.indexOf('/bots/tenthings') > -1;
  }
}));
*/
app.use("/bots/tenthings", main_1.tenthingsBotRoute);
app.use(static_1.staticRoute);
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
const server = http_1.default.createServer(app);
server.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Server ", process.pid, " listening on", port);
    (0, queue_1.redisConnect)();
    if (process.env.NODE_ENV === "production") {
        telegram_1.default.notifyAdmin("<b>Started Ten Things</b>");
    }
}));
const websocketServer = new websockets_1.WebSocketServer(server);
exports.default = websocketServer;
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
//# sourceMappingURL=server.js.map