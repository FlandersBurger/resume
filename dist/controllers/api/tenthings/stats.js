"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenthingsStatsRoute = void 0;
const express_1 = require("express");
exports.tenthingsStatsRoute = (0, express_1.Router)();
const models_1 = require("../../../models");
exports.tenthingsStatsRoute.get("/total", async (req, res) => {
    const total = await models_1.List.countDocuments({});
    res.json(total);
});
exports.tenthingsStatsRoute.post("/languages", async (_, res) => {
    const languages = await models_1.List.aggregate([
        { $project: { language: 1 } },
        { $group: { _id: "$language", count: { $sum: 1 } } },
    ]);
    res.json(languages);
});
exports.tenthingsStatsRoute.get("/categories", async (_, res) => {
    const categories = await models_1.List.aggregate([
        { $project: { categories: 1 } },
        { $unwind: "$categories" },
        { $group: { _id: "$categories", count: { $sum: 1 } } },
    ]);
    res.json(categories);
});
//# sourceMappingURL=stats.js.map