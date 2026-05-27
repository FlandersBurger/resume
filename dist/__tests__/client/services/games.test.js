"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const games_1 = require("../../../client/services/games");
const http_1 = __importDefault(require("../../../client/services/http"));
jest.mock("../../../client/services/http", () => ({
  __esModule: true,
  default: {
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
    delete: jest.fn(),
    defaults: { headers: { common: {} } },
  },
  setAuthToken: jest.fn(),
  clearAuthToken: jest.fn(),
}));
const mockHttp = http_1.default;
beforeEach(() => jest.clearAllMocks());
describe("getTenthings", () => {
  it("GETs /api/tenthings/web/1 by default", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: { id: 1 } });
    await (0, games_1.getTenthings)();
    expect(mockHttp.get).toHaveBeenCalledWith("/api/tenthings/web/1");
  });
  it("GETs with the provided id", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: {} });
    await (0, games_1.getTenthings)(42);
    expect(mockHttp.get).toHaveBeenCalledWith("/api/tenthings/web/42");
  });
});
describe("answerTenthings", () => {
  it("POSTs the answer to /api/tenthings/web/:id/answer", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: { correct: true } });
    const result = await (0, games_1.answerTenthings)(1, "Paris");
    expect(mockHttp.post).toHaveBeenCalledWith("/api/tenthings/web/1/answer", { answer: "Paris" });
    expect(result).toEqual({ correct: true });
  });
});
describe("getTenthingsHint", () => {
  it("POSTs to /api/tenthings/web/:id/hint", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: { hint: "P..." } });
    await (0, games_1.getTenthingsHint)(1);
    expect(mockHttp.post).toHaveBeenCalledWith("/api/tenthings/web/1/hint");
  });
});
describe("skipTenthingsList", () => {
  it("POSTs to /api/tenthings/web/:id/skip", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: {} });
    await (0, games_1.skipTenthingsList)(1);
    expect(mockHttp.post).toHaveBeenCalledWith("/api/tenthings/web/1/skip");
  });
});
describe("getHighscore", () => {
  it("GETs /api/games/:game/:user/highscore", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: 500 });
    const score = await (0, games_1.getHighscore)("asteroids", "user1");
    expect(mockHttp.get).toHaveBeenCalledWith("/api/games/asteroids/user1/highscore");
    expect(score).toBe(500);
  });
});
describe("setHighscore", () => {
  it("POSTs score to /api/games/:game/:user/highscore", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: undefined });
    await (0, games_1.setHighscore)("asteroids", "user1", 750);
    expect(mockHttp.post).toHaveBeenCalledWith("/api/games/asteroids/user1/highscore", { score: 750 });
  });
});
describe("fuzzyMatch", () => {
  it("POSTs to /api/games/fuzzy_match with values and guess", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: { match: "Paris", score: 0.95 } });
    const result = await (0, games_1.fuzzyMatch)(["Paris", "London"], "paris");
    expect(mockHttp.post).toHaveBeenCalledWith("/api/games/fuzzy_match", {
      values: ["Paris", "London"],
      guess: "paris",
    });
    expect(result).toEqual({ match: "Paris", score: 0.95 });
  });
});
//# sourceMappingURL=games.test.js.map
