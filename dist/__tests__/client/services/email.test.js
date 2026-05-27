"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const email_1 = require("../../../client/services/email");
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
const payload = {
  email: "test@example.com",
  name: "Test User",
  phone: "555-1234",
  about: "Opportunity",
  message: "Hello!",
};
describe("sendEmail", () => {
  beforeEach(() => jest.clearAllMocks());
  it("POSTs to /api/email with the payload", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: "ok" });
    await (0, email_1.sendEmail)(payload);
    expect(mockHttp.post).toHaveBeenCalledWith("/api/email", payload);
  });
  it("returns the response data", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: "sent" });
    const result = await (0, email_1.sendEmail)(payload);
    expect(result).toBe("sent");
  });
  it("propagates errors from the http call", async () => {
    mockHttp.post.mockRejectedValueOnce(new Error("network error"));
    await expect((0, email_1.sendEmail)(payload)).rejects.toThrow("network error");
  });
});
//# sourceMappingURL=email.test.js.map
