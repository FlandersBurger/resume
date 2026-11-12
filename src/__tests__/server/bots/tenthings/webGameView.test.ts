// What the web page receives about a web Game: only what it shows, unguessed Answers masked.
jest.mock("@root/db", () => {
  const mongoose = jest.requireActual("mongoose");
  return { __esModule: true, default: { master: mongoose.createConnection() } };
});
jest.mock("@tenthings/providers/web", () => ({ web: {} }));
jest.mock("@tenthings/providers/telegram", () => ({ telegram: {} }));
jest.mock("@tenthings/providers/discord", () => ({ discord: {} }));
jest.mock("@root/queue", () => ({ __esModule: true, default: {}, publish: jest.fn() }));
jest.mock("@tenthings/engine/queue", () => ({ dispatch: jest.fn() }));

import { IGame } from "@models/tenthings/game";
import { MAX_HINTS } from "@tenthings/hints";
import { toWebGameView } from "@tenthings/providers/web/games";

const creator = { _id: "u1", username: "maker", email: "maker@example.com", birthDate: new Date(2000, 1, 1) };
const ann = { _id: "p1", username: "", first_name: "Ann" };

const game = (hints: number) =>
  ({
    webGameId: 2,
    hints,
    settings: { language: "EN" },
    playedLists: ["a", "b"],
    list: {
      _id: "l1",
      name: "Planets",
      description: "",
      creator,
      values: [
        { _id: "v1", value: "Venus", blurb: "https://example.com/venus.png", guesser: ann },
        { _id: "v2", value: "Jupiter", blurb: "The biggest" },
      ],
    },
  }) as unknown as IGame;

it("sends unguessed Answers masked, without their value or Blurb", () => {
  const [, jupiter] = toWebGameView(game(0)).list.answers;
  expect(jupiter).toEqual({ _id: "v2", maskedValue: expect.not.stringContaining("Jupiter"), guessed: false });
  expect(JSON.stringify(toWebGameView(game(0)))).not.toMatch(/Jupiter|biggest/);
  expect(JSON.stringify(toWebGameView(game(MAX_HINTS)))).not.toMatch(/biggest/);
});

it("sends guessed Answers in full, with the guesser's name and Blurb type", () => {
  const [venus] = toWebGameView(game(0)).list.answers;
  expect(venus).toEqual({
    _id: "v1",
    maskedValue: "Venus",
    guessed: true,
    value: "Venus",
    blurb: "https://example.com/venus.png",
    blurbType: "image",
    guesser: "Ann",
  });
});

it("names the creator without sending their User", () => {
  const view = toWebGameView(game(0));
  expect(view.list.creator).toBe("maker");
  expect(JSON.stringify(view)).not.toMatch(/example\.com"|birthDate|maker@/);
});

it("says how many Hints are left, and leaves out the rest of the Game", () => {
  expect(toWebGameView(game(2))).toMatchObject({ webGameId: 2, hints: 2, hintsLeft: MAX_HINTS - 2 });
  expect(toWebGameView(game(MAX_HINTS + 1)).hintsLeft).toBe(0);
  expect(toWebGameView(game(0))).not.toHaveProperty("settings");
  expect(toWebGameView(game(0))).not.toHaveProperty("playedLists");
});
