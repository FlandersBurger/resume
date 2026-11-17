jest.mock("bull", () =>
  jest.fn().mockImplementation(() => ({
    on: jest.fn(),
    add: jest.fn(),
    process: jest.fn(),
    count: jest.fn().mockResolvedValue(0),
  })),
);
jest.mock("@models/index", () => ({ Game: { findOne: jest.fn() }, Player: { findById: jest.fn() } }));
jest.mock("@models/tenthings/game", () => ({
  GameType: { MAINGAME: "maingame", MINIGAME: "minigame", TINYGAME: "tinygame" },
}));
jest.mock("@tenthings/sass", () => jest.fn());
jest.mock("@tenthings/hints", () => ({ MAX_HINTS: 6 }));
jest.mock("@tenthings/players", () => ({ getPlayerName: jest.fn(() => "TestPlayer") }));
jest.mock("@tenthings/engine/queue", () => ({ queueGuessJob: jest.fn() }));

import { getAnswerScore, queueGuess } from "@tenthings/guesses";
import { queueGuessJob } from "@tenthings/engine/queue";
import sass from "@tenthings/sass";
import type { IGame } from "@models/tenthings/game";
import type { IPlayer } from "@models/tenthings/player";

// MAX_HINTS = 6
// formula: Math.round(((MAX_HINTS - hints + playerCount) / (MAX_HINTS + playerCount)) * 10 * accuracy)
describe("getAnswerScore", () => {
  test("perfect score with no hints and one player", () => {
    // ((6-0+1)/(6+1))*10*1 = 10
    expect(getAnswerScore(0, 1, 1)).toBe(10);
  });

  test("minimum score with max hints and one player", () => {
    // ((6-6+1)/(6+1))*10 = (1/7)*10 ≈ 1.43 → 1
    expect(getAnswerScore(6, 1, 1)).toBe(1);
  });

  test("mid score with 3 hints", () => {
    // ((6-3+1)/(6+1))*10 = (4/7)*10 ≈ 5.71 → 6
    expect(getAnswerScore(3, 1, 1)).toBe(6);
  });

  test("accuracy below 1 reduces score", () => {
    // ((6-0+1)/(6+1))*10*0.75 = 10*0.75 = 7.5 → 8
    expect(getAnswerScore(0, 0.75, 1)).toBe(8);
  });

  test("more players pushes score toward maximum", () => {
    // playerCount=5: ((6-0+5)/(6+5))*10 = (11/11)*10 = 10
    expect(getAnswerScore(0, 1, 5)).toBe(10);
    // playerCount=5, hints=3: ((6-3+5)/(6+5))*10 = (8/11)*10 ≈ 7.27 → 7
    expect(getAnswerScore(3, 1, 5)).toBe(7);
  });

  test("defaults to playerCount=1 when omitted", () => {
    expect(getAnswerScore(0, 1)).toBe(10);
    expect(getAnswerScore(6, 1)).toBe(1);
  });

  test("combines hints, accuracy, and player count", () => {
    // hints=3, accuracy=0.75, players=3: ((6-3+3)/(6+3))*10*0.75 = (6/9)*10*0.75 = 5
    expect(getAnswerScore(3, 0.75, 3)).toBe(5);
  });

  test("score decreases as hint count increases", () => {
    const scores = [0, 1, 2, 3, 4, 5, 6].map((h) => getAnswerScore(h, 1, 1));
    for (let i = 1; i < scores.length; i++) {
      expect(scores[i]).toBeLessThanOrEqual(scores[i - 1]);
    }
  });

  test("score is always a non-negative integer", () => {
    for (let hints = 0; hints <= 6; hints++) {
      for (const accuracy of [0.75, 0.9, 1]) {
        const score = getAnswerScore(hints, accuracy, 1);
        expect(score).toBeGreaterThanOrEqual(0);
        expect(Number.isInteger(score)).toBe(true);
      }
    }
  });
});

describe("queueGuess", () => {
  const player = { _id: "p1" } as unknown as IPlayer;
  /** A Round with Titan among its ten, and Triton among the List's other Values. */
  const game = () =>
    ({
      _id: "g1",
      minigame: {},
      tinygame: {},
      list: { _id: "l1", values: [{ value: "Titan" }, { value: "Europa" }], extras: [{ value: "Triton" }] },
    }) as unknown as IGame;
  const queued = () => (queueGuessJob as jest.Mock).mock.calls.map(([guess]) => guess.match);

  beforeEach(() => {
    jest.useFakeTimers();
    (queueGuessJob as jest.Mock).mockClear();
    (sass as unknown as jest.Mock).mockClear();
  });
  afterEach(() => jest.useRealTimers());

  test("a right spelling of an extra is queued right away", async () => {
    await queueGuess(game(), player, "Tri-ton!");
    expect(queued()).toEqual([{ type: "maingame", value: "Triton", distance: 1 }]);
  });

  test("a close spelling of an extra is queued after the fuzzy delay", async () => {
    await queueGuess(game(), player, "Triten");
    expect(queued()).toEqual([]);
    jest.runAllTimers();
    expect(queued()).toMatchObject([{ type: "maingame", value: "Triton" }]);
    expect(sass).not.toHaveBeenCalled();
  });

  test("a close spelling goes to one of the ten, even when an extra is closer", async () => {
    // On its own, Triton is the closer match for "Titon" (0.83 against Titan's 0.8).
    await queueGuess(game(), player, "Titon");
    jest.runAllTimers();
    expect(queued()).toMatchObject([{ value: "Titan", distance: 0.8 }]);
  });

  test("a right spelling of an extra beats a close spelling of one of the ten", async () => {
    const tenNearTriton = game();
    tenNearTriton.list.values[1].value = "Tritan";
    await queueGuess(tenNearTriton, player, "Triton");
    expect(queued()).toEqual([{ type: "maingame", value: "Triton", distance: 1 }]);
  });

  test("nothing close gets sass", async () => {
    await queueGuess(game(), player, "Neptune");
    jest.runAllTimers();
    expect(queued()).toEqual([]);
    expect(sass).toHaveBeenCalled();
  });
});
