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
const axios_1 = __importDefault(require("axios"));
const bull_1 = __importDefault(require("bull"));
const i18n_1 = __importDefault(require("../i18n"));
const queue_1 = __importDefault(require("../queue"));
const errors_1 = require("../controllers/bots/tenthings/errors");
const spam_1 = require("../controllers/bots/tenthings/spam");
const main_1 = require("../controllers/bots/tenthings/main");
const string_helpers_1 = require("../utils/string-helpers");
const BANNED_TELEGRAM_USERS = [1726294650];
const messageQueue = new bull_1.default("sendMessage", {
    redis: {
        port: parseInt(process.env.REDIS_PORT || "6379"),
        host: "localhost",
        password: process.env.REDIS_PASSWORD,
    },
    limiter: {
        max: 30,
        duration: 1000,
    },
});
messageQueue.on("completed", function (job) {
    //Job finished we remove it]
    job.remove();
});
class TelegramBot {
    constructor(token) {
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            const { data } = yield axios_1.default.get(`${this.baseUrl}/getMe`);
            this.telegramBotUser = data.result;
            this.introduceYourself();
        });
        this.setWebhook = (api) => __awaiter(this, void 0, void 0, function* () {
            //var url = 'https://api.telegram.org/beta/bot' + bot.token + '/setWebhook?url=https://belgocanadian.com/bots/' + api;
            const allowed_updates = JSON.stringify(["message", "callback_query"]);
            const url = `${this.baseUrl}/setWebhook?url=https://belgocanadian.com/bots/${api}&allowed_updates=${allowed_updates}`;
            try {
                return yield axios_1.default.get(url);
            }
            catch (error) {
                this.notifyAdmin("Set Webhook Fail");
                console.error(error);
            }
        });
        this.getWebhook = () => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/getWebhookInfo`;
            try {
                const { data } = yield axios_1.default.get(url);
                return data.result;
            }
            catch (error) {
                this.notifyAdmin("Get Webhook Fail");
                console.error(error);
            }
        });
        this.deleteWebhook = () => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/deleteWebhook`;
            try {
                return yield axios_1.default.get(url);
            }
            catch (error) {
                this.notifyAdmin("Delete Webhook Fail");
                console.error(error);
            }
        });
        this.sendMessage = (channel, message, topic) => {
            message = encodeURIComponent(message);
            let url = `${this.baseUrl}/sendMessage?chat_id=${channel}&disable_notification=true&parse_mode=html&text=${message}`;
            if (topic)
                url += `&message_thread_id=${topic}`;
            axios_1.default.get(url).catch((error) => {
                if (error.response.data.description === "Bad Request: not enough rights to send text messages to the chat") {
                    (0, errors_1.botMuted)(channel);
                }
                else {
                    this.exportChatInviteLink(channel)
                        .then((url) => {
                        this.notifyAdmin(`Failed to send '${message}' to channel: ${channel} -> chat: ${url}`);
                    })
                        .catch(() => {
                        this.notifyAdmin(`Failed to send '${message}' to channel: ${channel}`);
                    });
                    console.error(error.response.data);
                }
            });
        };
        this.deleteMessage = (channel, message_id) => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/deleteMessage?chat_id=${channel}&message_id=${message_id}`;
            try {
                yield axios_1.default.get(url);
            }
            catch (error) {
                this.notifyAdmin(`Delete Message in ${channel} Fail`);
                console.error(error);
            }
        });
        this.queueMessage = (channel, message) => {
            messageQueue.add("", { channel, message }, {});
        };
        this.getQueueCount = () => __awaiter(this, void 0, void 0, function* () {
            return yield messageQueue.count();
        });
        this.kick = (channel, userId, minutes) => __awaiter(this, void 0, void 0, function* () {
            if (!minutes)
                minutes = 1;
            let date = new Date();
            const untilDate = Math.floor(date.setTime(date.getTime() + minutes * 60 * 1000) / 1000);
            const url = `${this.baseUrl}/kickChatMember?chat_id=${channel}&user_id=${userId}&until_date=${untilDate}`;
            try {
                yield axios_1.default.get(url);
            }
            catch (error) {
                bot.notifyAdmin(`Kick user ${userId} Fail in ${channel}`);
                console.error(error);
            }
        });
        this.notifyCosmicForce = (msg, keyboard) => __awaiter(this, void 0, void 0, function* () {
            if (keyboard)
                yield this.sendKeyboard(parseInt(process.env.COSMIC_FORCE_CHAT || ""), msg, keyboard, 17);
            else
                yield this.sendMessage(parseInt(process.env.COSMIC_FORCE_CHAT || ""), msg, 17);
        });
        this.notifyAdmin = (msg) => __awaiter(this, void 0, void 0, function* () {
            yield this.queueMessage(parseInt(process.env.MASTER_CHAT || ""), msg);
        });
        this.notify = (msg) => __awaiter(this, void 0, void 0, function* () {
            yield this.queueMessage(parseInt(process.env.NOTICE_CHAT || ""), msg);
        });
        this.notifyAdmins = (msg, keyboard) => __awaiter(this, void 0, void 0, function* () {
            if (keyboard)
                yield this.sendKeyboard(parseInt(process.env.ADMIN_CHAT || ""), msg, keyboard);
            else
                yield this.queueMessage(parseInt(process.env.ADMIN_CHAT || ""), msg);
        });
        this.broadcast = (channels, message) => __awaiter(this, void 0, void 0, function* () {
            yield this.notifyAdmin(`Starting broadcast to ${channels.length} chats`);
            channels.forEach((channel, index) => {
                setTimeout(() => {
                    this.queueMessage(channel, message);
                    if (index === channels.length - 1) {
                        this.notifyAdmin("Broadcast finished");
                    }
                }, index * 50);
            });
        });
        this.exportChatInviteLink = (channel) => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/exportChatInviteLink?chat_id=${channel}`;
            try {
                const { data } = yield axios_1.default.get(encodeURI(url));
                return data.result;
            }
            catch (error) {
                this.notifyAdmin(`Get Invite Link to ${channel} Fail`);
                console.error(error);
            }
        });
        this.getChat = (channel) => __awaiter(this, void 0, void 0, function* () {
            const url = `${bot.baseUrl}/getChat?chat_id=${channel}`;
            try {
                const { data } = yield axios_1.default.get(encodeURI(url));
                if (data.result.invite_link)
                    return `Group Chat: ${data.result.invite_link}`;
                else if (data.result.title)
                    return `Group Chat: ${data.result.title}`;
                else if (data.result.username)
                    return `Private Chat: @${data.result.username}`;
                else if (data.result.first_name)
                    return `Private Chat: ${data.result.first_name}`;
                else if (data.result.type === "private")
                    return `Private Chat`;
            }
            catch (error) {
                this.notifyAdmin(`Get Chat ${channel} Fail`);
                if (error.response.data.error_code === 400) {
                    (0, errors_1.chatNotFound)(channel);
                }
                else {
                    console.error(error);
                }
                return `Chat not found: ${channel} - ${error.response.data.error_code}`;
            }
            return "";
        });
        this.getChatMember = (channel, userId) => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/getChatMember?chat_id=${channel}&user_id=${userId}`;
            try {
                const response = yield axios_1.default.get(url);
                return (response &&
                    response.data &&
                    response.data.result &&
                    !["restricted", "left", "kicked"].includes(response.data.result.status));
            }
            catch (error) {
                this.notifyAdmin(`Get Chat Member ${userId} of ${channel} Fail`);
                console.error(error);
            }
        });
        this.checkAdmin = (channel, userId) => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/getChatMember?chat_id=${channel}&user_id=${userId}`;
            try {
                const response = yield axios_1.default.get(url);
                return (response &&
                    response.data &&
                    response.data.result &&
                    ["creator", "administrator"].includes(response.data.result.status));
            }
            catch (error) {
                this.notifyAdmin(`Check Admin in ${channel} Fail`);
                console.error(error);
            }
        });
        this.sendKeyboard = (channel, message, keyboard, topic) => __awaiter(this, void 0, void 0, function* () {
            let url = `${this.baseUrl}/sendMessage?chat_id=${channel}&disable_notification=true&parse_mode=html`;
            url += `&text=${message}`;
            url += `&reply_markup=${JSON.stringify(keyboard)}`;
            if (topic)
                url += `&message_thread_id=${topic}`;
            try {
                yield axios_1.default.get(encodeURI(url));
            }
            catch (error) {
                this.notifyAdmin(`Send Keyboard to ${channel} Fail`);
                console.error(error);
            }
        });
        this.sendPhoto = (channel, photo) => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/sendPhoto?chat_id=${channel}&photo=${photo}`;
            try {
                yield axios_1.default.get(encodeURI(url));
            }
            catch (error) {
                this.notifyAdmin(`Send Photo to ${channel} Fail`);
                console.error(error);
            }
        });
        this.sendAnimation = (channel, animation) => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/sendAnimation?chat_id=${channel}&animation=${animation}`;
            try {
                yield axios_1.default.get(encodeURI(url));
            }
            catch (error) {
                this.notifyAdmin(`Send Animation to ${channel} Fail`);
                console.error(error);
            }
        });
        this.editKeyboard = (channel, message_id, keyboard) => __awaiter(this, void 0, void 0, function* () {
            let url = `${this.baseUrl}/editMessageReplyMarkup?chat_id=${channel}&message_id=${message_id}`;
            if (keyboard)
                url += `&reply_markup=${JSON.stringify(keyboard)}`;
            try {
                yield axios_1.default.get(encodeURI(url));
            }
            catch (error) {
                this.notifyAdmin(`Edit Keyboard in ${channel} Fail`);
                console.error(error);
            }
        });
        this.answerCallback = (callback_query_id, text) => __awaiter(this, void 0, void 0, function* () {
            const url = `${this.baseUrl}/answerCallbackQuery?callback_query_id=${callback_query_id}&text=${text}`;
            try {
                yield axios_1.default.get(encodeURI(url));
            }
            catch (error) {
                this.notifyAdmin(`Answer Callback of ${callback_query_id} Fail`);
                console.error(error);
            }
        });
        this.getName = () => {
            if (this.telegramBotUser) {
                if (this.telegramBotUser.last_name) {
                    return `${this.telegramBotUser.first_name} ${this.telegramBotUser.last_name}`;
                }
                else {
                    return this.telegramBotUser.first_name;
                }
            }
            return "No Name";
        };
        this.introduceYourself = () => {
            console.log(`Hello, my name is ${this.getName()}. You can talk to me through my username: @${this.telegramBotUser.username}`);
        };
        this.reset = () => __awaiter(this, void 0, void 0, function* () {
            yield axios_1.default.get(`${this.baseUrl}/setWebhook?url=`);
            yield axios_1.default.get(`${this.baseUrl}/getUpdates?offset=-5`);
            yield this.init();
        });
        this.setCommands = (channel, language) => __awaiter(this, void 0, void 0, function* () {
            const commands = [
                "list",
                "hint",
                "minigame",
                "tinygame",
                "minihint",
                "tinyhint",
                "skip",
                "miniskip",
                "tinyskip",
                "commands",
                "me",
                "stats",
            ].map((command) => ({
                command: command,
                description: (0, i18n_1.default)(language, `commands.${command}.description`),
            }));
            const scope = {
                type: "chat",
                chat_id: channel,
            };
            const url = `${this.baseUrl}/setMyCommands?commands=${JSON.stringify(commands)}&scope=${JSON.stringify(scope)}`;
            try {
                yield axios_1.default.get(encodeURI(url));
            }
            catch (error) {
                this.notifyAdmin("Set Commands Fail");
                console.error(error);
            }
        });
        this.toDomainUser = (from) => (Object.assign(Object.assign({}, from), { name: (0, string_helpers_1.maskUrls)(from.username ? `@${from.username}` : `${from.first_name} ${from.last_name ? from.last_name : ""}`) }));
        this.toDomainMessage = (body) => __awaiter(this, void 0, void 0, function* () {
            if (body.object === "page") {
                return { messageType: main_1.MessageType.Ignore };
            }
            if (body.message || body.callback_query) {
                const from = this.toDomainUser(body.message ? body.message.from : body.callback_query.from);
                if (from.id != parseInt(process.env.MASTER_CHAT || "") && (yield queue_1.default.get("pause")) === "true")
                    return { messageType: main_1.MessageType.Ignore };
                if (BANNED_TELEGRAM_USERS.indexOf(from.id) >= 0) {
                    return { messageType: main_1.MessageType.Ignore };
                }
                if ((0, spam_1.checkSpam)(body)) {
                    return { messageType: main_1.MessageType.Ignore };
                }
                if (body.callback_query) {
                    const data = JSON.parse(body.callback_query.data);
                    return {
                        messageType: main_1.MessageType.Callback,
                        message: {
                            from,
                            chatId: body.callback_query.message.chat.id,
                            id: body.callback_query.message.message_id,
                            callbackQueryId: body.callback_query.id,
                            text: body.callback_query.message.text,
                            type: data.type,
                            data: data.id,
                        },
                    };
                }
                if (!body.message.text) {
                    if (body.message.group_chat_created) {
                        return {
                            messageType: main_1.MessageType.NewGame,
                            message: {
                                id: body.message.message_id,
                                from,
                                command: "/info",
                                chatId: body.message.chat.id,
                                text: "",
                            },
                        };
                    }
                    else if (body.message.left_chat_participant) {
                        return {
                            messageType: main_1.MessageType.PlayerLeft,
                            message: {
                                id: body.message.message_id,
                                from: Object.assign(Object.assign({}, from), { id: body.message.left_chat_participant.id }),
                                chatId: body.message.chat.id,
                                text: "",
                            },
                        };
                    }
                }
                else {
                    let command = body.message.text.substring(0, !body.message.text.includes(" ") ? body.message.text.length : body.message.text.indexOf(" "));
                    if (command.includes("@") && command.substring(command.indexOf("@") + 1) !== "TenThings_Bot") {
                        return { messageType: main_1.MessageType.Ignore };
                    }
                    command = command.substring(0, command.indexOf("@"));
                    command = command.toLowerCase();
                    return {
                        messageType: main_1.MessageType.Message,
                        message: {
                            id: body.message.message_id,
                            from,
                            command,
                            chatId: body.message.chat.id,
                            text: body.message.text,
                        },
                    };
                }
            }
            return { messageType: main_1.MessageType.Ignore };
        });
        this.baseUrl = `https://api.telegram.org/bot${token}`;
        this.init();
    }
}
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);
messageQueue.process(({ data }) => bot.sendMessage(data.channel, data.message));
exports.default = bot;
//# sourceMappingURL=telegram.js.map