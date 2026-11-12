// The Minigame and Tinygame in the Engine: showing, guessing, hinting and skipping the side
// games played alongside the Rounds. Each Game has at most one of each, held on the Game.

import { HydratedDocument } from "mongoose";
import { styleText } from "util";
import { Player } from "@models/index";
import { IGame } from "@models/tenthings/game";
import { GameType } from "@models/tenthings/gameType";
import { getAnswerScore } from "@tenthings/guesses";
import { MAX_HINTS } from "@tenthings/hints";
import { drawMinigame } from "@tenthings/minigame";
import { drawTinygame } from "@tenthings/tinygame";
import { throttleSkip } from "@tenthings/skips";
import { Action, SideGame, SYSTEM_ACTOR } from "./actions";
import { EngineEvent } from "./events";
import { saveGame } from "./round";
import { Scheduler } from "./scheduler";

type GameDoc = HydratedDocument<IGame>;

/** After a side game is answered, the next one follows this much later, so the answer shows first. */
export const NEXT_SIDE_GAME_AFTER_GUESS_MS = 1000;
/** After a side game is skipped, the next one follows this much later. */
export const NEXT_SIDE_GAME_AFTER_SKIP_MS = 200;

export type SideGameActionType = "showSideGame" | "startSideGame" | "sideGameGuess" | "sideGameHint" | "sideGameSkip";

type Handler<T extends SideGameActionType> = (
  game: GameDoc,
  action: Extract<Action, { type: T }>,
  scheduler: Scheduler,
) => Promise<EngineEvent[]>;

const startSideGame = async (game: GameDoc, sideGame: SideGame): Promise<EngineEvent[]> => {
  const fallback = sideGame === GameType.MINIGAME ? await drawMinigame(game) : await drawTinygame(game);
  await saveGame(game);
  return [{ type: "sideGameStarted", sideGame, ...(fallback ? { fallback } : {}) }];
};

/** Ends the side game in play (an answer or a Skip): no later Guess can score on it. */
const endSideGame = (game: GameDoc, sideGame: SideGame, scheduler: Scheduler, delayMs: number) => {
  game[sideGame].answer = "";
  return scheduler.schedule(
    { type: "startSideGame", gameId: String(game._id), actor: SYSTEM_ACTOR, sideGame },
    delayMs,
  );
};

export const sideGameHandlers: { [T in SideGameActionType]: Handler<T> } = {
  showSideGame: async (game, { sideGame }) =>
    game[sideGame].answer ? [{ type: "sideGameShown", sideGame }] : startSideGame(game, sideGame),

  // Scheduled after an answer or a Skip; a Player may have started one meanwhile.
  startSideGame: async (game, { sideGame }) => (game[sideGame].answer ? [] : startSideGame(game, sideGame)),

  sideGameGuess: async (game, { sideGame, answer, distance, actor }, scheduler) => {
    // Answered, skipped or replaced since the Guess was queued.
    if (!game[sideGame].answer || game[sideGame].answer !== answer) return [];
    const player = await Player.findById(actor.playerId).exec();
    if (!player) return [];
    const score = getAnswerScore(game[sideGame].hints, distance);
    player.score += score;
    player.scoreDaily += score;
    if (game[sideGame].hints === 0) player.hintStreak++;
    if (sideGame === GameType.MINIGAME) player.minigamePlays++;
    else player.tinygamePlays++;
    if (player.infractions > 0) player.infractions--;
    game[sideGame].plays++;
    await endSideGame(game, sideGame, scheduler, NEXT_SIDE_GAME_AFTER_GUESS_MS);
    await Promise.all([player.save(), saveGame(game)]);
    console.log(
      `${game._id} (${game.settings.language}) - ${styleText("grey", sideGame)} "${styleText("blueBright", answer)}" by ${player.first_name}`,
    );
    return [
      {
        type: "sideGameGuessed",
        sideGame,
        answer,
        playerId: String(player._id),
        score,
        accuracy: (distance * 100).toFixed(0),
      },
    ];
  },

  sideGameHint: async (game, { sideGame, actor }) => {
    const current = game[sideGame];
    if (!current.answer) return [];
    if (current.hints >= MAX_HINTS) return [{ type: "hintRefused", reason: "tooMany" }];
    const waitMs = (current.nextHintAt?.getTime() ?? 0) - Date.now();
    if (waitMs > 0) return [{ type: "hintRefused", reason: "cooldown", seconds: Math.ceil(waitMs / 1000) }];
    current.hints++;
    current.nextHintAt = new Date(Date.now() + game.settings.hintDelay * 1000);
    await Promise.all([
      Player.updateOne({ _id: actor.playerId }, { $inc: { hints: 1 }, $set: { hintStreak: 0 } }),
      saveGame(game),
    ]);
    return [{ type: "sideGameHintGiven", sideGame }];
  },

  sideGameSkip: async (game, { sideGame, actor }, scheduler) => {
    // No hold in a personal chat: there's nobody else to annoy.
    if (!game.isPersonalChat) {
      const verdict = throttleSkip(actor.playerId);
      if (!verdict.allowed)
        return verdict.warning ? [{ type: "skipThrottled", playerName: actor.name, ...verdict.warning }] : [];
    }
    const { answer } = game[sideGame];
    if (!answer) return startSideGame(game, sideGame);
    await endSideGame(game, sideGame, scheduler, NEXT_SIDE_GAME_AFTER_SKIP_MS);
    await saveGame(game);
    return [{ type: "sideGameSkipped", sideGame, answer }];
  },
};
