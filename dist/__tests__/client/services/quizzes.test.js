"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const quizzes_1 = require("../../../client/services/quizzes");
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
describe("getQuizFiles", () => {
  beforeEach(() => jest.clearAllMocks());
  it("GETs /api/quizzes/:quiz and returns the file list", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: ["img1.jpg", "img2.jpg"] });
    const files = await (0, quizzes_1.getQuizFiles)("google");
    expect(mockHttp.get).toHaveBeenCalledWith("/api/quizzes/google");
    expect(files).toEqual(["img1.jpg", "img2.jpg"]);
  });
  it("returns an empty array when no files exist", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: [] });
    const files = await (0, quizzes_1.getQuizFiles)("logos");
    expect(files).toEqual([]);
  });
});
//# sourceMappingURL=quizzes.test.js.map
