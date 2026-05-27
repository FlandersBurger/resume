import { getCategories, addCategory, addTask } from "../../../client/services/categories";
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

beforeEach(() => jest.clearAllMocks());

describe("getCategories", () => {
  it("GETs /api/categories and returns the list", async () => {
    const cats = [{ name: "Work", tasks: [] }];
    mockHttp.get.mockResolvedValueOnce({ data: cats });
    const result = await getCategories();
    expect(mockHttp.get).toHaveBeenCalledWith("/api/categories");
    expect(result).toEqual(cats);
  });
});

describe("addCategory", () => {
  it("POSTs to /api/categories/ and returns the new category", async () => {
    const newCat = { name: "Personal", tasks: [] };
    mockHttp.post.mockResolvedValueOnce({ data: newCat });
    const result = await addCategory("Personal");
    expect(mockHttp.post).toHaveBeenCalledWith("/api/categories/", { category: "Personal" });
    expect(result).toEqual(newCat);
  });
});

describe("addTask", () => {
  it("POSTs to /api/categories/:category/tasks", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: undefined });
    await addTask("Work", "Write report");
    expect(mockHttp.post).toHaveBeenCalledWith("/api/categories/Work/tasks", { task: "Write report" });
  });
});
