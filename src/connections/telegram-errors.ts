// Sorts a failed Telegram Bot API call into what the bot should do about it.

export type FailureKind =
  /** The request never got an answer (timeout, reset) or Telegram's edge failed: worth retrying. */
  | "transient"
  /** Telegram asked us to slow down for `retryAfter` seconds. */
  | "rateLimited"
  /** The bot can no longer post in this chat: kicked, blocked, chat deleted… */
  | "chatGone"
  /** The forum topic the game posts in no longer exists. */
  | "topicGone"
  /** Expected and harmless, e.g. editing a message to what it already says. */
  | "ignorable"
  /** Anything else: needs a human. */
  | "unknown";

export type Failure = {
  kind: FailureKind;
  /** Network error code, e.g. ECONNABORTED, when Telegram never answered. */
  code?: string;
  /** HTTP status of Telegram's answer. */
  status?: number;
  /** Telegram's `description`, e.g. "Bad Request: chat not found". */
  reason?: string;
  retryAfter?: number;
};

const CHAT_GONE = [
  "Bad Request: not enough rights to send text messages to the chat",
  "Bad Request: chat not found",
  "Bad Request: TOPIC_CLOSED",
  "Bad Request: CHAT_WRITE_FORBIDDEN",
  "Bad Request: CHAT_SEND_PLAIN_FORBIDDEN",
  "Bad Request: CHAT_RESTRICTED",
  "Forbidden: bot is not a member of the supergroup chat",
  "Forbidden: bot was kicked from the supergroup chat",
  "Forbidden: bot was kicked from the group chat",
  "Forbidden: bot was blocked by the user",
  "Forbidden: the group chat was deleted",
  "Forbidden: user is deactivated",
];

const IGNORABLE = [
  "Bad Request: group chat was upgraded to a supergroup chat",
  "Bad Request: not enough rights to send animations to the chat",
  "Bad Request: message to delete not found",
  "Bad Request: message to edit not found",
  "Bad Request: query is too old and response timeout expired or query ID is invalid",
];

const TRANSIENT_STATUSES = [500, 502, 503, 504];

type ErrorLike = {
  code?: string;
  response?: { status?: number; data?: { description?: string; parameters?: { retry_after?: number } } };
};

export const classifyTelegramError = (error: unknown): Failure => {
  const { code, response } = (error ?? {}) as ErrorLike;
  if (!response) return { kind: "transient", code: code ?? "UNKNOWN" };

  const status = response.status;
  const reason = response.data?.description;
  // Axios's code for an answered request (ERR_BAD_REQUEST) says no more than the status does.
  const failure = { status, reason };

  if (status === 429 || reason?.startsWith("Too Many Requests")) {
    const retryAfter =
      response.data?.parameters?.retry_after ?? parseInt(reason?.match(/retry after (\d+)/)?.[1] ?? "");
    return { ...failure, kind: "rateLimited", retryAfter: Number.isNaN(retryAfter) ? 5 : retryAfter };
  }
  if ((status && TRANSIENT_STATUSES.includes(status)) || reason === "Bad Gateway")
    return { ...failure, kind: "transient" };
  if (!reason) return { ...failure, kind: "unknown" };
  if (CHAT_GONE.includes(reason)) return { ...failure, kind: "chatGone" };
  if (reason.includes("message thread not found")) return { ...failure, kind: "topicGone" };
  if (IGNORABLE.includes(reason) || reason.startsWith("Bad Request: message is not modified"))
    return { ...failure, kind: "ignorable" };
  return { ...failure, kind: "unknown" };
};

/** One log line for a failure: method, chat and cause. Never the URL, which carries the bot token. */
export const describeFailure = (method: string, chat: number | undefined, failure: Failure, note?: string) =>
  [
    "telegram",
    method,
    chat !== undefined ? `chat=${chat}` : undefined,
    failure.kind,
    failure.code,
    failure.status,
    failure.reason ? `"${failure.reason}"` : undefined,
    note,
  ]
    .filter((part) => part !== undefined && part !== "")
    .join(" ");
