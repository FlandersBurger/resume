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
exports.tenthingsListsRoute = void 0;
const express_1 = require("express");
const mongoose_1 = require("mongoose");
const moment_1 = __importDefault(require("moment"));
const telegram_1 = __importDefault(require("../../../../connections/telegram"));
const { getAuthor, getBookCover } = require("../../../../connections/goodreads");
const { getMovieDbImage } = require("../../../../connections/moviedb");
const { getMusicVideo } = require("../../../../connections/youtube");
const { getUnsplashImage } = require("../../../../connections/unsplash");
const { getWikiImage } = require("../../../../connections/wikipedia");
const { getPexelsImage } = require("../../../../connections/pexels");
const index_1 = require("../../../../models/index");
const string_helpers_1 = require("../../../../utils/string-helpers");
const messages_1 = require("../../../../controllers/bots/tenthings/messages");
const lists_1 = require("../../../../controllers/bots/tenthings/lists");
const keyboards_1 = require("../../../../controllers/bots/tenthings/keyboards");
exports.tenthingsListsRoute = (0, express_1.Router)();
exports.tenthingsListsRoute.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    if (!res.locals.isAuthorized)
        return res.sendStatus(401);
    const lists = yield index_1.List.find({})
        .select("_id plays skips score values date modifyDate creator name description categories language isDynamic frequency difficulty")
        .limit(parseInt(req.query.limit) || 0)
        .skip(parseInt(req.query.limit) * (parseInt(((_a = req.query.page) !== null && _a !== void 0 ? _a : 0)) - 1) || 0)
        .populate("creator", "username")
        .lean({ virtuals: true });
    res.json(lists.map(formatList));
}));
exports.tenthingsListsRoute.get("/:id/report/:user", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!res.locals.isAuthorized)
        return res.sendStatus(401);
    const list = yield index_1.List.findOne({ _id: req.params.id });
    if (!list)
        return res.sendStatus(404);
    if (list) {
        const user = yield index_1.User.findOne({ _id: req.params.user });
        if (!user)
            return res.sendStatus(400);
        telegram_1.default.notifyAdmins("Check: " + list.name + " reported by " + user.username);
    }
}));
exports.tenthingsListsRoute.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!res.locals.isAuthorized)
        return res.sendStatus(401);
    const list = yield index_1.List.findOne({ _id: req.params.id })
        .populate("creator", "_id username displayName")
        .populate("values.creator", "_id username displayName")
        .lean({ virtuals: true });
    if (!list)
        return res.sendStatus(404);
    return res.json(Object.assign(Object.assign({}, list), { values: list.values.map((value) => (Object.assign(Object.assign({}, value), { creator: value.creator ? value.creator : list.creator }))), upvotes: list.votes ? list.votes.filter(({ vote }) => vote > 0).length : 0, downvotes: list.votes ? list.votes.filter(({ vote }) => vote < 0).length : 0, playRatio: list.plays ? (list.plays - list.skips) / list.plays : 0, calculatedDifficulty: list.plays ? list.hints / 6 / (list.plays - list.skips) : 0 }));
}));
exports.tenthingsListsRoute.post("/:id/blurbs/:type", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!res.locals.isAuthorized)
        return res.sendStatus(401);
    let list = yield index_1.List.findOne({ _id: req.params.id });
    if (list) {
        let changed = false;
        for (let value of list.values) {
            if (!value.blurb) {
                let blurbUrl;
                switch (req.params.type) {
                    case "movies":
                        blurbUrl = yield getMovieDbImage(value.value, "movie");
                        break;
                    case "tv":
                        blurbUrl = yield getMovieDbImage(value.value, "tv");
                        break;
                    case "actors":
                        blurbUrl = yield getMovieDbImage(value.value, "person");
                        break;
                    case "books":
                        const author = list.name.indexOf("Written by ") === 0 ? list.name.substring(11) : "";
                        const goodreadsAuthor = author ? yield getAuthor(author) : "";
                        blurbUrl = yield getBookCover(value.value, goodreadsAuthor);
                        break;
                    case "musicvideos":
                        const artist = list.name.substring(0, list.name.indexOf(" - ")).replace(/\s/, "+");
                        blurbUrl = yield getMusicVideo(value.value, artist);
                        break;
                    case "wiki":
                        blurbUrl = yield getWikiImage(value.value);
                        break;
                    case "unsplash":
                        blurbUrl = yield getUnsplashImage(value.value);
                        break;
                    case "pexels":
                        blurbUrl = yield getPexelsImage(value.value);
                        break;
                    default:
                        break;
                }
                if (blurbUrl) {
                    value.blurb = blurbUrl;
                    changed = true;
                }
            }
        }
        if (changed) {
            try {
                yield list.save();
            }
            catch (error) {
                telegram_1.default.notifyAdmin(`Error saving ${list.name} ${list._id}`);
                console.error(error);
            }
            res.sendStatus(200);
        }
        else {
            res.sendStatus(304);
        }
    }
    else {
        res.sendStatus(404);
    }
}));
exports.tenthingsListsRoute.post("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!res.locals.isAuthorized)
        return res.sendStatus(401);
    const list = yield index_1.List.findOne({ _id: req.params.id });
    if (!list)
        return res.sendStatus(404);
    list.values.filter(({ creator }) => !creator).forEach((value) => (value.creator = list.creator));
    Object.assign(list, req.body);
    yield list.save();
    res.sendStatus(200);
}));
exports.tenthingsListsRoute.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!res.locals.isAuthorized)
        return res.sendStatus(401);
    var yesterday = (0, moment_1.default)().subtract(1, "days");
    var previousModifyDate = (0, moment_1.default)(req.body.list.modifyDate);
    req.body.list.modifyDate = new Date();
    req.body.list.search = (0, string_helpers_1.removeAllButLetters)(req.body.list.name);
    req.body.list.score = (0, lists_1.getListScore)(req.body.list);
    req.body.list.values
        .filter(({ creator }) => !creator)
        .forEach((value) => (value.creator = req.body.list.creator));
    const updatedList = yield index_1.List.findByIdAndUpdate(req.body.list._id ? req.body.list._id : new mongoose_1.Types.ObjectId(), req.body.list, { new: true, upsert: true });
    const list = yield index_1.List.findOne({ _id: updatedList._id }).populate("creator");
    if (!list)
        return res.sendStatus(500);
    if (!req.body.list._id) {
        telegram_1.default.notifyAdmins(`<u>List Created</u>\n${(0, messages_1.getListMessage)(list)}`, (0, keyboards_1.curateListKeyboard)(list));
        telegram_1.default.notifyCosmicForce(`<u>List Created</u>\n${(0, messages_1.getListMessage)(list)}`, (0, keyboards_1.curateListKeyboard)(list));
    }
    else if (previousModifyDate < yesterday) {
        telegram_1.default.notifyAdmins(`<u>List Updated</u>\nUpdated by <i>${req.body.user.username}</i>\n${(0, messages_1.getListMessage)(list)}`, (0, keyboards_1.curateListKeyboard)(list));
    }
    res.json(formatList(list));
}));
exports.tenthingsListsRoute.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    if (!res.locals.isAuthorized)
        return res.sendStatus(401);
    const list = yield index_1.List.findOne({ _id: req.params.id });
    if (list) {
        if (res.locals.isAdmin || ((_b = res.locals.user) === null || _b === void 0 ? void 0 : _b._id) === list.creator) {
            const deletedList = yield index_1.List.findByIdAndRemove({ _id: req.params.id });
            telegram_1.default.notifyAdmins(list.values
                .sort((a, b) => (a.value < b.value ? -1 : 1))
                .reduce((message, item) => `${message}- ${item.value}\n`, `<b>${list.name}</b>\ndeleted by ${res.locals.user.username}\n`));
            res.sendStatus(200);
        }
        else {
            telegram_1.default.notifyAdmins(`Unauthorized deletion (not an admin nor the creator):\n<b>${list.name}</b> by ${res.locals.user.username} (${res.locals.user._id})\nIf it persists -> Block them at https://belgocanadian.com/tenthings-admin`);
            res.sendStatus(200);
        }
    }
}));
exports.tenthingsListsRoute.get("/names", (_, res) => {
    if (!res.locals.isAuthorized)
        return res.sendStatus(401);
    const listNames = index_1.List.find({}).select("_id name");
    res.json(listNames);
});
const formatList = (list) => ({
    _id: list._id,
    plays: list.plays,
    skips: list.skips,
    score: list.score,
    playRatio: list.playRatio,
    answers: list.answers,
    values: list.values.map((item) => item.value),
    blurbs: list.blurbs,
    date: list.date,
    modifyDate: list.modifyDate,
    creator: list.creator.username,
    name: list.name,
    description: list.description,
    categories: list.categories,
    isDynamic: list.isDynamic,
    language: list.language,
    difficulty: list.difficulty,
    frequency: list.frequency,
});
//# sourceMappingURL=lists.js.map