"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenthingsTelegramBotRoute = exports.MessageType = void 0;
const express_1 = require("express");
const moment_1 = __importDefault(require("moment"));
const index_1 = require("../../../models/index");
const maingame_1 = require("../../bots/tenthings/maingame");
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const queue_1 = require("../../bots/tenthings/providers/telegram/queue");
const callbacks_1 = __importDefault(require("../../bots/tenthings/providers/telegram/callbacks"));
const commands_1 = require("../../bots/tenthings/providers/telegram/commands");
const jobs_1 = __importDefault(require("../../bots/tenthings/jobs"));
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
exports.tenthingsTelegramBotRoute = (0, express_1.Router)();
exports.tenthingsTelegramBotRoute.post("/", async (req, res) => {
    const domainMessage = await telegram_1.default.toDomainMessage(req.body);
    switch (domainMessage.messageType) {
        case MessageType.Ignore:
            res.sendStatus(200);
            return;
        case MessageType.Callback:
            await (0, callbacks_1.default)(domainMessage.message);
            res.sendStatus(200);
            return;
        case MessageType.PlayerLeft:
            const game = await index_1.Game.findOne({ chat_id: domainMessage.message.chatId });
            if (game) {
                const player = await index_1.Player.findOne({ game: game._id, id: `${domainMessage.message.from.id}` });
                if (player) {
                    player.present = false;
                    player.save();
                }
            }
            res.sendStatus(200);
            return;
        default:
            break;
    }
    let msg = domainMessage.message;
    if (!msg?.from?.id) {
        if (!res.headersSent)
            res.sendStatus(200);
    }
    else {
        const existingGame = await index_1.Game.findOne({ chat_id: msg.chatId })
            .populate("list.creator")
            .populate("list.values.guesser")
            .select("-playedLists")
            .exec();
        if (!existingGame) {
            const newGame = await (0, maingame_1.createMaingame)({ chat_id: msg.chatId, platform: "telegram" });
            console.log(`New game created for ${msg.chatId}`);
            await (0, commands_1.evaluate)(msg, newGame, true);
        }
        else {
            if (!existingGame.enabled) {
                if (msg.command && ["list", "start", "minigame", "tinygame"].includes(msg.command)) {
                    await (0, maingame_1.activate)(existingGame, true);
                    await (0, commands_1.evaluate)(msg, existingGame, false);
                }
            }
            else {
                try {
                    await existingGame.validate();
                }
                catch (err) {
                    existingGame.guessers = [];
                    existingGame.streak = {
                        player: undefined,
                        count: 0,
                    };
                    existingGame.list.values = existingGame.list.values.map((v) => ({ ...v, guesser: undefined }));
                    await existingGame.save();
                    console.log("Game reset:", existingGame._id);
                    if (!res.headersSent)
                        res.sendStatus(200);
                    return;
                }
                await (0, commands_1.evaluate)(msg, existingGame, false);
            }
        }
        if (!res.headersSent)
            res.sendStatus(200);
    }
});
exports.tenthingsTelegramBotRoute.get("/", (req, res) => {
    if (req.query["hub.verify_token"] === process.env.FACEBOOK_TOKEN) {
        res.status(200).send(req.query["hub.challenge"]);
    }
    else {
        res.sendStatus(200);
    }
});
exports.tenthingsTelegramBotRoute.post("/webhook", (req, res) => {
    const body = req.body;
    if (body.object === "page") {
        body.entry.forEach(({ messaging }) => {
            const webhook_event = messaging[0];
            console.log(webhook_event);
            const sender_psid = webhook_event.sender.id;
            console.log(`Sender PSID: ${sender_psid}`);
            if (webhook_event.message) {
                console.log(webhook_event.message);
            }
            else if (webhook_event.postback) {
                console.log(webhook_event.postback);
            }
        });
        res.status(200).send("EVENT_RECEIVED");
    }
    else {
        res.sendStatus(404);
    }
});
exports.tenthingsTelegramBotRoute.get("/queue", async (_, res) => {
    res.json(await (0, queue_1.getQueue)());
});
//# sourceMappingURL=telegram.js.map