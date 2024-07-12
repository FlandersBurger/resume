"use strict";
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
        max: 28,
        duration: 1000,
    },
});
messageQueue.on("completed", function (job) {
    //Job finished we remove it]
    job.remove();
});
class TelegramBot {
    constructor(token) {
        this.muteReasons = [
            "Bad Request: not enough rights to send text messages to the chat",
            "Bad Request: chat not found",
            "Bad Request: TOPIC_CLOSED",
            "Bad Request: CHAT_WRITE_FORBIDDEN",
            "Bad Request: group chat was upgraded to a supergroup chat",
            "Forbidden: bot is not a member of the supergroup chat",
            "Forbidden: bot was kicked from the supergroup chat",
            "Forbidden: bot was kicked from the group chat",
            "Forbidden: bot was blocked by the user",
            "Forbidden: the group chat was deleted",
            "Forbidden: user is deactivated",
        ];
        this.init = async () => {
            const { data } = await axios_1.default.get(`${this.baseUrl}/getMe`);
            this.telegramBotUser = data.result;
            this.introduceYourself();
        };
        this.setWebhook = async (api) => {
            //var url = 'https://api.telegram.org/beta/bot' + bot.token + '/setWebhook?url=https://belgocanadian.com/bots/' + api;
            const allowed_updates = JSON.stringify(["message", "callback_query"]);
            const url = `${this.baseUrl}/setWebhook?url=https://belgocanadian.com/bots/${api}&allowed_updates=${allowed_updates}`;
            try {
                return await axios_1.default.get(url);
            }
            catch (error) {
                this.notifyAdmin("Set Webhook Fail");
                console.error(error.response.data);
            }
        };
        this.getWebhook = async () => {
            const url = `${this.baseUrl}/getWebhookInfo`;
            try {
                const { data } = await axios_1.default.get(url);
                return data.result;
            }
            catch (error) {
                this.notifyAdmin("Get Webhook Fail");
                console.error(error.response.data);
            }
        };
        this.deleteWebhook = async () => {
            const url = `${this.baseUrl}/deleteWebhook`;
            try {
                return await axios_1.default.get(url);
            }
            catch (error) {
                this.notifyAdmin("Delete Webhook Fail");
                console.error(error.response.data);
            }
        };
        this.sendMessage = (channel, message, topic, retry = false) => {
            message = encodeURIComponent(message);
            let url = `${this.baseUrl}/sendMessage?chat_id=${channel}&disable_notification=true&parse_mode=html&text=${message}`;
            if (topic)
                url += `&message_thread_id=${topic}`;
            axios_1.default.get(url).catch((error) => {
                if (error.response) {
                    if (this.muteReasons.includes(error.response.data.description)) {
                        return (0, errors_1.botMuted)(channel, error.response.data.description);
                    }
                    if (error.response.data.description.includes("too long")) {
                        this.notifyAdmin(`Too long: ${message.substring(0, 500)}...`);
                        setTimeout(() => this.sendMessage(channel, message.substring(0, 4000), topic, true), 200);
                        return;
                    }
                    if (error.response.data.description.includes("can't parse")) {
                        return this.notifyAdmin(`Send Message to ${channel} parse Fail: ${message}`);
                    }
                    if (channel !== parseInt(process.env.MASTER_CHAT || "")) {
                        this.notifyAdmin(`Send Message to ${channel} Fail: ${error.response.data.description}`);
                    }
                }
                else {
                    if (error.code === "ETIMEDOUT") {
                        if (!retry) {
                            setTimeout(() => this.sendMessage(channel, message, topic, true), 200);
                            return;
                        }
                        console.error(error.errors);
                        if (channel !== parseInt(process.env.MASTER_CHAT || "")) {
                            return this.notifyAdmin(`Send Message to ${channel} Fail: Timeout`);
                        }
                    }
                }
                if (channel !== parseInt(process.env.MASTER_CHAT || "")) {
                    this.notifyAdmin(`Send Message to ${channel} Fail: ${error.message ?? error.code}`);
                    console.error(`${error.message} -> ${channel}: ${message}`);
                }
            });
        };
        this.deleteMessage = async (channel, message_id) => {
            const url = `${this.baseUrl}/deleteMessage?chat_id=${channel}&message_id=${message_id}`;
            try {
                await axios_1.default.get(url);
            }
            catch (error) {
                this.notifyAdmin(`Delete Message in ${channel} Fail`);
                console.error(error?.response.data);
            }
        };
        this.queueMessage = (channel, message) => {
            messageQueue.add("", { channel, message }, {});
        };
        this.getQueueCount = async () => {
            return await messageQueue.count();
        };
        this.kick = async (channel, userId, minutes) => {
            if (!minutes)
                minutes = 1;
            let date = new Date();
            const untilDate = Math.floor(date.setTime(date.getTime() + minutes * 60 * 1000) / 1000);
            const url = `${this.baseUrl}/kickChatMember?chat_id=${channel}&user_id=${userId}&until_date=${untilDate}`;
            try {
                await axios_1.default.get(url);
            }
            catch (error) {
                bot.notifyAdmin(`Kick user ${userId} Fail in ${channel}`);
                console.error(error.response.data);
            }
        };
        this.notifyCosmicForce = async (msg, keyboard) => {
            if (keyboard)
                await this.sendKeyboard(parseInt(process.env.COSMIC_FORCE_CHAT || ""), msg, keyboard, 17);
            else
                await this.sendMessage(parseInt(process.env.COSMIC_FORCE_CHAT || ""), msg, 17);
        };
        this.notifyAdmin = async (msg) => {
            await this.queueMessage(parseInt(process.env.MASTER_CHAT || ""), msg);
        };
        this.notify = async (msg) => {
            await this.queueMessage(parseInt(process.env.NOTICE_CHAT || ""), msg);
        };
        this.notifyAdmins = async (msg, keyboard) => {
            if (keyboard)
                await this.sendKeyboard(parseInt(process.env.ADMIN_CHAT || ""), msg, keyboard);
            else
                await this.queueMessage(parseInt(process.env.ADMIN_CHAT || ""), msg);
        };
        this.broadcast = async (channels, message) => {
            await this.notifyAdmin(`Starting broadcast to ${channels.length} chats`);
            channels.forEach((channel, index) => {
                setTimeout(() => {
                    this.queueMessage(channel, message);
                    if (index === channels.length - 1) {
                        this.notifyAdmin("Broadcast finished");
                    }
                }, index * 100);
            });
        };
        this.exportChatInviteLink = async (channel) => {
            const url = `${this.baseUrl}/exportChatInviteLink?chat_id=${channel}`;
            try {
                const { data } = await axios_1.default.get(encodeURI(url));
                return data.result;
            }
            catch (error) {
                this.notifyAdmin(`Get Invite Link to ${channel} Fail`);
                console.error(error.response.data);
            }
        };
        this.getChat = async (channel) => {
            const url = `${bot.baseUrl}/getChat?chat_id=${channel}`;
            try {
                const { data } = await axios_1.default.get(encodeURI(url));
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
                if (error.response.data.error_code === 400) {
                    (0, errors_1.chatNotFound)(channel);
                }
                else {
                    this.notifyAdmin(`Get Chat ${channel} Fail`);
                    console.error(error.response.data);
                }
                return `Chat not found: ${channel} - ${error.response.data.error_code}`;
            }
            return "";
        };
        this.getChatMember = async (channel, userId) => {
            const url = `${this.baseUrl}/getChatMember?chat_id=${channel}&user_id=${userId}`;
            try {
                const response = await axios_1.default.get(url);
                return (response &&
                    response.data &&
                    response.data.result &&
                    !["restricted", "left", "kicked"].includes(response.data.result.status));
            }
            catch (error) {
                this.notifyAdmin(`Get Chat Member ${userId} of ${channel} Fail`);
                console.error(error.response.data);
            }
        };
        this.checkAdmin = async (channel, userId) => {
            if (userId === parseInt(process.env.MASTER_CHAT || ""))
                return true;
            if (channel > 0)
                return true;
            const url = `${this.baseUrl}/getChatMember?chat_id=${channel}&user_id=${userId}`;
            try {
                const response = await axios_1.default.get(url);
                return (response &&
                    response.data &&
                    response.data.result &&
                    ["creator", "administrator"].includes(response.data.result.status));
            }
            catch (error) {
                if (error.response.data.description !== "Bad Request: user not found") {
                    this.notifyAdmin(`Check Admin in ${channel} Fail`);
                    console.error(error.response.data);
                }
            }
        };
        this.sendKeyboard = async (channel, message, keyboard, topic) => {
            let url = `${this.baseUrl}/sendMessage?chat_id=${channel}&disable_notification=true&parse_mode=html`;
            url += `&text=${message.replace("&", "and")}`;
            url += `&reply_markup=${JSON.stringify(keyboard)}`;
            if (topic)
                url += `&message_thread_id=${topic}`;
            try {
                await axios_1.default.get(encodeURI(url));
            }
            catch (error) {
                if (error.response) {
                    if (this.muteReasons.includes(error.response.data.description)) {
                        return (0, errors_1.botMuted)(channel);
                    }
                    if (error.response.data.description ===
                        "Bad Request: message is not modified: specified new message content and reply markup are exactly the same as a specified new message content and reply markup are exactly the same as a current content and reply markup of the message") {
                        return;
                    }
                }
                this.notifyAdmin(`Send Keyboard to ${channel} Fail`);
                console.error(error.response.data);
            }
        };
        this.sendPhoto = async (channel, photo) => {
            const url = `${this.baseUrl}/sendPhoto?chat_id=${channel}&photo=${photo}`;
            try {
                await axios_1.default.get(encodeURI(url));
            }
            catch (error) {
                console.error(error.response.data);
            }
        };
        this.sendAnimation = async (channel, animation) => {
            const url = `${this.baseUrl}/sendAnimation?chat_id=${channel}&animation=${animation}`;
            try {
                await axios_1.default.get(encodeURI(url));
            }
            catch (error) {
                console.error(error.response.data);
            }
        };
        this.editKeyboard = async (channel, message_id, keyboard) => {
            let url = `${this.baseUrl}/editMessageReplyMarkup?chat_id=${channel}&message_id=${message_id}`;
            if (keyboard)
                url += `&reply_markup=${JSON.stringify(keyboard)}`;
            try {
                await axios_1.default.get(encodeURI(url));
            }
            catch (error) {
                if (error.response.data.description !==
                    "Bad Request: message is not modified: specified new message content and reply markup are exactly the same as a current content and reply markup are exactly the same as a current content and reply markup of the message") {
                    // TODO: Check this out
                    console.error(`Edit Keyboard in ${channel} Fail`);
                }
                console.error(error.response.data);
            }
        };
        this.answerCallback = async (callback_query_id, text) => {
            const url = `${this.baseUrl}/answerCallbackQuery?callback_query_id=${callback_query_id}&text=${text}`;
            try {
                await axios_1.default.get(encodeURI(url));
            }
            catch (error) {
                if (error.response.data.description !==
                    "Bad Request: query is too old and response timeout expired or query ID is invalid") {
                    this.notifyAdmin(`Answer Callback of ${callback_query_id} Fail`);
                }
                console.error(error.response.data);
            }
        };
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
        this.reset = async () => {
            await axios_1.default.get(`${this.baseUrl}/setWebhook?url=`);
            await axios_1.default.get(`${this.baseUrl}/getUpdates?offset=-5`);
            await this.init();
        };
        this.setCommands = async (channel, language) => {
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
                await axios_1.default.get(encodeURI(url));
            }
            catch (error) {
                this.notifyAdmin("Set Commands Fail");
                console.error(error.response.data);
            }
        };
        this.toDomainUser = (from) => ({
            ...from,
            name: (0, string_helpers_1.maskUrls)(from.username ? `@${from.username}` : `${from.first_name} ${from.last_name ? from.last_name : ""}`),
        });
        this.toDomainMessage = async (body) => {
            if (body.object === "page") {
                return { messageType: main_1.MessageType.Ignore };
            }
            if (body.message || body.callback_query) {
                const from = this.toDomainUser(body.message ? body.message.from : body.callback_query.from);
                if (from.id != parseInt(process.env.MASTER_CHAT || "") && (await queue_1.default.get("pause")) === "true")
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
                                from: { ...from, id: body.message.left_chat_participant.id },
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
                    else if (command.includes("@") && command.substring(command.indexOf("@") + 1) === "TenThings_Bot") {
                        command = command.substring(0, command.indexOf("@"));
                    }
                    command = command.toLowerCase();
                    command = command.startsWith("/") ? command : undefined;
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
        };
        this.baseUrl = `https://api.telegram.org/bot${token}`;
        this.init();
    }
}
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);
messageQueue.process(({ data }) => bot.sendMessage(data.channel, data.message));
exports.default = bot;
//# sourceMappingURL=telegram.js.map