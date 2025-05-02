"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeLists = exports.getList = exports.logHint = exports.searchList = exports.selectList = exports.rateList = exports.getListScore = exports.getRandomList = void 0;
const moment_1 = __importDefault(require("moment"));
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const index_1 = require("../../../models/index");
const some_1 = __importDefault(require("lodash/some"));
const sampleSize_1 = __importDefault(require("lodash/sampleSize"));
const orderBy_1 = __importDefault(require("lodash/orderBy"));
const uniqBy_1 = __importDefault(require("lodash/uniqBy"));
const keyboards_1 = require("./providers/telegram/keyboards");
const i18n_1 = __importDefault(require("../../../i18n"));
const string_helpers_1 = require("../../../utils/string-helpers");
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
    telegram_1.default.sendKeyboard(game.telegramChannel, (0, i18n_1.default)(game.settings.language, "sentences.likeList", { list: (0, string_helpers_1.parseSymbols)(game.list.name) }), (0, keyboards_1.likeListKeyboard)(game));
};
exports.rateList = rateList;
const getAvailableLanguages = ({ settings }) => settings.languages && settings.languages.length > 0 ? settings.languages : ["EN"];
const selectList = async (game) => {
    const availableLanguages = getAvailableLanguages(game);
    if (game.pickedLists.length > 0) {
        let list = await index_1.List.findOne({ _id: game.pickedLists[0] }).populate("creator").exec();
        game.pickedLists.shift();
        if (!list) {
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
            _id: { $nin: game.playedLists.concat(game.bannedLists ?? []) },
            categories: { $nin: game.disabledCategories },
            language: { $in: availableLanguages },
        });
        if (!list) {
            game.playedLists = [];
            game.cycles++;
            game.lastCycleDate = (0, moment_1.default)().toDate();
            game.provider.message(game, (0, i18n_1.default)(game.settings.language, "sentences.allListsPlayed"));
            list = await (0, exports.getRandomList)({
                _id: { $nin: game.bannedLists ?? [] },
                categories: { $nin: game.disabledCategories },
                language: { $in: availableLanguages },
            });
            if (!list) {
                list = await (0, exports.getRandomList)({
                    _id: { $nin: game.bannedLists ?? [] },
                    categories: { $nin: game.disabledCategories },
                    language: "EN",
                });
            }
        }
        return list;
    }
};
exports.selectList = selectList;
const sampleLists = async (query, sampledLists) => {
    let foundLists = await index_1.List.find({ ...query, _id: { $nin: sampledLists.map(({ _id }) => _id) } })
        .select("name")
        .lean();
    return [...sampledLists, ...(0, sampleSize_1.default)(foundLists, 10 - sampledLists.length)];
};
const searchList = async (search, game) => {
    const availableLanguages = getAvailableLanguages(game);
    const sanitizedSearch = (0, string_helpers_1.removeSpecialCharacters)(search);
    let foundLists = await sampleLists({
        categories: { $nin: game.disabledCategories },
        language: { $in: availableLanguages },
        name: { $regex: sanitizedSearch, $options: "i" },
    }, []);
    if (foundLists.length >= 10)
        return foundLists;
    foundLists = await sampleLists({
        categories: { $nin: game.disabledCategories },
        language: { $in: availableLanguages },
        $text: { $search: `"${search}"` },
    }, foundLists);
    if (foundLists.length >= 10)
        return foundLists;
    foundLists = await sampleLists({ language: { $in: availableLanguages }, name: { $regex: sanitizedSearch, $options: "i" } }, foundLists);
    if (foundLists.length >= 10)
        return foundLists;
    foundLists = await sampleLists({ language: { $in: availableLanguages }, $text: { $search: `"${search}"` } }, foundLists);
    return foundLists;
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
const mergeLists = (originalList, mergeList) => {
    const valuesToMerge = mergeList.values.filter((value) => !(0, some_1.default)(originalList.values, (listValue) => listValue.value == value.value));
    const newValues = [
        ...originalList.values.map((originalListValue) => {
            const mergeListValue = mergeList.values.find((valueToMerge) => valueToMerge.value == originalListValue.value);
            return mergeListValue
                ? {
                    ...mergeListValue,
                    ...originalListValue,
                    blurb: originalListValue.blurb || mergeListValue.blurb,
                }
                : originalListValue;
        }),
        ...valuesToMerge,
    ];
    const newVotes = (0, uniqBy_1.default)((0, orderBy_1.default)([...originalList.votes, ...mergeList.votes], ["modifyDate"], ["desc"]), "voter");
    const mergedList = {
        ...originalList,
        description: originalList.description || mergeList.description,
        values: newValues,
        plays: (originalList.plays ?? 0) + (mergeList.plays ?? 0),
        skips: (originalList.skips ?? 0) + (mergeList.skips ?? 0),
        hints: (originalList.hints ?? 0) + (mergeList.hints ?? 0),
        bans: (originalList.bans ?? 0) + (mergeList.bans ?? 0),
        modifyDate: new Date(),
        votes: newVotes,
    };
    return mergedList;
};
exports.mergeLists = mergeLists;
//# sourceMappingURL=lists.js.map