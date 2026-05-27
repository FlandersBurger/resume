import {
  getUser,
  getUsers,
  toggleBan,
  authenticate,
  linkTelegram,
  updateUser,
  checkPassword,
  changePassword,
  changeUsername,
  createUser,
  logout,
} from "../../../client/services/users";
import http, { setAuthToken, clearAuthToken } from "../../../client/services/http";

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
const mockSetAuthToken = setAuthToken as jest.MockedFunction<typeof setAuthToken>;
const mockClearAuthToken = clearAuthToken as jest.MockedFunction<typeof clearAuthToken>;

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

describe("authenticate", () => {
  it("POSTs credentials, stores token, calls setAuthToken, and returns user", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: "jwt-token" });
    mockHttp.get.mockResolvedValueOnce({ data: user });
    const result = await authenticate({ authType: "password", username: "alice", password: "pw" });
    expect(mockHttp.post).toHaveBeenCalledWith("/api/users/authenticate", {
      user: { authType: "password", username: "alice", password: "pw" },
    });
    expect(localStorage.getItem("token")).toBe("jwt-token");
    expect(mockSetAuthToken).toHaveBeenCalledWith("jwt-token");
    expect(result).toEqual(user);
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

describe("createUser", () => {
  it("registers, fetches login token, stores it, and returns user", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: undefined }); // register
    mockHttp.get
      .mockResolvedValueOnce({ data: "new-token" }) // login
      .mockResolvedValueOnce({ data: user }); // getUser
    const result = await createUser("alice", "pw");
    expect(mockHttp.post).toHaveBeenCalledWith("/api/users", { username: "alice", password: "pw" });
    expect(mockHttp.get).toHaveBeenCalledWith("/api/users/alice/login");
    expect(localStorage.getItem("token")).toBe("new-token");
    expect(mockSetAuthToken).toHaveBeenCalledWith("new-token");
    expect(result).toEqual(user);
  });
});

describe("logout", () => {
  it("clears localStorage and calls clearAuthToken", () => {
    localStorage.setItem("token", "abc");
    logout();
    expect(localStorage.getItem("token")).toBeNull();
    expect(mockClearAuthToken).toHaveBeenCalledTimes(1);
  });
});
