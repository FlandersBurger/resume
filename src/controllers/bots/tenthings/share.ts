import moment from "moment";

import { TEN_THINGS_URL } from "./links";

// One colour per guesser, most answers first; anyone past the palette shares the last square
const SQUARES = ["🟦", "🟥", "🟩", "🟨", "🟪", "🟧", "🟫", "⬜"];
const MEDALS = ["🥇", "🥈", "🥉"];
const SHARE_LINK = TEN_THINGS_URL.replace(/^https?:\/\//, "");

// Structural shapes of IGame / IPlayer: importing the models here would add circular imports
// (models/tenthings/game -> providers -> share), which the pre-commit check rejects
type Guesser = unknown; // player id, or the populated player document
export type RoundCardGame = {
  hints: number;
  roundDate?: Date;
  list: { name: string; values: { guesser?: Guesser }[] };
};
export type PlayerCardPlayer = { scoreDaily: number; playStreak?: number };

const guesserId = (guesser?: Guesser): string | undefined =>
  guesser ? String((guesser as { _id?: unknown })._id ?? guesser) : undefined;

const formatDuration = (ms: number): string => {
  const duration = moment.duration(ms);
  const hours = Math.floor(duration.asHours());
  const seconds = String(duration.seconds()).padStart(2, "0");
  return hours > 0
    ? `${hours}:${String(duration.minutes()).padStart(2, "0")}:${seconds}`
    : `${duration.minutes()}:${seconds}`;
};

// Wrapped in <pre> so Telegram shows a copy button and Discord renders a code block.
// Emoji-only labels keep the card readable in every language without translations.
const toCard = (lines: string[]) => `<pre>${[...lines, SHARE_LINK].join("\n")}</pre>`;

export const getRoundCard = (game: RoundCardGame): string => {
  const ids = game.list.values.map(({ guesser }) => guesserId(guesser));
  const counts = new Map<string, number>();
  ids.forEach((id) => id && counts.set(id, (counts.get(id) ?? 0) + 1));
  const ranked = [...counts.entries()].sort((a, b) => b[1] - a[1]).map(([id]) => id);
  const grid = ids.map((id) => (id ? SQUARES[Math.min(ranked.indexOf(id), SQUARES.length - 1)] : "⬛")).join("");

  const stats = [];
  if (game.roundDate) stats.push(`⏱️ ${formatDuration(Date.now() - new Date(game.roundDate).getTime())}`);
  stats.push(`💡 ${game.hints}`, `👥 ${counts.size}`);

  return toCard([`Ten Things 🔟 ${game.list.name}`, grid, stats.join(" · ")]);
};

// rank: players ahead of this one today, and how many scored at all (callers query it, keeping this file DB-free)
export const getPlayerCard = (player: PlayerCardPlayer, rank?: { ahead: number; total: number }): string => {
  const lines = [`Ten Things 🔟 ${moment().format("YYYY-MM-DD")}`];
  if (player.scoreDaily > 0 && rank) {
    lines.push(`${MEDALS[rank.ahead] ?? "🏅"} #${rank.ahead + 1}/${rank.total} · ⭐ ${player.scoreDaily}`);
  } else {
    lines.push(`⭐ ${player.scoreDaily}`);
  }
  // playStreak is only bumped by the end-of-day job, so today's play isn't in it yet
  const streak = (player.playStreak ?? 0) + (player.scoreDaily > 0 ? 1 : 0);
  if (streak > 1) lines.push(`🔥 ${streak}`);
  return toCard(lines);
};
