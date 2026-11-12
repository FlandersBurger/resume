// Rounds in the Engine: starting one, Guesses, Hints, Skips and Vetoes, and ending one.
// A Round is recorded as an `inProgress` GameRound when it starts (ADR-0001); that record
// also holds the Round's own state (a pending Skip, the last Veto, the Hint cooldown).

import sampleSize from "lodash/sampleSize";
import { HydratedDocument, Types } from "mongoose";
import { GameRound, List, Player } from "@models/index";
import { IGame } from "@models/tenthings/game";
import { IGameRound } from "@models/tenthings/gameround";
import { IPlayer } from "@models/tenthings/player";
import { pipelineUpdateOptions, recordPlayUpdate, recordSkipUpdate } from "@models/tenthings/listMetrics";
import { getAnswerScore } from "@tenthings/guesses";
import { MAX_HINTS } from "@tenthings/hints";
import { selectList } from "@tenthings/lists";
import { notifyAdmin } from "@tenthings/notify";
import { getPlayerName } from "@tenthings/players";
import { throttleSkip } from "@tenthings/skips";
import { styleText } from "util";
import { Action, isSystemActor, SYSTEM_ACTOR } from "./actions";
import { EngineEvent } from "./events";
import { Scheduler } from "./scheduler";

type GameDoc = HydratedDocument<IGame>;
type RoundDoc = HydratedDocument<IGameRound>;
type RoundHandler<T extends Action["type"]> = (
  game: GameDoc,
  action: Extract<Action, { type: T }>,
  scheduler: Scheduler,
) => Promise<EngineEvent[]>;

/** No Hint in the first seconds of a Round. */
const FIRST_HINT_AFTER_MS = 3_000;
/** The finished Round stays on screen this long before the next one starts. */
export const NEXT_ROUND_DELAY_MS = 3_000;
/** A second Player asking for the same Skip cuts the countdown to this. */
export const CORROBORATED_SKIP_MS = 2_000;
/** Bull may fire a delayed job a little early. */
const TIMER_TOLERANCE_MS = 250;

const startNextRound = (scheduler: Scheduler, game: GameDoc, delayMs: number) =>
  scheduler.schedule({ type: "startRound", gameId: String(game._id), actor: SYSTEM_ACTOR }, delayMs);

/**
 * The Round in progress, or null between Rounds. A Game that was mid-Round when Rounds started
 * being recorded at the start has no record yet: it gets one now (ADR-0001).
 */
export const getCurrentRound = async (game: GameDoc): Promise<RoundDoc | null> => {
  const round = await GameRound.findOne({ gameId: game._id, outcome: "inProgress" }).sort({ playedAt: -1 }).exec();
  if (round) return String(round.listId) === String(game.list._id) ? round : null;
  const values = game.list?.values ?? [];
  if (!game.list?._id || values.length === 0 || values.every(({ guesser }) => guesser)) return null;
  const ended = await GameRound.exists({
    gameId: game._id,
    listId: game.list._id,
    outcome: { $ne: "inProgress" },
    playedAt: { $gte: game.roundDate ?? new Date(0) },
  });
  if (ended) return null;
  const list = await List.findById(game.list._id).select("language").lean();
  return GameRound.create({
    gameId: game._id,
    listId: game.list._id,
    outcome: "inProgress",
    categories: game.list.categories ?? [],
    language: list?.language ?? "EN",
    startedAt: game.roundDate,
    playedAt: game.roundDate ?? new Date(),
    hintsUsed: game.hints,
    answersRevealed: values.filter(({ guesser }) => guesser).length,
  });
};

/** End the Round: from here on it counts as played (or as a Ban). */
const closeRound = async (round: RoundDoc, game: GameDoc, outcome: "completed" | "skipped" | "banned") => {
  round.outcome = outcome;
  round.answersRevealed = game.list.values.filter(({ guesser }) => guesser).length;
  round.hintsUsed = game.hints;
  round.playedAt = new Date();
  round.skip = undefined;
  await round.save();
};

/** Ban the List of the Round in progress: the Round ends as the Ban record, and the next one starts. */
export const banCurrentRound = async (game: GameDoc, listId: Types.ObjectId, scheduler: Scheduler) => {
  const round = await getCurrentRound(game);
  if (!round || !round.listId.equals(listId)) return false;
  await closeRound(round, game, "banned");
  await startNextRound(scheduler, game, 0);
  return true;
};

const skipRound = async (game: GameDoc, round: RoundDoc, playerIds: Types.ObjectId[], scheduler: Scheduler) => {
  await Player.updateMany({ game: game._id, _id: { $in: playerIds } }, { $set: { hintStreak: 0 }, $inc: { skips: 1 } });
  try {
    await List.updateOne({ _id: round.listId }, recordSkipUpdate, pipelineUpdateOptions);
  } catch (error) {
    notifyAdmin(`Skip List Error:\n${error}`);
  }
  await closeRound(round, game, "skipped");
  game.pickedLists = game.pickedLists.filter((id) => !id.equals(round.listId));
  await game.save();
  // Its own job, so the skipped List is still the Game's List while the Skip is shown.
  await startNextRound(scheduler, game, 0);
  return [
    { type: "listSkipped", roundId: String(round._id), listId: String(round.listId), listName: game.list.name },
  ] satisfies EngineEvent[];
};

