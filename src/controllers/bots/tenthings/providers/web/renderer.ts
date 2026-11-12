// Renders Engine Events for the web game: publishes them as they are, with the notices a
// player should see as plain text, to the browsers playing that web Game.

import { Player } from "@models/index";
import { IGame } from "@models/tenthings/game";
import { IPlayer } from "@models/tenthings/player";
import i18n from "@root/i18n";
import { publish } from "@root/queue";
import { parseSymbols } from "@utils/string-helpers";
import type { EngineEvent } from "@tenthings/engine/events";
import type { Renderer } from "@tenthings/engine/rendering";
import { getGuessedMessage, getSnubbedMessage } from "@tenthings/messages";
import { getPlayerName } from "@tenthings/players";
import { roundNotice } from "../roundRendering";
import { WEB_EVENTS_TOPIC, type WebEventsMessage as SharedWebEventsMessage } from "@utils/tenthings-web";

export { WEB_EVENTS_TOPIC };
export type WebEventsMessage = SharedWebEventsMessage<EngineEvent>;

/** The chat messages are HTML; the web game shows notices as plain text. */
const toText = (html: string) =>
  html
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

const guesserOf = (game: IGame, value: string) =>
  game.list.values.find((answer) => answer.value === value)?.guesser as IPlayer | undefined;

/** What a player should read about `event`, if anything (the page reloads the Game either way). */
export const webNotice = async (game: IGame, event: EngineEvent): Promise<string | undefined> => {
  const { language } = game.settings;
  const notice = roundNotice(language, event);
  if (notice !== undefined) return notice;
  switch (event.type) {
    case "roundStarted":
      return `${i18n(language, "sentences.newRound")} ${event.listName}`;
    case "answerGuessed": {
      const guesser = guesserOf(game, event.value);
      return guesser && getGuessedMessage(language, parseSymbols(event.value), getPlayerName(guesser, true));
    }
    case "answerSnubbed": {
      if (!game.settings.snubs) return undefined;
      const guesser = guesserOf(game, event.value);
      const loser = await Player.findById(event.playerId).exec();
      return guesser && loser ? getSnubbedMessage(parseSymbols(event.value), loser, guesser) : undefined;
    }
    case "roundCompleted":
      return i18n(language, "sentences.roundOver");
    case "listSkipped":
      return i18n(language, "sentences.skippedList", { list: event.listName });
    default:
      return undefined;
  }
};

export const renderWeb: Renderer = async (game, events) => {
  const notices: string[] = [];
  for (const event of events) {
    const notice = await webNotice(game, event);
    if (notice) notices.push(toText(notice));
  }
  const message: WebEventsMessage = { webGameId: game.webGameId ?? 1, events, notices };
  await publish(WEB_EVENTS_TOPIC, message);
};
