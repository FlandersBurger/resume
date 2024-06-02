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
exports.gamesRoute = void 0;
const express_1 = require("express");
const FuzzyMatching = require("fuzzy-matching");
const index_1 = require("../../models/index");
exports.gamesRoute = (0, express_1.Router)();
exports.gamesRoute.post("/:game/:userId/highscore", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield index_1.User.findOne({ _id: req.params.userId });
    if (!user)
        return res.sendStatus(404);
    user.highscore[req.params.game] = req.body.score;
    yield user.save();
    res.sendStatus(200);
}));
exports.gamesRoute.post("/fuzzy_match", function ({ body }, res, next) {
    const fuzzyMatch = new FuzzyMatching(body.values);
    const match = fuzzyMatch.get(body.guess, { min: 0.75 });
    res.json(match);
});
/*
setInterval(function(){
  var pack = [];
  for (var i in PLAYER_LIST){
    var player = PLAYER_LIST[i];
    player.updatePosition();
    pack.push({
        x: player.x,
        y: player.y,
        number: player.number
    });
  }
  websockets.broadcast('asteroids_data', data);
}, 1000/25);
*/
//# sourceMappingURL=games.js.map