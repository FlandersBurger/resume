"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenthingsGamesSettingsRoute = void 0;
const express_1 = require("express");
const index_1 = require("../../../models/index");
exports.tenthingsGamesSettingsRoute = (0, express_1.Router)();
exports.tenthingsGamesSettingsRoute.put("/:id/settings", async (req, res) => {
  if (!res.locals.isAdmin) return res.sendStatus(401);
  const game = await index_1.Game.findOne({ chat_id: req.params.id });
  if (!game) return res.sendStatus(404);
  game.settings = { ...game.settings, ...req.body };
  await game.save();
  res.json(game.settings);
});
//# sourceMappingURL=games-settings.js.map
