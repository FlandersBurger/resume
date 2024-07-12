"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriesRoute = void 0;
const express_1 = require("express");
const index_1 = require("@models/index");
exports.categoriesRoute = (0, express_1.Router)();
exports.categoriesRoute.get("/", async (_, res) => {
    const categories = await index_1.Category.find().sort("+name");
    res.json(categories);
});
exports.categoriesRoute.get("/:category", async (req, res) => {
    const category = await index_1.Category.findOne({ name: req.params.category });
    if (!category)
        return res.sendStatus(404);
    res.json(category.tasks);
});
exports.categoriesRoute.post("/", async (req, res) => {
    const category = new index_1.Category({
        name: req.body.category,
        creator: res.locals.user?._id,
    });
    if (!category)
        return res.sendStatus(404);
    await category.save();
    res.json(category);
});
exports.categoriesRoute.post("/:name/tasks", async (req, res) => {
    const category = await index_1.Category.findOne({ name: req.params.name });
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
        await category.save();
        res.sendStatus(201);
    }
});
//# sourceMappingURL=categories.js.map