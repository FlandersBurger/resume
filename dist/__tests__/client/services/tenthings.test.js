"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const tenthings_1 = require("../../../client/services/tenthings");
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
const sampleList = {
  _id: "l1",
  name: "Capitals",
  language: "en",
  categories: ["geography"],
  answers: 10,
  creator: { _id: "u1", username: "alice" },
  values: [],
};
beforeEach(() => jest.clearAllMocks());
describe("getLists", () => {
  it("GETs /api/tenthings/lists with no params by default", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: { result: [sampleList], count: 1, nextPage: 2 } });
    const { lists, count } = await (0, tenthings_1.getLists)();
    expect(mockHttp.get).toHaveBeenCalledWith("/api/tenthings/lists?");
    expect(lists).toEqual([sampleList]);
    expect(count).toBe(1);
  });
  it("appends limit and page params", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: { result: [], count: 0, nextPage: 1 } });
    await (0, tenthings_1.getLists)({ limit: 20, page: 2 });
    const url = mockHttp.get.mock.calls[0][0];
    expect(url).toContain("limit=20");
    expect(url).toContain("page=2");
  });
  it("appends language and categories filter params", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: { result: [], count: 0, nextPage: 1 } });
    await (0, tenthings_1.getLists)({ language: ["en", "fr"], categories: ["geography"] });
    const url = mockHttp.get.mock.calls[0][0];
    expect(url).toContain("language=en%2Cfr");
    expect(url).toContain("categories=geography");
  });
  it("appends search param", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: { result: [], count: 0, nextPage: 1 } });
    await (0, tenthings_1.getLists)({ search: "capitals" });
    const url = mockHttp.get.mock.calls[0][0];
    expect(url).toContain("search=capitals");
  });
});
describe("getList", () => {
  it("GETs /api/tenthings/lists/:id", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: sampleList });
    const result = await (0, tenthings_1.getList)("l1");
    expect(mockHttp.get).toHaveBeenCalledWith("/api/tenthings/lists/l1");
    expect(result).toEqual(sampleList);
  });
});
describe("createList", () => {
  it("POSTs to /api/tenthings/lists with user and list", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: sampleList });
    const result = await (0, tenthings_1.createList)("u1", { name: "Capitals" });
    expect(mockHttp.post).toHaveBeenCalledWith("/api/tenthings/lists", { user: "u1", list: { name: "Capitals" } });
    expect(result).toEqual(sampleList);
  });
});
describe("updateList", () => {
  it("PUTs to /api/tenthings/lists/:id", async () => {
    mockHttp.put.mockResolvedValueOnce({ data: sampleList });
    const result = await (0, tenthings_1.updateList)(sampleList);
    expect(mockHttp.put).toHaveBeenCalledWith("/api/tenthings/lists/l1", sampleList);
    expect(result).toEqual(sampleList);
  });
});
describe("deleteList", () => {
  it("DELETEs /api/tenthings/lists/:id", async () => {
    mockHttp.delete.mockResolvedValueOnce({ data: undefined });
    await (0, tenthings_1.deleteList)("l1");
    expect(mockHttp.delete).toHaveBeenCalledWith("/api/tenthings/lists/l1");
  });
});
describe("getBlurbs", () => {
  it("POSTs to /api/tenthings/lists/:id/blurbs/:type", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: sampleList });
    await (0, tenthings_1.getBlurbs)("l1", "wikipedia");
    expect(mockHttp.post).toHaveBeenCalledWith("/api/tenthings/lists/l1/blurbs/wikipedia");
  });
});
describe("getCategories", () => {
  it("GETs /api/tenthings/categories", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: [{ value: "geography", label: "Geography" }] });
    const result = await (0, tenthings_1.getCategories)();
    expect(mockHttp.get).toHaveBeenCalledWith("/api/tenthings/categories");
    expect(result[0].value).toBe("geography");
  });
});
describe("getLanguages", () => {
  it("GETs /api/tenthings/languages", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: [{ code: "en", name: "English", native: "English" }] });
    const result = await (0, tenthings_1.getLanguages)();
    expect(mockHttp.get).toHaveBeenCalledWith("/api/tenthings/languages");
    expect(result[0].code).toBe("en");
  });
});
describe("getGame", () => {
  it("GETs /api/tenthings/games/:id", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: { _id: "g1" } });
    const result = await (0, tenthings_1.getGame)("g1");
    expect(mockHttp.get).toHaveBeenCalledWith("/api/tenthings/games/g1");
    expect(result._id).toBe("g1");
  });
});
describe("updateGameCategory", () => {
  it("POSTs category to /api/tenthings/games/:gameId/categories", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: {} });
    await (0, tenthings_1.updateGameCategory)("g1", "geography");
    expect(mockHttp.post).toHaveBeenCalledWith("/api/tenthings/games/g1/categories", { category: "geography" });
  });
});
describe("getPlayStats", () => {
  it("GETs /api/tenthings/stats/play", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: [] });
    await (0, tenthings_1.getPlayStats)();
    expect(mockHttp.get).toHaveBeenCalledWith("/api/tenthings/stats/play");
  });
});
describe("getQueue", () => {
  it("GETs /bots/tenthings/queue", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: "5 items" });
    const result = await (0, tenthings_1.getQueue)();
    expect(mockHttp.get).toHaveBeenCalledWith("/bots/tenthings/queue");
    expect(result).toBe("5 items");
  });
});
describe("getPause", () => {
  it("GETs /api/tenthings/pause", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: false });
    const result = await (0, tenthings_1.getPause)();
    expect(mockHttp.get).toHaveBeenCalledWith("/api/tenthings/pause");
    expect(result).toBe(false);
  });
});
describe("togglePause", () => {
  it("POSTs to /api/tenthings/pause", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: true });
    const result = await (0, tenthings_1.togglePause)();
    expect(mockHttp.post).toHaveBeenCalledWith("/api/tenthings/pause");
    expect(result).toBe(true);
  });
});
describe("getRandomList", () => {
  it("POSTs to /api/tenthings/lists/random", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: sampleList });
    const result = await (0, tenthings_1.getRandomList)();
    expect(mockHttp.post).toHaveBeenCalledWith("/api/tenthings/lists/random");
    expect(result).toEqual(sampleList);
  });
});
//# sourceMappingURL=tenthings.test.js.map
