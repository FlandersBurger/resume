import {
  getUser,
  getUsers,
  toggleBan,
  linkTelegram,
  updateUser,
  checkPassword,
  changePassword,
  changeUsername,
} from "../../../client/services/users";
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
}));

const mockHttp = http as jest.Mocked<typeof http>;

const user = { _id: "u1", username: "alice" };

beforeEach(() => {
  jest.clearAllMocks();
  localStorage.clear();
});

describe("getUser", () => {
  it("GETs /api/users and returns user data", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: user });
    const result = await getUser();
    expect(mockHttp.get).toHaveBeenCalledWith("/api/users");
    expect(result).toEqual(user);
  });
});

describe("getUsers", () => {
  it("GETs /api/users/all", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: [user] });
    const result = await getUsers();
    expect(mockHttp.get).toHaveBeenCalledWith("/api/users/all");
    expect(result).toEqual([user]);
  });
});

describe("toggleBan", () => {
  it("POSTs to /api/users/ban/:id", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: undefined });
    await toggleBan("u1");
    expect(mockHttp.post).toHaveBeenCalledWith("/api/users/ban/u1");
  });
});

describe("linkTelegram", () => {
  it("POSTs telegram data and then returns updated user", async () => {
    const telegramData = { id: 12345 };
    mockHttp.post.mockResolvedValueOnce({ data: undefined });
    mockHttp.get.mockResolvedValueOnce({ data: { ...user, telegramId: "12345" } });
    const result = await linkTelegram("u1", telegramData);
    expect(mockHttp.post).toHaveBeenCalledWith("/api/users/u1/telegram", telegramData);
    expect(result.telegramId).toBe("12345");
  });
});

describe("updateUser", () => {
  it("POSTs updated user and returns fresh user data", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: undefined });
    mockHttp.get.mockResolvedValueOnce({ data: { ...user, displayName: "Alice B" } });
    const result = await updateUser({ _id: "u1", displayName: "Alice B" });
    expect(mockHttp.post).toHaveBeenCalledWith("/api/users/u1", { user: { _id: "u1", displayName: "Alice B" } });
    expect(result.displayName).toBe("Alice B");
  });
});

describe("checkPassword", () => {
  it("POSTs to /api/users/:id/verification", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: true });
    const result = await checkPassword("u1", "secret");
    expect(mockHttp.post).toHaveBeenCalledWith("/api/users/u1/verification", { password: "secret" });
    expect(result).toBe(true);
  });
});

describe("changePassword", () => {
  it("POSTs old and new password to /api/users/:id/password", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: undefined });
    await changePassword("u1", "old", "new");
    expect(mockHttp.post).toHaveBeenCalledWith("/api/users/u1/password", { oldPassword: "old", newPassword: "new" });
  });
});

describe("changeUsername", () => {
  it("POSTs new username and returns updated user", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: undefined });
    mockHttp.get.mockResolvedValueOnce({ data: { ...user, username: "bob" } });
    const result = await changeUsername("u1", "bob");
    expect(mockHttp.post).toHaveBeenCalledWith("/api/users/u1/username", { newUsername: "bob" });
    expect(result.username).toBe("bob");
  });
});
