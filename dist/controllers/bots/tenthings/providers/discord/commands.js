"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluate = exports.translateCommand = exports.Command = void 0;
const game_1 = require("../../../../../models/tenthings/game");
const index_1 = require("../../../../../models/index");
const discord_1 = require("../../providers/discord");
const messages_1 = require("../../messages");
const maingame_1 = require("../../maingame");
const minigame_1 = require("../../minigame");
const tinygame_1 = require("../../tinygame");
const hints_1 = require("../../hints");
const guesses_1 = require("../../guesses");
const lists_1 = require("../../lists");
const i18n_1 = __importDefault(require("../../../../../i18n"));
const players_1 = require("../../players");
const skips_1 = require("../../skips");
const discord_2 = __importDefault(require("../../../../../connections/discord"));
var commands_1 = require("../../providers/telegram/commands");
Object.defineProperty(exports, "Command", { enumerable: true, get: function () { return commands_1.Command; } });
Object.defineProperty(exports, "translateCommand", { enumerable: true, get: function () { return commands_1.translateCommand; } });
const commands_2 = require("../../providers/telegram/commands");
const commands = Object.values(commands_2.Command);
const userCommands = commands.filter((command) => ![commands_2.Command.Notify, commands_2.Command.Check, commands_2.Command.Flush, commands_2.Command.Minigames, commands_2.Command.Hello].includes(command));
const evaluate = async (msg, game, isNew) => {
    const command = msg.command && (0, commands_2.translateCommand)(game.settings.language, msg.command);
    let player = await (0, discord_1.convertDiscordUserToPlayer)(game, msg.from);
    if (!player || player.banned) {
        return;
    }
    if (!player.first_name) {
        console.error("Discord msg without a first_name?");
        console.error(msg);
        return;
    }
    try {
        await game.validate();
    }
    catch (e) {
        console.error(e);
        console.error("bad game", game._id);
        return;
    }
    if (isNew || game.list.values.length === 0) {
        await (0, maingame_1.newRound)(game);
    }
    if (command) {
        switch (command) {
            case commands_2.Command.Error:
                game.provider.message(game, "Please let me know directly if it's an issue with your specific chat -> @FlandersBurger");
                discord_2.default.notifyAdmin(`Error reported in Discord channel ${msg.channelId}: \n${msg.text}`);
                break;
            case commands_2.Command.Intro:
                discord_2.default.queueMessage(game.discordChannel, (0, i18n_1.default)(game.settings.language, "sentences.introduction", {
                    name: (0, players_1.getPlayerName)(player),
                }));
                break;
            case commands_2.Command.Logic:
                discord_2.default.queueMessage(game.discordChannel, (0, messages_1.getRules)(game.settings.language).reduce((message, rule, i) => `${message}${i + 1}: ${rule}\n`, ""));
                break;
            case commands_2.Command.Commands:
            case commands_2.Command.Help:
                discord_2.default.queueMessage(game.discordChannel, userCommands
                    .map((command) => `/${(0, i18n_1.default)(game.settings.language, `commands.${command}.name`)} - ${(0, i18n_1.default)(game.settings.language, `commands.${command}.description`)}`)
                    .join("\n"));
                break;
            case commands_2.Command.Stop:
                if (await discord_2.default.checkAdmin(null, msg.from.id)) {
                    (0, maingame_1.deactivate)(game);
                }
                else {
                    game.provider.message(game, (0, i18n_1.default)(game.settings.language, "warnings.adminFunction", { name: (0, players_1.getPlayerName)(player) }));
                }
                break;
            case commands_2.Command.Start:
                if (!game.list) {
                    (0, maingame_1.newRound)(game);
                    break;
                }
            case commands_2.Command.List:
                try {
                    game.provider.mainGameMessage(game);
                }
                catch (e) {
                    console.error(e);
                }
                break;
            case commands_2.Command.Skip:
                if (await (0, skips_1.checkSkipper)(game, player)) {
                    (0, skips_1.processSkip)(game, player);
                }
                break;
            case commands_2.Command.Miniskip:
                if (await (0, skips_1.checkSkipper)(game, player)) {
                    discord_2.default.queueMessage(game.discordChannel, `The minigame answer was:\n*${game.minigame.answer}*`);
                    setTimeout(() => {
                        (0, minigame_1.createMinigame)(game);
                    }, 200);
                }
                break;
            case commands_2.Command.Tinyskip:
                if (await (0, skips_1.checkSkipper)(game, player)) {
                    discord_2.default.queueMessage(game.discordChannel, `The tinygame answer was:\n*${game.tinygame.answer}*`);
                    setTimeout(() => {
                        (0, tinygame_1.createTinygame)(game);
                    }, 200);
                }
                break;
            case commands_2.Command.Veto:
                (0, skips_1.vetoSkip)(game, player);
                break;
            case commands_2.Command.Stats:
                discord_2.default.queueMessage(game.discordChannel, game.provider.categoriesMessage(game));
                break;
            case commands_2.Command.Search:
                const search = msg.text;
                if (game.pickedLists.length >= 10) {
                    discord_2.default.queueMessage(game.discordChannel, `${(0, i18n_1.default)(game.settings.language, "sentences.queueFull", { name: (0, players_1.getPlayerName)(player) })}\n -> /lists`);
                    return;
                }
                if (search) {
                    player.searches++;
                    await player.save();
                    console.log(`${game._id} - Discord search for ${search}`);
                    const foundLists = await (0, lists_1.searchList)(search, game);
                    if (foundLists.length > 0) {
                        const listNames = foundLists
                            .slice(0, 10)
                            .map((list, i) => `${i + 1}. ${list.name}`)
                            .join("\n");
                        discord_2.default.queueMessage(game.discordChannel, `${(0, i18n_1.default)(game.settings.language, "sentences.queueList")}\n*(${search})*\n${listNames}`);
                    }
                    else {
                        discord_2.default.queueMessage(game.discordChannel, (0, i18n_1.default)(game.settings.language, "sentences.noSearchResults", {
                            search,
                            name: (0, players_1.getPlayerName)(player),
                        }));
                    }
                }
                else {
                    discord_2.default.queueMessage(game.discordChannel, (0, i18n_1.default)(game.settings.language, "sentences.emptySearch", { name: (0, players_1.getPlayerName)(player) }));
                }
                break;
            case commands_2.Command.Hint:
                (0, hints_1.processHint)(game, player);
                break;
            case commands_2.Command.Minihint:
                (0, hints_1.processHint)(game, player, game_1.GameType.MINIGAME);
                break;
            case commands_2.Command.Tinyhint:
                (0, hints_1.processHint)(game, player, game_1.GameType.TINYGAME);
                break;
            case commands_2.Command.Me:
                game.provider.dailyScores(game, 10);
                break;
            case commands_2.Command.Score:
                game.provider.dailyScores(game);
                break;
            case commands_2.Command.Minigame:
                if (!game.minigame.answer) {
                    (0, minigame_1.createMinigame)(game);
                }
                else {
                    game.provider.miniGameMessage(game);
                }
                break;
            case commands_2.Command.Tinygame:
                if (!game.tinygame.answer) {
                    (0, tinygame_1.createTinygame)(game);
                }
                else {
                    game.provider.tinyGameMessage(game);
                }
                break;
            case commands_2.Command.Categories:
                discord_2.default.queueMessage(game.discordChannel, game.provider.categoriesMessage(game));
                break;
            case commands_2.Command.Check:
                if (msg.from.id === process.env.DISCORD_ADMIN_USER_ID) {
                    discord_2.default.queueMessage(game.discordChannel, `Channel: ${msg.channelId}\nGame _id: ${game._id}\nList: ${game.list.name}\nMinigame: ${game.minigame.answer}\nTinygame: ${game.tinygame.answer}`);
                }
                break;
            case commands_2.Command.Flush:
                if (msg.from.id === process.env.DISCORD_ADMIN_USER_ID) {
                    game.list = (await (0, lists_1.getRandomList)());
                    game.pickedLists = [];
                    game.playedLists = [];
                    game.cycles++;
                    game.lastCycleDate = new Date();
                    game.save();
                    discord_2.default.queueMessage(game.discordChannel, "Flushed this chat");
                }
                break;
            case commands_2.Command.Minigames:
                if (msg.from.id === process.env.DISCORD_ADMIN_USER_ID) {
                    (0, minigame_1.updateMinigames)();
                }
                break;
            case commands_2.Command.Ping:
                discord_2.default.queueMessage(game.discordChannel, "pong");
                break;
            case commands_2.Command.Hello:
                discord_2.default.queueMessage(game.discordChannel, "You already had me but you got greedy, now you ruined it");
                break;
            case commands_2.Command.Lists:
                if (game.pickedLists.length > 0) {
                    const upcomingLists = await index_1.List.find({ _id: { $in: game.pickedLists } });
                    let message = `${(0, i18n_1.default)(game.settings.language, "sentences.upcomingLists")}\n`;
                    for (const list of upcomingLists.slice(0, 10)) {
                        message += `- ${list.name}\n`;
                    }
                    discord_2.default.queueMessage(game.discordChannel, message);
                }
                else {
                    discord_2.default.queueMessage(game.discordChannel, (0, i18n_1.default)(game.settings.language, "sentences.noUpcomingLists"));
                }
                break;
            default:
                break;
        }
    }
    else {
        if (game.enabled) {
            (0, guesses_1.queueGuess)(game, player, msg.text);
        }
    }
};
exports.evaluate = evaluate;
//# sourceMappingURL=commands.js.map