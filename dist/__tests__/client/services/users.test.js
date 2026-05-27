"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  (function () {
    var ownKeys = function (o) {
      ownKeys =
        Object.getOwnPropertyNames ||
        function (o) {
          var ar = [];
          for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
          return ar;
        };
      return ownKeys(o);
    };
    return function (mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null)
        for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
      __setModuleDefault(result, mod);
      return result;
    };
  })();
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("../../../client/services/users");
const http_1 = __importStar(require("../../../client/services/http"));
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
const mockSetAuthToken = http_1.setAuthToken;
const mockClearAuthToken = http_1.clearAuthToken;
const user = { _id: "u1", username: "alice" };
beforeEach(() => {
  jest.clearAllMocks();
  localStorage.clear();
});
describe("getUser", () => {
  it("GETs /api/users and returns user data", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: user });
    const result = await (0, users_1.getUser)();
    expect(mockHttp.get).toHaveBeenCalledWith("/api/users");
    expect(result).toEqual(user);
  });
});
describe("getUsers", () => {
  it("GETs /api/users/all", async () => {
    mockHttp.get.mockResolvedValueOnce({ data: [user] });
    const result = await (0, users_1.getUsers)();
    expect(mockHttp.get).toHaveBeenCalledWith("/api/users/all");
    expect(result).toEqual([user]);
  });
});
describe("toggleBan", () => {
  it("POSTs to /api/users/ban/:id", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: undefined });
    await (0, users_1.toggleBan)("u1");
    expect(mockHttp.post).toHaveBeenCalledWith("/api/users/ban/u1");
  });
});
describe("authenticate", () => {
  it("POSTs credentials, stores token, calls setAuthToken, and returns user", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: "jwt-token" });
    mockHttp.get.mockResolvedValueOnce({ data: user });
    const result = await (0, users_1.authenticate)({ authType: "password", username: "alice", password: "pw" });
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
    const result = await (0, users_1.linkTelegram)("u1", telegramData);
    expect(mockHttp.post).toHaveBeenCalledWith("/api/users/u1/telegram", telegramData);
    expect(result.telegramId).toBe("12345");
  });
});
describe("updateUser", () => {
  it("POSTs updated user and returns fresh user data", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: undefined });
    mockHttp.get.mockResolvedValueOnce({ data: { ...user, displayName: "Alice B" } });
    const result = await (0, users_1.updateUser)({ _id: "u1", displayName: "Alice B" });
    expect(mockHttp.post).toHaveBeenCalledWith("/api/users/u1", { user: { _id: "u1", displayName: "Alice B" } });
    expect(result.displayName).toBe("Alice B");
  });
});
describe("checkPassword", () => {
  it("POSTs to /api/users/:id/verification", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: true });
    const result = await (0, users_1.checkPassword)("u1", "secret");
    expect(mockHttp.post).toHaveBeenCalledWith("/api/users/u1/verification", { password: "secret" });
    expect(result).toBe(true);
  });
});
describe("changePassword", () => {
  it("POSTs old and new password to /api/users/:id/password", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: undefined });
    await (0, users_1.changePassword)("u1", "old", "new");
    expect(mockHttp.post).toHaveBeenCalledWith("/api/users/u1/password", { oldPassword: "old", newPassword: "new" });
  });
});
describe("changeUsername", () => {
  it("POSTs new username and returns updated user", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: undefined });
    mockHttp.get.mockResolvedValueOnce({ data: { ...user, username: "bob" } });
    const result = await (0, users_1.changeUsername)("u1", "bob");
    expect(mockHttp.post).toHaveBeenCalledWith("/api/users/u1/username", { newUsername: "bob" });
    expect(result.username).toBe("bob");
  });
});
describe("createUser", () => {
  it("registers, fetches login token, stores it, and returns user", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: undefined });
    mockHttp.get.mockResolvedValueOnce({ data: "new-token" }).mockResolvedValueOnce({ data: user });
    const result = await (0, users_1.createUser)("alice", "pw");
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
    (0, users_1.logout)();
    expect(localStorage.getItem("token")).toBeNull();
    expect(mockClearAuthToken).toHaveBeenCalledTimes(1);
  });
});
//# sourceMappingURL=users.test.js.map
