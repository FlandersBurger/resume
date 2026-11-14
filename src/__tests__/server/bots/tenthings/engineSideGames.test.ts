// The Minigame and Tinygame in the Engine, against real models on a throwaway MongoDB:
// showing, guessing, hinting and skipping them. Scheduled Actions are collected, not queued.
jest.mock("@root/db", () => {
  const mongoose = jest.requireActual("mongoose");
  return { __esModule: true, default: { master: mongoose.createConnection() } };
});
jest.mock("@tenthings/providers/web", () => ({ web: {} }));
jest.mock("@tenthings/providers/telegram", () => ({ telegram: { message: jest.fn() } }));
jest.mock("@tenthings/providers/discord", () => ({ discord: {} }));
jest.mock("@root/queue", () => ({ __esModule: true, default: {} }));
jest.mock("@root/i18n", () => ({ __esModule: true, default: jest.fn((_, key: string) => key) }));
jest.mock("@tenthings/notify", () => ({ notifyAdmin: jest.fn() }));
jest.mock("@tenthings/engine/queue", () => ({ dispatch: jest.fn(), queueGuessJob: jest.fn() }));

import db from "@root/db";
import { resetSelectionCaches } from "@tenthings/lists";
import { Game, List, Minigame, Player } from "@models/index";
import { GameType } from "@models/tenthings/gameType";
import { Action, Actor, SideGame } from "@tenthings/engine/actions";
import { runAction } from "@tenthings/engine";
import { NEXT_SIDE_GAME_AFTER_GUESS_MS, NEXT_SIDE_GAME_AFTER_SKIP_MS } from "@tenthings/engine/sideGames";
import { getAnswerScore } from "@tenthings/guesses";
import { MAX_HINTS } from "@tenthings/hints";
import { SupportedLanguage } from "@tenthings/languages";
import { MEMORY_MONGO_TIMEOUT, openOnMemoryMongo } from "../../../helpers/memoryMongo";

let stop: () => Promise<void>;

beforeAll(async () => {
  ({ stop } = await openOnMemoryMongo(db.master));
}, MEMORY_MONGO_TIMEOUT);

afterAll(async () => {
  await stop?.();
});

let scheduled: { action: Action; delayMs: number }[] = [];
const scheduler = {
  schedule: async (action: Action, delayMs: number) => {
    scheduled.push({ action, delayMs });
  },
};
const run = (action: Action) => runAction(action, scheduler);

beforeEach(async () => {
  await db.master.db!.dropDatabase();
  scheduled = [];
  resetSelectionCaches();
});

const MINI = GameType.MINIGAME as SideGame;
const TINY = GameType.TINYGAME as SideGame;

/** A Game with two Players and one Minigame and one List to draw from; no side game in play yet. */
const setup = async ({ personal = false } = {}) => {
  const game = await Game.create({
    telegramChatId: personal ? 592 : -1001,
    platform: "telegram",
    settings: { languages: [SupportedLanguage.EN], hintDelay: 10 },
  });
  const [ann, bob] = await Player.insertMany([
    { game: game._id, first_name: "Ann", id: 1 },
    { game: game._id, first_name: "Bob", id: 2 },
  ]);
  await Minigame.create({
    answer: "Mercury",
    language: SupportedLanguage.EN,
    lists: ["Planets", "Elements", "Roman gods"],
    categories: ["science"],
  });
  await List.create({
    name: "Planets",
    language: SupportedLanguage.EN,
    categories: ["science"],
    values: [{ value: "Mercury" }, { value: "Venus" }],
  });
  const gameId = String(game._id);
  const actorOf = (p: typeof ann): Actor => ({ playerId: String(p._id), name: p.first_name });
  return { gameId, ann: actorOf(ann), bob: actorOf(bob) };
};

const show = (gameId: string, actor: Actor, sideGame = MINI): Action => ({
  type: "showSideGame",
  gameId,
  actor,
  sideGame,
});
const guess = (gameId: string, actor: Actor, answer: string, sideGame = MINI): Action => ({
  type: "sideGameGuess",
  gameId,
  actor,
  sideGame,
  answer,
  distance: 1,
});
const hint = (gameId: string, actor: Actor, sideGame = MINI): Action => ({
  type: "sideGameHint",
  gameId,
  actor,
  sideGame,
});
const skip = (gameId: string, actor: Actor, sideGame = MINI): Action => ({
  type: "sideGameSkip",
  gameId,
  actor,
  sideGame,
});

describe("showing a side game", () => {
  it("starts one when there's none", async () => {
    const { gameId, ann } = await setup();
    const { events } = await run(show(gameId, ann));
    expect(events).toEqual([{ type: "sideGameStarted", sideGame: MINI }]);
    const game = await Game.findById(gameId);
    expect(game!.minigame.answer).toBe("Mercury");
    expect(game!.minigame.hints).toBe(0);
  });

  it("shows the one in play", async () => {
    const { gameId, ann } = await setup();
    await run(show(gameId, ann));
    const { events } = await run(show(gameId, ann));
    expect(events).toEqual([{ type: "sideGameShown", sideGame: MINI }]);
  });

  it("draws a Tinygame from a List", async () => {
    const { gameId, ann } = await setup();
    await run(show(gameId, ann, TINY));
    const game = await Game.findById(gameId);
    expect(game!.tinygame.answer).toBe("Planets");
    expect([...game!.tinygame.clues].sort()).toEqual(["Mercury", "Venus"]);
  });
});

