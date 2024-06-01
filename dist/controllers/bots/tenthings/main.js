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
exports.tenthingsBotRoute = exports.MessageType = void 0;
const express_1 = require("express");
const moment_1 = __importDefault(require("moment"));
const index_1 = require("../../../models/index");
const maingame_1 = require("./maingame");
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const i18n_1 = __importDefault(require("../../../i18n"));
const queue_1 = require("./queue");
const callbacks_1 = __importDefault(require("./callbacks"));
const commands_1 = require("./commands");
// DO NOT REMOVE jobs
const jobs_1 = __importDefault(require("./jobs"));
console.log(`Scheduled Jobs:\n${jobs_1.default
    .map((j) => ` - ${j.name}: ${moment_1.default.duration((0, moment_1.default)(new Date()).diff(j.nextInvocation())).humanize(true)}`)
    .join("\n")}`);
var MessageType;
(function (MessageType) {
    MessageType["Callback"] = "callback";
    MessageType["Command"] = "command";
    MessageType["NewGame"] = "newGame";
    MessageType["PlayerLeft"] = "playerLeft";
    MessageType["Message"] = "message";
    MessageType["Ignore"] = "ignore";
})(MessageType || (exports.MessageType = MessageType = {}));
//-------------//
//redis.set('pause', true);
//-------------//
exports.tenthingsBotRoute = (0, express_1.Router)();
//const BANNED_USERS = [513934222, 1051982986, 1049452899,1286805649, 1156746047, 1221878428, 928265957, 811672759, 1291668503, 1136025506, 1162690484, 1158491266, 1053547542, 1182973691, 1010339222, 906650538, 1153021237, 623100045, 1269984320];
/*
  Game.update(
    {},
    {
      'players.$[].wins': 0,
      'players.$[].plays': 0,
      'players.$[].score': 0,
      'players.$[].scoreDaily': 0
    },
    { multi: true },
    function(err, saved) {
      if (err) {
        console.log(err);
      } else {
        console.log(saved);
      }
    }
  );
*/
/*
  bot.getChatMember(parseInt(process.env.GROUP_CHAT || ""), parseInt(process.env.MASTER_CHAT || ""))
  .then(function(present) {
    console.log(present);
  });*/
