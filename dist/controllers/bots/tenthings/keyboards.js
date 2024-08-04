"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.curateListKeyboard = exports.listsKeyboard = exports.likeListKeyboard = exports.confirmBanListKeyboard = exports.banListKeyboard = exports.languageKeyboard = exports.languagesKeyboard = exports.settingsKeyboard = exports.categoriesKeyboard = exports.suggestionKeyboard = exports.playerStatsKeyboard = exports.listStatsKeyboard = exports.statsKeyboard = void 0;
const some_1 = __importDefault(require("lodash/some"));
const find_1 = __importDefault(require("lodash/find"));
const shuffle_1 = __importDefault(require("lodash/shuffle"));
const categories_1 = __importDefault(require("./categories"));
const languages_1 = __importDefault(require("./languages"));
const messages_1 = require("./messages");
const string_helpers_1 = require("../../../utils/string-helpers");
const i18n_1 = __importDefault(require("../../../i18n"));
const emojis_1 = __importDefault(require("./emojis"));
const callbacks_1 = require("./callbacks");
const getButton = (text, callbackData) => ({
    text: text,
    callback_data: JSON.stringify(callbackData),
});
const statsKeyboard = () => {
    return {
        inline_keyboard: [
            [
                getButton("List Stats", { type: callbacks_1.CallbackDataType.StatOptions, id: "list" }),
                getButton("Player Stats", { type: callbacks_1.CallbackDataType.StatOptions, id: "player" }),
            ],
            [
                getButton("Global Stats", { type: callbacks_1.CallbackDataType.StatOptions, id: "global" }),
                getButton("Game Stats", { type: callbacks_1.CallbackDataType.Stats, id: "g" }),
            ],
        ],
    };
};
exports.statsKeyboard = statsKeyboard;
const listStatsKeyboard = (game) => {
    return {
        inline_keyboard: [
            [getButton(`"${game.list.name}"`, { type: callbacks_1.CallbackDataType.Stats, id: `l_${game.list._id}` })],
            [
                getButton("Most Skipped", { type: callbacks_1.CallbackDataType.Stats, id: "mostskipped" }),
                getButton("Least Skipped", { type: callbacks_1.CallbackDataType.Stats, id: "leastskipped" }),
            ],
            [
                getButton("Most Hints Asked", { type: callbacks_1.CallbackDataType.Stats, id: "mosthinted" }),
                getButton("Least Hints Asked", { type: callbacks_1.CallbackDataType.Stats, id: "leasthinted" }),
            ],
            [
                getButton("Least Popular Lists", { type: callbacks_1.CallbackDataType.Stats, id: "leastpopular" }),
                getButton("Most Popular Lists", { type: callbacks_1.CallbackDataType.Stats, id: "mostpopular" }),
            ],
            [
                getButton("Most Played Lists", { type: callbacks_1.CallbackDataType.Stats, id: "mostplayed" }),
                getButton("Most Banned Lists", { type: callbacks_1.CallbackDataType.Stats, id: "mostbanned" }),
            ],
        ],
    };
};
exports.listStatsKeyboard = listStatsKeyboard;
const playerStatsKeyboard = () => {
    return {
        inline_keyboard: [
            [
                getButton("My Stats", { type: callbacks_1.CallbackDataType.Stats, id: "p_" }),
                getButton("Most Minigames Answered", { type: callbacks_1.CallbackDataType.Stats, id: "minigames" }),
            ],
            [
                getButton("Daily Score", { type: callbacks_1.CallbackDataType.Score, id: "d" }),
                getButton("Top Daily Score", { type: callbacks_1.CallbackDataType.Score, id: "td" }),
            ],
            [
                getButton("Top Win Ratio", { type: callbacks_1.CallbackDataType.Score, id: "tr" }),
                getButton("Top Overall Score", { type: callbacks_1.CallbackDataType.Score, id: "ts" }),
            ],
            [
                getButton("Top Average", { type: callbacks_1.CallbackDataType.Score, id: "ta" }),
                getButton("Best No Hint Streak", { type: callbacks_1.CallbackDataType.Stats, id: "hstreak" }),
            ],
            [
                getButton("Best Answer Streak", { type: callbacks_1.CallbackDataType.Stats, id: "astreak" }),
                getButton("Best Play Streak", { type: callbacks_1.CallbackDataType.Stats, id: "pstreak" }),
            ],
            [
                getButton("Most Skips Requested", { type: callbacks_1.CallbackDataType.Stats, id: "skippers" }),
                getButton("Least Skips Requested", { type: callbacks_1.CallbackDataType.Stats, id: "unskippers" }),
            ],
            [
                getButton("Most Days Played", { type: callbacks_1.CallbackDataType.Stats, id: "plays" }),
                getButton("Most Correct Answers", { type: callbacks_1.CallbackDataType.Stats, id: "answers" }),
            ],
            [
                getButton("Most Snubs", { type: callbacks_1.CallbackDataType.Stats, id: "snubs" }),
                getButton("Least Snubs", { type: callbacks_1.CallbackDataType.Stats, id: "unsnubs" }),
            ],
            [
                getButton("Most Hints Asked", { type: callbacks_1.CallbackDataType.Stats, id: "hints" }),
                getButton("Least Hints Asked", { type: callbacks_1.CallbackDataType.Stats, id: "unhints" }),
            ],
            [
                getButton("Most Wins", { type: callbacks_1.CallbackDataType.Stats, id: "wins" }),
                getButton("Least Wins", { type: callbacks_1.CallbackDataType.Stats, id: "unwins" }),
            ],
            [
                getButton("Voted Most on Lists", { type: callbacks_1.CallbackDataType.Stats, id: "mostvoted" }),
                getButton("Voted Least on Lists", { type: callbacks_1.CallbackDataType.Stats, id: "leastvoted" }),
            ],
            [
                getButton("Voted Most Positively on Lists", { type: callbacks_1.CallbackDataType.Stats, id: "mostpositive" }),
                getButton("Voted Most Negatively on Lists", { type: callbacks_1.CallbackDataType.Stats, id: "leastnegative" }),
            ],
        ],
    };
};
exports.playerStatsKeyboard = playerStatsKeyboard;
const suggestionKeyboard = () => ({
    inline_keyboard: [
        [
            getButton("🆕 List", { type: callbacks_1.CallbackDataType.Suggestion, id: "list" }),
            getButton("☑ Feature", { type: callbacks_1.CallbackDataType.Suggestion, id: "feature" }),
        ],
        [
            getButton(`⚠ Typo`, { type: callbacks_1.CallbackDataType.Suggestion, id: "typo" }),
            getButton(`⛔ Bug`, { type: callbacks_1.CallbackDataType.Suggestion, id: "bug" }),
        ],
    ],
});
exports.suggestionKeyboard = suggestionKeyboard;
const categoriesKeyboard = ({ settings, disabledCategories }) => {
    return {
        inline_keyboard: categories_1.default.sort().reduce((result, category, i) => {
            const button = getButton(`${(0, i18n_1.default)(settings.language, `categories.${category}`)}: ${disabledCategories.indexOf(category) < 0 ? emojis_1.default.on : emojis_1.default.off}`, { type: callbacks_1.CallbackDataType.Category, id: category });
            if (i % 2 === 0) {
                result.push([button]);
            }
            else {
                result[result.length - 1].push(button);
            }
            return result;
        }, []),
    };
};
exports.categoriesKeyboard = categoriesKeyboard;
const settingsKeyboard = ({ settings }) => {
    return {
        inline_keyboard: [
            [
                getButton(`${(0, i18n_1.default)(settings.language, "botLanguage")}: ${settings.language}`, {
                    type: callbacks_1.CallbackDataType.Setting,
                    id: "lang",
                }),
                getButton(`${(0, i18n_1.default)(settings.language, "language", { count: settings.languages.length })}: ${settings.languages.join(", ")}`, { type: callbacks_1.CallbackDataType.Setting, id: "langs" }),
            ],
            [
                getButton(`${(0, i18n_1.default)(settings.language, "playerIntro")}: ${settings.intro ? emojis_1.default.on : emojis_1.default.off}`, {
                    type: callbacks_1.CallbackDataType.Setting,
                    id: "intro",
                }),
                getButton(`${(0, i18n_1.default)(settings.language, "sass")}: ${settings.sass ? emojis_1.default.on : emojis_1.default.off}`, {
                    type: callbacks_1.CallbackDataType.Setting,
                    id: "sass",
                }),
            ],
            [
                getButton(`${(0, i18n_1.default)(settings.language, "dailyUpdates")}: ${settings.updates ? emojis_1.default.on : emojis_1.default.off}`, {
                    type: callbacks_1.CallbackDataType.Setting,
                    id: "updates",
                }),
                getButton(`${(0, i18n_1.default)(settings.language, "snubs")}: ${settings.snubs ? emojis_1.default.on : emojis_1.default.off}`, {
                    type: callbacks_1.CallbackDataType.Setting,
                    id: "snubs",
                }),
            ],
        ],
    };
};
exports.settingsKeyboard = settingsKeyboard;
const languagesKeyboard = ({ settings }, availableLanguages) => {
    return {
        inline_keyboard: languages_1.default
            .filter((language) => (0, some_1.default)(availableLanguages, (availableLanguage) => availableLanguage._id === language.code))
            .sort()
            .reduce((result, language, i) => {
            const button = getButton(`${settings.languages.includes(language.code) ? emojis_1.default.on : emojis_1.default.off} ${language.code} - ${language.native} (${(0, find_1.default)(availableLanguages, (availableLanguage) => availableLanguage._id === language.code).count})`, { type: callbacks_1.CallbackDataType.TriviaLanguages, id: language.code });
            if (i % 2 === 0) {
                result.push([button]);
            }
            else {
                result[result.length - 1].push(button);
            }
            return result;
        }, []),
    };
};
exports.languagesKeyboard = languagesKeyboard;
const languageKeyboard = ({ settings }) => {
    return {
        inline_keyboard: languages_1.default
            .filter((language) => ["EN", "NL", "ID", "PT", "TL"].includes(language.code))
            .sort()
            .reduce((result, language, i) => {
            const button = getButton(`${language.code} - ${language.native} ${settings.language === language.code ? emojis_1.default.green : ""}`, { type: callbacks_1.CallbackDataType.BotLanguage, id: language.code });
            if (i % 2 === 0) {
                result.push([button]);
            }
            else {
                result[result.length - 1].push(button);
            }
            return result;
        }, []),
    };
};
exports.languageKeyboard = languageKeyboard;
const banListKeyboard = (language, list) => {
    return {
        inline_keyboard: [
            [getButton((0, i18n_1.default)(language, "sentences.banListQuestion"), { type: callbacks_1.CallbackDataType.Ban, id: `${list._id}` })],
        ],
    };
};
exports.banListKeyboard = banListKeyboard;
const confirmBanListKeyboard = (language, list) => {
    return {
        inline_keyboard: [
            [getButton((0, i18n_1.default)(language, "sentences.banListCommand"), { type: callbacks_1.CallbackDataType.ConfirmBan, id: `${list._id}` })],
        ],
    };
};
exports.confirmBanListKeyboard = confirmBanListKeyboard;
const likeListKeyboard = (game) => {
    return {
        inline_keyboard: [
            [
                getButton(emojis_1.default.thumbsUp, { type: callbacks_1.CallbackDataType.Vote, id: `1_${game.list._id}` }),
                getButton(emojis_1.default.thumbsDown, { type: callbacks_1.CallbackDataType.Vote, id: `-1_${game.list._id}` }),
            ],
        ],
    };
};
exports.likeListKeyboard = likeListKeyboard;
const listsKeyboard = (lists) => ({
    inline_keyboard: (0, shuffle_1.default)(lists)
        .slice(0, 10)
        .sort()
        .reduce((result, list) => {
        result.push([
            getButton(list.name.replace("&", "and"), {
                type: callbacks_1.CallbackDataType.Pick,
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
                type: callbacks_1.CallbackDataType.Vote,
                id: `1_${list._id}`,
            }),
            getButton(`${emojis_1.default.thumbsDown} (${list.votes ? list.votes.filter(({ vote }) => vote < 0).length : 0})`, {
                type: callbacks_1.CallbackDataType.Vote,
                id: `-1_${list._id}`,
            }),
            getButton(emojis_1.default.difficulty0 + (list.difficulty === 0 ? emojis_1.default.green : ""), {
                type: callbacks_1.CallbackDataType.Difficulty,
                id: `0_${list._id}`,
            }),
            getButton(emojis_1.default.difficulty1 + (list.difficulty === 1 ? emojis_1.default.green : ""), {
                type: callbacks_1.CallbackDataType.Difficulty,
                id: `1_${list._id}`,
            }),
            getButton(emojis_1.default.difficulty2 + (list.difficulty === 2 ? emojis_1.default.green : ""), {
                type: callbacks_1.CallbackDataType.Difficulty,
                id: `2_${list._id}`,
            }),
        ],
        [
            getButton((0, string_helpers_1.capitalize)((0, messages_1.getFrequencyMessage)(0)) + (list.frequency === 0 ? emojis_1.default.green : ""), {
                type: callbacks_1.CallbackDataType.Frequency,
                id: `0_${list._id}`,
            }),
            getButton((0, string_helpers_1.capitalize)((0, messages_1.getFrequencyMessage)(1)) + (list.frequency === 1 ? emojis_1.default.green : ""), {
                type: callbacks_1.CallbackDataType.Frequency,
                id: `1_${list._id}`,
            }),
            getButton((0, string_helpers_1.capitalize)((0, messages_1.getFrequencyMessage)(2)) + (list.frequency === 2 ? emojis_1.default.green : ""), {
                type: callbacks_1.CallbackDataType.Frequency,
                id: `2_${list._id}`,
            }),
            getButton((0, string_helpers_1.capitalize)((0, messages_1.getFrequencyMessage)(3)) + (list.frequency === 3 ? emojis_1.default.green : ""), {
                type: callbacks_1.CallbackDataType.Frequency,
                id: `3_${list._id}`,
            }),
        ],
        [
            getButton("Values", { type: callbacks_1.CallbackDataType.Values, id: `${list._id}` }),
            getButton("Stats", { type: callbacks_1.CallbackDataType.Stats, id: `l_${list._id}` }),
            getButton("Desc", { type: callbacks_1.CallbackDataType.Description, id: `${list._id}` }),
            {
                text: "Curate",
                url: `https://belgocanadian.com/tenthings?list=${list._id}`,
            },
        ],
    ],
});
exports.curateListKeyboard = curateListKeyboard;
//# sourceMappingURL=keyboards.js.map