describe("guessing a side game", () => {
  it("scores the Player and starts the next one a moment later", async () => {
    const { gameId, ann } = await setup();
    await run(show(gameId, ann));
    const { events } = await run(guess(gameId, ann, "Mercury"));
    const score = getAnswerScore(0, 1);
    expect(events).toEqual([
      { type: "sideGameGuessed", sideGame: MINI, answer: "Mercury", playerId: ann.playerId, score, accuracy: "100" },
    ]);
    const player = await Player.findById(ann.playerId);
    expect(player).toMatchObject({ score, scoreDaily: score, minigamePlays: 1, hintStreak: 1 });
    const game = await Game.findById(gameId);
    expect(game!.minigame).toMatchObject({ answer: "", plays: 1 });
    expect(scheduled).toEqual([
      {
        action: expect.objectContaining({ type: "startSideGame", sideGame: MINI }),
        delayMs: NEXT_SIDE_GAME_AFTER_GUESS_MS,
      },
    ]);
  });

  it("scores only the first of two Guesses queued for the same answer", async () => {
    const { gameId, ann, bob } = await setup();
    await run(show(gameId, ann));
    await run(guess(gameId, ann, "Mercury"));
    const { events } = await run(guess(gameId, bob, "Mercury"));
    expect(events).toEqual([]);
    expect((await Player.findById(bob.playerId))!.score).toBe(0);
  });

  it("counts Tinygame plays separately", async () => {
    const { gameId, ann } = await setup();
    await run(show(gameId, ann, TINY));
    await run(guess(gameId, ann, "Planets", TINY));
    expect(await Player.findById(ann.playerId)).toMatchObject({ tinygamePlays: 1, minigamePlays: 0 });
  });
});

describe("the next side game", () => {
  it("starts when its timer fires", async () => {
    const { gameId, ann } = await setup();
    await run(show(gameId, ann));
    await run(guess(gameId, ann, "Mercury"));
    const { events } = await run(scheduled[0].action);
    expect(events).toEqual([{ type: "sideGameStarted", sideGame: MINI }]);
  });

  it("isn't started twice when a Player started one first", async () => {
    const { gameId, ann } = await setup();
    await run(show(gameId, ann));
    await run(guess(gameId, ann, "Mercury"));
    await run(show(gameId, ann));
    const { events } = await run(scheduled[0].action);
    expect(events).toEqual([]);
  });
});

describe("side game Hints", () => {
  it("reveal more, then make the next Hint wait", async () => {
    const { gameId, ann, bob } = await setup();
    await run(show(gameId, ann));
    expect((await run(hint(gameId, ann))).events).toEqual([{ type: "sideGameHintGiven", sideGame: MINI }]);
    expect((await Game.findById(gameId))!.minigame.hints).toBe(1);
    expect(await Player.findById(ann.playerId)).toMatchObject({ hints: 1, hintStreak: 0 });
    expect((await run(hint(gameId, bob))).events).toEqual([{ type: "hintRefused", reason: "cooldown", seconds: 10 }]);
  });

  it("stop at the maximum", async () => {
    const { gameId, ann } = await setup();
    await run(show(gameId, ann));
    await Game.updateOne({ _id: gameId }, { "minigame.hints": MAX_HINTS });
    expect((await run(hint(gameId, ann))).events).toEqual([{ type: "hintRefused", reason: "tooMany" }]);
  });

  it("cool down per side game", async () => {
    const { gameId, ann } = await setup();
    await run(show(gameId, ann));
    await run(show(gameId, ann, TINY));
    await run(hint(gameId, ann));
    expect((await run(hint(gameId, ann, TINY))).events).toEqual([{ type: "sideGameHintGiven", sideGame: TINY }]);
  });
});

describe("skipping a side game", () => {
  it("reveals the answer and starts the next one shortly", async () => {
    const { gameId, ann } = await setup();
    await run(show(gameId, ann));
    const { events } = await run(skip(gameId, ann));
    expect(events).toEqual([{ type: "sideGameSkipped", sideGame: MINI, answer: "Mercury" }]);
    expect((await Game.findById(gameId))!.minigame.answer).toBe("");
    expect(scheduled[0].delayMs).toBe(NEXT_SIDE_GAME_AFTER_SKIP_MS);
  });

  it("holds back a Player who skips again straight away", async () => {
    const { gameId, ann } = await setup();
    await run(show(gameId, ann));
    await run(skip(gameId, ann));
    await run(scheduled[0].action);
    const { events } = await run(skip(gameId, ann));
    expect(events).toEqual([{ type: "skipThrottled", playerName: "Ann", level: "short", delay: 25 }]);
  });

  it("doesn't hold anyone back in a personal chat", async () => {
    const { gameId, ann } = await setup({ personal: true });
    await run(show(gameId, ann));
    await run(skip(gameId, ann));
    await run(scheduled[0].action);
    expect((await run(skip(gameId, ann))).events).toEqual([
      { type: "sideGameSkipped", sideGame: MINI, answer: "Mercury" },
    ]);
  });
});
