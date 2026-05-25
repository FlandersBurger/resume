"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscordMessageType = void 0;
const discord_js_1 = require("discord.js");
const bull_1 = __importDefault(require("bull"));
const queue_1 = __importDefault(require("../queue"));
const string_helpers_1 = require("../utils/string-helpers");
const chalk_1 = __importDefault(require("chalk"));
var DiscordMessageType;
(function (DiscordMessageType) {
    DiscordMessageType["Command"] = "command";
    DiscordMessageType["NewGame"] = "newGame";
    DiscordMessageType["Message"] = "message";
    DiscordMessageType["Ignore"] = "ignore";
})(DiscordMessageType || (exports.DiscordMessageType = DiscordMessageType = {}));
const globalQueue = new bull_1.default("discordSendMessage", {
    redis: {
        port: parseInt(process.env.REDIS_PORT || "6379"),
        host: "localhost",
        password: process.env.REDIS_PASSWORD,
    },
    limiter: {
        max: 50,
        duration: 1000,
    },
});
const chatQueue = new bull_1.default("discordQueueMessage", {
    redis: {
        port: parseInt(process.env.REDIS_PORT || "6379"),
        host: "localhost",
        password: process.env.REDIS_PASSWORD,
    },
    limiter: {
        max: 5,
        duration: 5000,
        groupKey: "discordChat",
    },
});
globalQueue.on("completed", function (job) {
    job.remove();
});
chatQueue.on("completed", function (job) {
    job.remove();
});
class DiscordBot {
    constructor(token) {
        this.messageHandler = null;
        this.onMessage = (handler) => {
            this.messageHandler = handler;
        };
        this.toDomainUser = (author) => ({
            id: author.id,
            username: (0, string_helpers_1.maskUrls)(author.username),
            displayName: (0, string_helpers_1.maskUrls)(author.displayName),
            bot: author.bot,
        });
        this.toDomainMessage = (message) => {
            const content = message.content.trim();
            if (!content)
                return null;
            let command;
            let text = content;
            if (content.startsWith("/")) {
                const parts = content.split(/\s+/);
                command = parts[0].slice(1).toLowerCase();
                text = parts.slice(1).join(" ");
            }
            return {
                id: message.id,
                from: this.toDomainUser(message.author),
                command,
                text,
                channelId: message.channelId,
            };
        };
        this.doSendMessage = async (channelId, message) => {
            try {
                const channel = await this.client.channels.fetch(channelId);
                if (channel && channel.isTextBased()) {
                    const discordMessage = this.htmlToMarkdown(message);
                    if (discordMessage.length <= 2000) {
                        await channel.send(discordMessage);
                    }
                    else {
                        const chunks = discordMessage.match(/[\s\S]{1,2000}/g) || [];
                        for (const chunk of chunks) {
                            await channel.send(chunk);
                        }
                    }
                }
            }
            catch (error) {
                console.error(`Discord send message error in ${channelId}:`, error?.message);
            }
        };
        this.htmlToMarkdown = (html) => {
            return html
                .replace(/<b>([\s\S]*?)<\/b>/g, "**$1**")
                .replace(/<i>([\s\S]*?)<\/i>/g, "*$1*")
                .replace(/<u>([\s\S]*?)<\/u>/g, "__$1__")
                .replace(/<a href="[^"]*">&#8204;<\/a>/g, "")
                .replace(/<a href="([^"]*)">([\s\S]*?)<\/a>/g, "[$2]($1)")
                .replace(/<[^>]+>/g, "");
        };
        this.sendMessage = async (channel, message) => {
            await this.doSendMessage(channel.channelId, message);
        };
        this.queueMessage = async (channel, message) => {
            chatQueue.add("", { channelId: channel.channelId, message, chat: channel.channelId }, {});
        };
        this.deleteMessage = async (channelId, messageId) => {
            try {
                const channel = await this.client.channels.fetch(channelId);
                if (channel && channel.isTextBased()) {
                    const msg = await channel.messages.fetch(messageId);
                    await msg.delete();
                }
            }
            catch (error) {
                console.error(`Discord delete message error:`, error?.message);
            }
        };
        this.notifyAdmin = async (msg) => {
            const adminChannelId = process.env.DISCORD_ADMIN_CHANNEL;
            if (adminChannelId) {
                await this.doSendMessage(adminChannelId, msg);
            }
            else {
                console.log(`[Discord Admin]: ${msg}`);
            }
        };
        this.checkAdmin = async (guildId, userId) => {
            if (!guildId)
                return true;
            try {
                const guild = await this.client.guilds.fetch(guildId);
                const member = await guild.members.fetch(userId);
                return member.permissions.has("Administrator") || member.permissions.has("ManageGuild");
            }
            catch (error) {
                console.error("Discord checkAdmin error:", error?.message);
                return false;
            }
        };
        this.getQueueCount = async () => {
            return await globalQueue.count();
        };
        this.client = new discord_js_1.Client({
            intents: [
                discord_js_1.GatewayIntentBits.Guilds,
                discord_js_1.GatewayIntentBits.GuildMessages,
                discord_js_1.GatewayIntentBits.MessageContent,
                discord_js_1.GatewayIntentBits.DirectMessages,
            ],
            partials: [discord_js_1.Partials.Channel, discord_js_1.Partials.Message],
        });
        this.client.once(discord_js_1.Events.ClientReady, (readyClient) => {
            console.log(chalk_1.default.blue(`Discord bot ready: ${readyClient.user.tag}`));
        });
        this.client.on(discord_js_1.Events.MessageCreate, async (message) => {
            if (message.author.bot)
                return;
            if ((await queue_1.default.get("pause")) === "true")
                return;
            const domainMessage = this.toDomainMessage(message);
            if (domainMessage && this.messageHandler) {
                await this.messageHandler(domainMessage);
            }
        });
        globalQueue.process(async (job) => {
            await this.doSendMessage(job.data.channelId, job.data.message);
        });
        chatQueue.process(async (job) => {
            await this.doSendMessage(job.data.channelId, job.data.message);
        });
        globalQueue.on("failed", function (_job, error) {
            console.error("Discord global queue error:", error);
        });
        chatQueue.on("failed", function (_job, error) {
            console.error("Discord chat queue error:", error);
        });
        this.client.login(token).catch((error) => {
            console.error("Discord login failed:", error);
        });
    }
}
const discordBot = new DiscordBot(process.env.DISCORD_TOKEN);
exports.default = discordBot;
//# sourceMappingURL=discord.js.map