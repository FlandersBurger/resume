"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenthingsTelegramBotRoute = exports.MessageType = void 0;
const express_1 = require("express");
const moment_1 = __importDefault(require("moment"));
const queue_1 = require("../../bots/tenthings/providers/telegram/queue");
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
exports.tenthingsTelegramBotRoute.post("/", async (_, res) => {
    return res.sendStatus(200);
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