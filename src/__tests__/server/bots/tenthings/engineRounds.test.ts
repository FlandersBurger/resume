// Rounds in the Engine, against real models on a throwaway MongoDB: starting a Round,
// Guesses, Hints, Skips and Vetoes, and what each one records. Scheduled Actions are
// collected instead of queued, and fired by hand.
jest.mock("@root/db", () => {
  const mongoose = jest.requireActual("mongoose");
  return { __esModule: true, default: { master: mongoose.createConnection() } };
});
jest.mock("@tenthings/providers/web", () => ({ web: {} }));
// selectList tells the chat when every List is on cooldown.
jest.mock("@tenthings/providers/telegram", () => ({ telegram: { message: jest.fn() } }));
jest.mock("@tenthings/providers/discord", () => ({ discord: {} }));
jest.mock("@root/queue", () => ({ __esModule: true, default: {} }));
jest.mock("@root/i18n", () => ({ __esModule: true, default: jest.fn((_, key: string) => key) }));
jest.mock("@tenthings/notify", () => ({ notifyAdmin: jest.fn() }));
// Guesses are queued through the Engine queue; nothing here should reach Redis.
jest.mock("@tenthings/engine/queue", () => ({ dispatch: jest.fn(), queueGuessJob: jest.fn() }));

import { Types } from "mongoose";
import db from "@root/db";
import { Game, GameRound, List, Player } from "@models/index";
import { GameType } from "@models/tenthings/gameType";
import { Action, Actor, SYSTEM_ACTOR } from "@tenthings/engine/actions";
import { pendingBans, runAction } from "@tenthings/engine";
import { CORROBORATED_SKIP_MS, NEXT_ROUND_DELAY_MS } from "@tenthings/engine/round";
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

/** Run what the Engine scheduled, as the queue would once the delays are up. */
const fireScheduled = async () => {
  const due = scheduled;
  scheduled = [];
  const results = [];
  for (const { action } of due) results.push(await run(action));
  return results.flatMap(({ events }) => events);
};

beforeEach(async () => {
  await db.master.db!.dropDatabase();
  scheduled = [];
  pendingBans.clear();
});

/** A Game with two Players, mid-Round on "Planets" (the only List). */
const setup = async ({ personal = false } = {}) => {
  const game = await Game.create({
    telegramChatId: personal ? 592 : -1001,
    platform: "telegram",
    // Past the onboarding ramp, so selection isn't limited to high-quality Lists.
    listsPlayed: 500,
    settings: { languages: [SupportedLanguage.EN] },
  });
  const [ann, bob] = await Player.insertMany([
    { game: game._id, first_name: "Ann", id: 1 },
    { game: game._id, first_name: "Bob", id: 2 },
  ]);
  const list = await List.create({
    name: "Planets",
    language: SupportedLanguage.EN,
    categories: ["science"],
    plays: 10,
    values: [{ value: "Mercury" }, { value: "Venus" }],
  });
  const gameId = String(game._id);
  const actorOf = (p: typeof ann): Actor => ({ playerId: String(p._id), name: p.first_name });
  await run({ type: "startRound", gameId, actor: SYSTEM_ACTOR });
  scheduled = [];
  const round = (await GameRound.findOne({ gameId: game._id, outcome: "inProgress" }))!;
  return { game, gameId, list, listId: String(list._id), round, ann: actorOf(ann), bob: actorOf(bob) };
};

const guess = (gameId: string, actor: Actor, listId: string, value: string): Action => ({
  type: "guess",
  gameId,
  actor,
  listId,
  match: { type: GameType.MAINGAME, value, distance: 1 },
});

const inProgress = (gameId: string) => GameRound.findOne({ gameId, outcome: "inProgress" }).lean();

