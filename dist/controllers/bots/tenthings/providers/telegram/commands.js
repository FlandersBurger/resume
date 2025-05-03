"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluate = exports.translateCommand = exports.Command = void 0;
const moment_1 = __importDefault(require("moment"));
const game_1 = require("../../../../../models/tenthings/game");
const index_1 = require("../../../../../models/index");
const messages_1 = require("../../messages");
const maingame_1 = require("../../maingame");
const minigame_1 = require("../../minigame");
const tinygame_1 = require("../../tinygame");
const hints_1 = require("../../hints");
const guesses_1 = require("../../guesses");
const lists_1 = require("../../lists");
const i18n_1 = __importDefault(require("../../../../../i18n"));
const players_1 = require("../../players");
const queue_1 = require("../../../../../controllers/bots/tenthings/providers/telegram/queue");
const skips_1 = require("../../skips");
const stats_1 = require("../../stats");
const keyboards_1 = require("./keyboards");
const telegram_1 = __importDefault(require("../../../../../connections/telegram"));
const suggestions_1 = require("../../../../../controllers/bots/tenthings/providers/telegram/suggestions");
const errors_1 = require("../../../../../controllers/bots/tenthings/providers/telegram/errors");
var Command;
(function (Command) {
    Command["Start"] = "start";
    Command["List"] = "list";
    Command["Hint"] = "hint";
    Command["Skip"] = "skip";
    Command["Veto"] = "veto";
    Command["Minigame"] = "minigame";
    Command["Minihint"] = "minihint";
    Command["Miniskip"] = "miniskip";
    Command["Tinygame"] = "tinygame";
    Command["Tinyhint"] = "tinyhint";
    Command["Tinyskip"] = "tinyskip";
    Command["Score"] = "score";
    Command["Stats"] = "stats";
    Command["Me"] = "me";
    Command["Intro"] = "intro";
    Command["Logic"] = "logic";
    Command["Settings"] = "settings";
    Command["Categories"] = "categories";
    Command["Typo"] = "typo";
    Command["Bug"] = "bug";
    Command["Feature"] = "feature";
    Command["Suggestion"] = "suggest";
    Command["Error"] = "error";
    Command["Search"] = "search";
    Command["Lists"] = "lists";
    Command["Stop"] = "stop";
    Command["Commands"] = "commands";
    Command["Notify"] = "notify";
    Command["Check"] = "check";
    Command["Flush"] = "flush";
    Command["Minigames"] = "minigames";
    Command["Ping"] = "ping";
    Command["Hello"] = "hello";
    Command["Queue"] = "queue";
    Command["Resume"] = "resume";
})(Command || (exports.Command = Command = {}));
const commands = Object.values(Command);
const userCommands = commands.filter((command) => ![Command.Notify, Command.Check, Command.Flush, Command.Minigames, Command.Hello].includes(command));
const translateCommand = (language, key) => commands.find((command) => command == (0, i18n_1.default)(language, key, { ns: "commands" }));
exports.translateCommand = translateCommand;
const evaluate = async (msg, game, isNew) => {
    const command = msg.command && (0, exports.translateCommand)(game.settings.language, msg.command);
    let player = await (0, players_1.getPlayer)(game, msg.from);
    if (!player || player.banned) {
        return;
    }
    if (!player.first_name) {
        console.error("msg without a first_name?");
        console.error(msg);
        return;
    }
    else if (game.chat_id === parseInt(process.env.ADMIN_CHAT || "") && command) {
        if (![Command.Search, Command.Stats, Command.Typo, Command.Bug, Command.Feature, Command.Suggestion].includes(command)) {
            return;
        }
    }
    if (player.state && player.state !== "none") {
        console.log(player.state, msg.text);
        (0, suggestions_1.sendSuggestion)(msg, game, player, player.state);
        return;
    }
    if (isNew || game.list.values.length === 0) {
        await (0, maingame_1.newRound)(game);
    }
    if (command) {
        if (command && commands.includes(command) && msg.topicId && msg.topicId !== game.topicId) {
            game.topicId = msg.topicId;
        }
        switch (command) {
            case Command.Error:
                const chatLink = await telegram_1.default.exportChatInviteLink(game.telegramChannel);
                telegram_1.default.notifyAdmins(`Error reported in ${game.chat_id}: \n${msg.text}\n\n${chatLink}`);
                game.provider.message(game, "Please let me know directly if it's an issue with your specific chat -> @FlandersBurger");
                break;
            case Command.Intro:
                telegram_1.default.queueMessage(game.telegramChannel, (0, i18n_1.default)(game.settings.language, "sentences.introduction", {
                    name: (0, players_1.getPlayerName)(player),
                }));
                break;
            case Command.Logic:
                telegram_1.default.queueMessage(game.telegramChannel, (0, messages_1.getLogicMessage)(game.settings.language));
                break;
            case Command.Commands:
                telegram_1.default.queueMessage(game.telegramChannel, userCommands
                    .map((command) => `/${(0, i18n_1.default)(game.settings.language, `commands.${command}.name`)} - ${(0, i18n_1.default)(game.settings.language, `commands.${command}.description`)}`)
                    .join("\n"));
                break;
            case Command.Stop:
                if (await telegram_1.default.checkAdmin(game, msg.from)) {
                    (0, maingame_1.deactivate)(game);
                }
                else {
                    (0, errors_1.adminOnly)(game, player);
                }
                break;
            case Command.Start:
                if (!game.list) {
                    (0, maingame_1.newRound)(game);
                    break;
                }
            case Command.List:
                try {
                    game.provider.mainGameMessage(game);
                }
                catch (e) {
                    console.error(e);
                }
                break;
            case Command.Skip:
                if (await (0, skips_1.checkSkipper)(game, player)) {
                    (0, skips_1.processSkip)(game, player);
                }
                break;
            case Command.Miniskip:
                if (await (0, skips_1.checkSkipper)(game, player)) {
                    telegram_1.default.queueMessage(game.telegramChannel, `The minigame answer was:\n<i>${game.minigame.answer}</i>`);
                    setTimeout(() => {
                        (0, minigame_1.createMinigame)(game);
                    }, 200);
                }
                break;
            case Command.Tinyskip:
                if (await (0, skips_1.checkSkipper)(game, player)) {
                    telegram_1.default.queueMessage(game.telegramChannel, `The tinygame answer was:\n<i>${game.tinygame.answer}</i>`);
                    setTimeout(() => {
                        (0, tinygame_1.createTinygame)(game);
                    }, 200);
                }
                break;
            case Command.Veto:
                (0, skips_1.vetoSkip)(game, player);
                break;
            case Command.Stats:
                telegram_1.default.sendKeyboard(game.telegramChannel, `<b>${(0, i18n_1.default)(game.settings.language, "stats.stats")}</b>`, (0, keyboards_1.statsKeyboard)());
                break;
            case Command.Typo:
            case Command.Bug:
            case Command.Feature:
            case Command.Suggestion:
                if (!(0, suggestions_1.checkSuggestionProvided)(msg, game, player, command)) {
                    (0, suggestions_1.sendSuggestionMessage)(game, player, command);
                }
                break;
            case Command.Search:
                const search = msg.text;
                if (game.pickedLists.length >= 10)
                    return telegram_1.default.queueMessage(game.telegramChannel, `${(0, i18n_1.default)(game.settings.language, "sentences.queueFull", { name: (0, players_1.getPlayerName)(player) })}\n -> /lists`);
                if (search) {
                    player.searches++;
                    await player.save();
                    console.log(`${game.chat_id} - Search for ${search}`);
                    const foundLists = await (0, lists_1.searchList)(search, game);
                    if (foundLists.length > 0) {
                        const keyboard = (0, keyboards_1.listsKeyboard)(foundLists);
                        telegram_1.default.sendKeyboard(game.telegramChannel, `${(0, i18n_1.default)(game.settings.language, `sentences.${game.chat_id === parseInt(process.env.ADMIN_CHAT || "") ? "curate" : "queue"}List`)}\n<i>(${search})</i>`, keyboard);
                    }
                    else {
                        telegram_1.default.queueMessage(game.telegramChannel, (0, i18n_1.default)(game.settings.language, "sentences.noSearchResults", {
                            search,
                            name: (0, players_1.getPlayerName)(player),
                        }));
                    }
                }
                else {
                    telegram_1.default.queueMessage(game.telegramChannel, (0, i18n_1.default)(game.settings.language, "sentences.emptySearch", { name: (0, players_1.getPlayerName)(player) }));
                }
                break;
            case Command.Hint:
                if (game.list.values.filter(({ guesser }) => guesser?._id).length !== 0) {
                    try {
                        (0, hints_1.processHint)(game, player);
                    }
                    catch (e) {
                        telegram_1.default.notifyAdmin(`Hint Error:\n${e}`);
                    }
                }
                break;
            case Command.Minihint:
                (0, hints_1.processHint)(game, player, game_1.GameType.MINIGAME);
                break;
            case Command.Tinyhint:
                (0, hints_1.processHint)(game, player, game_1.GameType.TINYGAME);
                break;
            case Command.Notify:
                if (game.chat_id === parseInt(process.env.MASTER_CHAT || "")) {
                    index_1.Game.find({ enabled: true })
                        .select("chat_id topicId telegramChannel")
                        .then((games) => {
                        telegram_1.default.broadcast(games.map(({ telegramChannel }) => telegramChannel), msg.text.replace("/notify ", ""));
                    });
                }
                break;
            case Command.Me:
                (0, stats_1.getStats)(game, `p_${msg.from.id}`, (0, players_1.getPlayerName)(msg.from));
                break;
            case Command.Score:
                game.provider.dailyScores(game);
                break;
            case Command.Minigame:
                if (!game.minigame.answer) {
                    (0, minigame_1.createMinigame)(game);
                }
                else {
                    game.provider.miniGameMessage(game);
                }
                break;
            case Command.Tinygame:
                if (!game.tinygame.answer) {
                    (0, tinygame_1.createTinygame)(game);
                }
                else {
                    game.provider.tinyGameMessage(game);
                }
                break;
            case Command.Categories:
                if (game.chat_id != parseInt(process.env.GROUP_CHAT || "")) {
                    if (await telegram_1.default.checkAdmin(game, msg.from)) {
                        telegram_1.default.sendKeyboard(game.telegramChannel, `<b>${(0, i18n_1.default)(game.settings.language, "category")}</b>`, (0, keyboards_1.categoriesKeyboard)(game));
                    }
                    else {
                        telegram_1.default.queueMessage(game.telegramChannel, (0, messages_1.getCategoriesMessage)(game));
                    }
                }
                break;
            case Command.Settings:
                if (game.chat_id != parseInt(process.env.GROUP_CHAT || "")) {
                    if (await telegram_1.default.checkAdmin(game, msg.from)) {
                        telegram_1.default.sendKeyboard(game.telegramChannel, `<b>${(0, i18n_1.default)(game.settings.language, "settings")}</b>`, (0, keyboards_1.settingsKeyboard)(game));
                    }
                    else {
                        (0, errors_1.adminOnly)(game, player);
                    }
                }
                break;
            case Command.Check:
                if (msg.from.id === parseInt(process.env.MASTER_CHAT || "")) {
                    telegram_1.default.queueMessage(game.telegramChannel, "Yes, master. Let me send you what you need!");
                    telegram_1.default.notifyAdmin(`Chat id: ${game.chat_id}\nGame _id: ${game._id}\nSettings:\n${JSON.stringify(game.settings)}\nList: ${game.list.name}\nMinigame: ${game.minigame.answer}\nTinygame: ${game.tinygame.answer}\nhttps://belgocanadian.com/tenthings/${game.chat_id}`);
                }
                break;
            case Command.Flush:
                if (msg.from.id === parseInt(process.env.MASTER_CHAT || "")) {
                    game.list = (await (0, lists_1.getRandomList)());
                    game.pickedLists = [];
                    game.playedLists = [];
                    game.cycles++;
                    game.lastCycleDate = new Date();
                    game.save();
                    telegram_1.default.queueMessage(game.telegramChannel, "Flushed this chat");
                }
                break;
            case Command.Minigames:
                if (msg.from.id === parseInt(process.env.MASTER_CHAT || "")) {
                    (0, minigame_1.updateMinigames)();
                }
                break;
            case Command.Ping:
                telegram_1.default.queueMessage(game.telegramChannel, "pong");
                break;
            case Command.Hello:
                telegram_1.default.queueMessage(game.telegramChannel, "You already had me but you got greedy, now you ruined it");
                break;
            case Command.Resume:
                if (game.chat_id === parseInt(process.env.MASTER_CHAT || "")) {
                    telegram_1.default.resumeQueue();
                }
            case Command.Queue:
                (0, queue_1.getQueue)().then((message) => {
                    telegram_1.default.sendMessage(game.telegramChannel, message);
                }, console.error);
                break;
            case Command.Lists:
                if (game.pickedLists.length > 0) {
                    const upcomingLists = await index_1.List.find({ _id: { $in: game.pickedLists } });
                    let message = `${(0, i18n_1.default)(game.settings.language, "sentences.upcomingLists")}\n`;
                    for (const list of upcomingLists.slice(0, 10)) {
                        message += `- ${list.name}\n`;
                    }
                    telegram_1.default.queueMessage(game.telegramChannel, message);
                }
                else {
                    telegram_1.default.queueMessage(game.telegramChannel, (0, i18n_1.default)(game.settings.language, "sentences.noUpcomingLists"));
                }
                break;
            default:
                break;
        }
    }
    else {
        if (game.lastPlayDate <= (0, moment_1.default)().subtract(30, "days").toDate()) {
            (0, maingame_1.deactivate)(game);
        }
        else if (game.enabled && game.chat_id != parseInt(process.env.ADMIN_CHAT || "")) {
            (0, guesses_1.queueGuess)(game, msg);
        }
    }
};
exports.evaluate = evaluate;
//# sourceMappingURL=commands.js.map