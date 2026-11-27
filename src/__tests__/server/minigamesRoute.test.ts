// The admin Minigames API against real models on a throwaway MongoDB.
jest.mock("@root/db", () => {
  const mongoose = jest.requireActual("mongoose");
  return { __esModule: true, default: { master: mongoose.createConnection() } };
});
jest.mock("@tenthings/providers/web", () => ({ web: {} }));
jest.mock("@tenthings/providers/telegram", () => ({ telegram: {} }));
jest.mock("@tenthings/providers/discord", () => ({ discord: {} }));
jest.mock("@root/queue", () => ({ __esModule: true, default: {} }));

import express from "express";
import { AddressInfo } from "net";
import { Server } from "http";
import db from "@root/db";
import { Game, List, Minigame } from "@models/index";
import { tenthingsMinigamesRoute } from "@api/tenthings/minigames";
import { SupportedLanguage } from "@tenthings/languages";
import { MEMORY_MONGO_TIMEOUT, openOnMemoryMongo } from "../helpers/memoryMongo";

let stop: () => Promise<void>;
let server: Server;
let base: string;
let admin = true;

beforeAll(async () => {
  ({ stop } = await openOnMemoryMongo(db.master));
  const app = express();
  app.use((_, res, next) => {
    res.locals.isAdmin = admin;
    next();
  });
  app.use("/api/tenthings/minigames", tenthingsMinigamesRoute);
  await new Promise<void>((resolve) => {
    server = app.listen(0, () => {
      base = `http://127.0.0.1:${(server.address() as AddressInfo).port}/api/tenthings/minigames`;
      resolve();
    });
  });
}, MEMORY_MONGO_TIMEOUT);

afterAll(async () => {
  await new Promise((resolve) => server.close(resolve));
  await stop?.();
});

beforeEach(async () => {
  admin = true;
  await db.master.db!.dropDatabase();
  await Minigame.insertMany([
    {
      answer: "Mercury",
      language: "EN",
      lists: ["Planets", "Elements", "Roman gods", "Queen members"],
      categories: ["science", "science.space"],
      draws: 10,
      solves: 2,
      skips: 6,
      hints: 4,
    },
    { answer: "Venus", language: "EN", lists: ["Planets", "Roman gods", "Tennis Williams"], categories: ["science"] },
    { answer: "Mars", language: "NL", lists: ["Planeten", "Romeinse goden", "Repen"], categories: ["food"], draws: 3 },
  ]);
});

const get = async (path: string) => {
  const res = await fetch(`${base}${path}`);
  return { status: res.status, body: res.status === 200 ? await res.json() : undefined };
};

it("is for admins only", async () => {
  admin = false;
  expect((await get("")).status).toBe(401);
  expect((await get("/stats")).status).toBe(401);
});

describe("browsing", () => {
  it("sorts by answer and counts", async () => {
    const { body } = await get("");
    expect(body.count).toBe(3);
    expect(body.result.map((m: { answer: string }) => m.answer)).toEqual(["Mars", "Mercury", "Venus"]);
    expect(body.result[1]).toMatchObject({ listCount: 4, solveRate: 0.25 });
    expect(body.result[2]).toMatchObject({ draws: 0, solveRate: null });
  });

  it("searches answers and List names, filtered by language and category", async () => {
    expect((await get("?search=roman")).body.count).toBe(2);
    expect((await get("?search=merc")).body.result[0].answer).toBe("Mercury");
    expect((await get("?language=NL")).body.result.map((m: { answer: string }) => m.answer)).toEqual(["Mars"]);
    expect((await get("?categories=science")).body.count).toBe(2);
    expect((await get("?search=(")).body.count).toBe(0);
  });

  it("sorts by a counter and pages", async () => {
    const { body } = await get("?sort_by=draws&order_by=desc&limit=2&page=2");
    expect(body.count).toBe(3);
    expect(body.result.map((m: { answer: string }) => m.answer)).toEqual(["Venus"]);
  });
});

it("tells the stats", async () => {
  await Game.create({ telegramChatId: 1, minigame: { answer: "Mars" } });
  const { body } = await get("/stats");
  expect(body).toMatchObject({ total: 3, draws: 13, solves: 2, skips: 6, hints: 4, played: 2, inPlay: 1 });
  expect(body.languages).toEqual([
    { _id: "EN", count: 2 },
    { _id: "NL", count: 1 },
  ]);
  expect(body.categories).toEqual([
    { _id: "science", count: 2 },
    { _id: "food", count: 1 },
  ]);
  expect(body.mostDrawn.map((m: { answer: string }) => m.answer)).toEqual(["Mercury", "Mars"]);
  expect(body.hardest).toEqual([expect.objectContaining({ answer: "Mercury", value: 0.25 })]);
});

it("shows one with its Lists", async () => {
  const planets = await List.create({
    name: "Planets",
    language: SupportedLanguage.EN,
    categories: ["science"],
    values: Array.from({ length: 10 }, (_, i) => ({ value: `Planet ${i}` })),
  });
  const mercury = await Minigame.findOne({ answer: "Mercury" });
  const { body } = await get(`/${mercury!._id}`);
  expect(body.answer).toBe("Mercury");
  expect(body.lists[0]).toMatchObject({ _id: String(planets._id), name: "Planets" });
  expect(body.lists[1]).toEqual({ name: "Elements", categories: [] });
  expect((await get("/000000000000000000000000")).status).toBe(404);
  expect((await get("/nope")).status).toBe(404);
});