describe("startRound", () => {
  test("serves a List, records the Round as in progress and counts the play", async () => {
    const { game, gameId, list, round } = await setup();
    expect(round.listId.equals(list._id)).toBe(true);
    const stored = (await Game.findById(gameId).lean())!;
    expect(stored.list.name).toBe("Planets");
    expect(stored.listsPlayed).toBe(501);
    expect((await List.findById(list._id).lean())!.plays).toBe(11);
    expect(round.categories).toEqual(["science"]);
    expect(game._id.equals(round.gameId)).toBe(true);
  });

  test("while a Round is in progress, a Player is shown it and a timer does nothing", async () => {
    const { gameId, ann } = await setup();
    expect((await run({ type: "startRound", gameId, actor: ann })).events).toEqual([{ type: "roundInProgress" }]);
    expect((await run({ type: "startRound", gameId, actor: SYSTEM_ACTOR })).events).toEqual([]);
    expect(await GameRound.countDocuments({ gameId })).toBe(1);
  });

  test("replace drops the Round in progress and starts another", async () => {
    const { gameId, round } = await setup();
    const { events } = await run({ type: "startRound", gameId, actor: SYSTEM_ACTOR, replace: true });
    expect(events).toMatchObject([{ type: "roundStarted", listName: "Planets" }]);
    const rounds = await GameRound.find({ gameId }).lean();
    expect(rounds).toHaveLength(1);
    expect(rounds[0]._id.equals(round._id)).toBe(false);
  });
});

describe("guess", () => {
  test("a right Answer scores, and the same Answer again is a snub", async () => {
    const { gameId, listId, ann, bob } = await setup();
    const { events } = await run(guess(gameId, ann, listId, "Mercury"));
    expect(events).toEqual([
      { type: "answerGuessed", playerId: ann.playerId, value: "Mercury", score: 10, accuracy: "100%" },
    ]);
    expect((await Player.findById(ann.playerId).lean())!).toMatchObject({ answers: 1, score: 10, scoreDaily: 10 });
    expect((await run(guess(gameId, bob, listId, "Mercury"))).events).toEqual([
      { type: "answerSnubbed", playerId: bob.playerId, value: "Mercury" },
    ]);
    expect((await Player.findById(bob.playerId).lean())!.snubs).toBe(1);
  });

  test("a Guess for another List counts for nothing", async () => {
    const { gameId, ann } = await setup();
    expect((await run(guess(gameId, ann, String(new Types.ObjectId()), "Mercury"))).events).toEqual([]);
  });

  test("the last Answer ends the Round as completed, and the next one starts after a pause", async () => {
    const { gameId, listId, ann, bob, round } = await setup();
    await run(guess(gameId, ann, listId, "Mercury"));
    const { events } = await run(guess(gameId, bob, listId, "Venus"));
    expect(events.map((e) => e.type)).toEqual(["answerGuessed", "roundCompleted"]);
    expect((await GameRound.findById(round._id).lean())!).toMatchObject({ outcome: "completed", answersRevealed: 2 });
    expect(scheduled).toMatchObject([{ action: { type: "startRound" }, delayMs: NEXT_ROUND_DELAY_MS }]);
    // Between Rounds, Guesses count for nothing.
    expect((await run(guess(gameId, ann, listId, "Venus"))).events).toEqual([]);
    // The only List was just played, so the next Round replays it, and says so.
    expect(await fireScheduled()).toMatchObject([{ type: "allListsPlayed" }, { type: "roundStarted" }]);
    expect(await inProgress(gameId)).not.toBeNull();
  });
});