/** Saves the Game, first clearing a streak that no longer validates (a Player who was deleted). */
export const saveGame = async (game: GameDoc) => {
  try {
    await game.validate();
  } catch (err) {
    console.error("Game validation error", err);
    game.streak = { player: undefined, count: 0 };
  }
  await game.save();
};

const isVetoActive = (game: GameDoc, round: RoundDoc) =>
  !!round.vetoedAt && Date.now() < round.vetoedAt.getTime() + game.settings.vetoDelay * 1000;

export const roundHandlers: { [T in RoundActionType]: RoundHandler<T> } = {
  startRound: async (game, { replace, actor }) => {
    if (game.adminDisabled) return [];
    const current = await getCurrentRound(game);
    if (current && !replace) return isSystemActor(actor) ? [] : [{ type: "roundInProgress" }];
    // Whatever is still marked in progress is replaced, or left over from a List that's gone.
    await GameRound.deleteMany({ gameId: game._id, outcome: "inProgress" });

    const { list, allListsPlayed } = await selectList(game);
    // selectList loads the List without its votes, so the play and score are written inside Mongo.
    list.plays++;
    try {
      await List.updateOne({ _id: list._id }, recordPlayUpdate, pipelineUpdateOptions);
    } catch (error) {
      notifyAdmin(`New Round List Error\n${error}\n\n${list}`);
    }
    await Player.updateMany({ game: game._id, _id: { $in: game.guessers } }, { $inc: { lists: 1 } });

    const now = new Date();
    game.list = JSON.parse(JSON.stringify(list));
    game.list.answers = game.list.values.length;
    game.list.values = sampleSize(game.list.values, 10);
    game.listsPlayed++;
    game.hints = 0;
    game.roundDate = now;
    game.guessers = [];
    const round = await GameRound.create({
      gameId: game._id,
      listId: list._id,
      outcome: "inProgress",
      categories: list.categories ?? [],
      language: list.language,
      startedAt: now,
      playedAt: now,
      nextHintAt: new Date(now.getTime() + FIRST_HINT_AFTER_MS),
    });
    await saveGame(game);
    console.log(`${game._id} - New round started -> ${styleText("cyan", list.name)}`);
    return [
      ...(allListsPlayed ? [{ type: "allListsPlayed" } as const] : []),
      { type: "roundStarted", roundId: String(round._id), listId: String(list._id), listName: list.name },
    ];
  },

  guess: async (game, { actor, listId, match: guess }, scheduler) => {
    // game.list._id is stored as a string, whatever IGameList says.
    if (listId !== String(game.list._id)) return [];
    const round = await getCurrentRound(game);
    if (!round) return [];
    const player = await Player.findById(actor.playerId).exec();
    if (!player) return [];
    const events: EngineEvent[] = [];
    game.lastPlayDate = new Date();
    player.lastPlayDate = new Date();
    if (round.skip) {
      round.skip = undefined;
      round.vetoedAt = new Date();
      await round.save();
      events.push({ type: "skipAborted", playerName: getPlayerName(player), vetoDelay: game.settings.vetoDelay });
    }
    if (!game.guessers.some((guesser) => guesser.equals(player._id))) game.guessers.push(player._id);
    const value = game.list.values.find(({ value }) => value === guess.value);
    if (!value) return events;
    console.log(
      `${game._id} (${game.settings.language}) - ${styleText("cyan", game.list.name)} "${styleText("blueBright", guess.value)}" by ${getPlayerName(player)}`,
    );

    if (value.guesser) {
      player.snubs++;
      await Promise.all([saveGame(game), player.save()]);
      return [...events, { type: "answerSnubbed", playerId: String(player._id), value: value.value }];
    }

    value.guesser = player;
    player.answers++;
    const score = getAnswerScore(game.hints, guess.distance, game.guessers.length);
    player.score += score;
    player.scoreDaily += score;
    if (game.hints === 0) player.hintStreak++;
    // streak.player is populated (loadGame), or an id when it was just set below.
    const streakPlayer = game.streak?.player as unknown as IPlayer | Types.ObjectId | undefined;
    const streakPlayerId = streakPlayer && "_id" in streakPlayer ? streakPlayer._id : streakPlayer;
    if (!streakPlayerId || !player._id.equals(streakPlayerId)) {
      game.streak = { player: player._id, count: 1 };
    } else {
      game.streak.count++;
    }
    player.streak = Math.max(player.streak, game.streak.count);
    player.highScore = Math.max(player.highScore, player.scoreDaily);
    player.maxHintStreak = Math.max(player.maxHintStreak, player.hintStreak);
    if (player.infractions > 0) player.infractions--;
    await Promise.all([saveGame(game), player.save()]);
    events.push({
      type: "answerGuessed",
      playerId: String(player._id),
      value: value.value,
      score,
      accuracy: `${(guess.distance * 100).toFixed(0)}%`,
    });

    if (game.list.values.every(({ guesser }) => guesser)) {
      await closeRound(round, game, "completed");
      await List.updateOne({ _id: round.listId }, { lastPlayDate: new Date() });
      await startNextRound(scheduler, game, NEXT_ROUND_DELAY_MS);
      events.push({ type: "roundCompleted", roundId: String(round._id), listId: String(round.listId) });
    }
    return events;
  },

  hint: async (game, { actor }) => {
    const round = await getCurrentRound(game);
    if (!round) return [];
    if (game.hints >= MAX_HINTS) return [{ type: "hintRefused", reason: "tooMany" }];
    const waitMs = (round.nextHintAt?.getTime() ?? 0) - Date.now();
    if (waitMs > 0) return [{ type: "hintRefused", reason: "cooldown", seconds: Math.ceil(waitMs / 1000) }];
    game.hints++;
    round.hintsUsed = game.hints;
    round.nextHintAt = new Date(Date.now() + game.settings.hintDelay * 1000);
    await Promise.all([
      Player.updateOne({ _id: actor.playerId }, { $inc: { hints: 1 }, $set: { hintStreak: 0 } }),
      List.updateOne({ _id: round.listId }, { $inc: { hints: 1 } }),
      round.save(),
      saveGame(game),
    ]);
    return [{ type: "hintGiven" }];
  },

  skip: async (game, { actor }, scheduler) => {
    const round = await getCurrentRound(game);
    if (!round) {
      // Nothing to skip: make sure a Round is on its way (one may already be scheduled).
      await startNextRound(scheduler, game, 0);
      return [];
    }
    const playerId = new Types.ObjectId(actor.playerId);
    // No countdown in a personal chat: there's nobody to veto.
    if (game.isPersonalChat) return skipRound(game, round, [playerId], scheduler);
    // Skips wait out the vetoDelay after a Veto, silently.
    if (isVetoActive(game, round)) return [];
    const verdict = throttleSkip(actor.playerId);
    if (!verdict.allowed) {
      return verdict.warning
        ? [
            {
              type: "skipThrottled",
              playerName: actor.name,
              level: verdict.warning.level,
              delay: verdict.warning.delay,
            },
          ]
        : [];
    }
    if (game.settings.skipDelay <= 0) return skipRound(game, round, [playerId], scheduler);

    const roundId = String(round._id);
    if (round.skip) {
      if (round.skip.playerIds.some((id) => id.equals(playerId))) return [{ type: "skipRepeated" }];
      // A second Player agrees: the countdown is cut short.
      round.skip.playerIds.push(playerId);
      const endsAt = Date.now() + CORROBORATED_SKIP_MS;
      if (endsAt < round.skip.endsAt.getTime()) round.skip.endsAt = new Date(endsAt);
      await round.save();
      await scheduler.schedule(
        { type: "skipCountdownEnded", gameId: String(game._id), actor: SYSTEM_ACTOR, roundId },
        CORROBORATED_SKIP_MS,
      );
      return [];
    }
    const delayMs = game.settings.skipDelay * 1000;
    round.skip = { playerIds: [playerId], endsAt: new Date(Date.now() + delayMs) };
    await round.save();
    await scheduler.schedule(
      { type: "skipCountdownEnded", gameId: String(game._id), actor: SYSTEM_ACTOR, roundId },
      delayMs,
    );
    return [{ type: "skipRequested", listName: game.list.name, seconds: game.settings.skipDelay }];
  },

  skipCountdownEnded: async (game, { roundId }, scheduler) => {
    const round = await getCurrentRound(game);
    // Stale: the Round ended, the Skip was vetoed, or a shorter countdown will fire (or fired) instead.
    if (!round || String(round._id) !== roundId || !round.skip) return [];
    if (Date.now() < round.skip.endsAt.getTime() - TIMER_TOLERANCE_MS) return [];
    return skipRound(game, round, round.skip.playerIds, scheduler);
  },

  veto: async (game, { actor }) => {
    await Player.updateOne({ _id: actor.playerId }, { $inc: { vetoes: 1 } });
    const round = await getCurrentRound(game);
    if (!round?.skip) return [{ type: "skipNotFound", playerName: actor.name }];
    round.skip = undefined;
    round.vetoedAt = new Date();
    await round.save();
    return [{ type: "skipVetoed", playerName: actor.name, vetoDelay: game.settings.vetoDelay }];
  },
};

export type RoundActionType = "startRound" | "guess" | "hint" | "skip" | "skipCountdownEnded" | "veto";
