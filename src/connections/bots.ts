/**
 * Whether this process may talk to Telegram and Discord. A local server uses the same bot tokens as
 * production, so it would log in a second Discord bot and send real Telegram messages; it stays quiet
 * unless ENABLE_BOTS=true. Production talks to both, and so do tests, whose HTTP is mocked.
 */
export const botsEnabled = () =>
  ["production", "test"].includes(process.env.NODE_ENV ?? "") || process.env.ENABLE_BOTS === "true";

export const BOTS_OFF_NOTICE = "is off outside production (set ENABLE_BOTS=true to turn it on)";
