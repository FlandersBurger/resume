"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatList = exports.getList = exports.logHint = exports.searchList = exports.selectList = exports.rateList = exports.getListScore = exports.getRandomList = void 0;
const moment_1 = __importDefault(require("moment"));
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const index_1 = require("../../../models/index");
const some_1 = __importDefault(require("lodash/some"));
const sampleSize_1 = __importDefault(require("lodash/sampleSize"));
const keyboards_1 = require("./keyboards");
const getRandomList = async (parameters = {}) => {
    const count = await index_1.List.countDocuments(parameters).exec();
    if (count === 0)
        return;
    const lists = await index_1.List.find(parameters)
        .select("-votes")
        .populate("creator")
        .populate("values.creator")
        .limit(1)
        .skip(Math.floor(Math.random() * count))
        .exec();
    return lists[0];
};
exports.getRandomList = getRandomList;
const getListScore = (list) => {
    if (list.votes && list.plays) {
        const upvotes = list.votes.filter((vote) => vote.vote > 0);
        const voteRatio = list.votes.length > 0 ? upvotes.length / list.votes.length : 0;
        const score = (voteRatio + (list.plays - (list.skips ?? 0)) / list.plays) / 2;
        return score ? score : 0;
    }
    return 0;
};
exports.getListScore = getListScore;
const rateList = (game) => {
    telegram_1.default.sendKeyboard(game.chat_id, `Did you like <b>${game.list.name}</b>?`, (0, keyboards_1.likeListKeyboard)(game));
};
exports.rateList = rateList;
const getAvailableLanguages = ({ settings }) => settings.languages && settings.languages.length > 0 ? settings.languages : ["EN"];
const selectList = async (game) => {
    const availableLanguages = getAvailableLanguages(game);
    if (game.pickedLists.length > 0) {
        let list = await index_1.List.findOne({
            _id: game.pickedLists[0],
        })
            .populate("creator")
            .exec();
        if (!list) {
            game.pickedLists.shift();
            console.log(`Moving to next picked list`);
            return await (0, exports.selectList)(game);
        }
        else {
            if (!(0, some_1.default)(game.playedLists, (playedListId) => playedListId == list._id)) {
                game.playedLists.push(list._id);
            }
            return list;
        }
    }
    else {
        let list = await (0, exports.getRandomList)({
            _id: { $nin: game.playedLists.concat(game.bannedLists) },
            categories: { $nin: game.disabledCategories },
            language: { $in: availableLanguages },
        });
        if (!list) {
            game.playedLists = [];
            game.cycles++;
            game.lastCycleDate = (0, moment_1.default)().toDate();
            telegram_1.default.queueMessage(game.chat_id, "All lists have been played, a new cycle will now start.");
            list = await (0, exports.getRandomList)({
                _id: { $nin: game.bannedLists },
                categories: { $nin: game.disabledCategories },
                language: { $in: availableLanguages },
            });
            if (!list) {
                list = await (0, exports.getRandomList)({
                    _id: { $nin: game.bannedLists },
                    categories: { $nin: game.disabledCategories },
                    language: "EN",
                });
            }
        }
        return list;
    }
};
exports.selectList = selectList;
const searchList = async (search, game) => {
    const availableLanguages = getAvailableLanguages(game);
    const foundLists = await index_1.List.find({
        categories: { $nin: game.disabledCategories },
        language: { $in: availableLanguages },
        $text: { $search: `"${search}"` },
    })
        .select("name")
        .lean();
    return (0, sampleSize_1.default)(foundLists, 10);
};
exports.searchList = searchList;
const logHint = async (listId) => {
    let list = await index_1.List.findOne({ _id: listId }).select("_id name hints").exec();
    if (list) {
        if (!list.hints) {
            list.hints = 0;
        }
        list.hints++;
        try {
            await list.validate();
            await list.save();
        }
        catch (err) {
            return telegram_1.default.notifyAdmin(`Hint List Error:\n${list.name}`);
        }
    }
};
exports.logHint = logHint;
const getList = async (listId) => {
    const list = await index_1.List.findOne({ _id: listId })
        .populate("creator", "_id username displayName")
        .populate("values.creator", "_id username displayName")
        .lean({ virtuals: true });
    if (!list)
        return;
    return list;
};
exports.getList = getList;
const formatList = (list) => ({
    ...list,
    values: list.values.map((value) => ({
        ...value,
        creator: value.creator ? value.creator : list.creator,
    })),
    upvotes: list.votes ? list.votes.filter(({ vote }) => vote > 0).length : 0,
    downvotes: list.votes ? list.votes.filter(({ vote }) => vote < 0).length : 0,
    playRatio: list.plays ? (list.plays - list.skips) / list.plays : 0,
    calculatedDifficulty: list.plays ? list.hints / 6 / (list.plays - list.skips) : 0,
});
exports.formatList = formatList;
//# sourceMappingURL=lists.js.map