import { AxiosError, AxiosHeaders } from "axios";
import { classifyTelegramError, describeFailure, mayHaveArrived } from "@root/connections/telegram-errors";
import { HttpError, redactSecrets, redactUrl } from "@root/http-client";

const TOKEN_URL = "https://api.telegram.org/bot123456789:FAKEtokenFAKEtokenFAKEtokenFAKE_-x/sendAnimation";

const telegramAnswer = (status: number, description: string, parameters?: object) => ({
  response: { status, data: { ok: false, error_code: status, description, ...(parameters ? { parameters } : {}) } },
});

describe("classifyTelegramError", () => {
  it("treats a request that got no answer as transient", () => {
    expect(classifyTelegramError({ code: "ECONNABORTED", message: "timeout of 15000ms exceeded" })).toEqual({
      kind: "transient",
      code: "ECONNABORTED",
    });
    expect(classifyTelegramError({ code: "ECONNRESET" }).kind).toBe("transient");
  });

  it("treats Telegram's gateway errors as transient", () => {
    expect(classifyTelegramError(telegramAnswer(502, "Bad Gateway")).kind).toBe("transient");
    expect(classifyTelegramError({ response: { status: 504 } }).kind).toBe("transient");
  });

  it("knows when a failed send may still have reached the chat", () => {
    const may = (error: object) => mayHaveArrived(classifyTelegramError(error));
    expect(may({ code: "ECONNABORTED", message: "timeout of 15000ms exceeded" })).toBe(true);
    expect(may({ code: "ECONNRESET" })).toBe(true);
    expect(may({ response: { status: 504 } })).toBe(true);
    expect(may({ code: "ECONNREFUSED" })).toBe(false);
    expect(may({ code: "ENOTFOUND" })).toBe(false);
    expect(may(telegramAnswer(502, "Bad Gateway"))).toBe(false);
    expect(may(telegramAnswer(400, "Bad Request: chat not found"))).toBe(false);
  });

  it("reads the wait from a rate limit", () => {
    const failure = classifyTelegramError(telegramAnswer(429, "Too Many Requests: retry after 9", { retry_after: 9 }));
    expect(failure).toMatchObject({ kind: "rateLimited", retryAfter: 9 });
    expect(classifyTelegramError(telegramAnswer(429, "Too Many Requests: retry after 12")).retryAfter).toBe(12);
  });

  it("recognises a chat the bot can no longer post in", () => {
    expect(classifyTelegramError(telegramAnswer(403, "Forbidden: bot was kicked from the group chat")).kind).toBe(
      "chatGone",
    );
    expect(classifyTelegramError(telegramAnswer(400, "Bad Request: chat not found")).kind).toBe("chatGone");
  });

  it("recognises a deleted topic", () => {
    expect(classifyTelegramError(telegramAnswer(400, "Bad Request: message thread not found")).kind).toBe("topicGone");
  });

  it("ignores harmless failures", () => {
    expect(
      classifyTelegramError(telegramAnswer(400, "Bad Request: message is not modified: specified new message content"))
        .kind,
    ).toBe("ignorable");
    expect(
      classifyTelegramError(
        telegramAnswer(400, "Bad Request: query is too old and response timeout expired or query ID is invalid"),
      ).kind,
    ).toBe("ignorable");
  });

  it("flags anything else as unknown, with Telegram's reason", () => {
    expect(classifyTelegramError(telegramAnswer(400, "Bad Request: can't parse entities"))).toMatchObject({
      kind: "unknown",
      status: 400,
      reason: "Bad Request: can't parse entities",
    });
    expect(classifyTelegramError({ response: { status: 401 } }).kind).toBe("unknown");
  });

  it("copes with something that isn't an HTTP error at all", () => {
    expect(classifyTelegramError(undefined).kind).toBe("transient");
  });
});

describe("describeFailure", () => {
  it("names the method, chat and cause on one line", () => {
    expect(
      describeFailure("sendAnimation", -1001805909552, { kind: "transient", code: "ECONNABORTED" }, "retry 1/3"),
    ).toBe("telegram sendAnimation chat=-1001805909552 transient ECONNABORTED retry 1/3");
    expect(describeFailure("answerCallbackQuery", undefined, { kind: "transient", code: "ECONNRESET" }, "")).toBe(
      "telegram answerCallbackQuery transient ECONNRESET",
    );
  });
});

describe("keeping the bot token out of logs", () => {
  it("redacts the token and query from a URL", () => {
    expect(redactUrl(`${TOKEN_URL}?chat_id=1&animation=x`)).toBe("https://api.telegram.org/bot<token>/sendAnimation");
  });

  it("redacts the token anywhere in a piece of text", () => {
    expect(redactSecrets(`GET ${TOKEN_URL} failed`)).not.toContain("FAKEtoken");
  });

  it("turns an AxiosError into an HttpError that carries no request", () => {
    const config = { url: TOKEN_URL, method: "get", headers: new AxiosHeaders() };
    const axiosError = new AxiosError("timeout of 15000ms exceeded", "ECONNABORTED", config, { path: TOKEN_URL });
    const error = new HttpError(axiosError);
    expect(error.code).toBe("ECONNABORTED");
    expect(error.response).toBeUndefined();
    expect(JSON.stringify(error)).not.toContain("FAKEtoken");
    expect(error.message).not.toContain("FAKEtoken");
    expect(error.stack).not.toContain("FAKEtoken");
    expect(Object.keys(error)).not.toContain("config");
  });
});