//bot.queueMessage('-1001394022777', "test<a href=\'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Regular_Hexagon_Inscribed_in_a_Circle.gif/360px-Regular_Hexagon_Inscribed_in_a_Circle.gif\'>&#8204;</a>\nsome other stuff")
//var url = 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg';
//bot.queueMessage(parseInt(process.env.MASTER_CHAT || ""), "test<a href=\'" + url + "\'>&#8204;</a>\nsome other stuff");
//bot.queueMessage(parseInt(process.env.MASTER_CHAT || ""), JSON.stringify(msg));
//The Group: '5b6361dcbd0ff6645df5f225'  '-1001394022777'
/*
bot.exportChatInviteLink('-1001394022777').then(function(chat) {
  console.log(chat);
});
*/
/*
 ██████   ██████  ███████ ████████
 ██   ██ ██    ██ ██         ██
 ██████  ██    ██ ███████    ██
 ██      ██    ██      ██    ██
 ██       ██████  ███████    ██
*/
exports.tenthingsBotRoute.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const domainMessage = yield telegram_1.default.toDomainMessage(req.body);
    switch (domainMessage.messageType) {
        case MessageType.Ignore:
            return res.sendStatus(200);
        case MessageType.Callback:
            yield (0, callbacks_1.default)(domainMessage.message);
            return res.sendStatus(200);
        case MessageType.PlayerLeft:
            index_1.Game.findOne({ chat_id: domainMessage.message.chatId }).exec((err, game) => {
                if (err)
                    return console.error(err);
                if (!game)
                    return;
                index_1.Player.findOne({ game: game._id, id: `${domainMessage.message.from.id}` }).exec((err, player) => {
                    if (err || !player)
                        return;
                    if (player) {
                        player.present = false;
                        player.save();
                    }
                });
            });
            return res.sendStatus(200);
        default:
            break;
    }
    let msg = domainMessage.message;
    try {
        if (!msg.from.id) {
            return res.sendStatus(200);
        }
    }
    catch (e) {
        console.error(e);
        telegram_1.default.notifyAdmin(`Can't send message:\n${JSON.stringify(msg)}`);
        return res.sendStatus(200);
    }
    const existingGame = yield index_1.Game.findOne({ chat_id: msg.chatId })
        .populate("list.creator")
        .select("-playedLists")
        .exec();
    // if (msg.chatId !== parseInt(process.env.MASTER_CHAT || "")) return res.sendStatus(200);
    try {
        if (!existingGame) {
            const newGame = yield (0, maingame_1.createMaingame)(msg.chatId);
            console.log(`New game created for ${msg.chatId}`);
            yield (0, commands_1.evaluate)(msg, newGame, true);
        }
        else {
            if (!existingGame.enabled && !["/list", "/start"].includes(msg.command.toLowerCase())) {
                telegram_1.default.sendMessage(msg.chatId, (0, i18n_1.default)(existingGame.settings.language, "sentences.inactivity"));
                return res.sendStatus(200);
            }
            yield (0, commands_1.evaluate)(msg, existingGame, false);
        }
    }
    catch (e) {
        console.error(e);
        telegram_1.default.sendMessage(msg.chatId, "<b>Error</b>\nUse the /error command to explain to the admins what didn't work");
        telegram_1.default.notifyAdmin(`Error in game ${msg.chatId}:\n${e}`);
    }
    finally {
        if (!res.headersSent)
            res.sendStatus(200);
    }
}));
exports.tenthingsBotRoute.get("/", (req, res) => {
    if (req.query["hub.verify_token"] === process.env.FACEBOOK_TOKEN) {
        res.status(200).send(req.query["hub.challenge"]);
    }
    else {
        res.sendStatus(200);
    }
});
/*
 ██     ██ ███████ ██████  ██   ██  ██████   ██████  ██   ██
 ██     ██ ██      ██   ██ ██   ██ ██    ██ ██    ██ ██  ██
 ██  █  ██ █████   ██████  ███████ ██    ██ ██    ██ █████
 ██ ███ ██ ██      ██   ██ ██   ██ ██    ██ ██    ██ ██  ██
  ███ ███  ███████ ██████  ██   ██  ██████   ██████  ██   ██
*/
// Creates the endpoint for our webhook
exports.tenthingsBotRoute.post("/webhook", (req, res) => {
    const body = req.body;
    if (body.object === "page") {
        // Iterates over each entry - there may be multiple if batched
        body.entry.forEach(({ messaging }) => {
            // Gets the message. entry.messaging is an array, but
            // will only ever contain one message, so we get index 0
            const webhook_event = messaging[0];
            console.log(webhook_event);
            // Get the sender PSID
            const sender_psid = webhook_event.sender.id;
            console.log(`Sender PSID: ${sender_psid}`);
            // Check if the event is a message or postback and
            // pass the event to the appropriate handler function
            if (webhook_event.message) {
                console.log(webhook_event.message);
            }
            else if (webhook_event.postback) {
                console.log(webhook_event.postback);
            }
        });
        // Returns a '200 OK' response to all requests
        res.status(200).send("EVENT_RECEIVED");
    }
    else {
        // Returns a '404 Not Found' if event is not = require(a page subscription
        res.sendStatus(404);
    }
});
function countBytes(s) {
    console.log(encodeURI(s).split(/%..|./).length - 1);
}
exports.tenthingsBotRoute.get("/queue", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json(yield (0, queue_1.getQueue)());
}));
const floodChecker = () => __awaiter(void 0, void 0, void 0, function* () {
    const webhook = yield telegram_1.default.getWebhook();
    return webhook.pending_update_count > 500;
});
const newPlayerError = (err) => {
    telegram_1.default.notifyAdmin("Can't add new player: " + JSON.stringify(err));
    console.error(err);
};
/*
request(`https://api.themoviedb.org/3/search/movie?api_key=${moviedbAPIKey}&query=${encodeURIComponent('good will hunting')}`, (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    console.log(JSON.parse(response.body).results[0]);
  }
});*/
//# sourceMappingURL=main.js.map