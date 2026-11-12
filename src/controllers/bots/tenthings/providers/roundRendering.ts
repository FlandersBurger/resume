// Renders the Engine's Round, Minigame and Tinygame Events on any platform, through the Game's
// provider: the messages are the same ones the provider sent before they moved onto the Engine.

import { List, Player } from "@models/index";
import { GameType, IGame } from "@models/tenthings/game";
import { IPlayer } from "@models/tenthings/player";
import i18n from "@root/i18n";
import { parseSymbols } from "@utils/string-helpers";
import type { EngineEvent } from "@tenthings/engine/events";
import { rateList } from "@tenthings/lists";
import { getSnubbedMessage } from "@tenthings/messages";
import { SKIP_THROTTLE_MESSAGES } from "@tenthings/skips";

/**
 * The one-line notice some Round Events come down to (a refused Hint, a Skip's progress), the
 * same on every platform; undefined for the other Events.
 */
export const roundNotice = (language: string, event: EngineEvent): string | undefined => {
  switch (event.type) {
    case "hintRefused":
      return event.reason === "tooMany"
        ? i18n(language, "warnings.tooManyHints")
        : i18n(language, "warnings.hintCooldown", { seconds: event.seconds });
    case "skipRequested":
      return i18n(language, "sentences.skipConfirm", { list: event.listName, skipDelay: event.seconds });
    case "skipRepeated":
      return i18n(language, "sentences.skipDenial");
    case "skipThrottled":
      return i18n(language, SKIP_THROTTLE_MESSAGES[event.level], { name: event.playerName, delay: event.delay });
    case "skipVetoed":
      return i18n(language, "sentences.skipVeto", { name: event.playerName, vetoDelay: event.vetoDelay });
    case "skipAborted":
      return i18n(language, "sentences.skipAbort", { name: event.playerName, vetoDelay: event.vetoDelay });
    case "skipNotFound":
      return i18n(language, "sentences.skipNotFound", { name: event.playerName });
    default:
      return undefined;
  }
};

/** Renders `event` if it's a Round, Minigame or Tinygame Event; returns whether it was. */
export const renderRoundEvent = async (game: IGame, event: EngineEvent): Promise<boolean> => {
  const { language } = game.settings;
  const say = (key: string, options?: Record<string, unknown>) =>
    game.provider.message(game, i18n(language, key, options));
  const notice = roundNotice(language, event);
  if (notice !== undefined) {
    game.provider.message(game, notice);
    return true;
  }
  switch (event.type) {
    case "roundStarted":
      game.provider.newRound(game, game.list);
      return true;
    case "roundInProgress":
      game.provider.mainGameMessage(game);
      return true;
    case "answerGuessed": {
      const match = game.list.values.find(({ value }) => value === event.value);
      // The guesser is the Player the Engine just set, so it's a full document.
      if (match) game.provider.guessed(game, match.guesser as IPlayer, match, event.score, event.accuracy);
      return true;
    }
    case "answerSnubbed": {
      if (!game.settings.snubs) return true;
      const match = game.list.values.find(({ value }) => value === event.value);
      const loser = await Player.findById(event.playerId).exec();
      if (match && loser)
        game.provider.message(game, getSnubbedMessage(parseSymbols(match.value), loser, match.guesser as IPlayer));
      return true;
    }
    case "roundCompleted": {
      game.provider.mainGameMessage(game);
      const list = await List.findById(event.listId).exec();
      if (list) await game.provider.endOfRound(game, list);
      rateList(game);
      return true;
    }
    case "hintGiven":
      game.provider.mainGameMessage(game, false);
      return true;
    case "listSkipped":
      game.provider.skipList(game);
      game.provider.dailyScores(game, 5);
      return true;
    case "sideGameStarted":
      if (event.fallback)
        say(event.fallback === "language" ? "warnings.noListsForLanguage" : "warnings.noListsForCategory");
      showSideGame(game, event.sideGame);
      return true;
    case "sideGameShown":
    case "sideGameHintGiven":
      showSideGame(game, event.sideGame);
      return true;
    case "sideGameGuessed": {
      const player = await Player.findById(event.playerId).exec();
      if (!player) return true;
      const guessed = event.sideGame === GameType.MINIGAME ? "miniGameGuessed" : "tinyGameGuessed";
      game.provider[guessed](game, player, event.answer, event.score, event.accuracy);
      return true;
    }
    case "sideGameSkipped":
      game.provider.message(game, `The ${event.sideGame} answer was:\n<i>${event.answer}</i>`);
      return true;
    default:
      return false;
  }
};

const showSideGame = (game: IGame, sideGame: GameType.MINIGAME | GameType.TINYGAME) =>
  sideGame === GameType.MINIGAME ? game.provider.miniGameMessage(game) : game.provider.tinyGameMessage(game);
