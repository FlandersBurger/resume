"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bull_1 = __importDefault(require("bull"));
const i18n_1 = __importDefault(require("../i18n"));
const queue_1 = __importDefault(require("../queue"));
const http_client_1 = __importDefault(require("../http-client"));
const errors_1 = require("../controllers/bots/tenthings/errors");
const spam_1 = require("../controllers/bots/tenthings/spam");
const main_1 = require("../controllers/bots/tenthings/main");
const string_helpers_1 = require("../utils/string-helpers");
const moment_1 = __importDefault(require("moment"));
const commands_1 = require("../controllers/bots/tenthings/commands");
const players_1 = require("../controllers/bots/tenthings/players");
const BANNED_TELEGRAM_USERS = [1726294650, 6758829541];
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
    job.remove();
});
class TelegramBot {
    constructor(token) {
        this.muteReasons = [
            "Bad Request: not enough rights to send text messages to the chat",
            "Bad Request: chat not found",
            "Bad Request: TOPIC_CLOSED",
            "Bad Request: CHAT_WRITE_FORBIDDEN",
            "Bad Request: CHAT_SEND_PLAIN_FORBIDDEN",
            "Forbidden: bot is not a member of the supergroup chat",
            "Forbidden: bot was kicked from the supergroup chat",
            "Forbidden: bot was kicked from the group chat",
            "Forbidden: bot was blocked by the user",
            "Forbidden: the group chat was deleted",
            "Forbidden: user is deactivated",
        ];
        this.ignoreReasons = [
            "Bad Request: group chat was upgraded to a supergroup chat",
            "Bad Request: not enough rights to send animations to the chat",
            "Bad Request: message to delete not found",
            "Bad Request: message to edit not found",
            "Bad Request: query is too old and response timeout expired or query ID is invalid",
            "Bad Request: message is not modified: specified new message content and reply markup are exactly the same as a specified new message content and reply markup are exactly the same as a current content and reply markup of the message",
            "Bad Request: message is not modified: specified new message content and reply markup are exactly the same as a current content and reply markup of the message",
        ];
        this.paused = false;
        this.init = async () => {
            const { data } = await (0, http_client_1.default)().get(`${this.baseUrl}/getMe`);
            this.telegramBotUser = data.result;
            this.introduceYourself();
            this.resumeQueue();
        };
        this.errorHandler = (channel, source, error, message) => {
            const reason = error?.response?.data?.description;
            if (reason) {
                if (this.muteReasons.includes(reason)) {
                    (0, errors_1.botMuted)(channel.chat);
                }
                else if (reason.includes("too long")) {
                    if (message) {
                        this.notifyAdmin(`Too long: ${message.substring(0, 500)}...`);
                    }
                }
                else if (reason.includes("Bad Request: message thread not found")) {
                    (0, errors_1.noTopic)(channel.chat);
                }
                else if (reason.includes("can't parse")) {
                    this.notifyAdmin(`Send Message to ${channel.chat} parse Fail: ${message}`);
                }
                else if (error.response.data.description.startsWith("Too Many Requests: retry after ")) {
                    if (!this.paused) {
                        this.paused = true;
                        const timeout = parseInt(error.response.data.description.match(/retry after (\d+)/)[1]);
                        this.timeoutUntil = (0, moment_1.default)().add(timeout, "seconds");
                        messageQueue.pause();
                        if (timeout > 100)
                            this.notifyAdmin(`Pausing queue for ${timeout} seconds due to too many requests`);
                        setTimeout(this.resumeQueue, timeout * 1000);
                    }
                    if (message)
                        this.queueMessage(channel, message);
                }
                else if (error.response?.data?.description ===
                    `Bad Request: invalid file HTTP URL specified: Wrong port number specified in the URL`) {
                    this.notifyAdmin(`Invalid URL for ${source} in ${channel.chat}: ${message}`);
                }
                else if (!this.ignoreReasons.includes(reason)) {
                    bot.notifyAdmin(`Error from "${source}" in channel ${channel.chat}:\n${(0, string_helpers_1.parseSymbols)(reason)}`);
                }
            }
            else {
                bot.notifyAdmin(`Unknown error from "${source}" in channel ${channel.chat}\nCode:${(0, string_helpers_1.parseSymbols)(error.code)}\nMessage:${(0, string_helpers_1.parseSymbols)(error.message)}`);
                console.error(`${source} error`, error);
            }
        };
        this.setWebhook = async (api) => {
            const allowed_updates = JSON.stringify(["message", "callback_query", "chat_member"]);
            const url = `${this.baseUrl}/setWebhook?url=https://belgocanadian.com/bots/${api}&allowed_updates=${allowed_updates}`;
            try {
                return await (0, http_client_1.default)().get(url);
            }
            catch (error) {
                this.notifyAdmin("Set Webhook Fail");
                console.error(error.response.data);
            }
        };
        this.getWebhook = async () => {
            const url = `${this.baseUrl}/getWebhookInfo`;
            try {
                const { data } = await (0, http_client_1.default)().get(url);
                return data.result;
            }
            catch (error) {
                this.notifyAdmin("Get Webhook Fail");
                console.error(error.response.data);
            }
            return;
        };
        this.deleteWebhook = async () => {
            const url = `${this.baseUrl}/deleteWebhook`;
            try {
                await (0, http_client_1.default)().get(url);
            }
            catch (error) {
                this.notifyAdmin("Delete Webhook Fail");
                console.error(error.response.data);
            }
        };
        this.sendMessage = async (channel, message, options = {}, retries = 0) => {
            const { replyMessageId, replyMarkup } = options;
            let url = `${this.baseUrl}/sendMessage?chat_id=${channel.chat}&disable_notification=true&parse_mode=html&text=${encodeURIComponent(message)}`;
            if (channel.topic)
                url += `&message_thread_id=${channel.topic}`;
            if (replyMessageId) {
                url += `&reply_markup=${JSON.stringify({ force_reply: true, selective: true })}`;
                url += `&reply_parameters=${JSON.stringify({ message_id: replyMessageId, allow_sending_without_reply: true })}`;
            }
            if (replyMarkup)
                url += `&reply_markup=${JSON.stringify(replyMarkup)}`;
            (0, http_client_1.default)()
                .get(url)
                .catch((error) => {
                if (error.response) {
                    if (error.response.data.description === "Bad Gateway") {
                        if (retries < 3) {
                            setTimeout(() => this.sendMessage(channel, message, options, retries++), retries * 500);
                        }
                        else {
                            this.errorHandler(channel, "Send message (failed 3 times)", error, message);
                        }
                    }
                    else
                        this.errorHandler(channel, "Send message", error, message);
                }
                else {
                    if (channel.chat !== parseInt(process.env.MASTER_CHAT || "")) {
                        this.errorHandler(channel, "Send message", error);
                    }
                }
            });
        };
        this.deleteMessage = async (channel, message_id) => {
            const url = `${this.baseUrl}/deleteMessage?chat_id=${channel.chat}&message_id=${message_id}`;
            try {
                await (0, http_client_1.default)().get(url);
            }
            catch (error) {
                this.errorHandler(channel, "Delete message", error);
            }
        };
        this.queueMessage = async (channel, message) => {
            messageQueue.add("", { channel, message, action: "sendMessage" }, {});
            if (this.timeoutUntil && (0, moment_1.default)().isAfter(this.timeoutUntil)) {
                this.resumeQueue();
            }
        };
        this.resumeQueue = async () => {
            if (await messageQueue.isPaused()) {
                messageQueue.resume();
                this.paused = false;
                this.timeoutUntil = undefined;
            }
        };
        this.getQueueCount = async () => {
            return await messageQueue.count();
        };
        this.kick = async (channel, userId, minutes) => {
            if (!minutes)
                minutes = 1;
            let date = new Date();
            const untilDate = Math.floor(date.setTime(date.getTime() + minutes * 60 * 1000) / 1000);
            const url = `${this.baseUrl}/kickChatMember?chat_id=${channel.chat}&user_id=${userId}&until_date=${untilDate}`;
            try {
                await (0, http_client_1.default)().get(url);
            }
            catch (error) {
                this.errorHandler(channel, "Kick user", error);
            }
        };
        this.notifyCosmicForce = async (msg, keyboard) => {
            if (keyboard)
                await this.sendMessage({ chat: parseInt(process.env.COSMIC_FORCE_CHAT || ""), topic: 17 }, msg, {
                    replyMarkup: keyboard,
                });
            else
                await this.sendMessage({ chat: parseInt(process.env.COSMIC_FORCE_CHAT || ""), topic: 17 }, msg);
        };
        this.notifyAdmin = async (msg) => {
            await this.queueMessage({ chat: parseInt(process.env.MASTER_CHAT || "") }, msg);
        };
        this.notify = async (msg) => {
            await this.queueMessage({ chat: parseInt(process.env.NOTICE_CHAT || "") }, msg);
        };
        this.notifyAdmins = async (msg, keyboard) => {
            if (process.env.NODE_ENV === "production") {
                if (keyboard)
                    await this.sendKeyboard({ chat: parseInt(process.env.ADMIN_CHAT || "") }, msg, keyboard);
                else
                    await this.queueMessage({ chat: parseInt(process.env.ADMIN_CHAT || "") }, msg);
            }
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
            const url = `${this.baseUrl}/exportChatInviteLink?chat_id=${channel.chat}`;
            try {
                const { data } = await (0, http_client_1.default)().get(encodeURI(url));
                return data.result;
            }
            catch (error) {
                this.errorHandler(channel, "Export chat invite link", error);
            }
        };
        this.getChat = async (channel) => {
            const url = `${bot.baseUrl}/getChat?chat_id=${channel.chat}`;
            try {
                const { data } = await (0, http_client_1.default)().get(encodeURI(url));
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
                    (0, errors_1.chatNotFound)(channel.chat);
                }
                else {
                    this.errorHandler(channel, "Get chat", error);
                }
                return `Chat not found: ${channel} - ${error.response.data.error_code}`;
            }
            return "";
        };
        this.getChatMember = async (channel, userId) => {
            const url = `${this.baseUrl}/getChatMember?chat_id=${channel.chat}&user_id=${userId}`;
            try {
                const response = await (0, http_client_1.default)().get(url);
                return (response &&
                    response.data &&
                    response.data.result &&
                    !["restricted", "left", "kicked"].includes(response.data.result.status));
            }
            catch (error) {
                this.errorHandler(channel, "Get chat member", error);
            }
        };
        this.checkAdmin = async (game, user) => {
            if (user.id === parseInt(process.env.MASTER_CHAT || ""))
                return true;
            if (game.telegramChannel.chat > 0)
                return true;
            const player = await (0, players_1.getPlayer)(game, user);
            if (player && player.admin !== undefined)
                return player.admin;
            const url = `${this.baseUrl}/getChatMember?chat_id=${game.telegramChannel.chat}&user_id=${user.id}`;
            try {
                const response = await (0, http_client_1.default)().get(url);
                const admin = response &&
                    response.data &&
                    response.data.result &&
                    ["creator", "administrator"].includes(response.data.result.status);
                if (player) {
                    player.admin = admin;
                    await player.save();
                }
                return admin;
            }
            catch (error) {
                if (error.response.data.description === "Bad Request: CHAT_ADMIN_REQUIRED") {
                    return true;
                }
                this.errorHandler(game.telegramChannel, "Check admin", error);
            }
        };
        this.sendKeyboard = async (channel, message, keyboard) => {
            this.sendMessage(channel, message.replace("&", "and"), { replyMarkup: keyboard });
        };
        this.sendPhoto = async (channel, photo) => {
            let url = `${this.baseUrl}/sendPhoto?chat_id=${channel.chat}&photo=${photo}`;
            if (channel.topic)
                url += `&message_thread_id=${channel.topic}`;
            try {
                await (0, http_client_1.default)().get(encodeURI(url));
            }
            catch (error) {
                this.errorHandler(channel, "Send photo", error, photo);
            }
        };
        this.sendAnimation = async (channel, animation) => {
            let url = `${this.baseUrl}/sendAnimation?chat_id=${channel.chat}&animation=${animation}`;
            if (channel.topic)
                url += `&message_thread_id=${channel.topic}`;
            try {
                await (0, http_client_1.default)().get(encodeURI(url));
            }
            catch (error) {
                this.errorHandler(channel, "Send animation", error, animation);
            }
        };
        this.editKeyboard = async (channel, message_id, keyboard) => {
            let url = `${this.baseUrl}/editMessageReplyMarkup?chat_id=${channel.chat}&message_id=${message_id}`;
            if (keyboard)
                url += `&reply_markup=${JSON.stringify(keyboard)}`;
            try {
                await (0, http_client_1.default)().get(encodeURI(url));
            }
            catch (error) {
                this.errorHandler(channel, "Edit keyboard", error);
            }
        };
        this.queueEditKeyboard = (channel, message_id, keyboard) => {
            messageQueue.add("", { channel, message_id, action: "editKeyboard", keyboard }, {});
        };
        this.answerCallback = async (callback_query_id, text) => {
            const url = `${this.baseUrl}/answerCallbackQuery?callback_query_id=${callback_query_id}&text=${text}`;
            try {
                await (0, http_client_1.default)().get(encodeURI(url));
            }
            catch (error) {
                this.errorHandler({ chat: 0 }, "Answer callback", error);
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
            await (0, http_client_1.default)().get(`${this.baseUrl}/setWebhook?url=`);
            await (0, http_client_1.default)().get(`${this.baseUrl}/getUpdates?offset=-5`);
            await this.init();
        };
        this.setCommands = async (channel, language) => {
            console.log("Setting commands to", language);
            const commands = [
                commands_1.Command.List,
                commands_1.Command.Hint,
                commands_1.Command.Minigame,
                commands_1.Command.Tinygame,
                commands_1.Command.Minihint,
                commands_1.Command.Tinyhint,
                commands_1.Command.Skip,
                commands_1.Command.Miniskip,
                commands_1.Command.Tinyskip,
                commands_1.Command.Commands,
                commands_1.Command.Me,
                commands_1.Command.Stats,
            ].map((command) => ({
                command: (0, i18n_1.default)(language, `commands.${command}.name`),
                description: (0, i18n_1.default)(language, `commands.${command}.description`),
            }));
            const scope = {
                type: "chat",
                chat_id: channel.chat,
            };
            const url = `${this.baseUrl}/setMyCommands?commands=${JSON.stringify(commands)}&scope=${JSON.stringify(scope)}`;
            try {
                await (0, http_client_1.default)().get(encodeURI(url));
            }
            catch (error) {
                this.errorHandler(channel, "Set commands", error);
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
                if (from.id !== parseInt(process.env.MASTER_CHAT || "") && (await queue_1.default.get("pause")) === "true")
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
                                command: commands_1.Command.Commands,
                                chatId: body.message.chat.id,
                                topicId: body.message.message_thread_id,
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
                    let text;
                    if (command.includes("@") && command.substring(command.indexOf("@") + 1) !== "TenThings_Bot") {
                        return { messageType: main_1.MessageType.Ignore };
                    }
                    else if (command.includes("@") && command.substring(command.indexOf("@") + 1) === "TenThings_Bot") {
                        command = command.substring(0, command.indexOf("@"));
                    }
                    command = command.toLowerCase();
                    command = command.startsWith("/") ? command.replace("/", "") : undefined;
                    if (command) {
                        text = body.message.text.substring(command.length + 2, body.message.text.length);
                        if (parseInt(process.env.MASTER_CHAT ?? "") === body.message.from.id)
                            console.log(command, text);
                        if (text === "TenThings_Bot")
                            text = "";
                    }
                    else {
                        text = body.message.text;
                    }
                    return {
                        messageType: main_1.MessageType.Message,
                        message: {
                            id: body.message.message_id,
                            from,
                            command,
                            chatId: body.message.chat.id,
                            topicId: body.message.message_thread_id,
                            text,
                        },
                    };
                }
            }
            else if (body.chat_member) {
                if (body.chat_member.chat.id === parseInt(process.env.GROUP_CHAT || "")) {
                    if (body.chat_member.new_chat_member.user.first_name !== body.chat_member.old_chat_member.user.first_name) {
                        this.sendMessage(body.chat_member, `${body.chat_member.old_chat_member.user.first_name} updated their name to ${body.chat_member.new_chat_member.user.first_name}`);
                        this.notifyAdmin(`Name change: ${body.chat_member.new_chat_member.user}`);
                    }
                }
            }
            return { messageType: main_1.MessageType.Ignore };
        };
        this.baseUrl = `https://api.telegram.org/bot${token}`;
        this.init();
    }
}
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN);
var Actions;
(function (Actions) {
    Actions["SendMessage"] = "sendMessage";
    Actions["EditKeyboard"] = "editKeyboard";
})(Actions || (Actions = {}));
messageQueue.process(async ({ data, }) => {
    switch (data.action) {
        case "sendMessage":
            bot.sendMessage(data.channel, data.message);
            break;
        case "editKeyboard":
            bot.editKeyboard(data.channel, data.message_id, data.keyboard);
            break;
        default:
            break;
    }
});
exports.default = bot;
//# sourceMappingURL=telegram.js.map