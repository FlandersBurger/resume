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
exports.evaluate = void 0;
const moment_1 = __importDefault(require("moment"));
const game_1 = require("@models/tenthings/game");
const index_1 = require("@models/index");
const messages_1 = require("./messages");
const maingame_1 = require("./maingame");
const minigame_1 = require("./minigame");
const tinygame_1 = require("./tinygame");
const hints_1 = require("./hints");
const guesses_1 = require("./guesses");
const lists_1 = require("./lists");
const config = require("@root/config");
const i18n_1 = __importDefault(require("@root/i18n"));
const players_1 = require("./players");
const queue_1 = require("./queue");
const skips_1 = require("./skips");
const stats_1 = require("./stats");
const suggestions_1 = require("./suggestions");
const keyboards_1 = require("./keyboards");
const telegram_1 = __importDefault(require("@root/connections/telegram"));
const commands = [
    "list",
    "hint",
    "skip",
    "minigame",
    "minihint",
    "miniskip",
    "tinygame",
    "tinyhint",
    "tinyskip",
    "score",
    "stats",
    "me",
    "intro",
    "logic",
    "settings",
    "categories",
    "typo",
    "bug",
    "feature",
    "search",
    "lists",
    "stop",
    "commands",
];
const evaluate = (msg, game, isNew) => __awaiter(void 0, void 0, void 0, function* () {
    //bot.notifyAdmin(tenthings);
    //bot.notifyAdmin(games[msg.chatId].list);
    let player = yield (0, players_1.getPlayer)(game, msg.from);
    if (!player.first_name) {
        console.error("msg without a first_name?");
        console.error(msg);
        return;
    }
    else if (msg.chatId === config.adminChat && msg.command) {
        //Admin group chat
        if (!["/search", "/stats", "/typo", "/bug", "/feature", "/suggest"].includes(msg.command)) {
            return;
        }
    }
    /*
    const flood = await floodChecker();
    if (flood) res.sendStatus(200);
    */
    if (game.list.values.length === 0) {
        (0, maingame_1.newRound)(game);
    }
    if (msg.command) {
        switch (msg.command) {
            case "/error":
                const chatLink = yield telegram_1.default.exportChatInviteLink(msg.chatId);
                telegram_1.default.notifyAdmins(`Error reported in ${msg.chatId}: \n${msg.text}\n\n${chatLink}`);
                break;
            case "/intro":
                telegram_1.default.queueMessage(msg.chatId, (0, i18n_1.default)(game.settings.language, "sentences.introduction", {
                    name: player.first_name,
                }));
                break;
            case "/logica":
            case "/logic":
                telegram_1.default.queueMessage(msg.chatId, (0, messages_1.getLogicMessage)(game.settings.language));
                break;
            case "/comandos":
                telegram_1.default.queueMessage(msg.chatId, commands.map((command) => `/${command} - ${(0, i18n_1.default)("PT", `commands.${command}.description`)}`).join("\n"));
                break;
            case "/commands":
                telegram_1.default.queueMessage(msg.chatId, commands
                    .map((command) => `/${command} - ${(0, i18n_1.default)(game.settings.language, `commands.${command}.description`)}`)
                    .join("\n"));
                break;
            case "/parar":
            case "/stop":
                if (yield telegram_1.default.checkAdmin(game.chat_id, msg.from.id)) {
                    (0, maingame_1.deactivate)(game);
                }
                else {
                    telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "warnings.adminFunction", { name: player.first_name }));
                }
                break;
            case "/new":
            case "/start":
                if (isNew) {
                    (0, maingame_1.newRound)(game);
                    break;
                }
            case "/lista":
            case "/list":
                try {
                    (0, maingame_1.activate)(game, true);
                    (0, maingame_1.sendMaingameMessage)(game);
                }
                catch (e) {
                    console.error(e);
                }
                break;
            case "/pule":
            case "/skip":
                if (yield (0, skips_1.checkSkipper)(game, msg, player)) {
                    (0, maingame_1.activate)(game, true);
                    (0, skips_1.processSkip)(game, player);
                }
                break;
            case "/minipule":
            case "/miniskip":
                if (yield (0, skips_1.checkSkipper)(game, msg, player)) {
                    telegram_1.default.queueMessage(msg.chatId, `The minigame answer was:\n<i>${game.minigame.answer}</i>`);
                    setTimeout(() => {
                        (0, minigame_1.createMinigame)(game);
                    }, 200);
                }
                break;
            case "/puleminusculo":
            case "/tinyskip":
                if (yield (0, skips_1.checkSkipper)(game, msg, player)) {
                    telegram_1.default.queueMessage(msg.chatId, `The tinygame answer was:\n<i>${game.tinygame.answer}</i>`);
                    setTimeout(() => {
                        (0, tinygame_1.createTinygame)(game);
                    }, 200);
                }
                break;
            case "/veto":
                (0, skips_1.vetoSkip)(game, player);
                break;
            case "/estatisticas":
            case "/stats":
                telegram_1.default.sendKeyboard(game.chat_id, `<b>${(0, i18n_1.default)(game.settings.language, "stats.stats")}</b>`, (0, keyboards_1.statsKeyboard)());
                break;
            case "/erro":
            case "/typo":
                (0, suggestions_1.sendSuggestion)("typo", msg, player, `\nin "${game.list.name}"`);
                break;
            case "/bug":
                (0, suggestions_1.sendSuggestion)("bug", msg, player);
                break;
            case "/feature":
                (0, suggestions_1.sendSuggestion)("feature", msg, player);
                break;
            case "/pesquisar":
            case "/search":
                const search = msg.text.substring(msg.command.length + 1, msg.text.length);
                if (game.pickedLists.length >= 10)
                    return telegram_1.default.queueMessage(game.chat_id, `The queue already has the maximum of 10 lists, ${player.first_name}.\n -> /lists`);
                if (search && search != "TenThings_Bot" && search != "@TenThings_Bot") {
                    player.searches++;
                    yield player.save();
                    console.log(`${game.chat_id} - Search for ${search}`);
                    const foundLists = yield (0, lists_1.searchList)(search, game);
                    if (foundLists.length > 0) {
                        const keyboard = (0, keyboards_1.listsKeyboard)(foundLists);
                        telegram_1.default.sendKeyboard(game.chat_id, `<b>Which list would you like to ${msg.chatId === config.adminChat ? "curate" : "queue"}?</b>`, keyboard);
                    }
                    else {
                        telegram_1.default.queueMessage(game.chat_id, `I didn't find any corresponding lists for <b>"${search}"</b>, ${player.first_name}.\nSimpler queries return better results.`);
                    }
                }
                else {
                    telegram_1.default.queueMessage(msg.chatId, `You didn't search anything ${player.first_name}. Add your message after /search`);
                }
                break;
            case "/suggest":
                const suggestion = msg.text.substring(msg.command.length + 1, msg.text.length);
                if (suggestion && suggestion != "TenThings_Bot" && suggestion != "@TenThings_Bot") {
                    telegram_1.default.notify(suggestion);
                }
                let message = "Please use one of the following commands:\n";
                message += "/search -> Search lists to queue\n";
                message += "/typo -> Report a typo in the current list\n";
                message += "/bug -> Report a bug with the bot\n";
                message += "/feature -> Suggest an enhancement feature\n";
                message += "<i>Note that lists can be added and enhanced by anyone at https://belgocanadian.com/tenthings</i>";
                telegram_1.default.queueMessage(game.chat_id, message);
                break;
            case "/dica":
            case "/hint":
                (0, maingame_1.activate)(game, false);
                if (game.list.values.filter(({ guesser }) => guesser).length !== 0) {
                    try {
                        (0, hints_1.processHint)(game, player);
                    }
                    catch (e) {
                        telegram_1.default.notifyAdmin(`Hint Error:\n${e}`);
                    }
                }
                break;
            case "/minidica":
            case "/minihint":
                (0, hints_1.processHint)(game, player, game_1.GameType.MINIGAME);
                break;
            case "/dicaminusculo":
            case "/tinyhint":
                (0, hints_1.processHint)(game, player, game_1.GameType.TINYGAME);
                break;
            case "/notify":
                if (msg.chatId === config.masterChat) {
                    index_1.Game.find({ enabled: true })
                        .select("chat_id")
                        .then((games) => {
                        telegram_1.default.broadcast(games.map(({ chat_id }) => chat_id), msg.text.replace("/notify ", ""));
                    });
                }
                break;
            /*
          case '/pause':
            if (msg.chatId === config.masterChat) {
              redis.get('pause').then(value => {
                const pause = value === 'true';
                bot.notifyAdmin(`Pause = ${!pause}`);
                redis.set('pause', !pause);
              });
            }
            break;
            */
            case "/eu":
            case "/me":
                (0, stats_1.getStats)(msg.chatId, "p_", msg.from.first_name);
                break;
            case "/pontuacao":
            case "/score":
                telegram_1.default.queueMessage(game.chat_id, yield (0, stats_1.getDailyScores)(game));
                break;
            case "/minijogo":
            case "/minigame":
                if (!game.minigame.answer) {
                    (0, minigame_1.createMinigame)(game);
                }
                else {
                    (0, minigame_1.sendMinigameMessage)(game);
                }
                break;
            case "/jogominusculo":
            case "/tinygame":
                if (!game.tinygame.answer) {
                    (0, tinygame_1.createTinygame)(game);
                }
                else {
                    (0, tinygame_1.sendTinygameMessage)(game);
                }
                break;
            case "/categorias":
            case "/categories":
                if (game.chat_id != config.groupChat) {
                    if (yield telegram_1.default.checkAdmin(game.chat_id, msg.from.id)) {
                        telegram_1.default.sendKeyboard(game.chat_id, `<b>${(0, i18n_1.default)(game.settings.language, "category")}</b>`, (0, keyboards_1.categoriesKeyboard)(game));
                    }
                    else {
                        telegram_1.default.queueMessage(game.chat_id, (0, messages_1.getCategoriesMessage)(game));
                    }
                }
                break;
            case "/confi":
            case "/settings":
                if (game.chat_id != config.groupChat) {
                    if (yield telegram_1.default.checkAdmin(game.chat_id, msg.from.id)) {
                        telegram_1.default.sendKeyboard(game.chat_id, `<b>${(0, i18n_1.default)(game.settings.language, "settings")}</b>`, (0, keyboards_1.settingsKeyboard)(game));
                    }
                    else {
                        telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "warnings.adminFunction", { name: player.first_name }));
                    }
                }
                break;
            case "/check":
                if (msg.from.id === config.masterChat) {
                    telegram_1.default.queueMessage(msg.chatId, "Yes, master. Let me send you what you need!");
                    telegram_1.default.notifyAdmin(`Chat id: ${msg.chatId}\nGame _id: ${game._id}\nSettings:\n${JSON.stringify(game.settings)}\nList: ${game.list.name}\nMinigame: ${game.minigame.answer}\nTinygame: ${game.tinygame.answer}\nhttps://belgocanadian.com/tenthings/${game.chat_id}`);
                }
                break;
            case "/flush":
                if (msg.from.id === config.masterChat) {
                    game.list = (yield (0, lists_1.getRandomList)());
                    game.pickedLists = [];
                    //game.playedLists = [];
                    game.save();
                    telegram_1.default.queueMessage(msg.chatId, "Flushed this chat");
                }
                break;
            case "/minigames":
                if (msg.from.id === config.masterChat) {
                    (0, minigame_1.createMinigames)();
                }
                break;
            case "/ping":
                telegram_1.default.queueMessage(msg.chatId, "pong");
                break;
            case "/hello":
                telegram_1.default.queueMessage(msg.chatId, "You already had me but you got greedy, now you ruined it");
                break;
            case "/queue":
                (0, queue_1.getQueue)().then((message) => {
                    telegram_1.default.sendMessage(msg.chatId, message);
                }, console.error);
                break;
            case "/listas":
            case "/lists":
                if (game.pickedLists.length > 0) {
                    index_1.List.find({
                        _id: {
                            $in: game.pickedLists,
                        },
                    }).exec((err, upcomingLists) => {
                        let message = "<b>Upcoming lists</b>\n";
                        for (const list of upcomingLists.slice(0, 10)) {
                            message += `- ${list.name}\n`;
                        }
                        telegram_1.default.queueMessage(msg.chatId, message);
                    });
                }
                else {
                    telegram_1.default.queueMessage(msg.chatId, "There are no lists queued, use the /search [message] command to find some");
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
        else if (game.enabled && msg.chatId != config.adminChat) {
            (0, guesses_1.queueGuess)(game, msg);
        }
    }
});
exports.evaluate = evaluate;
//# sourceMappingURL=commands.js.map