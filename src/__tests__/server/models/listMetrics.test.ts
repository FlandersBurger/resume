import mongoose, { Connection } from "mongoose";
import { MEMORY_MONGO_TIMEOUT, startMemoryMongo } from "../../helpers/memoryMongo";
import {
  getListMetrics,
  getListScore,
  listMetricsFields,
  pipelineUpdateOptions,
  playedRounds,
  recordPlayUpdate,
  refreshScoreUpdate,
  roundTally,
  ListMetricsInput,
} from "@models/tenthings/listMetrics";

const up = { vote: 1 };
const down = { vote: -1 };
const votes = (ups: number, downs: number) => [...Array(ups).fill(up), ...Array(downs).fill(down)];

const fixtures: Record<string, ListMetricsInput> = {
  "never played": { plays: 0, skips: 0, hints: 0, votes: votes(3, 1) },
  "played, no votes": { plays: 10, skips: 2, hints: 12, votes: [] },
  "played, votes field missing": { plays: 10, skips: 2, hints: 12 },
  "skips and hints missing": { plays: 4, votes: votes(1, 1) },
  "every play skipped": { plays: 5, skips: 5, hints: 30, votes: votes(0, 2) },
  "typical list": { plays: 2586, skips: 479, hints: 9000, votes: votes(892, 184) },
  "all downvotes": { plays: 300, skips: 250, hints: 100, votes: votes(0, 40) },
};

let conn: Connection;
let stop: () => Promise<void>;

beforeAll(async () => {
  ({ conn, stop } = await startMemoryMongo());
}, MEMORY_MONGO_TIMEOUT);

afterAll(async () => {
  await stop?.();
});

beforeEach(async () => {
  await conn.db!.dropDatabase();
});

const lists = () => conn.db!.collection("lists");
const rounds = () => conn.db!.collection("tenthingsrounds");

describe("getListMetrics", () => {
  test("typical list", () => {
    const metrics = getListMetrics(fixtures["typical list"]);
    expect(metrics.actualPlays).toBe(2107);
    expect(metrics.upvotes).toBe(892);
    expect(metrics.downvotes).toBe(184);
    expect(metrics.likeRatio).toBeCloseTo(892 / 1076);
    expect(metrics.playRatio).toBeCloseTo(2107 / 2586);
    expect(metrics.difficulty).toBeCloseTo(9000 / 6 / 2107);
    expect(metrics.score).toBeCloseTo((892 / 1076 + 2107 / 2586) / 2);
  });

  test("an unplayed list scores 0 whatever its votes", () => {
    expect(getListScore(fixtures["never played"])).toBe(0);
  });

  test("a played list without votes scores on play ratio alone", () => {
    expect(getListScore(fixtures["played, no votes"])).toBeCloseTo(0.8 / 2);
  });

  test("no division by zero: like ratio without votes, difficulty without actual plays", () => {
    expect(getListMetrics(fixtures["played, no votes"]).likeRatio).toBe(0);
    expect(getListMetrics(fixtures["every play skipped"]).difficulty).toBe(0);
  });
});

describe("listMetricsFields matches getListMetrics", () => {
  test.each(Object.entries(fixtures))("%s", async (_, fixture) => {
    await lists().insertOne({ ...fixture });
    const [computed] = await lists()
      .aggregate([{ $addFields: listMetricsFields }])
      .toArray();
    const expected = getListMetrics(fixture);
    for (const [key, value] of Object.entries(expected)) {
      expect([key, computed[key]]).toEqual([key, expect.closeTo(value, 10)]);
    }
  });
});

describe("pipeline updates", () => {
  // Through a Mongoose model, as the callers run them: Mongoose has its own rules for array updates.
  const ListModel = () => conn.models.List ?? conn.model("List", new mongoose.Schema({}, { strict: false }), "lists");

  test("Mongoose refuses the pipelines without pipelineUpdateOptions", async () => {
    const { insertedId } = await lists().insertOne({ ...fixtures["typical list"] });
    await expect(async () => ListModel().updateOne({ _id: insertedId }, refreshScoreUpdate)).rejects.toThrow(
      /updatePipeline/,
    );
  });

  test("refreshScoreUpdate stores the score getListScore would compute", async () => {
    const fixture = fixtures["typical list"];
    const { insertedId } = await lists().insertOne({ ...fixture, score: 0 });
    await ListModel().updateOne({ _id: insertedId }, refreshScoreUpdate, pipelineUpdateOptions);
    const stored = await lists().findOne({ _id: insertedId });
    expect(stored!.score).toBeCloseTo(getListScore(fixture), 10);
  });

  test("recordPlayUpdate counts the play and scores from votes the caller never loaded", async () => {
    const fixture = fixtures["typical list"];
    const { insertedId } = await lists().insertOne({ ...fixture, score: 0 });
    await ListModel().updateOne({ _id: insertedId }, recordPlayUpdate, pipelineUpdateOptions);
    const stored = await lists().findOne({ _id: insertedId });
    expect(stored!.plays).toBe(fixture.plays! + 1);
    expect(stored!.score).toBeCloseTo(getListScore({ ...fixture, plays: fixture.plays! + 1 }), 10);
    expect(stored!.score).toBeGreaterThan(0.8);
  });
});

describe("round history", () => {
  test("playedRounds and roundTally count completed and skipped Rounds, never Ban records", async () => {
    const listA = new mongoose.Types.ObjectId();
    const listB = new mongoose.Types.ObjectId();
    await rounds().insertMany([
      { listId: listA, outcome: "completed" },
      { listId: listA, outcome: "completed" },
      { listId: listA, outcome: "skipped" },
      { listId: listA, outcome: "banned" },
      { listId: listB, outcome: "skipped" },
      { listId: listB, outcome: "banned" },
    ]);
    const tallies = await rounds()
      .aggregate([{ $match: playedRounds() }, roundTally("$listId"), { $sort: { total: -1 } }])
      .toArray();
    expect(tallies).toEqual([
      { _id: listA, completed: 2, skipped: 1, total: 3 },
      { _id: listB, completed: 0, skipped: 1, total: 1 },
    ]);
  });

  test("playedRounds keeps the caller's filter", () => {
    const listId = new mongoose.Types.ObjectId();
    expect(playedRounds({ listId })).toEqual({ listId, outcome: { $in: ["completed", "skipped"] } });
  });
});
