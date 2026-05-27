import { getQuizFiles } from "../../../client/services/quizzes";
import http from "../../../client/services/http";

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

const mockHttp = http as jest.Mocked<typeof http>;

describe("getQuizFiles", () => {
  beforeEach(() => jest.clearAllMocks());

  it("GETs /api/quizzes/:quiz and returns the file list", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: ["img1.jpg", "img2.jpg"] });
    const files = await getQuizFiles("google");
    expect(mockHttp.get).toHaveBeenCalledWith("/api/quizzes/google");
    expect(files).toEqual(["img1.jpg", "img2.jpg"]);
  });

  it("returns an empty array when no files exist", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: [] });
    const files = await getQuizFiles("logos");
    expect(files).toEqual([]);
  });
});
