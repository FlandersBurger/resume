"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gamesRoute = void 0;
const express_1 = require("express");
const FuzzyMatching = require("fuzzy-matching");
const index_1 = require("../../models/index");
exports.gamesRoute = (0, express_1.Router)();
exports.gamesRoute.post("/:game/:userId/highscore", async (req, res) => {
    const user = await index_1.User.findOne({ _id: req.params.userId });
    if (!user)
        res.sendStatus(404);
    else {
        user.highscore[req.params.game] = req.body.score;
        await user.save();
        res.sendStatus(200);
    }
});
exports.gamesRoute.post("/fuzzy_match", function ({ body }, res) {
    const fuzzyMatch = new FuzzyMatching(body.values);
    const match = fuzzyMatch.get(body.guess, { min: 0.75 });
    res.json(match);
});
//# sourceMappingURL=games.js.map