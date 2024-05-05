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
exports.logHint = exports.searchList = exports.selectList = exports.rateList = exports.getListScore = exports.getRandomList = void 0;
const moment_1 = __importDefault(require("moment"));
const telegram_1 = __importDefault(require("../../../../connections/telegram"));
const index_1 = require("../../../../models/index");
const some_1 = __importDefault(require("lodash/some"));
const keyboards_1 = require("./keyboards");
const getRandomList = (parameters = {}) => __awaiter(void 0, void 0, void 0, function* () {
    const count = yield index_1.List.countDocuments(parameters).exec();
    if (count === 0)
        return;
    const lists = yield index_1.List.find(parameters)
        .select("-votes")
        .populate("creator")
        .populate("values.creator")
        .limit(1)
        .skip(Math.floor(Math.random() * count))
        .exec();
    return lists[0];
});
exports.getRandomList = getRandomList;
const getListScore = (list) => {
    var _a;
    //((upvotes / (upvotes + downvotes)) + (skips / plays)) / 2
    //(upvote ratio in regards to total votes + skip ratio in regards to plays) / 2
    if (list.votes && list.plays) {
        const upvotes = list.votes.filter((vote) => vote.vote > 0);
        const voteRatio = list.votes.length > 0 ? upvotes.length / list.votes.length : 0;
        const score = (voteRatio + (list.plays - ((_a = list.skips) !== null && _a !== void 0 ? _a : 0)) / list.plays) / 2;
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
const selectList = (game) => __awaiter(void 0, void 0, void 0, function* () {
    const availableLanguages = getAvailableLanguages(game);
    if (game.pickedLists.length > 0) {
        let list = yield index_1.List.findOne({
            _id: game.pickedLists[0],
        })
            .populate("creator")
            .exec();
        if (!list) {
            game.pickedLists.shift();
            console.log(`Moving to next picked list`);
            return yield (0, exports.selectList)(game);
        }
        else {
            if (!(0, some_1.default)(game.playedLists, (playedListId) => playedListId == list._id)) {
                game.playedLists.push(list._id);
            }
            return list;
        }
    }
    else {
        let list = yield (0, exports.getRandomList)({
            _id: { $nin: game.playedLists.concat(game.bannedLists) },
            categories: { $nin: game.disabledCategories },
            language: { $in: availableLanguages },
        });
        if (!list) {
            game.playedLists = [];
            game.cycles++;
            game.lastCycleDate = (0, moment_1.default)().toDate();
            telegram_1.default.queueMessage(game.chat_id, "All lists have been played, a new cycle will now start.");
            list = yield (0, exports.getRandomList)({
                _id: { $nin: game.bannedLists },
                categories: { $nin: game.disabledCategories },
                language: { $in: availableLanguages },
            });
            if (!list) {
                list = yield (0, exports.getRandomList)({
                    _id: { $nin: game.bannedLists },
                    categories: { $nin: game.disabledCategories },
                    language: "EN",
                });
            }
        }
        return list;
    }
});
exports.selectList = selectList;
const searchList = (search, game) => __awaiter(void 0, void 0, void 0, function* () {
    const availableLanguages = getAvailableLanguages(game);
    const regex = search
        .replace(new RegExp("[^a-zA-Z0-9 ]+", "g"), ".*")
        .split(" ")
        .reduce((result, word) => `${result}(?=.*${word}.*)`, "");
    let foundLists = yield index_1.List.find({
        categories: { $nin: game.disabledCategories },
        language: { $in: availableLanguages },
        name: {
            $regex: `.*${regex}.*`,
            $options: "i",
        },
    })
        .select("name")
        .lean();
    if (foundLists.length < 10) {
        const count = yield index_1.List.countDocuments({
            categories: { $nin: game.disabledCategories },
            language: { $in: availableLanguages },
            "values.value": {
                $regex: `.*${regex}.*`,
                $options: "i",
            },
        });
        const valueLists = yield index_1.List.find({
            categories: { $nin: game.disabledCategories },
            language: { $in: availableLanguages },
            "values.value": {
                $regex: `.*${regex}.*`,
                $options: "i",
            },
        })
            .select("name")
            .skip(count > 10 ? Math.floor(Math.random() * (count - 10)) : 0)
            .limit(10 - foundLists.length)
            .lean();
        foundLists.push(...valueLists);
    }
    if (foundLists.length < 10) {
        const count = yield index_1.List.countDocuments({
            language: { $in: availableLanguages },
            categories: {
                $regex: `.*${regex}.*`,
                $options: "i",
            },
        });
        const categoryLists = yield index_1.List.find({
            language: { $in: availableLanguages },
            categories: {
                $regex: `.*${regex}.*`,
                $options: "i",
            },
        })
            .select("name")
            .skip(count > 10 ? Math.floor(Math.random() * (count - 10)) : 0)
            .limit(10 - foundLists.length)
            .lean();
        foundLists.push(...categoryLists);
    }
    return foundLists;
});
exports.searchList = searchList;
/*
const curateList = async () => {
    const list = await lists.getRandomList();
    let msg = listInfo(list);
    msg += ` - Values: ${list.values.length}\n`;
    msg += ` - Plays: ${list.plays}\n`;
    msg += ` - Skips: ${list.skips}\n`;
    msg += ` - Hints: ${list.hints}\n\n`;
    msg += `Rate Difficulty and Update Frequency`;
    bot.notifyAdmins(msg, keyboards.curate(list));
};
curateList();
*/
const logHint = (listId) => __awaiter(void 0, void 0, void 0, function* () {
    let list = yield index_1.List.findOne({ _id: listId }).select("_id name hints").exec();
    if (list) {
        if (!list.hints) {
            list.hints = 0;
        }
        list.hints++;
        try {
            yield list.validate();
            yield list.save();
        }
        catch (err) {
            return telegram_1.default.notifyAdmin(`Hint List Error:\n${list.name}`);
        }
    }
});
exports.logHint = logHint;
//# sourceMappingURL=lists.js.map