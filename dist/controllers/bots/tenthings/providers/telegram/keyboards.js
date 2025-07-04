"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.delayKeyboard = exports.curateListKeyboard = exports.listsKeyboard = exports.likeListKeyboard = exports.confirmBanListKeyboard = exports.banListKeyboard = exports.languageKeyboard = exports.languagesKeyboard = exports.settingsKeyboard = exports.subcategoriesKeyboard = exports.categoriesKeyboard = exports.playerStatsKeyboard = exports.listStatsKeyboard = exports.statsKeyboard = void 0;
const some_1 = __importDefault(require("lodash/some"));
const find_1 = __importDefault(require("lodash/find"));
const concat_1 = __importDefault(require("lodash/concat"));
const shuffle_1 = __importDefault(require("lodash/shuffle"));
const categories_1 = __importDefault(require("../../categories"));
const languages_1 = __importStar(require("../../languages"));
const messages_1 = require("../../messages");
const string_helpers_1 = require("../../../../../utils/string-helpers");
const i18n_1 = __importDefault(require("../../../../../i18n"));
const emojis_1 = __importDefault(require("../../emojis"));
const callbacks_1 = require("./callbacks");
const getButton = (text, callbackData) => ({
    text: text,
    callback_data: JSON.stringify(callbackData),
});
const statsKeyboard = () => {
    return {
        inline_keyboard: [
            [
                getButton("List Stats", { type: callbacks_1.TelegramCallbackDataType.StatOptions, id: "list" }),
                getButton("Player Stats", { type: callbacks_1.TelegramCallbackDataType.StatOptions, id: "player" }),
            ],
            [
                getButton("Global Stats", { type: callbacks_1.TelegramCallbackDataType.StatOptions, id: "global" }),
                getButton("Game Stats", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "g" }),
            ],
            [getButton("Creator Stats", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "c" })],
        ],
    };
};
exports.statsKeyboard = statsKeyboard;
const listStatsKeyboard = (game) => {
    return {
        inline_keyboard: [
            [getButton(`"${game.list.name}"`, { type: callbacks_1.TelegramCallbackDataType.Stats, id: `l_${game.list._id}` })],
            [
                getButton("Most Skipped", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "mostskipped" }),
                getButton("Least Skipped", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "leastskipped" }),
            ],
            [
                getButton("Most Hints Asked", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "mosthinted" }),
                getButton("Least Hints Asked", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "leasthinted" }),
            ],
            [
                getButton("Most Played Lists", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "mostplayed" }),
            ],
        ],
    };
};
exports.listStatsKeyboard = listStatsKeyboard;
const playerStatsKeyboard = () => {
    return {
        inline_keyboard: [
            [
                getButton("My Stats", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "p_" }),
                getButton("Most Minigames Answered", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "minigames" }),
            ],
            [
                getButton("Daily Score", { type: callbacks_1.TelegramCallbackDataType.Score, id: "d" }),
                getButton("Top Daily Score", { type: callbacks_1.TelegramCallbackDataType.Score, id: "td" }),
            ],
            [
                getButton("Top Win Ratio", { type: callbacks_1.TelegramCallbackDataType.Score, id: "tr" }),
                getButton("Top Overall Score", { type: callbacks_1.TelegramCallbackDataType.Score, id: "ts" }),
            ],
            [
                getButton("Top Average", { type: callbacks_1.TelegramCallbackDataType.Score, id: "ta" }),
                getButton("Best No Hint Streak", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "hstreak" }),
            ],
            [
                getButton("Best Answer Streak", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "astreak" }),
                getButton("Best Play Streak", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "pstreak" }),
            ],
            [
                getButton("Most Skips Requested", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "skippers" }),
                getButton("Least Skips Requested", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "unskippers" }),
            ],
            [
                getButton("Most Days Played", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "plays" }),
                getButton("Most Correct Answers", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "answers" }),
            ],
            [
                getButton("Most Snubs", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "snubs" }),
                getButton("Least Snubs", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "unsnubs" }),
            ],
            [
                getButton("Most Hints Asked", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "hints" }),
                getButton("Least Hints Asked", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "unhints" }),
            ],
            [
                getButton("Most Wins", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "wins" }),
                getButton("Least Wins", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "unwins" }),
            ],
            [
                getButton("Voted Most on Lists", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "mostvoted" }),
                getButton("Voted Least on Lists", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "leastvoted" }),
            ],
            [
                getButton("Voted Most Positively on Lists", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "mostpositive" }),
                getButton("Voted Most Negatively on Lists", { type: callbacks_1.TelegramCallbackDataType.Stats, id: "leastnegative" }),
            ],
        ],
    };
};
exports.playerStatsKeyboard = playerStatsKeyboard;
const categoriesKeyboard = ({ settings, disabledCategories }) => {
    return {
        inline_keyboard: (0, concat_1.default)(Object.keys(categories_1.default)
            .sort((category1, category2) => (0, i18n_1.default)(settings.language, `${category1}.name`, { ns: "categories" }) >
            (0, i18n_1.default)(settings.language, `${category2}.name`, { ns: "categories" })
            ? 1
            : -1)
            .reduce((result, category, i) => {
            const allSelected = !categories_1.default[category].some((subcategory) => disabledCategories.includes(`${category}.${subcategory}`));
            const noneSelected = categories_1.default[category].every((subcategory) => disabledCategories.includes(`${category}.${subcategory}`));
            const button = getButton(`${(0, i18n_1.default)(settings.language, `${category}.name`, { ns: "categories" })}: ${allSelected ? emojis_1.default.green : noneSelected ? emojis_1.default.off : emojis_1.default.on}`, { type: callbacks_1.TelegramCallbackDataType.Category, id: category });
            if (i % 2 === 0) {
                result.push([button]);
            }
            else {
                result[result.length - 1].push(button);
            }
            return result;
        }, []), [
            [
                getButton(`⬅️ ${(0, i18n_1.default)(settings.language, "settings")}`, {
                    type: callbacks_1.TelegramCallbackDataType.Setting,
                    id: "settings",
                }),
            ],
        ]),
    };
};
exports.categoriesKeyboard = categoriesKeyboard;
const subcategoriesKeyboard = ({ settings, disabledCategories }, category) => {
    const allSelected = !categories_1.default[category].some((subcategory) => disabledCategories.includes(`${category}.${subcategory}`));
    return {
        inline_keyboard: (0, concat_1.default)([
            [
                getButton(`${(0, i18n_1.default)(settings.language, allSelected ? "None" : "All")}`, {
                    type: callbacks_1.TelegramCallbackDataType.Subcategory,
                    id: category,
                }),
            ],
        ], categories_1.default[category]
            .sort((subcategory1, subcategory2) => (0, i18n_1.default)(settings.language, `${category}.${subcategory1}`, { ns: "categories" }) >
            (0, i18n_1.default)(settings.language, `${category}.${subcategory2}`, { ns: "categories" })
            ? 1
            : -1)
            .reduce((result, subcategory, i) => {
            const button = getButton(`${(0, i18n_1.default)(settings.language, `${category}.${subcategory}`, { ns: "categories" })}: ${disabledCategories.includes(`${category}.${subcategory}`) ? emojis_1.default.off : emojis_1.default.on}`, { type: callbacks_1.TelegramCallbackDataType.Subcategory, id: `${category}.${subcategory}` });
            if (i % 2 === 0) {
                result.push([button]);
            }
            else {
                result[result.length - 1].push(button);
            }
            return result;
        }, []), [
            [
                getButton(`⬅️ ${(0, i18n_1.default)(settings.language, "category", { count: 0 })}`, {
                    type: callbacks_1.TelegramCallbackDataType.Setting,
                    id: "cats",
                }),
            ],
        ]),
    };
};
exports.subcategoriesKeyboard = subcategoriesKeyboard;
const settingsKeyboard = ({ settings }) => {
    return {
        inline_keyboard: [
            [
                getButton(`${(0, i18n_1.default)(settings.language, "botLanguage")}: ${settings.language}`, {
                    type: callbacks_1.TelegramCallbackDataType.Setting,
                    id: "lang",
                }),
                getButton(`${(0, i18n_1.default)(settings.language, "language", { count: settings.languages.length })}: ${settings.languages.join(", ")}`, { type: callbacks_1.TelegramCallbackDataType.Setting, id: "langs" }),
            ],
            [
                getButton(`${(0, i18n_1.default)(settings.language, "playerIntro")}: ${settings.intro ? emojis_1.default.on : emojis_1.default.off}`, {
                    type: callbacks_1.TelegramCallbackDataType.Setting,
                    id: "intro",
                }),
                getButton(`${(0, i18n_1.default)(settings.language, "sass")}: ${settings.sass ? emojis_1.default.on : emojis_1.default.off}`, {
                    type: callbacks_1.TelegramCallbackDataType.Setting,
                    id: "sass",
                }),
            ],
            [
                getButton(`${(0, i18n_1.default)(settings.language, "dailyUpdates")}: ${settings.updates ? emojis_1.default.on : emojis_1.default.off}`, {
                    type: callbacks_1.TelegramCallbackDataType.Setting,
                    id: "updates",
                }),
                getButton(`${(0, i18n_1.default)(settings.language, "snubs")}: ${settings.snubs ? emojis_1.default.on : emojis_1.default.off}`, {
                    type: callbacks_1.TelegramCallbackDataType.Setting,
                    id: "snubs",
                }),
            ],
            [
                getButton(`${(0, i18n_1.default)(settings.language, "skipDelay")}: ${settings.skipDelay}s`, {
                    type: callbacks_1.TelegramCallbackDataType.Setting,
                    id: "skipDelay",
                }),
                getButton(`${(0, i18n_1.default)(settings.language, "vetoDelay")}: ${settings.vetoDelay}s`, {
                    type: callbacks_1.TelegramCallbackDataType.Setting,
                    id: "vetoDelay",
                }),
                getButton(`${(0, i18n_1.default)(settings.language, "hintDelay")}: ${settings.hintDelay}s`, {
                    type: callbacks_1.TelegramCallbackDataType.Setting,
                    id: "hintDelay",
                }),
            ],
            [
                getButton(`${(0, i18n_1.default)(settings.language, "category", { count: 0 })}`, {
                    type: callbacks_1.TelegramCallbackDataType.Setting,
                    id: "cats",
                }),
            ],
        ],
    };
};
exports.settingsKeyboard = settingsKeyboard;
const languagesKeyboard = ({ settings }, availableLanguages) => {
    return {
        inline_keyboard: (0, concat_1.default)(languages_1.default
            .filter((language) => (0, some_1.default)(availableLanguages, (availableLanguage) => availableLanguage._id === language.code))
            .filter((language) => (0, languages_1.isSupportedLanguage)(language.code))
            .sort()
            .reduce((result, language, i) => {
            const button = getButton(`${settings.languages.includes(language.code) ? emojis_1.default.on : emojis_1.default.off} ${language.code} - ${language.native} (${(0, find_1.default)(availableLanguages, (availableLanguage) => availableLanguage._id === language.code).count})`, { type: callbacks_1.TelegramCallbackDataType.TriviaLanguages, id: language.code });
            if (i % 2 === 0) {
                result.push([button]);
            }
            else {
                result[result.length - 1].push(button);
            }
            return result;
        }, []), [
            [
                getButton(`⬅️ ${(0, i18n_1.default)(settings.language, "settings")}`, {
                    type: callbacks_1.TelegramCallbackDataType.Setting,
                    id: "settings",
                }),
            ],
        ]),
    };
};
exports.languagesKeyboard = languagesKeyboard;
const languageKeyboard = ({ settings }) => {
    return {
        inline_keyboard: (0, concat_1.default)(languages_1.default
            .filter((language) => (0, languages_1.isBotLanguage)(language.code))
            .sort()
            .reduce((result, language, i) => {
            const button = getButton(`${language.code} - ${language.native} ${settings.language === language.code ? emojis_1.default.green : ""}`, { type: callbacks_1.TelegramCallbackDataType.BotLanguage, id: language.code });
            if (i % 2 === 0) {
                result.push([button]);
            }
            else {
                result[result.length - 1].push(button);
            }
            return result;
        }, []), [
            [
                getButton(`⬅️ ${(0, i18n_1.default)(settings.language, "settings")}`, {
                    type: callbacks_1.TelegramCallbackDataType.Setting,
                    id: "settings",
                }),
            ],
        ]),
    };
};
exports.languageKeyboard = languageKeyboard;
const banListKeyboard = (language, list) => {
    return {
        inline_keyboard: [
            [
                getButton((0, i18n_1.default)(language, "sentences.banListQuestion"), {
                    type: callbacks_1.TelegramCallbackDataType.Ban,
                    id: `${list._id}`,
                }),
            ],
        ],
    };
};
exports.banListKeyboard = banListKeyboard;
const confirmBanListKeyboard = (language, list) => {
    return {
        inline_keyboard: [
            [
                getButton((0, i18n_1.default)(language, "sentences.banListCommand"), {
                    type: callbacks_1.TelegramCallbackDataType.ConfirmBan,
                    id: `${list._id}`,
                }),
            ],
        ],
    };
};
exports.confirmBanListKeyboard = confirmBanListKeyboard;
const likeListKeyboard = (game) => {
    return {
        inline_keyboard: [
            [
                getButton(emojis_1.default.thumbsUp, { type: callbacks_1.TelegramCallbackDataType.Vote, id: `1_${game.list._id}` }),
                getButton(emojis_1.default.thumbsDown, { type: callbacks_1.TelegramCallbackDataType.Vote, id: `-1_${game.list._id}` }),
            ],
        ],
    };
};
exports.likeListKeyboard = likeListKeyboard;
const listsKeyboard = (lists) => ({
    inline_keyboard: (0, shuffle_1.default)(lists)
        .slice(0, 10)
        .reduce((result, list) => {
        result.push([
            getButton((0, string_helpers_1.parseSymbols)(list.name.replace("&", "and")), {
                type: callbacks_1.TelegramCallbackDataType.Pick,
                id: `${list._id}`,
            }),
        ]);
        return result;
    }, []),
});
exports.listsKeyboard = listsKeyboard;
const curateListKeyboard = (list) => ({
    inline_keyboard: [
        [
            getButton(`${emojis_1.default.thumbsUp} (${list.votes ? list.votes.filter(({ vote }) => vote > 0).length : 0})`, {
                type: callbacks_1.TelegramCallbackDataType.Vote,
                id: `1_${list._id}`,
            }),
            getButton(`${emojis_1.default.thumbsDown} (${list.votes ? list.votes.filter(({ vote }) => vote < 0).length : 0})`, {
                type: callbacks_1.TelegramCallbackDataType.Vote,
                id: `-1_${list._id}`,
            }),
            getButton(emojis_1.default.difficulty0 + (list.difficulty === 0 ? emojis_1.default.green : ""), {
                type: callbacks_1.TelegramCallbackDataType.Difficulty,
                id: `0_${list._id}`,
            }),
            getButton(emojis_1.default.difficulty1 + (list.difficulty === 1 ? emojis_1.default.green : ""), {
                type: callbacks_1.TelegramCallbackDataType.Difficulty,
                id: `1_${list._id}`,
            }),
            getButton(emojis_1.default.difficulty2 + (list.difficulty === 2 ? emojis_1.default.green : ""), {
                type: callbacks_1.TelegramCallbackDataType.Difficulty,
                id: `2_${list._id}`,
            }),
        ],
        [
            getButton((0, string_helpers_1.capitalize)((0, messages_1.getFrequencyMessage)(0)) + (list.frequency === 0 ? emojis_1.default.green : ""), {
                type: callbacks_1.TelegramCallbackDataType.Frequency,
                id: `0_${list._id}`,
            }),
            getButton((0, string_helpers_1.capitalize)((0, messages_1.getFrequencyMessage)(1)) + (list.frequency === 1 ? emojis_1.default.green : ""), {
                type: callbacks_1.TelegramCallbackDataType.Frequency,
                id: `1_${list._id}`,
            }),
            getButton((0, string_helpers_1.capitalize)((0, messages_1.getFrequencyMessage)(2)) + (list.frequency === 2 ? emojis_1.default.green : ""), {
                type: callbacks_1.TelegramCallbackDataType.Frequency,
                id: `2_${list._id}`,
            }),
            getButton((0, string_helpers_1.capitalize)((0, messages_1.getFrequencyMessage)(3)) + (list.frequency === 3 ? emojis_1.default.green : ""), {
                type: callbacks_1.TelegramCallbackDataType.Frequency,
                id: `3_${list._id}`,
            }),
        ],
        [
            getButton("Values", { type: callbacks_1.TelegramCallbackDataType.Values, id: `${list._id}` }),
            getButton("Stats", { type: callbacks_1.TelegramCallbackDataType.Stats, id: `l_${list._id}` }),
            getButton("Desc", { type: callbacks_1.TelegramCallbackDataType.Description, id: `${list._id}` }),
            {
                text: "Curate",
                url: `https://belgocanadian.com/tenthings?list=${list._id}`,
            },
        ],
    ],
});
exports.curateListKeyboard = curateListKeyboard;
const delayKeyboard = (game, type) => {
    return {
        inline_keyboard: [
            [
                getButton(`0${game.settings[type] === 0 ? ` ${emojis_1.default.on}` : ""}`, { type, id: "0" }),
                getButton(`2${game.settings[type] === 2 ? ` ${emojis_1.default.on}` : ""}`, { type, id: "2" }),
                getButton(`3${game.settings[type] === 3 ? ` ${emojis_1.default.on}` : ""}`, { type, id: "3" }),
                getButton(`5${game.settings[type] === 5 ? ` ${emojis_1.default.on}` : ""}`, { type, id: "5" }),
            ],
            [
                getButton(`10${game.settings[type] === 10 ? ` ${emojis_1.default.on}` : ""}`, { type, id: "10" }),
                getButton(`15${game.settings[type] === 15 ? ` ${emojis_1.default.on}` : ""}`, { type, id: "15" }),
                getButton(`20${game.settings[type] === 20 ? ` ${emojis_1.default.on}` : ""}`, { type, id: "20" }),
                getButton(`30${game.settings[type] === 30 ? ` ${emojis_1.default.on}` : ""}`, { type, id: "30" }),
            ],
            [
                getButton(`⬅️ ${(0, i18n_1.default)(game.settings.language, "settings")}`, {
                    type: callbacks_1.TelegramCallbackDataType.Setting,
                    id: "settings",
                }),
            ],
        ],
    };
};
exports.delayKeyboard = delayKeyboard;
//# sourceMappingURL=keyboards.js.map