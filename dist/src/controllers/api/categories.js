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
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoute = void 0;
const express_1 = require("express");
const index_1 = require("../../../models/index");
exports.categoriesRoute = (0, express_1.Router)();
exports.categoriesRoute.get("/", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const categories = yield index_1.Category.find().sort("+name");
    res.json(categories);
}));
exports.categoriesRoute.get("/:category", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield index_1.Category.findOne({ name: req.params.category });
    if (!category)
        return res.sendStatus(404);
    res.json(category.tasks);
}));
exports.categoriesRoute.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const category = new index_1.Category({
        name: req.body.category,
        creator: (_a = res.locals.user) === null || _a === void 0 ? void 0 : _a._id,
    });
    if (!category)
        return res.sendStatus(404);
    yield category.save();
    res.json(category);
}));
exports.categoriesRoute.post("/:name/tasks", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const category = yield index_1.Category.findOne({ name: req.params.name });
    if (!category)
        return res.sendStatus(404);
    let found = false;
    for (var i = 0; i < category.tasks.length; i++) {
        if (req.body.task === category.tasks[i].name) {
            found = true;
            break;
        }
    }
    if (!found) {
        category.tasks.push({
            name: req.body.task,
        });
        yield category.save();
        res.sendStatus(201);
    }
}));
//# sourceMappingURL=categories.js.map