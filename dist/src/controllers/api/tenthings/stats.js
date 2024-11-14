"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenthingsStatsRoute = void 0;
const express_1 = require("express");
exports.tenthingsStatsRoute = (0, express_1.Router)();
const models_1 = require("../../../../models");
exports.tenthingsStatsRoute.get("/total", async (_, res) => {
    const total = await models_1.List.countDocuments({});
    res.json(total);
});
exports.tenthingsStatsRoute.get("/languages", async (_, res) => {
    const languages = await models_1.List.aggregate([
        { $project: { language: 1, year: { $year: "$date" } } },
        {
            $group: {
                _id: { language: "$language", year: "$year" },
                count: { $sum: 1 },
            },
        },
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
exports.tenthingsStatsRoute.get("/play", async (_, res) => {
    const stats = await models_1.Stats.find({ base: false }).lean();
    const sanitizedStats = stats
        .map((s) => {
        return { ...s, date: new Date(s.date) };
    })
        .reduce((result, s) => {
        const month = `${s.date.getFullYear()}-${s.date.getMonth() + 1}`;
        if (!result[month]) {
            result[month] = {
                uniquePlayers: [],
                listsPlayed: [],
            };
        }
        if (s.uniquePlayers)
            result[month].uniquePlayers.push(s.uniquePlayers);
        if (s.listsPlayed)
            result[month].listsPlayed.push(s.listsPlayed);
        return result;
    }, {});
    res.json(Object.keys(sanitizedStats).map((key) => {
        return {
            month: parseInt(key.split("-")[1]),
            year: parseInt(key.split("-")[0]),
            uniquePlayers: sanitizedStats[key].uniquePlayers.reduce((a, b) => a + b, 0) / sanitizedStats[key].uniquePlayers.length,
            listsPlayed: sanitizedStats[key].listsPlayed.reduce((a, b) => a + b, 0) / sanitizedStats[key].listsPlayed.length,
        };
    }));
});
exports.tenthingsStatsRoute.get("/games", async (_, res) => {
    const games = await models_1.Game.aggregate([
        { $match: { date: { $ne: null }, "settings.language": { $ne: null } } },
        { $project: { "settings.language": 1, year: { $year: "$date" } } },
        {
            $group: {
                _id: { language: "$settings.language", year: "$year" },
                count: { $sum: 1 },
            },
        },
    ]);
    res.json(games);
});
//# sourceMappingURL=stats.js.map