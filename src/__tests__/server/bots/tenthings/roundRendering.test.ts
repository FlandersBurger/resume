// Rendering a completed Round on a chat Platform: the final Guess's message goes out first, and
// the end-of-Round messages follow it a beat later so they can't overtake it on the way.
jest.mock("@root/db", () => {
  const mongoose = jest.requireActual("mongoose");
  return { __esModule: true, default: { master: mongoose.createConnection() } };
});
jest.mock("@tenthings/providers/web", () => ({ web: {} }));
jest.mock("@tenthings/providers/telegram", () => ({ telegram: {} }));
jest.mock("@tenthings/providers/discord", () => ({ discord: {} }));
jest.mock("@root/queue", () => ({ __esModule: true, default: {}, publish: jest.fn() }));
jest.mock("@root/i18n", () => ({ __esModule: true, default: jest.fn((_, key: string) => key) }));

import { Types } from "mongoose";
import { List } from "@models/index";
import { IGame } from "@models/tenthings/game";
import type { EngineEvent } from "@tenthings/engine/events";
import { renderRoundEvent, ROUND_END_MESSAGE_GAP_MS } from "@tenthings/providers/roundRendering";

const ann = { _id: new Types.ObjectId(), first_name: "Ann" };
const list = { _id: new Types.ObjectId(), name: "Planets" };
const sent: string[] = [];
const game = {
  settings: { language: "EN", snubs: false },
  list: { name: "Planets", values: [{ value: "Venus", guesser: ann }] },
  provider: {
    guessed: () => sent.push("guessed"),
    mainGameMessage: () => sent.push("roundCard"),
    endOfRound: async () => {
      sent.push("stats");
    },
    rateList: () => sent.push("rateList"),
  },
} as unknown as IGame;

const events: EngineEvent[] = [
  { type: "answerGuessed", playerId: String(ann._id), value: "Venus", score: 10, accuracy: "100%" },
  { type: "roundCompleted", roundId: "r", listId: String(list._id) },
];

beforeEach(() => {
  sent.length = 0;
  jest.useFakeTimers();
  jest.spyOn(List, "findById").mockReturnValue({ exec: async () => list } as never);
});

afterEach(() => {
  jest.useRealTimers();
  jest.restoreAllMocks();
});

it("sends the final Guess, then the round card and stats, then the vote prompt, each a beat apart", async () => {
  for (const event of events) await renderRoundEvent(game, event);
  expect(sent).toEqual(["guessed"]);

  await jest.advanceTimersByTimeAsync(ROUND_END_MESSAGE_GAP_MS);
  expect(sent).toEqual(["guessed", "roundCard", "stats"]);

  await jest.advanceTimersByTimeAsync(ROUND_END_MESSAGE_GAP_MS);
  expect(sent).toEqual(["guessed", "roundCard", "stats", "rateList"]);
});
