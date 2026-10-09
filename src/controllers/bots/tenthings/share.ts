import moment from "moment";

import { parseSymbols } from "@utils/string-helpers";
import { TEN_THINGS_URL } from "./links";

const SHARE_LINK = TEN_THINGS_URL.replace(/^https?:\/\//, "");

// Structural shapes of IGame / IPlayer: importing the models here would add circular imports
// (models/tenthings/game -> providers -> share), which the pre-commit check rejects
type Guesser = unknown; // player id, or the populated player document
export type RoundCardGame = {
  hints: number;
  roundDate?: Date;
  list: { name: string; answers?: number; values: { value: string; guesser?: Guesser }[] };
};

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

// nameOf is the provider's getPlayerName, passed in because importing it here would add circular imports
export const getRoundCard = (game: RoundCardGame, nameOf: (guesser: Guesser) => string): string => {
  const answers = game.list.values.map(
    ({ value, guesser }, index) => `${index + 1}. ${parseSymbols(value)}${guesser ? ` - ${nameOf(guesser)}` : ""}`,
  );
  const players = new Set(game.list.values.map(({ guesser }) => guesserId(guesser)).filter(Boolean));

  const stats = [];
  if (game.roundDate) stats.push(`⏱️ ${formatDuration(Date.now() - new Date(game.roundDate).getTime())}`);
  stats.push(`💡 ${game.hints}`, `👥 ${players.size}`);

  return toCard([
    "Ten Things",
    game.list.answers ? `${game.list.name} (${game.list.answers})` : game.list.name,
    ...answers,
    stats.join(" · "),
  ]);
};
