import jwt from "jwt-simple";
import { isValidObjectId } from "mongoose";

/** How long a token works without being used. Using it renews it (see `renewal`). */
export const TOKEN_LIFETIME_SECONDS = 30 * 24 * 60 * 60;
/** A token with less than this left is swapped for a fresh one on its next request. */
const RENEW_WHEN_LEFT_SECONDS = TOKEN_LIFETIME_SECONDS / 2;
/**
 * Tokens issued before expiry existed carry no `exp`. They keep working until this date, and are
 * swapped for an expiring token on their next request; after it they are refused.
 */
export const LEGACY_TOKENS_UNTIL = Date.UTC(2027, 0, 31);

/** The response header a renewed token is sent back in. */
export const RENEWED_TOKEN_HEADER = "X-Auth-Renewed";

const nowSeconds = () => Math.floor(Date.now() / 1000);

/** A token signing in `userId` for TOKEN_LIFETIME_SECONDS from now. */
export const issueToken = (userId: string) => {
  const iat = nowSeconds();
  return jwt.encode({ userid: userId, iat, exp: iat + TOKEN_LIFETIME_SECONDS }, process.env.SECRET!);
};

export type TokenClaims = { userid: string; exp?: number };

/**
 * What a token says, or null when it is garbled, tampered with, not ours, expired, or names no
 * valid User id.
 */
export const readToken = (token: string): TokenClaims | null => {
  let claims: { userid?: unknown; exp?: unknown };
  try {
    claims = jwt.decode(token, process.env.SECRET!) ?? {}; // throws once `exp` has passed
  } catch {
    return null;
  }
  if (!isValidObjectId(claims.userid)) return null;
  if (typeof claims.exp !== "number" && Date.now() >= LEGACY_TOKENS_UNTIL) return null;
  return { userid: String(claims.userid), exp: typeof claims.exp === "number" ? claims.exp : undefined };
};

/** A fresh token to replace `claims`' when it is past half its life or from before expiry. */
export const renewal = (claims: TokenClaims): string | null =>
  claims.exp === undefined || claims.exp - nowSeconds() < RENEW_WHEN_LEFT_SECONDS ? issueToken(claims.userid) : null;
