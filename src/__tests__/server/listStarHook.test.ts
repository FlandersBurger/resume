// Starring a List queues it for translation into the other bot languages.
import { Types } from "mongoose";

const mockQueue = jest.fn();
const mockFindOne = jest.fn();
const mockFindDuplicate = jest.fn();

jest.mock("@tenthings/translations/queue", () => ({ queueListTranslation: mockQueue }));
jest.mock("@models/index", () => ({ List: { findOne: mockFindOne }, GameRound: {}, User: {} }));
jest.mock("@root/connections/telegram", () => ({ __esModule: true, default: { notifyAdmins: jest.fn() } }));
jest.mock("@root/connections/goodreads", () => ({ __esModule: true, default: {} }));
jest.mock("@root/connections/moviedb", () => ({ tmdbLookup: jest.fn() }));
jest.mock("@root/connections/youtube", () => ({ __esModule: true, default: {} }));
jest.mock("@root/connections/wikipedia", () => ({ __esModule: true, default: {} }));
jest.mock("@root/connections/mediawiki", () => ({ __esModule: true, default: {} }));
jest.mock("@root/connections/claude", () => ({ isConfigured: () => false }));
jest.mock("@root/connections/link-check", () => ({ checkLink: jest.fn() }));
jest.mock("@root/connections/source-page", () => ({ readSource: jest.fn() }));
jest.mock("@tenthings/lists", () => ({
  findDuplicate: mockFindDuplicate,
  getList: jest.fn((id) => Promise.resolve({ _id: id })),
  getRandomList: jest.fn(),
  invalidateListPool: jest.fn(),
  mergeLists: jest.fn(),
}));
jest.mock("@tenthings/providers/telegram/keyboards", () => ({ curateListKeyboard: jest.fn() }));
jest.mock("@tenthings/providers/telegram", () => ({ telegram: { listMessage: jest.fn() } }));

import express from "express";
import { AddressInfo } from "net";
import { Server } from "http";
import { tenthingsListsRoute } from "@api/tenthings/lists";

let server: Server;
let base: string;

beforeAll((done) => {
  const app = express();
  app.use(express.json());
  app.use((_, res, next) => {
    res.locals.isAuthorized = true;
    res.locals.isAdmin = true;
    next();
  });
  app.use("/lists", tenthingsListsRoute);
  server = app.listen(0, () => {
    base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

const id = new Types.ObjectId();
const stored = (overrides: object = {}) => ({
  _id: id,
  name: "Planets",
  language: "EN",
  starred: false,
  modifyDate: new Date(),
  values: Array.from({ length: 10 }, (_, i) => ({ _id: new Types.ObjectId(), value: `Answer ${i}`, blurb: "" })),
  validate: jest.fn(),
  save: jest.fn(),
  ...overrides,
});

const put = (body: object) =>
  fetch(`${base}/lists/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

beforeEach(() => {
  jest.clearAllMocks();
  mockQueue.mockResolvedValue({});
  mockFindDuplicate.mockResolvedValue(null);
});

it("queues a List when it's starred", async () => {
  mockFindOne.mockResolvedValue(stored());

  const res = await put({ starred: true });

  expect(res.status).toBe(200);
  expect(mockQueue).toHaveBeenCalledTimes(1);
  expect(String(mockQueue.mock.calls[0][0])).toBe(String(id));
});

it("queues the original when a translation is starred", async () => {
  const original = new Types.ObjectId();
  mockFindOne.mockResolvedValue(stored({ translationOf: original }));

  await put({ starred: true });

  expect(String(mockQueue.mock.calls[0][0])).toBe(String(original));
});

it("doesn't queue a List that was already starred, or is unstarred", async () => {
  mockFindOne.mockResolvedValue(stored({ starred: true }));
  await put({ starred: true, description: "Edited" });

  mockFindOne.mockResolvedValue(stored({ starred: true }));
  await put({ starred: false });

  expect(mockQueue).not.toHaveBeenCalled();
});

it("ignores translation links sent by the editor", async () => {
  const list = stored();
  mockFindOne.mockResolvedValue(list);

  await put({ translationOf: String(new Types.ObjectId()), translationSkips: [{ language: "*", reason: "" }] });

  expect(list).not.toHaveProperty("translationOf");
  expect(list).not.toHaveProperty("translationSkips");
});

it("still saves when queueing fails", async () => {
  mockFindOne.mockResolvedValue(stored());
  mockQueue.mockRejectedValue(new Error("Redis is down"));
  jest.spyOn(console, "error").mockImplementation(() => {});

  const res = await put({ starred: true });

  expect(res.status).toBe(200);
});
