"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.websocketServer = exports.firebase = void 0;
require("module-alias/register");
require("./env");
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const websockets_1 = require("./websockets");
const auth_1 = __importDefault(require("./auth"));
const http_1 = __importDefault(require("http"));
const email_1 = require("./controllers/api/email");
const quizzes_1 = require("./controllers/api/quizzes");
const games_1 = require("./controllers/api/games");
const posts_1 = require("./controllers/api/posts");
const static_1 = require("./controllers/static");
const categories_1 = require("./controllers/api/tenthings/categories");
const games_2 = require("./controllers/api/tenthings/games");
const languages_1 = require("./controllers/api/tenthings/languages");
const lists_1 = require("./controllers/api/tenthings/lists");
const pause_1 = require("./controllers/api/tenthings/pause");
const players_1 = require("./controllers/api/tenthings/players");
const stats_1 = require("./controllers/api/tenthings/stats");
const search_1 = require("./controllers/api/tenthings/search");
const users_1 = require("./controllers/api/users");
const telegram_1 = require("./controllers/api/tenthings/telegram");
const queue_1 = require("./queue");
const telegram_2 = __importDefault(require("./connections/telegram"));
const web_1 = require("./controllers/api/tenthings/web");
const serviceAccount = require("../keys/resume-172205-firebase-adminsdk-r34t7-0028c702be.json");
exports.firebase = firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
    databaseURL: "https://resume-172205.firebaseio.com",
}, "resume");
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)({ limit: "5mb" }));
app.use(auth_1.default);
app.use("/api/email", email_1.emailRoute);
app.use("/api/games", games_1.gamesRoute);
app.use("/api/users", users_1.usersRoute);
app.use("/api/posts", posts_1.postsRoute);
app.use("/api/quizzes", quizzes_1.quizzesRoute);
app.use("/api/tenthings/categories", categories_1.tenthingsCategoriesRoute);
app.use("/api/tenthings/games", games_2.tenthingsGamesRoute);
app.use("/api/tenthings/languages", languages_1.tenthingsLanguagesRoute);
app.use("/api/tenthings/lists", lists_1.tenthingsListsRoute);
app.use("/api/tenthings/pause", pause_1.tenthingsPauseRoute);
app.use("/api/tenthings/players", players_1.tenthingsPlayersRoute);
app.use("/api/tenthings/stats", stats_1.tenthingsStatsRoute);
app.use("/api/tenthings/search", search_1.tenthingsSearchRoute);
app.use("/api/tenthings/web", web_1.tenthingsWebBotRoute);
app.use("/bots/tenthings", telegram_1.tenthingsTelegramBotRoute);
app.use(static_1.staticRoute);
app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});
const port = process.env.PORT || 3000;
const server = http_1.default.createServer(app);
exports.websocketServer = new websockets_1.WebSocketServer(server);
server.listen(port, async () => {
    console.log("Server ", process.pid, " listening on", port);
    (0, queue_1.redisConnect)();
    if (process.env.NODE_ENV === "production") {
        telegram_2.default.notifyAdmin("<b>Started Ten Things</b>");
    }
    await (0, queue_1.subscribe)("new_post", (post) => {
        exports.websocketServer.broadcast("new_post", post);
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
//# sourceMappingURL=server.js.map