describe("hint", () => {
  const allowHint = (gameId: string) =>
    GameRound.updateOne({ gameId, outcome: "inProgress" }, { nextHintAt: new Date(Date.now() - 1000) });

  test("the first seconds of a Round, and the hintDelay after a Hint, are a cooldown", async () => {
    const { gameId, ann } = await setup();
    expect((await run({ type: "hint", gameId, actor: ann })).events).toEqual([
      { type: "hintRefused", reason: "cooldown", seconds: 3 },
    ]);
    await allowHint(gameId);
    expect((await run({ type: "hint", gameId, actor: ann })).events).toEqual([{ type: "hintGiven" }]);
    expect((await run({ type: "hint", gameId, actor: ann })).events).toEqual([
      { type: "hintRefused", reason: "cooldown", seconds: 10 },
    ]);
  });

  test("a Hint counts for the Game, the Round, the List and the Player", async () => {
    const { gameId, list, ann } = await setup();
    await Player.updateOne({ _id: ann.playerId }, { hintStreak: 4 });
    await allowHint(gameId);
    await run({ type: "hint", gameId, actor: ann });
    expect((await Game.findById(gameId).lean())!.hints).toBe(1);
    expect((await inProgress(gameId))!.hintsUsed).toBe(1);
    expect((await List.findById(list._id).lean())!.hints).toBe(1);
    expect((await Player.findById(ann.playerId).lean())!).toMatchObject({ hints: 1, hintStreak: 0 });
  });

  test(`no more than ${MAX_HINTS} Hints`, async () => {
    const { gameId, ann } = await setup();
    await Game.updateOne({ _id: gameId }, { hints: MAX_HINTS });
    expect((await run({ type: "hint", gameId, actor: ann })).events).toEqual([
      { type: "hintRefused", reason: "tooMany" },
    ]);
  });
});

describe("skip", () => {
  /** Let the pending Skip's countdown run out. */
  const endCountdown = (gameId: string) =>
    GameRound.updateOne({ gameId, outcome: "inProgress" }, { "skip.endsAt": new Date(Date.now() - 1000) });

  test("in a personal chat the List is skipped at once", async () => {
    const { gameId, list, ann, round } = await setup({ personal: true });
    const { events } = await run({ type: "skip", gameId, actor: ann });
    expect(events).toEqual([
      { type: "listSkipped", roundId: String(round._id), listId: String(list._id), listName: "Planets" },
    ]);
    expect((await GameRound.findById(round._id).lean())!.outcome).toBe("skipped");
    expect((await Player.findById(ann.playerId).lean())!.skips).toBe(1);
    expect((await List.findById(list._id).lean())!.skips).toBe(1);
    // The next Round is its own job, so the skipped List can still be shown.
    expect(scheduled).toMatchObject([{ action: { type: "startRound" }, delayMs: 0 }]);
  });

  test("in a group the Skip waits out a countdown, then goes through", async () => {
    const { gameId, ann, round } = await setup();
    expect((await run({ type: "skip", gameId, actor: ann })).events).toEqual([
      { type: "skipRequested", listName: "Planets", seconds: 10 },
    ]);
    expect(scheduled).toEqual([
      {
        action: { type: "skipCountdownEnded", gameId, actor: SYSTEM_ACTOR, roundId: String(round._id) },
        delayMs: 10_000,
      },
    ]);
    await endCountdown(gameId);
    expect((await fireScheduled()).map((e) => e.type)).toEqual(["listSkipped"]);
    expect((await GameRound.findById(round._id).lean())!.outcome).toBe("skipped");
  });

  test("a countdown that fires before its time does nothing", async () => {
    const { gameId, ann } = await setup();
    await run({ type: "skip", gameId, actor: ann });
    expect(await fireScheduled()).toEqual([]);
    expect((await inProgress(gameId))!.skip).toBeDefined();
  });

  test("a second Player cuts the countdown short, and both are counted", async () => {
    const { gameId, ann, bob } = await setup();
    await run({ type: "skip", gameId, actor: ann });
    scheduled = [];
    expect((await run({ type: "skip", gameId, actor: bob })).events).toEqual([]);
    expect(scheduled).toMatchObject([{ action: { type: "skipCountdownEnded" }, delayMs: CORROBORATED_SKIP_MS }]);
    const endsAt = (await inProgress(gameId))!.skip!.endsAt.getTime();
    expect(endsAt).toBeLessThanOrEqual(Date.now() + CORROBORATED_SKIP_MS);
    await endCountdown(gameId);
    await fireScheduled();
    const players = await Player.find({ _id: { $in: [ann.playerId, bob.playerId] } }).lean();
    expect(players.map((p) => p.skips)).toEqual([1, 1]);
  });

  test("skipping again straight away holds the Player back", async () => {
    const { gameId, ann } = await setup();
    await run({ type: "skip", gameId, actor: ann });
    expect((await run({ type: "skip", gameId, actor: ann })).events).toEqual([
      { type: "skipThrottled", playerName: "Ann", level: "short", delay: 25 },
    ]);
  });

  test("a Veto cancels the Skip, and Skips wait out the vetoDelay", async () => {
    const { gameId, ann, bob } = await setup();
    await run({ type: "skip", gameId, actor: ann });
    expect((await run({ type: "veto", gameId, actor: bob })).events).toEqual([
      { type: "skipVetoed", playerName: "Bob", vetoDelay: 15 },
    ]);
    expect((await Player.findById(bob.playerId).lean())!.vetoes).toBe(1);
    expect(await fireScheduled()).toEqual([]);
    expect(await inProgress(gameId)).not.toBeNull();
    expect((await run({ type: "skip", gameId, actor: bob })).events).toEqual([]);
  });

  test("a Veto with no Skip pending says so", async () => {
    const { gameId, bob } = await setup();
    expect((await run({ type: "veto", gameId, actor: bob })).events).toEqual([
      { type: "skipNotFound", playerName: "Bob" },
    ]);
  });

  test("an Answer during the countdown cancels the Skip", async () => {
    const { gameId, listId, ann, bob } = await setup();
    await run({ type: "skip", gameId, actor: ann });
    const { events } = await run(guess(gameId, bob, listId, "Venus"));
    expect(events[0]).toEqual({ type: "skipAborted", playerName: "Bob", vetoDelay: 15 });
    expect((await inProgress(gameId))!.skip).toBeUndefined();
  });

  test("with no Round in progress, a Skip gets one started", async () => {
    const { gameId, ann } = await setup();
    await GameRound.deleteMany({ gameId });
    await Game.updateOne({ _id: gameId }, { "list.values": [] });
    expect((await run({ type: "skip", gameId, actor: ann })).events).toEqual([]);
    expect(await fireScheduled()).toMatchObject([{ type: "roundStarted" }]);
  });
});

