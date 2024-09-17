"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluate = exports.translateCommand = exports.Commands = void 0;
const moment_1 = __importDefault(require("moment"));
const game_1 = require("../../../models/tenthings/game");
const index_1 = require("../../../models/index");
const messages_1 = require("./messages");
const maingame_1 = require("./maingame");
const minigame_1 = require("./minigame");
const tinygame_1 = require("./tinygame");
const hints_1 = require("./hints");
const guesses_1 = require("./guesses");
const lists_1 = require("./lists");
const i18n_1 = __importDefault(require("../../../i18n"));
const players_1 = require("./players");
const queue_1 = require("./queue");
const skips_1 = require("./skips");
const stats_1 = require("./stats");
const keyboards_1 = require("./keyboards");
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const suggestions_1 = require("./suggestions");
const string_helpers_1 = require("../../../utils/string-helpers");
var Commands;
(function (Commands) {
    Commands["Start"] = "start";
    Commands["List"] = "list";
    Commands["Hint"] = "hint";
    Commands["Skip"] = "skip";
    Commands["Veto"] = "veto";
    Commands["Minigame"] = "minigame";
    Commands["Minihint"] = "minihint";
    Commands["Miniskip"] = "miniskip";
    Commands["Tinygame"] = "tinygame";
    Commands["Tinyhint"] = "tinyhint";
    Commands["Tinyskip"] = "tinyskip";
    Commands["Score"] = "score";
    Commands["Stats"] = "stats";
    Commands["Me"] = "me";
    Commands["Intro"] = "intro";
    Commands["Logic"] = "logic";
    Commands["Settings"] = "settings";
    Commands["Categories"] = "categories";
    Commands["Typo"] = "typo";
    Commands["Bug"] = "bug";
    Commands["Feature"] = "feature";
    Commands["Suggestion"] = "suggestion";
    Commands["Error"] = "error";
    Commands["Search"] = "search";
    Commands["Lists"] = "lists";
    Commands["Stop"] = "stop";
    Commands["Commands"] = "commands";
    Commands["Notify"] = "notify";
    Commands["Check"] = "check";
    Commands["Flush"] = "flush";
    Commands["Minigames"] = "minigames";
    Commands["Ping"] = "ping";
    Commands["Hello"] = "hello";
    Commands["Queue"] = "queue";
})(Commands || (exports.Commands = Commands = {}));
const commands = Object.values(Commands);
const translateCommand = (lng, key) => (0, i18n_1.default)(lng, key, { ns: "commands" }) || undefined;
exports.translateCommand = translateCommand;
const evaluate = async (msg, game, isNew) => {
    let player = await (0, players_1.getPlayer)(game, msg.from);
    if (!player.first_name) {
        console.error("msg without a first_name?");
        console.error(msg);
        return;
    }
    else if (game.chat_id === parseInt(process.env.ADMIN_CHAT || "") && msg.command) {
        if (![Commands.Search, Commands.Stats, Commands.Typo, Commands.Bug, Commands.Feature, Commands.Suggestion].includes(msg.command)) {
            return;
        }
    }
    if (Object.values(suggestions_1.SuggestionType).includes(player.state)) {
        (0, suggestions_1.sendSuggestion)(msg, game, player, player.state);
        return;
    }
    if (game.list.values.length === 0) {
        (0, maingame_1.newRound)(game);
    }
    if (msg.command) {
        const command = (0, exports.translateCommand)(game.settings.language, msg.command);
        if (command && commands.includes(command) && msg.topicId && msg.topicId !== game.topicId) {
            game.topicId = msg.topicId;
        }
        switch (command) {
            case Commands.Error:
                const chatLink = await telegram_1.default.exportChatInviteLink(game.telegramChannel);
                telegram_1.default.notifyAdmins(`Error reported in ${game.chat_id}: \n${msg.text}\n\n${chatLink}`);
                break;
            case Commands.Intro:
                telegram_1.default.queueMessage(game.telegramChannel, (0, i18n_1.default)(game.settings.language, "sentences.introduction", {
                    name: player.first_name,
                }));
                break;
            case Commands.Logic:
                telegram_1.default.queueMessage(game.telegramChannel, (0, messages_1.getLogicMessage)(game.settings.language));
                break;
            case Commands.Commands:
                telegram_1.default.queueMessage(game.telegramChannel, commands
                    .map((command) => `/${command} - ${(0, i18n_1.default)(game.settings.language, `commands.${command}.description`)}`)
                    .join("\n"));
                break;
            case Commands.Stop:
                if (await telegram_1.default.checkAdmin(game.telegramChannel, msg.from.id)) {
                    (0, maingame_1.deactivate)(game);
                }
                else {
                    telegram_1.default.queueMessage(game.telegramChannel, (0, i18n_1.default)(game.settings.language, "warnings.adminFunction", { name: player.first_name }));
                }
                break;
            case Commands.Start:
                if (isNew) {
                    (0, maingame_1.newRound)(game);
                    break;
                }
            case Commands.List:
                try {
                    (0, maingame_1.sendMaingameMessage)(game);
                }
                catch (e) {
                    console.error(e);
                }
                break;
            case Commands.Skip:
                if (await (0, skips_1.checkSkipper)(game, player)) {
                    (0, skips_1.processSkip)(game, player);
                }
                break;
            case Commands.Miniskip:
                if (await (0, skips_1.checkSkipper)(game, player)) {
                    telegram_1.default.queueMessage(game.telegramChannel, `The minigame answer was:\n<i>${game.minigame.answer}</i>`);
                    setTimeout(() => {
                        (0, minigame_1.createMinigame)(game);
                    }, 200);
                }
                break;
            case Commands.Tinyskip:
                if (await (0, skips_1.checkSkipper)(game, player)) {
                    telegram_1.default.queueMessage(game.telegramChannel, `The tinygame answer was:\n<i>${game.tinygame.answer}</i>`);
                    setTimeout(() => {
                        (0, tinygame_1.createTinygame)(game);
                    }, 200);
                }
                break;
            case Commands.Veto:
                (0, skips_1.vetoSkip)(game, player);
                break;
            case Commands.Stats:
                telegram_1.default.sendKeyboard(game.telegramChannel, `<b>${(0, i18n_1.default)(game.settings.language, "stats.stats")}</b>`, (0, keyboards_1.statsKeyboard)());
                break;
            case Commands.Typo:
            case Commands.Bug:
            case Commands.Feature:
                if (!(0, suggestions_1.checkSuggestionProvided)(msg, game, player)) {
                    (0, suggestions_1.sendSuggestionMessage)(game, player, (0, suggestions_1.getSuggestionType)(msg));
                }
                break;
            case Commands.Search:
                const search = msg.text;
                if (game.pickedLists.length >= 10)
                    return telegram_1.default.queueMessage(game.telegramChannel, `${(0, i18n_1.default)(game.settings.language, "sentences.queueFull", { name: (0, string_helpers_1.parseSymbols)(player.first_name) })}\n -> /lists`);
                if (search) {
                    player.searches++;
                    await player.save();
                    console.log(`${game.chat_id} - Search for ${search}`);
                    const foundLists = await (0, lists_1.searchList)(search, game);
                    if (foundLists.length > 0) {
                        const keyboard = (0, keyboards_1.listsKeyboard)(foundLists);
                        telegram_1.default.sendKeyboard(game.telegramChannel, (0, i18n_1.default)(game.settings.language, `sentences.${game.chat_id === parseInt(process.env.ADMIN_CHAT || "") ? "curate" : "queue"}List`), keyboard);
                    }
                    else {
                        telegram_1.default.queueMessage(game.telegramChannel, (0, i18n_1.default)(game.settings.language, "sentences.noSearchResults", {
                            search,
                            name: (0, string_helpers_1.parseSymbols)(player.first_name),
                        }));
                    }
                }
                else {
                    telegram_1.default.queueMessage(game.telegramChannel, (0, i18n_1.default)(game.settings.language, "sentences.emptySearch", { name: (0, string_helpers_1.parseSymbols)(player.first_name) }));
                }
                break;
            case Commands.Hint:
                if (game.list.values.filter(({ guesser }) => guesser).length !== 0) {
                    try {
                        (0, hints_1.processHint)(game, player);
                    }
                    catch (e) {
                        telegram_1.default.notifyAdmin(`Hint Error:\n${e}`);
                    }
                }
                break;
            case Commands.Minihint:
                (0, hints_1.processHint)(game, player, game_1.GameType.MINIGAME);
                break;
            case Commands.Tinyhint:
                (0, hints_1.processHint)(game, player, game_1.GameType.TINYGAME);
                break;
            case Commands.Notify:
                if (game.chat_id === parseInt(process.env.MASTER_CHAT || "")) {
                    index_1.Game.find({ enabled: true })
                        .select("chat_id topicId telegramChannel")
                        .then((games) => {
                        telegram_1.default.broadcast(games.map(({ telegramChannel }) => telegramChannel), msg.text.replace("/notify ", ""));
                    });
                }
                break;
            case Commands.Me:
                (0, stats_1.getStats)(game, `p_${msg.from.id}`, msg.from.first_name);
                break;
            case Commands.Score:
                telegram_1.default.queueMessage(game.telegramChannel, await (0, stats_1.getDailyScores)(game));
                break;
            case Commands.Minigame:
                if (!game.minigame.answer) {
                    (0, minigame_1.createMinigame)(game);
                }
                else {
                    (0, minigame_1.sendMinigameMessage)(game);
                }
                break;
            case Commands.Tinygame:
                if (!game.tinygame.answer) {
                    (0, tinygame_1.createTinygame)(game);
                }
                else {
                    (0, tinygame_1.sendTinygameMessage)(game);
                }
                break;
            case Commands.Categories:
                if (game.chat_id != parseInt(process.env.GROUP_CHAT || "")) {
                    if (await telegram_1.default.checkAdmin(game.telegramChannel, msg.from.id)) {
                        telegram_1.default.sendKeyboard(game.telegramChannel, `<b>${(0, i18n_1.default)(game.settings.language, "category")}</b>`, (0, keyboards_1.categoriesKeyboard)(game));
                    }
                    else {
                        telegram_1.default.queueMessage(game.telegramChannel, (0, messages_1.getCategoriesMessage)(game));
                    }
                }
                break;
            case Commands.Settings:
                if (game.chat_id != parseInt(process.env.GROUP_CHAT || "")) {
                    if (await telegram_1.default.checkAdmin(game.telegramChannel, msg.from.id)) {
                        telegram_1.default.sendKeyboard(game.telegramChannel, `<b>${(0, i18n_1.default)(game.settings.language, "settings")}</b>`, (0, keyboards_1.settingsKeyboard)(game));
                    }
                    else {
                        telegram_1.default.queueMessage(game.telegramChannel, (0, i18n_1.default)(game.settings.language, "warnings.adminFunction", { name: player.first_name }));
                    }
                }
                break;
            case Commands.Check:
                if (msg.from.id === parseInt(process.env.MASTER_CHAT || "")) {
                    telegram_1.default.queueMessage(game.telegramChannel, "Yes, master. Let me send you what you need!");
                    telegram_1.default.notifyAdmin(`Chat id: ${game.chat_id}\nGame _id: ${game._id}\nSettings:\n${JSON.stringify(game.settings)}\nList: ${game.list.name}\nMinigame: ${game.minigame.answer}\nTinygame: ${game.tinygame.answer}\nhttps://belgocanadian.com/tenthings/${game.chat_id}`);
                }
                break;
            case Commands.Flush:
                if (msg.from.id === parseInt(process.env.MASTER_CHAT || "")) {
                    game.list = (await (0, lists_1.getRandomList)());
                    game.pickedLists = [];
                    game.save();
                    telegram_1.default.queueMessage(game.telegramChannel, "Flushed this chat");
                }
                break;
            case Commands.Minigames:
                if (msg.from.id === parseInt(process.env.MASTER_CHAT || "")) {
                    (0, minigame_1.updateMinigames)();
                }
                break;
            case Commands.Ping:
                telegram_1.default.queueMessage(game.telegramChannel, "pong");
                break;
            case Commands.Hello:
                telegram_1.default.queueMessage(game.telegramChannel, "You already had me but you got greedy, now you ruined it");
                break;
            case Commands.Queue:
                (0, queue_1.getQueue)().then((message) => {
                    telegram_1.default.sendMessage(game.telegramChannel, message);
                }, console.error);
                break;
            case Commands.Lists:
                if (game.pickedLists.length > 0) {
                    index_1.List.find({
                        _id: {
                            $in: game.pickedLists,
                        },
                    }).exec((_, upcomingLists) => {
                        let message = `${(0, i18n_1.default)(game.settings.language, "sentences.upcomingLists")}\n`;
                        for (const list of upcomingLists.slice(0, 10)) {
                            message += `- ${list.name}\n`;
                        }
                        telegram_1.default.queueMessage(game.telegramChannel, message);
                    });
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