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
jest.mock("@tenthings/notify", () => ({ notifyAdmin: jest.fn() }));
// Guesses are queued through the Engine queue; nothing here should reach Redis.
jest.mock("@tenthings/engine/queue", () => ({ dispatch: jest.fn(), queueGuessJob: jest.fn() }));

import db from "@root/db";
import { resetSelectionCaches } from "@tenthings/lists";
import { Game, GameRound, List, Player } from "@models/index";
import { getListScore } from "@models/tenthings/listMetrics";
import { Action, lastVotes, MAX_PICKED_LISTS, pendingBans, runAction } from "@tenthings/engine";
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
  resetSelectionCaches();
  lastVotes.clear();
  pendingBans.clear();
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

const scheduler = { schedule: jest.fn(async () => undefined) };
const run = (action: Action) => runAction(action, scheduler);

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

describe("ban", () => {
  const isBanned = (gameId: string, listId: string) => GameRound.exists({ gameId, listId, outcome: "banned" });

  test("requesting a Ban needs an admin", async () => {
    const { gameId, listId, actor } = await setup();
    expect((await run({ type: "requestBan", gameId, actor, listId })).events).toEqual([
      { type: "adminOnly", playerId: actor.playerId, playerName: "Ann" },
    ]);
  });

  test("in a Telegram group a second Player confirms the Ban", async () => {
    const { game, gameId, listId, admin } = await setup();
    expect((await run({ type: "requestBan", gameId, actor: admin, listId })).events).toEqual([
      { type: "banRequested", listId, listName: "Planets", playerName: "Ann", corroborate: true },
    ]);
    // The requester can't corroborate their own Ban.
    expect((await run({ type: "confirmBan", gameId, actor: admin, listId })).events).toEqual([
      { type: "banConfirmedBySamePlayer", playerName: "Ann" },
    ]);
    const bob = await Player.create({ game: game._id, first_name: "Bob", id: 43 });
    const second = { playerId: String(bob._id), name: "Bob" };
    expect((await run({ type: "confirmBan", gameId, actor: second, listId })).events).toEqual([
      { type: "listBanned", listId, listName: "Planets" },
    ]);
    expect(await isBanned(gameId, listId)).toBeTruthy();
    expect((await List.findById(listId).lean())!.bans).toBe(1);
    // The request is used up.
    expect((await run({ type: "confirmBan", gameId, actor: second, listId })).events).toEqual([
      { type: "banRequestMissing" },
    ]);
  });

  test("in a personal chat the requester confirms their own Ban", async () => {
    const { game, gameId, listId, admin } = await setup();
    await Game.updateOne({ _id: game._id }, { telegramChatId: 42 });
    await run({ type: "requestBan", gameId, actor: admin, listId });
    expect((await run({ type: "confirmBan", gameId, actor: admin, listId })).events).toEqual([
      { type: "listBanned", listId, listName: "Planets" },
    ]);
  });

  test("on Discord only an admin confirms", async () => {
    const { game, gameId, listId, actor, admin } = await setup();
    await Game.updateOne({ _id: game._id }, { platform: "discord", $unset: { telegramChatId: 1 } });
    await run({ type: "requestBan", gameId, actor: admin, listId });
    expect((await run({ type: "confirmBan", gameId, actor, listId })).events).toEqual([
      { type: "adminOnly", playerId: actor.playerId, playerName: "Ann" },
    ]);
    expect(await isBanned(gameId, listId)).toBeNull();
    expect((await run({ type: "confirmBan", gameId, actor: admin, listId })).events).toEqual([
      { type: "listBanned", listId, listName: "Planets" },
    ]);
  });

  test("a List the Game already banned isn't banned again", async () => {
    const { game, list, gameId, listId, admin } = await setup();
    await GameRound.create({ gameId: game._id, listId: list._id, outcome: "banned", language: "EN" });
    expect((await run({ type: "requestBan", gameId, actor: admin, listId })).events).toEqual([
      { type: "listAlreadyBanned", listName: "Planets" },
    ]);
  });
});

describe("search", () => {
  test("finds Lists by name and counts the search", async () => {
    const { player, gameId, listId, actor } = await setup();
    await List.syncIndexes(); // search falls back to the text index, which dropDatabase removed
    await List.create({ name: "Rivers" });
    expect((await run({ type: "search", gameId, actor, query: "plan" })).events).toEqual([
      { type: "searchResults", query: "plan", playerName: "Ann", lists: [{ id: listId, name: "Planets" }] },
    ]);
    expect((await Player.findById(player._id).lean())!.searches).toBe(1);
  });

  test("an empty search asks for a search term", async () => {
    const { gameId, actor } = await setup();
    expect((await run({ type: "search", gameId, actor, query: " " })).events).toEqual([
      { type: "searchEmpty", playerName: "Ann" },
    ]);
  });

  test("a full queue takes no searches", async () => {
    const { game, gameId, actor } = await setup();
    const others = await List.insertMany(Array.from({ length: MAX_PICKED_LISTS }, (_, i) => ({ name: `L${i}` })));
    await Game.updateOne({ _id: game._id }, { pickedLists: others.map((l) => l._id) });
    expect((await run({ type: "search", gameId, actor, query: "plan" })).events).toEqual([
      { type: "pickRejected", reason: "queueFull", playerName: "Ann" },
    ]);
  });
});

test("showUpcoming lists the Picked Lists in queue order", async () => {
  const { game, gameId, list, actor } = await setup();
  const [a, b] = await List.insertMany([{ name: "A" }, { name: "B" }]);
  await Game.updateOne({ _id: game._id }, { pickedLists: [b._id, list._id, a._id] });
  expect((await run({ type: "showUpcoming", gameId, actor })).events).toEqual([
    { type: "upcomingLists", listNames: ["B", "Planets", "A"] },
  ]);
});

test("flush clears the queue and the Game's Rounds but keeps its Bans and the Round in progress", async () => {
  const { game, list, gameId, listId, admin } = await setup();
  await Game.updateOne({ _id: game._id }, { pickedLists: [listId] });
  await GameRound.insertMany([
    { gameId: game._id, listId: list._id, outcome: "completed", language: "EN" },
    { gameId: game._id, listId: list._id, outcome: "banned", language: "EN" },
    { gameId: game._id, listId: list._id, outcome: "inProgress", language: "EN" },
  ]);
  expect((await run({ type: "flush", gameId, actor: admin })).events).toEqual([{ type: "flushed" }]);
  expect((await Game.findById(gameId).lean())!.pickedLists).toEqual([]);
  expect((await GameRound.find({ gameId: game._id }).lean()).map((r) => r.outcome).sort()).toEqual([
    "banned",
    "inProgress",
  ]);
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