describe("Rounds started before they were recorded at the start", () => {
  test("a Game mid-Round gets its in-progress record on its first Action", async () => {
    const { gameId, listId, ann } = await setup();
    await GameRound.deleteMany({ gameId });
    await run(guess(gameId, ann, listId, "Mercury"));
    const round = (await inProgress(gameId))!;
    expect(String(round.listId)).toBe(listId);
    expect(round.language).toBe("EN");
  });

  test("a Game whose Round already ended doesn't get one", async () => {
    const { gameId, listId, ann, round } = await setup();
    await GameRound.updateOne({ _id: round._id }, { outcome: "skipped" });
    expect((await run(guess(gameId, ann, listId, "Mercury"))).events).toEqual([]);
    expect(await inProgress(gameId)).toBeNull();
  });
});

test("banning the List being played ends its Round as the Ban, and the next Round starts", async () => {
  const { gameId, listId, ann, round } = await setup({ personal: true });
  const admin = { ...ann, isAdmin: true };
  await run({ type: "requestBan", gameId, actor: admin, listId });
  expect((await run({ type: "confirmBan", gameId, actor: admin, listId })).events).toMatchObject([
    { type: "listBanned" },
  ]);
  const rounds = await GameRound.find({ gameId }).lean();
  expect(rounds).toHaveLength(1);
  expect(rounds[0]).toMatchObject({ _id: round._id, outcome: "banned" });
  expect(scheduled).toMatchObject([{ action: { type: "startRound" }, delayMs: 0 }]);
});
