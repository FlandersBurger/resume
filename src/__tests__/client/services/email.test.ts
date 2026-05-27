import { sendEmail } from "../../../client/services/email";
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
    await sendEmail(payload);
    expect(mockHttp.post).toHaveBeenCalledWith("/api/email", payload);
  });

  it("returns the response data", async () => {
    mockHttp.post.mockResolvedValueOnce({ data: "sent" });
    const result = await sendEmail(payload);
    expect(result).toBe("sent");
  });

  it("propagates errors from the http call", async () => {
    mockHttp.post.mockRejectedValueOnce(new Error("network error"));
    await expect(sendEmail(payload)).rejects.toThrow("network error");
  });
});
