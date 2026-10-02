import crypto from "crypto";

// Fields sent by the Telegram Login Widget, see https://core.telegram.org/widgets/login
export type TelegramAuthData = {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  photo_url?: string;
  auth_date: number;
  hash: string;
};

// Reject widget payloads older than this to limit replay of a captured login
export const TELEGRAM_AUTH_MAX_AGE_SECONDS = 24 * 60 * 60;

export function computeTelegramHash(data: Record<string, unknown>, botToken: string): string {
  const checkString = Object.keys(data)
    .filter((k) => k !== "hash")
    .sort()
    .filter((k) => data[k])
    .map((k) => `${k}=${data[k]}`)
    .join("\n");
  const secretKey = crypto.createHash("sha256").update(botToken).digest();
  return crypto.createHmac("sha256", secretKey).update(checkString).digest("hex");
}

export function isValidTelegramAuth(
  data: unknown,
  botToken: string,
  nowSeconds = Math.floor(Date.now() / 1000),
): data is TelegramAuthData {
  if (!data || typeof data !== "object") return false;
  const { hash, auth_date, id } = data as Record<string, unknown>;
  if (typeof hash !== "string" || !id) return false;

  const age = nowSeconds - Number(auth_date);
  // Allow a minute of clock skew between Telegram and this server
  if (!Number.isFinite(age) || age < -60 || age > TELEGRAM_AUTH_MAX_AGE_SECONDS) return false;

  const expected = Buffer.from(computeTelegramHash(data as Record<string, unknown>, botToken), "hex");
  const actual = Buffer.from(hash, "hex");
  return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
}
