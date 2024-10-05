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
const goodreads_1 = __importDefault(require("../../../connections/goodreads"));
const moviedb_1 = __importDefault(require("../../../connections/moviedb"));
const youtube_1 = __importDefault(require("../../../connections/youtube"));
const wikipedia_1 = __importDefault(require("../../../connections/wikipedia"));
const pexels_1 = __importDefault(require("../../../connections/pexels"));
const unsplash_1 = __importDefault(require("../../../connections/unsplash"));
const index_1 = require("../../../models/index");
const string_helpers_1 = require("../../../utils/string-helpers");
const messages_1 = require("../../bots/tenthings/messages");
const lists_1 = require("../../bots/tenthings/lists");
const keyboards_1 = require("../../bots/tenthings/keyboards");
const lodash_1 = require("lodash");
exports.tenthingsListsRoute = (0, express_1.Router)();
exports.tenthingsListsRoute.get("/", async (req, res) => {
    if (!res.locals.isAuthorized)
        res.sendStatus(401);
    else {
        const page = parseInt(req.query.page ?? 1);
        const query = parseQuery(req.query);
        const count = await index_1.List.countDocuments(query);
        const lists = await index_1.List.find(query)
            .limit(parseInt(req.query.limit) || 0)
            .skip(parseInt(req.query.limit) * (page - 1) || 0)
            .sort({ [req.query.sort_by ?? "date"]: parseInt(req.query.order_by ?? -1) })
            .populate("creator", "_id username displayName")
            .populate("values.creator", "_id username displayName")
            .lean({ virtuals: true });
        res.json({ result: lists, nextPage: page + 1, count });
    }
});
exports.tenthingsListsRoute.get("/:id", async (req, res) => {
    if (!res.locals.isAuthorized)
        res.sendStatus(401);
    else if (req.params.id === "names") {
        const listNames = await index_1.List.find({}).select("_id name").lean();
        res.json(listNames);
    }
    else {
        const list = await (0, lists_1.getList)(new mongoose_1.Types.ObjectId(req.params.id));
        if (!list)
            res.sendStatus(404);
        else
            res.json(list);
    }
});
exports.tenthingsListsRoute.post("/:id/blurbs/:type", async (req, res) => {
    if (!res.locals.isAuthorized)
        res.sendStatus(401);
    else {
        let list = await index_1.List.findOne({ _id: req.params.id });
        if (list) {
            let changed = false;
            for (let value of list.values) {
                if (!value.blurb) {
                    let blurbUrl;
                    switch (req.params.type) {
                        case "movies":
                            blurbUrl = await moviedb_1.default.getImage(value.value, "movie");
                            break;
                        case "tv":
                            blurbUrl = await moviedb_1.default.getImage(value.value, "tv");
                            break;
                        case "actors":
                            blurbUrl = await moviedb_1.default.getImage(value.value, "person");
                            break;
                        case "books":
                            const author = list.name.indexOf("Written by ") === 0 ? list.name.substring(11) : "";
                            const goodreadsAuthor = author ? await goodreads_1.default.getAuthor(author) : "";
                            blurbUrl = await goodreads_1.default.getBook(value.value, goodreadsAuthor);
                            break;
                        case "musicvideos":
                            const artist = list.name.substring(0, list.name.indexOf(" - ")).replace(/\s/, "+");
                            blurbUrl = await youtube_1.default.getMusicVideo(value.value, artist);
                            break;
                        case "wiki":
                            blurbUrl = await wikipedia_1.default.getImage(value.value);
                            break;
                        case "unsplash":
                            blurbUrl = await unsplash_1.default.getImage(value.value);
                            break;
                        case "pexels":
                            blurbUrl = await pexels_1.default.getImage(value.value);
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
    }
});
exports.tenthingsListsRoute.get("/:id/report/:user", async (req, res) => {
    if (!res.locals.isAuthorized)
        res.sendStatus(401);
    else {
        const list = await index_1.List.findOne({ _id: req.params.id });
        if (!list)
            res.sendStatus(404);
        else {
            const user = await index_1.User.findOne({ _id: req.params.user });
            if (!user)
                res.sendStatus(400);
            else
                telegram_1.default.notifyAdmins("Check: " + list.name + " reported by " + user.username);
        }
    }
});
exports.tenthingsListsRoute.put("/:id", async (req, res) => {
    if (!res.locals.isAuthorized)
        res.sendStatus(401);
    else {
        const yesterday = (0, moment_1.default)().subtract(1, "days");
        const list = await index_1.List.findOne({ _id: req.params.id });
        if (!list)
            res.sendStatus(404);
        else {
            const previousModifyDate = (0, moment_1.default)(list.modifyDate);
            list.values.filter(({ creator }) => !creator).forEach((value) => (value.creator = list.creator));
            Object.assign(list, req.body);
            list.modifyDate = new Date();
            await list.validate();
            await list.save();
            const updatedList = await (0, lists_1.getList)(new mongoose_1.Types.ObjectId(req.params.id));
            if (!updatedList)
                res.sendStatus(404);
            else {
                if (previousModifyDate < yesterday && process.env.NODE_ENV === "production") {
                    telegram_1.default.notifyAdmins(`<u>List Updated</u>\nUpdated by <i>${res.locals.user?.username}</i>\n${(0, messages_1.getListMessage)(updatedList)}`, (0, keyboards_1.curateListKeyboard)(list));
                }
                res.json(updatedList);
            }
        }
    }
});
exports.tenthingsListsRoute.post("/", async (req, res) => {
    if (!res.locals.isAuthorized)
        res.sendStatus(401);
    else {
        const yesterday = (0, moment_1.default)().subtract(1, "days");
        const previousModifyDate = (0, moment_1.default)(req.body.list.modifyDate);
        req.body.list.modifyDate = new Date();
        req.body.list.search = (0, string_helpers_1.removeAllButLetters)(req.body.list.name);
        req.body.list.score = (0, lists_1.getListScore)(req.body.list);
        req.body.list.values
            .filter(({ creator }) => !creator)
            .forEach((value) => (value.creator = req.body.list.creator));
        const list = await index_1.List.findByIdAndUpdate(req.body.list._id ? req.body.list._id : new mongoose_1.Types.ObjectId(), req.body.list, { new: true, upsert: true });
        const updatedList = await (0, lists_1.getList)(list._id);
        if (!updatedList)
            res.sendStatus(404);
        else if (!list)
            res.sendStatus(500);
        else {
            if (process.env.NODE_ENV === "production") {
                if (!req.body.list._id) {
                    telegram_1.default.notifyAdmins(`<u>List Created</u>\n${(0, messages_1.getListMessage)(updatedList)}`, (0, keyboards_1.curateListKeyboard)(updatedList));
                }
                else if (previousModifyDate < yesterday) {
                    telegram_1.default.notifyAdmins(`<u>List Updated</u>\nUpdated by <i>${res.locals.user?.username}</i>\n${(0, messages_1.getListMessage)(updatedList)}`, (0, keyboards_1.curateListKeyboard)(list));
                }
            }
            res.json(updatedList);
        }
    }
});
exports.tenthingsListsRoute.post("/merge", async (req, res) => {
    if (!res.locals.isAdmin)
        res.sendStatus(401);
    else {
        const lists = await index_1.List.find({ _id: { $in: req.body.lists } })
            .sort({ date: 1 })
            .lean();
        if (!(0, lodash_1.every)(lists, (list) => lists[0].language === list.language)) {
            res.sendStatus(400);
            return;
        }
        let mergedList = lists[0];
        for (let i = 1; i < lists.length; i++) {
            mergedList = await (0, lists_1.mergeLists)(mergedList, lists[i]);
        }
        await index_1.List.findOneAndUpdate({ _id: mergedList._id }, mergedList, { overwrite: true });
        await index_1.List.deleteMany({ _id: { $in: req.body.lists.filter((id) => id !== mergedList._id.toString()) } });
        const updatedList = await (0, lists_1.getList)(mergedList._id);
        if (!updatedList)
            res.sendStatus(500);
        else {
            res.json(updatedList);
            if (process.env.NODE_ENV === "production") {
                telegram_1.default.notifyAdmins(`<u>Lists Merged</u>\nUpdated by <i>${res.locals.user?.username}</i>\n${lists.reduce((result, list) => `${result} - ${(0, string_helpers_1.parseSymbols)(list.name)}\n`, "")}<b>→</b> ${(0, messages_1.getListMessage)(updatedList)}`, (0, keyboards_1.curateListKeyboard)(updatedList));
            }
        }
    }
});
exports.tenthingsListsRoute.delete("/:id", async (req, res) => {
    if (!res.locals.isAuthorized)
        res.sendStatus(401);
    else {
        const list = await index_1.List.findOne({ _id: req.params.id });
        if (list) {
            if (res.locals.isAdmin || res.locals.user?._id.equals(list.creator.toString())) {
                await index_1.List.findByIdAndRemove({ _id: req.params.id });
                if (process.env.NODE_ENV === "production") {
                    telegram_1.default.notifyAdmins(list.values
                        .sort((a, b) => (a.value < b.value ? -1 : 1))
                        .reduce((message, item) => `${message}- ${item.value}\n`, `<b>${list.name}</b>\ndeleted by ${res.locals.user.username}\n`));
                }
                res.sendStatus(200);
            }
            else {
                telegram_1.default.notifyAdmins(`Unauthorized deletion (not an admin nor the creator):\n<b>${list.name}</b> by ${res.locals.user.username} (${res.locals.user._id})\nIf it persists -> Block them at https://belgocanadian.com/tenthings-admin`);
                res.sendStatus(200);
            }
        }
    }
});
exports.tenthingsListsRoute.post("/:id/values", async (req, res) => {
    if (!res.locals.isAuthorized)
        res.sendStatus(401);
    else {
        const list = await index_1.List.findOne({ _id: req.params.id });
        if (!list)
            res.sendStatus(404);
        else if (list.values.some(({ value }) => value === req.body.value))
            res.sendStatus(400);
        else {
            list.values.push({ ...req.body, creator: res.locals.user._id });
            list.modifyDate = new Date();
            await list.save();
            const updatedList = await index_1.List.findOne({ _id: req.params.id }).lean({ virtuals: true });
            if (!updatedList)
                res.sendStatus(500);
            else {
                if ((0, moment_1.default)(list.modifyDate).diff(list.date, "days") > 1) {
                    telegram_1.default.notifyAdmins(`<u>Value added to "${updatedList.name}"</u>\n<b>${req.body.value}</b>`);
                }
                res.json(updatedList.values[updatedList.values.length - 1]);
            }
        }
    }
});
exports.tenthingsListsRoute.put("/:id/values/:valueId", async (req, res) => {
    if (!res.locals.isAuthorized)
        res.sendStatus(401);
    else {
        const list = await index_1.List.findOne({ _id: req.params.id });
        if (!list)
            res.sendStatus(404);
        else {
            const value = list.values.find(({ _id }) => _id.toString() === req.params.valueId);
            if (!value)
                res.sendStatus(404);
            else if (value.creator !== res.locals.user?._id && !res.locals.isAdmin)
                res.sendStatus(401);
            else {
                if ((0, moment_1.default)(list.modifyDate).diff(list.date, "days") > 1) {
                    telegram_1.default.notifyAdmins(`<u>Value changed in "${list.name}"</u>\n<b>${value.value}</b> -> <b>${req.body.value}</b>`);
                }
                Object.assign(value, req.body);
                list.modifyDate = new Date();
                await list.save();
                const updatedList = await index_1.List.findOne({ _id: req.params.id }).lean({ virtuals: true });
                if (!updatedList)
                    res.sendStatus(500);
                else
                    res.json(updatedList.values.find(({ _id }) => _id.toString() === req.params.valueId));
            }
        }
    }
});
exports.tenthingsListsRoute.delete("/:id/values/:valueId", async (req, res) => {
    if (!res.locals.isAuthorized)
        res.sendStatus(401);
    else {
        const list = await index_1.List.findOne({ _id: req.params.id });
        if (!list)
            res.sendStatus(404);
        else {
            const value = list.values.find(({ _id }) => _id.toString() === req.params.valueId);
            if (!value)
                res.sendStatus(404);
            else if (value.creator !== res.locals.user?._id && !res.locals.isAdmin)
                res.sendStatus(401);
            else {
                await index_1.List.findByIdAndUpdate(req.params.id, { $pull: { values: { _id: req.params.valueId } } }).exec();
                res.sendStatus(200);
            }
        }
    }
});
const parseQuery = (query) => {
    return Object.keys(query).reduce((params, key) => {
        switch (key) {
            case "search":
                if (query[key]) {
                    Object.assign(params, {
                        $or: [{ $text: { $search: `"${query[key]}"` } }, { name: { $regex: query[key], $options: "i" } }],
                    });
                }
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