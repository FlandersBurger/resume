"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenthingsListsRoute = void 0;
const express_1 = require("express");
const mongoose_1 = require("mongoose");
const moment_1 = __importDefault(require("moment"));
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const { getAuthor, getBookCover } = require("../../../connections/goodreads");
const { getMovieDbImage } = require("../../../connections/moviedb");
const { getMusicVideo } = require("../../../connections/youtube");
const { getUnsplashImage } = require("../../../connections/unsplash");
const { getWikiImage } = require("../../../connections/wikipedia");
const { getPexelsImage } = require("../../../connections/pexels");
const index_1 = require("../../../models/index");
const string_helpers_1 = require("../../../utils/string-helpers");
const messages_1 = require("../../bots/tenthings/messages");
const lists_1 = require("../../bots/tenthings/lists");
const keyboards_1 = require("../../bots/tenthings/keyboards");
exports.tenthingsListsRoute = (0, express_1.Router)();
exports.tenthingsListsRoute.get("/", async (req, res) => {
    if (!res.locals.isAuthorized)
        return res.sendStatus(401);
    const page = parseInt(req.query.page ?? 1);
    const lists = await index_1.List.find(parseQuery(req.query))
        .select("_id plays skips score values date modifyDate creator name description categories language isDynamic frequency difficulty")
        .limit(parseInt(req.query.limit) || 0)
        .skip(parseInt(req.query.limit) * (page - 1) || 0)
        .sort({ [req.query.sort_by ?? "date"]: parseInt(req.query.order_by ?? -1) })
        .populate("creator", "username")
        .lean({ virtuals: true });
    res.json({ result: lists.map(formatList), nextPage: page + 1 });
});
exports.tenthingsListsRoute.get("/:id/report/:user", async (req, res) => {
    if (!res.locals.isAuthorized)
        return res.sendStatus(401);
    const list = await index_1.List.findOne({ _id: req.params.id });
    if (!list)
        return res.sendStatus(404);
    if (list) {
        const user = await index_1.User.findOne({ _id: req.params.user });
        if (!user)
            return res.sendStatus(400);
        telegram_1.default.notifyAdmins("Check: " + list.name + " reported by " + user.username);
    }
});
exports.tenthingsListsRoute.get("/:id", async (req, res) => {
    if (!res.locals.isAuthorized)
        return res.sendStatus(401);
    const list = await (0, lists_1.getList)(req.params.id);
    if (!list)
        return res.sendStatus(404);
    return res.json(list);
});
exports.tenthingsListsRoute.post("/:id/blurbs/:type", async (req, res) => {
    if (!res.locals.isAuthorized)
        return res.sendStatus(401);
    let list = await index_1.List.findOne({ _id: req.params.id });
    if (list) {
        let changed = false;
        for (let value of list.values) {
            if (!value.blurb) {
                let blurbUrl;
                switch (req.params.type) {
                    case "movies":
                        blurbUrl = await getMovieDbImage(value.value, "movie");
                        break;
                    case "tv":
                        blurbUrl = await getMovieDbImage(value.value, "tv");
                        break;
                    case "actors":
                        blurbUrl = await getMovieDbImage(value.value, "person");
                        break;
                    case "books":
                        const author = list.name.indexOf("Written by ") === 0 ? list.name.substring(11) : "";
                        const goodreadsAuthor = author ? await getAuthor(author) : "";
                        blurbUrl = await getBookCover(value.value, goodreadsAuthor);
                        break;
                    case "musicvideos":
                        const artist = list.name.substring(0, list.name.indexOf(" - ")).replace(/\s/, "+");
                        blurbUrl = await getMusicVideo(value.value, artist);
                        break;
                    case "wiki":
                        blurbUrl = await getWikiImage(value.value);
                        break;
                    case "unsplash":
                        blurbUrl = await getUnsplashImage(value.value);
                        break;
                    case "pexels":
                        blurbUrl = await getPexelsImage(value.value);
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
                await list.save();
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
});
exports.tenthingsListsRoute.post("/:id", async (req, res) => {
    if (!res.locals.isAuthorized)
        return res.sendStatus(401);
    const list = await index_1.List.findOne({ _id: req.params.id });
    if (!list)
        return res.sendStatus(404);
    list.values.filter(({ creator }) => !creator).forEach((value) => (value.creator = list.creator));
    Object.assign(list, req.body);
    await list.save();
    const updatedList = await (0, lists_1.getList)(req.params.id);
    if (!updatedList)
        return res.sendStatus(404);
    return res.json(updatedList);
});
exports.tenthingsListsRoute.put("/", async (req, res) => {
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
    const updatedList = await index_1.List.findByIdAndUpdate(req.body.list._id ? req.body.list._id : new mongoose_1.Types.ObjectId(), req.body.list, { new: true, upsert: true });
    const list = await index_1.List.findOne({ _id: updatedList._id }).populate("creator");
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
});
exports.tenthingsListsRoute.delete("/:id", async (req, res) => {
    if (!res.locals.isAuthorized)
        return res.sendStatus(401);
    const list = await index_1.List.findOne({ _id: req.params.id });
    if (list) {
        if (res.locals.isAdmin || res.locals.user?._id === list.creator) {
            const deletedList = await index_1.List.findByIdAndRemove({ _id: req.params.id });
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
});
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
const parseQuery = (query) => {
    return Object.keys(query).reduce((params, key) => {
        switch (key) {
            case "search":
                if (query[key])
                    Object.assign(params, { $text: { $search: `"${query[key]}"` } });
                break;
            case "categories":
            case "language":
                const values = query[key].split(",");
                Object.assign(params, { [key]: { $in: values } });
                break;
            default:
                break;
        }
        return params;
    }, {});
};
//# sourceMappingURL=lists.js.map