// selectList against real models on a throwaway MongoDB: which Lists a Game can be served next.
jest.mock("@root/db", () => {
  const mongoose = jest.requireActual("mongoose");
  return { __esModule: true, default: { master: mongoose.createConnection() } };
});
jest.mock("@tenthings/providers/web", () => ({ web: {} }));
// game.provider is derived from the platform, so the Telegram provider stands in for every test Game.
jest.mock("@tenthings/providers/telegram", () => ({ telegram: { message: jest.fn() } }));
jest.mock("@tenthings/notify", () => ({ notifyAdmin: jest.fn() }));
jest.mock("@tenthings/providers/discord", () => ({ discord: {} }));
jest.mock("@root/queue", () => ({ __esModule: true, default: {} }));
jest.mock("@root/i18n", () => ({ __esModule: true, default: jest.fn((_, key: string) => key) }));

import db from "@root/db";
import { Game, GameRound, List } from "@models/index";
import { invalidateListPool, resetListPool, selectList } from "@tenthings/lists";
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
  resetListPool();
});

// Past the onboarding ramp, so selection isn't limited to high-quality Lists.
const makeGame = async (overrides: Record<string, unknown> = {}) => {
  const game = await Game.create({
    telegramChatId: -1001,
    platform: "telegram",
    listsPlayed: 500,
    settings: { languages: [SupportedLanguage.EN] },
    ...overrides,
  });
  return game;
};

const makeLists = (lists: Record<string, unknown>[]) =>
  List.insertMany(lists.map((l) => ({ language: "EN", categories: ["music.albums"], ...l })));

/** The names selectList serves over many draws. */
const served = async (game: Awaited<ReturnType<typeof makeGame>>, draws = 40) => {
  const names = new Set<string>();
  for (let i = 0; i < draws; i++) names.add((await selectList(game)).name);
  return names;
};

test("skips low-quality, banned, other-language and disabled-category Lists", async () => {
  const game = await makeGame({ disabledCategories: ["sports"] });
  const lists = await makeLists([
    { name: "Good" },
    { name: "Low", lowQuality: true },
    { name: "Banned" },
    { name: "Dutch", language: "NL" },
    { name: "Sport", categories: ["sports"] },
  ]);
  await GameRound.create({ gameId: game._id, listId: lists[2]._id, outcome: "banned", language: "EN" });
  expect(await served(game)).toEqual(new Set(["Good"]));
});

test("keeps recently played Lists on cooldown", async () => {
  const game = await makeGame();
  const lists = await makeLists(Array.from({ length: 12 }, (_, i) => ({ name: `L${i}` })));
  // The cooldown is at least 10 Rounds: the 10 most recent plays are out.
  await GameRound.insertMany(
    lists.slice(0, 10).map((l, i) => ({
      gameId: game._id,
      listId: l._id,
      outcome: "completed",
      language: "EN",
      playedAt: new Date(Date.now() - i * 1000),
    })),
  );
  expect(await served(game)).toEqual(new Set(["L10", "L11"]));
});

test("prefers categories the Game tends to complete", async () => {
  const game = await makeGame();
  const [liked] = await makeLists([{ name: "Liked", categories: ["movies"] }, { name: "Other" }, { name: "Other2" }]);
  const done = await makeLists(Array.from({ length: 5 }, (_, i) => ({ name: `Done${i}`, categories: ["movies"] })));
  await GameRound.insertMany(
    done.map((l) => ({
      gameId: game._id,
      listId: l._id,
      outcome: "completed",
      categories: ["movies"],
      language: "EN",
    })),
  );
  expect(liked.name).toBe("Liked");
  expect(await served(game, 20)).toEqual(new Set(["Liked"]));
});

test("new Games get high-quality or starred Lists", async () => {
  const game = await makeGame({ listsPlayed: 0 });
  await makeLists([{ name: "Plain" }, { name: "Star", starred: true }, { name: "Proven", highQuality: true }]);
  expect(await served(game)).toEqual(new Set(["Star", "Proven"]));
});

test("serves the first Picked List before anything else", async () => {
  const lists = await makeLists([{ name: "A" }, { name: "Picked" }]);
  const game = await makeGame({ pickedLists: [lists[1]._id] });
  expect((await selectList(game)).name).toBe("Picked");
});

test("when every List is on cooldown, says so and serves one anyway", async () => {
  const game = await makeGame();
  const [only] = await makeLists([{ name: "Only" }]);
  await GameRound.create({ gameId: game._id, listId: only._id, outcome: "completed", language: "EN" });
  expect((await selectList(game)).name).toBe("Only");
  expect(game.provider.message).toHaveBeenCalledWith(game, "sentences.allListsPlayed");
});

test("the served List is loaded in full, without its votes", async () => {
  const game = await makeGame();
  await makeLists([{ name: "Full", values: [{ value: "x" }], votes: [{ voter: "a", vote: 1 }] }]);
  const list = await selectList(game);
  expect(list.values.map((v) => v.value)).toEqual(["x"]);
  expect(list.votes).toBeUndefined();
});

describe("the List pool", () => {
  test("is read once, so a new Round doesn't read every List again", async () => {
    const game = await makeGame();
    await makeLists([{ name: "First" }]);
    await selectList(game);
    await makeLists([{ name: "Later" }]);
    expect(await served(game)).toEqual(new Set(["First"]));
  });

  test("is read again once Lists change", async () => {
    const game = await makeGame();
    await makeLists([{ name: "First" }]);
    await selectList(game);
    await makeLists([{ name: "Later" }]);
    invalidateListPool();
    await selectList(game); // still the old pool, while the new one loads
    await new Promise((resolve) => setTimeout(resolve, 200));
    expect(await served(game)).toContain("Later");
  });

  test("passes over a List deleted since it was read", async () => {
    const game = await makeGame();
    const [gone] = await makeLists([{ name: "Gone" }, { name: "Kept" }]);
    await selectList(game);
    await List.deleteOne({ _id: gone._id });
    jest.mocked(game.provider.message).mockClear();
    expect(await served(game)).toEqual(new Set(["Kept"]));
    // Not mistaken for every List having been played.
    expect(game.provider.message).not.toHaveBeenCalled();
  });
});
