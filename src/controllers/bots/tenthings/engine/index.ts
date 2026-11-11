// The Ten Things Engine: applies one Action to a Game and reports what happened as Events.
// It owns the rules (who may change what, which values are valid, what a Pick or Vote does)
// and the writes. It never talks to a platform: the queue worker hands the Events to the
// Game's renderer. Run Actions through dispatch() (./queue), never concurrently.

import moment, { Moment } from "moment";
import { HydratedDocument } from "mongoose";
import { Game, GameRound, List, Player } from "@models/index";
import { IGame } from "@models/tenthings/game";
import { getListScore } from "@models/tenthings/listMetrics";
import categories, { setDisabledCategories } from "@tenthings/categories";
import { isBotLanguage, isSupportedLanguage, SupportedLanguage } from "@tenthings/languages";
import { Action, DELAY_CHOICES, isDelaySetting, isToggleSetting } from "./actions";
import { EngineEvent } from "./events";

export type { Action } from "./actions";
export type { EngineEvent } from "./events";

/** A Game's Picked lists queue holds at most this many Lists. */
export const MAX_PICKED_LISTS = 10;

/** Seconds a voter waits between Votes. */
const VOTE_COOLDOWN_SECONDS = 10;

/** When each voter last voted. In memory: a restart forgets the cooldowns, which is fine. */
export const lastVotes = new Map<string, Moment>();

// Forget voters whose cooldown is long over, so the map doesn't keep one entry per voter forever.
setInterval(() => {
  const cutoff = moment().subtract(5, "minutes");
  for (const [voterId, votedAt] of lastVotes) if (votedAt.isBefore(cutoff)) lastVotes.delete(voterId);
}, 5 * 60_000).unref(); // housekeeping only: never keeps the process alive

type GameDoc = HydratedDocument<IGame>;
type Handler<T extends Action["type"]> = (
  game: GameDoc,
  action: Extract<Action, { type: T }>,
) => Promise<EngineEvent[]>;

const ADMIN_ONLY: ReadonlySet<Action["type"]> = new Set([
  "toggleSetting",
  "setDelay",
  "toggleTriviaLanguage",
  "setBotLanguage",
  "toggleCategory",
]);

/**
 * A voter may vote once, then again after the cooldown; votes in between are dropped.
 * (As before the Engine: the vote that ends a cooldown doesn't start a new one.)
 */
const isVoteThrottled = (voterId: string | number) => {
  const key = String(voterId);
  const votedAt = lastVotes.get(key);
  if (!votedAt) {
    lastVotes.set(key, moment());
    return false;
  }
  if (votedAt < moment().subtract(VOTE_COOLDOWN_SECONDS, "seconds")) {
    lastVotes.delete(key);
    return false;
  }
  return true;
};

const isCategory = (category: string) => {
  const [main, sub, ...rest] = category.split(".");
  if (rest.length || !categories[main]) return false;
  return sub === undefined || categories[main].includes(sub);
};

const handlers: { [T in Action["type"]]: Handler<T> } = {
  vote: async (_game, { listId, voterId, vote, actor }) => {
    if (isVoteThrottled(voterId)) return [];
    const list = await List.findById(listId).select("name votes modifyDate score skips plays").exec();
    if (!list) return [{ type: "listNotFound" }];
    const existing = list.votes.find((v) => v.voter == voterId);
    if (existing) {
      existing.vote = vote;
      existing.modifyDate = new Date();
    } else {
      list.votes.push({ voter: voterId, vote, date: new Date(), modifyDate: new Date() });
    }
    // The votes are loaded, so the score can be computed here.
    list.score = getListScore(list);
    delete list.voters;
    await list.save();
    return [
      {
        type: "listVoted",
        listId: String(list._id),
        listName: list.name,
        vote,
        score: list.score,
        playerName: actor.name,
      },
    ];
  },

  pick: async (game, { listId, actor }) => {
    if (game.pickedLists.length >= MAX_PICKED_LISTS)
      return [{ type: "pickRejected", reason: "queueFull", playerName: actor.name }];
    const player = await Player.findById(actor.playerId).exec();
    if (!player) return [];
    if (player.pickedLists.some((id) => String(id) === listId)) {
      player.infractions++;
      await player.save();
      return [{ type: "pickRejected", reason: "alreadyRequested", playerName: actor.name }];
    }
    const list = await List.findById(listId).select("name").exec();
    if (!list) return [{ type: "listNotFound" }];
    if (game.pickedLists.some((id) => id.equals(list._id)))
      return [{ type: "pickRejected", reason: "alreadyInQueue", playerName: actor.name, listName: list.name }];
    player.pickedLists.push(list._id);
    game.pickedLists.push(list._id);
    // Picking a List the Game banned lifts the Ban.
    await GameRound.deleteOne({ gameId: game._id, listId: list._id, outcome: "banned" });
    await Promise.all([player.save(), game.save(), List.updateOne({ _id: list._id }, { $inc: { picks: 1 } })]);
    return [{ type: "listPicked", listId: String(list._id), listName: list.name, playerName: actor.name }];
  },

  toggleSetting: async (game, { key }) => {
    if (!isToggleSetting(key)) return [];
    game.settings[key] = !game.settings[key];
    await game.save();
    return [{ type: "settingToggled", key, on: game.settings[key] }];
  },

  setDelay: async (game, { key, seconds }) => {
    if (!isDelaySetting(key) || !DELAY_CHOICES.includes(seconds)) return [];
    game.settings[key] = seconds;
    await game.save();
    return [{ type: "delaySet", key, seconds }];
  },

  toggleTriviaLanguage: async (game, { language }) => {
    if (!isSupportedLanguage(language)) return [];
    const on = !game.settings.languages.includes(language);
    game.settings.languages = on
      ? [...game.settings.languages, language]
      : game.settings.languages.filter((l) => l !== language);
    // A Game always plays at least one language.
    if (game.settings.languages.length === 0) game.settings.languages = [SupportedLanguage.EN];
    await game.save();
    return [{ type: "triviaLanguageToggled", language, on: game.settings.languages.includes(language) }];
  },

  setBotLanguage: async (game, { language }) => {
    if (!isBotLanguage(language)) return [];
    game.settings.language = language;
    await game.save();
    return [{ type: "botLanguageSet", language }];
  },

  toggleCategory: async (game, { category }) => {
    if (!isCategory(category)) return [];
    setDisabledCategories(game, category);
    await game.save();
    return [{ type: "categoryToggled", category, on: !game.disabledCategories.includes(category) }];
  },
};

/** Apply one Action. Returns the Game as it stands afterwards (null if it doesn't exist) and the Events. */
export const runAction = async (action: Action): Promise<{ game: GameDoc | null; events: EngineEvent[] }> => {
  const game = await Game.findById(action.gameId).exec();
  if (!game) return { game: null, events: [] };
  if (ADMIN_ONLY.has(action.type) && !action.actor.isAdmin) {
    return {
      game,
      events: [{ type: "adminOnly", playerId: action.actor.playerId, playerName: action.actor.name }],
    };
  }
  const handler = handlers[action.type] as Handler<typeof action.type>;
  return { game, events: await handler(game, action) };
};
