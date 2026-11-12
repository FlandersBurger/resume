// The Game itself in the Engine, against real models on a throwaway MongoDB: the end of the
// day, turning a Game on and off, and the admin panel's settings.
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

import moment from "moment";
import db from "@root/db";
import { Game, GameRound, List, Player } from "@models/index";
import { Action, Actor, SYSTEM_ACTOR } from "@tenthings/engine/actions";
import { runAction } from "@tenthings/engine";
import { NEW_DAY_HINTS } from "@tenthings/engine/lifecycle";
import { SupportedLanguage } from "@tenthings/languages";
import { MEMORY_MONGO_TIMEOUT, openOnMemoryMongo } from "../../../helpers/memoryMongo";

let stop: () => Promise<void>;

beforeAll(async () => {
  ({ stop } = await openOnMemoryMongo(db.master));
}, MEMORY_MONGO_TIMEOUT);

afterAll(async () => {
  await stop?.();
});

const scheduler = { schedule: async () => undefined };
const run = (action: Action) => runAction(action, scheduler);

beforeEach(async () => {
  await db.master.db!.dropDatabase();
});

const admin: Actor = { playerId: "admin", name: "Admin", isAdmin: true };

const makeGame = (fields: Record<string, unknown> = {}) =>
  Game.create({
    telegramChatId: -1001,
    platform: "telegram",
    settings: { languages: [SupportedLanguage.EN] },
    ...fields,
  });

describe("the end of the day", () => {
  const setup = async () => {
    const game = await makeGame();
    const today = new Date();
    const lastWeek = moment().subtract(7, "days").toDate();
    const [ann, bob, cat, dan] = await Player.insertMany([
      { game: game._id, first_name: "Ann", id: 1, scoreDaily: 30, lastPlayDate: today, playStreak: 2 },
      { game: game._id, first_name: "Bob", id: 2, scoreDaily: 30, lastPlayDate: today },
      { game: game._id, first_name: "Cat", id: 3, scoreDaily: 10, lastPlayDate: today },
      // Scored, but not in the last day: shown, can't win.
      { game: game._id, first_name: "Dan", id: 4, scoreDaily: 50, lastPlayDate: lastWeek },
    ]);
    const idle = await Player.create({ game: game._id, first_name: "Eve", id: 5, scoreDaily: 0, playStreak: 3 });
    return { gameId: String(game._id), ann, bob, cat, dan, idle };
  };

  it("crowns the day's best and reports the Daily scores, highest first", async () => {
    const { gameId, ann, bob } = await setup();
    const { events } = await run({ type: "endDay", gameId, actor: SYSTEM_ACTOR });
    expect(events).toEqual([
      {
        type: "dayEnded",
        scores: [
          expect.objectContaining({ name: "Dan", score: 50 }),
          expect.objectContaining({ name: "Ann", score: 30 }),
          expect.objectContaining({ name: "Bob", score: 30 }),
          expect.objectContaining({ name: "Cat", score: 10 }),
        ],
        winners: [
          { playerId: String(ann._id), name: expect.stringContaining("Ann") },
          { playerId: String(bob._id), name: expect.stringContaining("Bob") },
        ],
        score: 30,
      },
    ]);
  });

  it("starts a new day: wins, plays and Play streaks counted, Daily scores reset", async () => {
    const { gameId, ann, cat, idle } = await setup();
    await run({ type: "endDay", gameId, actor: SYSTEM_ACTOR });
    expect(await Player.findById(ann._id).lean()).toMatchObject({ wins: 1, plays: 1, playStreak: 3, scoreDaily: 0 });
    expect(await Player.findById(cat._id).lean()).toMatchObject({ wins: 0, plays: 1, playStreak: 1, scoreDaily: 0 });
    expect(await Player.findById(idle._id).lean()).toMatchObject({ playStreak: 0 });
  });

  it("gives the Round in progress a head start of Hints", async () => {
    const game = await makeGame({ hints: 1 });
    const list = await List.create({ name: "Planets", language: SupportedLanguage.EN, values: [{ value: "Venus" }] });
    await GameRound.create({
      gameId: game._id,
      listId: list._id,
      outcome: "inProgress",
      language: SupportedLanguage.EN,
      hintsUsed: 1,
    });
    await run({ type: "endDay", gameId: String(game._id), actor: SYSTEM_ACTOR });
    expect((await Game.findById(game._id))!.hints).toBe(NEW_DAY_HINTS);
    expect(await GameRound.findOne({ gameId: game._id }).lean()).toMatchObject({ hintsUsed: NEW_DAY_HINTS });
  });
});

describe("turning a Game on and off", () => {
  it("turns a Game back on", async () => {
    const game = await makeGame({ enabled: false, lastPlayDate: moment().subtract(100, "days").toDate() });
    const { events } = await run({ type: "activate", gameId: String(game._id), actor: SYSTEM_ACTOR });
    expect(events).toEqual([{ type: "gameActivated" }]);
    const updated = (await Game.findById(game._id))!;
    expect(updated.enabled).toBe(true);
    expect(moment(updated.lastPlayDate).isAfter(moment().subtract(1, "minute"))).toBe(true);
  });

  it("leaves a Game an admin turned off alone", async () => {
    const game = await makeGame({ enabled: false, adminDisabled: true });
    expect((await run({ type: "activate", gameId: String(game._id), actor: SYSTEM_ACTOR })).events).toEqual([]);
    expect((await Game.findById(game._id))!.enabled).toBe(false);
  });

  it("turns a Game off once", async () => {
    const game = await makeGame({ enabled: true });
    const off: Action = { type: "deactivate", gameId: String(game._id), actor: SYSTEM_ACTOR, reason: "inactive" };
    expect((await run(off)).events).toEqual([{ type: "gameDeactivated", reason: "inactive" }]);
    expect((await run(off)).events).toEqual([]);
    expect((await Game.findById(game._id))!.enabled).toBe(false);
  });
});

describe("the admin panel's settings", () => {
  it("keeps only known settings with valid values", async () => {
    const game = await makeGame();
    const settings = { sass: false, hintDelay: 5, skipDelay: 7, bogus: true } as never;
    await run({ type: "updateSettings", gameId: String(game._id), actor: admin, settings });
    const updated = (await Game.findById(game._id).lean())!;
    expect(updated.settings).toMatchObject({ sass: false, hintDelay: 5 });
    expect(updated.settings.skipDelay).not.toBe(7);
    expect(updated.settings).not.toHaveProperty("bogus");
  });

  it("turning a Game off from the panel keeps it off", async () => {
    const game = await makeGame({ enabled: true });
    await run({ type: "updateSettings", gameId: String(game._id), actor: admin, settings: {}, adminDisabled: true });
    expect(await Game.findById(game._id).lean()).toMatchObject({ enabled: false, adminDisabled: true });
  });

  it("is for admins only", async () => {
    const game = await makeGame();
    const { events } = await run({
      type: "updateSettings",
      gameId: String(game._id),
      actor: { playerId: "p", name: "Ann" },
      settings: { sass: false },
    });
    expect(events).toEqual([{ type: "adminOnly", playerId: "p", playerName: "Ann" }]);
  });
});
