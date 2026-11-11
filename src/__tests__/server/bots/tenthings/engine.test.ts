// The Engine against real models on a throwaway MongoDB: what each Action writes and which
// Events it reports. The bot connections are stubbed out; the Engine doesn't use them.
jest.mock("@root/db", () => {
  const mongoose = jest.requireActual("mongoose");
  return { __esModule: true, default: { master: mongoose.createConnection() } };
});
jest.mock("@tenthings/providers/web", () => ({ web: {} }));
jest.mock("@tenthings/providers/telegram", () => ({ telegram: {} }));
jest.mock("@tenthings/providers/discord", () => ({ discord: {} }));
jest.mock("@root/queue", () => ({ __esModule: true, default: {} }));
jest.mock("@root/i18n", () => ({ __esModule: true, default: jest.fn((_, key: string) => key) }));

import db from "@root/db";
import { Game, GameRound, List, Player } from "@models/index";
import { getListScore } from "@models/tenthings/listMetrics";
import { Action, lastVotes, MAX_PICKED_LISTS, runAction } from "@tenthings/engine";
import { sanitizeSettingsUpdate } from "@tenthings/engine/actions";
import { SupportedLanguage } from "@tenthings/languages";
import { MEMORY_MONGO_TIMEOUT, openOnMemoryMongo } from "../../../helpers/memoryMongo";

let stop: () => Promise<void>;

beforeAll(async () => {
  ({ stop } = await openOnMemoryMongo(db.master));
}, MEMORY_MONGO_TIMEOUT);

afterAll(async () => {
  await stop?.();
});

beforeEach(async () => {
  await db.master.db!.dropDatabase();
  lastVotes.clear();
});

const setup = async () => {
  const game = await Game.create({
    telegramChatId: -1001,
    platform: "telegram",
    settings: { languages: [SupportedLanguage.EN] },
  });
  const player = await Player.create({ game: game._id, first_name: "Ann", id: 42 });
  const list = await List.create({
    name: "Planets",
    plays: 10,
    skips: 2,
    votes: [
      { voter: "a", vote: 1 },
      { voter: "b", vote: -1 },
    ],
  });
  const actor = { playerId: String(player._id), name: "Ann" };
  const admin = { ...actor, isAdmin: true };
  return { game, player, list, actor, admin, gameId: String(game._id), listId: String(list._id) };
};

const run = (action: Action) => runAction(action);

describe("vote", () => {
  test("records the Vote and stores the score from every Vote on the List", async () => {
    const { gameId, listId, actor } = await setup();
    const { events } = await run({ type: "vote", gameId, actor, listId, voterId: "ann", vote: 1 });
    const stored = await List.findById(listId).lean();
    expect(stored!.votes).toHaveLength(3);
    expect(stored!.score).toBeCloseTo(getListScore(stored!), 10);
    expect(events).toEqual([
      { type: "listVoted", listId, listName: "Planets", vote: 1, score: stored!.score, playerName: "Ann" },
    ]);
  });

  test("a voter who votes again changes their Vote instead of adding one", async () => {
    const { gameId, listId, actor } = await setup();
    await run({ type: "vote", gameId, actor, listId, voterId: "a", vote: -1 });
    const stored = await List.findById(listId).lean();
    expect(stored!.votes).toHaveLength(2);
    expect(stored!.votes.find((v) => v.voter === "a")!.vote).toBe(-1);
  });

  test("a second Vote within the cooldown is dropped", async () => {
    const { gameId, listId, actor } = await setup();
    await run({ type: "vote", gameId, actor, listId, voterId: "ann", vote: 1 });
    const { events } = await run({ type: "vote", gameId, actor, listId, voterId: "ann", vote: -1 });
    expect(events).toEqual([]);
    const stored = await List.findById(listId).lean();
    expect(stored!.votes.find((v) => v.voter === "ann")!.vote).toBe(1);
  });

  test("a Vote on a deleted List reports it", async () => {
    const { gameId, actor } = await setup();
    const listId = String(new (List as any)()._id);
    expect((await run({ type: "vote", gameId, actor, listId, voterId: "ann", vote: 1 })).events).toEqual([
      { type: "listNotFound" },
    ]);
  });
});

describe("pick", () => {
  test("queues the List for the Game and the Player, counts the Pick and lifts a Ban", async () => {
    const { game, player, list, gameId, listId, actor } = await setup();
    await GameRound.create({ gameId: game._id, listId: list._id, outcome: "banned", language: "EN" });
    const { events } = await run({ type: "pick", gameId, actor, listId });
    expect(events).toEqual([{ type: "listPicked", listId, listName: "Planets", playerName: "Ann" }]);
    expect((await Game.findById(gameId).lean())!.pickedLists.map(String)).toEqual([listId]);
    expect((await Player.findById(player._id).lean())!.pickedLists.map(String)).toEqual([listId]);
    expect((await List.findById(listId).lean())!.picks).toBe(1);
    expect(await GameRound.exists({ listId: list._id, outcome: "banned" })).toBeNull();
  });

  test("a List already queued by someone else is turned down", async () => {
    const { game, gameId, listId, actor } = await setup();
    await Game.updateOne({ _id: game._id }, { pickedLists: [listId] });
    const { events } = await run({ type: "pick", gameId, actor, listId });
    expect(events).toEqual([
      { type: "pickRejected", reason: "alreadyInQueue", playerName: "Ann", listName: "Planets" },
    ]);
  });

  test("picking the same List twice counts as an infraction", async () => {
    const { player, gameId, listId, actor } = await setup();
    await Player.updateOne({ _id: player._id }, { pickedLists: [listId] });
    const { events } = await run({ type: "pick", gameId, actor, listId });
    expect(events).toEqual([{ type: "pickRejected", reason: "alreadyRequested", playerName: "Ann" }]);
    expect((await Player.findById(player._id).lean())!.infractions).toBe(1);
  });

  test(`a full queue (${MAX_PICKED_LISTS} Lists) takes no more`, async () => {
    const { game, gameId, listId, actor } = await setup();
    const others = await List.insertMany(Array.from({ length: MAX_PICKED_LISTS }, (_, i) => ({ name: `L${i}` })));
    await Game.updateOne({ _id: game._id }, { pickedLists: others.map((l) => l._id) });
    const { events } = await run({ type: "pick", gameId, actor, listId });
    expect(events).toEqual([{ type: "pickRejected", reason: "queueFull", playerName: "Ann" }]);
  });
});

