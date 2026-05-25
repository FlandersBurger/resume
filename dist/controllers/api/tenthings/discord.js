"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initDiscordBot = void 0;
const index_1 = require("../../../models/index");
const maingame_1 = require("../../bots/tenthings/maingame");
const discord_1 = __importDefault(require("../../../connections/discord"));
const commands_1 = require("../../bots/tenthings/providers/discord/commands");
const initDiscordBot = () => {
    discord_1.default.onMessage(async (msg) => {
        if (!msg.from?.id)
            return;
        const existingGame = await index_1.Game.findOne({ discordChannelId: msg.channelId })
            .populate("list.creator")
            .populate("list.values.guesser")
            .select("-playedLists")
            .exec();
        if (!existingGame) {
            const newGame = await (0, maingame_1.createMaingame)({ chat_id: 0, discordChannelId: msg.channelId, platform: "discord" });
            console.log(`New Discord game created for channel ${msg.channelId}`);
            await (0, commands_1.evaluate)(msg, newGame, true);
        }
        else {
            if (!existingGame.enabled) {
                if (msg.command) {
                    const command = (0, commands_1.translateCommand)(existingGame.settings.language, msg.command);
                    if ((command &&
                        [commands_1.Command.List, commands_1.Command.Start, commands_1.Command.Minigame, commands_1.Command.Tinygame, commands_1.Command.Hint, commands_1.Command.Skip].includes(command)) ||
                        ["list", "start", "minigame", "tinygame", "hint", "skip"].includes(msg.command)) {
                        await (0, maingame_1.activate)(existingGame, true);
                        await (0, commands_1.evaluate)(msg, existingGame, false);
                    }
                }
            }
            else {
                try {
                    await existingGame.validate();
                }
                catch (err) {
                    console.log("Attempting to reset Discord game:", existingGame._id);
                    console.error(err);
                    existingGame.streak = {
                        player: undefined,
                        count: 0,
                    };
                    await (0, maingame_1.newRound)(existingGame);
                    return;
                }
                await (0, commands_1.evaluate)(msg, existingGame, false);
            }
        }
    });
};
exports.initDiscordBot = initDiscordBot;
//# sourceMappingURL=discord.js.map