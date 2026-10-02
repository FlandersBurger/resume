import { computeTelegramHash, isValidTelegramAuth, TELEGRAM_AUTH_MAX_AGE_SECONDS } from "@utils/telegram-auth";

const BOT_TOKEN = "123456:test-token";
const NOW = 1_800_000_000;

function signed(fields: Record<string, unknown>) {
  return { ...fields, hash: computeTelegramHash(fields, BOT_TOKEN) };
}

const fields = { id: 42, first_name: "Laurent", username: "laurent", auth_date: NOW - 10 };

describe("isValidTelegramAuth", () => {
  it("accepts a correctly signed, fresh payload", () => {
    expect(isValidTelegramAuth(signed(fields), BOT_TOKEN, NOW)).toBe(true);
  });

  it("rejects a payload signed with another bot's token", () => {
    const data = { ...fields, hash: computeTelegramHash(fields, "999:other") };
    expect(isValidTelegramAuth(data, BOT_TOKEN, NOW)).toBe(false);
  });

  it("rejects a tampered id", () => {
    expect(isValidTelegramAuth({ ...signed(fields), id: 43 }, BOT_TOKEN, NOW)).toBe(false);
  });

  it("rejects an extra field that was not signed", () => {
    expect(isValidTelegramAuth({ ...signed(fields), last_name: "X" }, BOT_TOKEN, NOW)).toBe(false);
  });

  it("rejects a stale payload", () => {
    const stale = signed({ ...fields, auth_date: NOW - TELEGRAM_AUTH_MAX_AGE_SECONDS - 1 });
    expect(isValidTelegramAuth(stale, BOT_TOKEN, NOW)).toBe(false);
  });

  it("tolerates small clock skew but rejects future dates", () => {
    expect(isValidTelegramAuth(signed({ ...fields, auth_date: NOW + 30 }), BOT_TOKEN, NOW)).toBe(true);
    expect(isValidTelegramAuth(signed({ ...fields, auth_date: NOW + 3600 }), BOT_TOKEN, NOW)).toBe(false);
  });

  it("rejects missing or malformed payloads", () => {
    expect(isValidTelegramAuth(undefined, BOT_TOKEN, NOW)).toBe(false);
    expect(isValidTelegramAuth({ id: 42, auth_date: NOW }, BOT_TOKEN, NOW)).toBe(false);
    expect(isValidTelegramAuth({ ...signed(fields), hash: "zz" }, BOT_TOKEN, NOW)).toBe(false);
  });
});
