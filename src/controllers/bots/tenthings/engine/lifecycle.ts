// The Game itself in the Engine: the end of each day (Daily scores and their winners), turning
// a Game on and off, and the admin panel's settings.

import moment from "moment";
import { HydratedDocument } from "mongoose";
import { GameRound, Player } from "@models/index";
import { IGame } from "@models/tenthings/game";
import { getPlayerName } from "@tenthings/players";
import { Action, sanitizeSettingsUpdate } from "./actions";
import { EngineEvent } from "./events";
import { saveGame } from "./round";

type GameDoc = HydratedDocument<IGame>;

/** A new day starts with at least this many Hints on a Round still in progress. */
export const NEW_DAY_HINTS = 4;

export type LifecycleActionType = "endDay" | "activate" | "deactivate" | "updateSettings";

type Handler<T extends LifecycleActionType> = (
  game: GameDoc,
  action: Extract<Action, { type: T }>,
) => Promise<EngineEvent[]>;

export const lifecycleHandlers: { [T in LifecycleActionType]: Handler<T> } = {
  endDay: async (game) => {
    const scorers = await Player.find({ game: game._id, scoreDaily: { $gt: 0 } })
      .select("_id id scoreDaily first_name username lastPlayDate")
      .exec();
    scorers.sort((a, b) => b.scoreDaily - a.scoreDaily);
    // Only Players who played in the last day can win it.
    const since = moment().subtract(1, "days").toDate();
    const contenders = scorers.filter(({ lastPlayDate }) => lastPlayDate && lastPlayDate >= since);
    const score = Math.max(0, ...contenders.map(({ scoreDaily }) => scoreDaily));
    const winners = contenders.filter(({ scoreDaily }) => scoreDaily === score);

    await Player.updateMany({ game: game._id, scoreDaily: 0 }, { $set: { playStreak: 0 } });
    await Player.updateMany({ game: game._id, _id: { $in: winners.map(({ _id }) => _id) } }, { $inc: { wins: 1 } });
    await Player.updateMany(
      { game: game._id, scoreDaily: { $gt: 0 } },
      { $inc: { plays: 1, playStreak: 1 }, $set: { scoreDaily: 0 } },
    );
    // A List nobody could finish yesterday gets a head start today.
    if (game.hints < NEW_DAY_HINTS) {
      game.hints = NEW_DAY_HINTS;
      await GameRound.updateOne({ gameId: game._id, outcome: "inProgress" }, { $set: { hintsUsed: game.hints } });
      await saveGame(game);
    }
    return [
      {
        type: "dayEnded",
        scores: scorers.map((p) => ({ playerId: String(p._id), name: getPlayerName(p), score: p.scoreDaily })),
        winners: winners.map((p) => ({ playerId: String(p._id), name: getPlayerName(p, true) })),
        score,
      },
    ];
  },

  activate: async (game) => {
    if (game.enabled || game.adminDisabled) return [];
    game.enabled = true;
    game.lastPlayDate = new Date();
    await saveGame(game);
    return [{ type: "gameActivated" }];
  },

  deactivate: async (game, { reason }) => {
    if (!game.enabled) return [];
    game.enabled = false;
    await saveGame(game);
    return [{ type: "gameDeactivated", reason }];
  },

  updateSettings: async (game, { settings, adminDisabled }) => {
    if (adminDisabled !== undefined) {
      game.adminDisabled = adminDisabled;
      if (adminDisabled) game.enabled = false;
    }
    // Only known settings with valid values; anything else is dropped.
    Object.assign(game.settings, sanitizeSettingsUpdate(settings as Record<string, unknown>));
    await saveGame(game);
    return [{ type: "settingsUpdated" }];
  },
};