describe("admin-only Actions", () => {
  test("a non-admin is turned down and nothing changes", async () => {
    const { gameId, actor } = await setup();
    const { events } = await run({ type: "toggleSetting", gameId, actor, key: "sass" });
    expect(events).toEqual([{ type: "adminOnly", playerId: actor.playerId, playerName: "Ann" }]);
    expect((await Game.findById(gameId).lean())!.settings.sass).toBe(true);
  });

  test("toggleSetting flips the setting", async () => {
    const { gameId, admin } = await setup();
    const { events } = await run({ type: "toggleSetting", gameId, actor: admin, key: "sass" });
    expect(events).toEqual([{ type: "settingToggled", key: "sass", on: false }]);
    expect((await Game.findById(gameId).lean())!.settings.sass).toBe(false);
  });

  test("toggleSetting ignores keys that aren't on/off settings", async () => {
    const { gameId, admin } = await setup();
    const { events } = await run({ type: "toggleSetting", gameId, actor: admin, key: "language" as any });
    expect(events).toEqual([]);
    expect((await Game.findById(gameId).lean())!.settings.language).toBe("EN");
  });

  test("setDelay takes the keyboard's choices only", async () => {
    const { gameId, admin } = await setup();
    expect((await run({ type: "setDelay", gameId, actor: admin, key: "hintDelay", seconds: 20 })).events).toEqual([
      { type: "delaySet", key: "hintDelay", seconds: 20 },
    ]);
    expect((await run({ type: "setDelay", gameId, actor: admin, key: "hintDelay", seconds: 7 })).events).toEqual([]);
    expect((await Game.findById(gameId).lean())!.settings.hintDelay).toBe(20);
  });

  test("toggleTriviaLanguage adds and removes, and never leaves a Game without a language", async () => {
    const { gameId, admin } = await setup();
    const toggle = (language: string) => run({ type: "toggleTriviaLanguage", gameId, actor: admin, language });
    expect((await toggle("NL")).events).toEqual([{ type: "triviaLanguageToggled", language: "NL", on: true }]);
    expect((await Game.findById(gameId).lean())!.settings.languages).toEqual(["EN", "NL"]);
    await toggle("NL");
    expect((await toggle("EN")).events).toEqual([{ type: "triviaLanguageToggled", language: "EN", on: true }]);
    expect((await Game.findById(gameId).lean())!.settings.languages).toEqual(["EN"]);
    expect((await toggle("XX")).events).toEqual([]);
  });

  test("setBotLanguage takes bot languages only", async () => {
    const { gameId, admin } = await setup();
    expect((await run({ type: "setBotLanguage", gameId, actor: admin, language: "NL" })).events).toEqual([
      { type: "botLanguageSet", language: "NL" },
    ]);
    // Italian Lists exist, but the bot doesn't speak it.
    expect((await run({ type: "setBotLanguage", gameId, actor: admin, language: "IT" })).events).toEqual([]);
    expect((await Game.findById(gameId).lean())!.settings.language).toBe("NL");
  });

  test("toggleCategory switches a subcategory off and on, and ignores unknown categories", async () => {
    const { gameId, admin } = await setup();
    const toggle = (category: string) => run({ type: "toggleCategory", gameId, actor: admin, category });
    expect((await toggle("music.albums")).events).toEqual([
      { type: "categoryToggled", category: "music.albums", on: false },
    ]);
    expect((await Game.findById(gameId).lean())!.disabledCategories).toContain("music.albums");
    expect((await toggle("music.albums")).events).toEqual([
      { type: "categoryToggled", category: "music.albums", on: true },
    ]);
    expect((await toggle("music.kazoo")).events).toEqual([]);
    expect((await toggle("nonsense")).events).toEqual([]);
  });
});

test("an Action on a Game that no longer exists does nothing", async () => {
  const { actor, listId } = await setup();
  const gameId = String(new (Game as any)()._id);
  expect(await run({ type: "pick", gameId, actor, listId })).toEqual({ game: null, events: [] });
});

describe("sanitizeSettingsUpdate", () => {
  test("keeps known settings with valid values and drops the rest", () => {
    expect(
      sanitizeSettingsUpdate({
        sass: false,
        intro: "yes",
        hintDelay: 15,
        skipDelay: 7,
        language: "NL",
        languages: ["EN", "XX"],
        adminDisabled: true,
        enabled: false,
        __proto__polluted: 1,
      }),
    ).toEqual({ sass: false, hintDelay: 15, language: "NL" });
  });
});
