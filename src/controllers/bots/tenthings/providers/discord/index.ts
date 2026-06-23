import i18n from "@root/i18n";
import bot, { DiscordUser } from "@root/connections/discord";
import categories, { getCategoryLabel } from "../../categories";
import { capitalize, maskUrls, parseSymbols } from "@utils/string-helpers";
import { IGame, IGameList, IGameListValue } from "@root/models/tenthings/game";
import { getBlurbType, IList } from "@root/models/tenthings/list";
import { IUser } from "@root/models/user";
import { Provider } from "..";
import { IPlayer } from "@root/models/tenthings/player";
import {
  getDailyMessage,
  getDifficultyMessage,
  getFrequencyMessage,
  getGuessedMessage,
  getStreakMessage,
} from "@tenthings/messages";
import { getPlayerName } from "@tenthings/players";
import { getHint } from "@tenthings/hints";
import { Player } from "@root/models";
import { HydratedDocument } from "mongoose";
import { BotLanguage } from "@tenthings/languages";
import { getListStats } from "@tenthings/providers/telegram/stats";
import { toDiscordComponents } from "./keyboards";
import {
  likeListKeyboard,
  hintSkipKeyboard,
  miniGameKeyboard,
  tinyGameKeyboard,
  banListKeyboard,
} from "@tenthings/keyboards";
import emojis from "../../emojis";

const getDailyScores = async ({ _id, settings }: IGame, limit = 0) => {
  const players = await Player.find({ game: _id, scoreDaily: { $gt: 0 } }).exec();
  const message = players
    .filter(({ scoreDaily }) => scoreDaily)
    .sort((player1, player2) => player2.scoreDaily - player1.scoreDaily)
    .slice(0, limit ? limit : players.length)
    .reduce(
      (str, player, index) => {
        str += `\t${index + 1}: ${getPlayerName(player)} - ${player.scoreDaily}\n`;
        return str;
      },
      i18n(settings.language, `sentences.dailyScores${limit ? "WithLimit" : ""}`, { limit }) + `\n`,
    );
  return message;
};

export const discord: Provider = {
  type: "discord",
  keyboardConverter: toDiscordComponents,
  message: (game: IGame, message: string) => {
    bot.queueMessage(game.discordChannel, message);
  },
  newRound: (game: IGame, list: IList | IGameList) => {
    let message = `**${i18n(game.settings.language, "sentences.newRound")}**`;
    message += `\n${i18n(game.settings.language, "category", {
      count: game.list.categories.length,
    })}: `;
    message += `**${getCategoryLabel(game.settings.language, list)}**`;
    message += `\n\n**${game.list.name}** (${game.list.answers}) ${i18n(game.settings.language, "sentences.createdBy", { creator: (game.list.creator as IUser).username })}`;
    message += game.list.description ? `\n*${parseSymbols(game.list.description)}*` : "";
    bot.sendMessageWithComponents(game.discordChannel, message, hintSkipKeyboard(game));
  },
  endOfRound: async (game: IGame, list: IList) => {
    let message = getListStats(game.settings.language, list, undefined);
    message += await getDailyScores(game, 5);
    bot.sendMessageWithComponents(game.discordChannel, message, likeListKeyboard(game));
  },
  skipList: (game: IGame) => {
    let message = `${i18n(game.settings.language, "sentences.skippedList", {
      list: game.list.name,
    })}\n`;
    message += game.list.values.reduce((str, { guesser, value }, index) => {
      str += `\t${index + 1}: ${parseSymbols(value)} - *`;
      if (!guesser) {
        str += i18n(game.settings.language, "sentences.notGuessed");
      } else {
        str += getPlayerName(guesser as IPlayer);
      }
      str += "*\n";
      return str;
    }, "");
    bot.queueMessage(game.discordChannel, message);
    bot.sendMessageWithComponents(
      game.discordChannel,
      i18n(game.settings.language, "sentences.banListPrompt", { list: game.list.name }),
      banListKeyboard(game, game.list),
    );
  },
  dailyScores: async (game: IGame, limit?: number) => {
    bot.queueMessage(game.discordChannel, await getDailyScores(game, limit));
  },
  dailyWinners: (game: IGame, winners: IPlayer[], score: number) => {
    let message = `**${winners.map((winner) => getPlayerName(winner, true)).join(" & ")} won with ${score} points!**\n\n`;
    message += getDailyMessage();
    bot.queueMessage(game.discordChannel, message);
  },
  endOfDay: async (game: IGame, winners: IPlayer[], score: number) => {
    let message = await getDailyScores(game);
    message += `\n**${winners.map((winner) => getPlayerName(winner, true)).join(" & ")} won with ${score} points!**\n\n`;
    message += getDailyMessage();
    bot.queueMessage(game.discordChannel, message);
  },
  guessed: (game: IGame, player: IPlayer, match: IGameListValue, score: number, accuracy: string) => {
    const isUrlBlurb = match.blurb?.substring(0, 4) === "http";
    const blurb = isUrlBlurb ? "" : match.blurb ? `\n*${parseSymbols(match.blurb)}*` : "";
    guessed(game, player, match.value, blurb, score, accuracy);
    if (isUrlBlurb && match.blurb) bot.queueMedia(game.discordChannel, match.blurb, getBlurbType(match.blurb));
  },
  mainGameMessage: (game: IGame, long = true) => {
    let message;
    if (long) {
      message = `**${game.list.name}** (${game.list.answers})\n`;
      message += game.list.creator
        ? ` ${i18n(game.settings.language, "sentences.createdBy", {
            creator: (game.list.creator as IUser).username,
          })}`
        : "";
      message += "\n";
      message += `${i18n(game.settings.language, "category", {
        count: game.list.categories.length,
      })}: `;
      message += `**${getCategoryLabel(game.settings.language, game.list)}**\n`;
      message += game.list.description ? `*${parseSymbols(game.list.description)}*\n` : "";
    } else {
      message = `**${game.list.name}**\n`;
    }
    message += game.list.values.reduce((str, { guesser, value }, index) => {
      if (long) {
        if (!guesser) {
          str += `\t**${index + 1}:** `;
          str += `**${getHint(game.hints, value)}**`;
          str += "\n";
        } else {
          str += `\t${index + 1}: `;
          str += `${parseSymbols(value)} - *${getPlayerName(guesser as IPlayer)}*`;
          str += "\n";
        }
      } else {
        if (!guesser) {
          str += "\t";
          str += index + 1;
          str += ": ";
          str += getHint(game.hints, value);
          str += "\n";
        }
      }
      return str;
    }, "");
    bot.queueMessage(game.discordChannel, message);
  },
  miniGameMessage: (game: IGame) => {
    let message = `**${i18n(game.settings.language, "sentences.findTheConnection")}**\n`;
    message += game.minigame.lists.reduce((msg, list) => {
      msg += `- ${list}\n`;
      return msg;
    }, "");
    message += `\n**${getHint(game.minigame.hints, game.minigame.answer)}**`;
    bot.sendMessageWithComponents(game.discordChannel, message, miniGameKeyboard(game));
  },
  miniGameGuessed: (game: IGame, player: IPlayer, score: number, accuracy: string) => {
    let message = `${i18n(game.settings.language, "sentences.minigameAnswered")} (${accuracy}%)\n`;
    message += `**${getGuessedMessage(game.settings.language, game.minigame.answer, getPlayerName(player, true))}**`;
    message += `\n__${player.scoreDaily - score} + ${i18n(game.settings.language, "point", {
      count: score,
    })}__`;
    bot.queueMessage(game.discordChannel, message);
  },
  tinyGameMessage: (game: IGame) => {
    let message = `**${i18n(game.settings.language, "sentences.findTheTitle")}**\n`;
    message += game.tinygame.clues.reduce((msg, clue) => {
      msg += `- ${parseSymbols(clue)}\n`;
      return msg;
    }, "");
    message += `\n**${getHint(game.tinygame.hints, game.tinygame.answer)}**`;
    bot.sendMessageWithComponents(game.discordChannel, message, tinyGameKeyboard(game));
  },
  tinyGameGuessed: (game: IGame, player: IPlayer, score: number, accuracy: string) => {
    let message = `${i18n(game.settings.language, "sentences.tinygameAnswered")} (${accuracy}%)\n`;
    message += `**${getGuessedMessage(game.settings.language, game.tinygame.answer, getPlayerName(player, true))}**`;
    message += `\n__${player.scoreDaily - score} + ${i18n(game.settings.language, "point", {
      count: score,
    })}__`;
    bot.queueMessage(game.discordChannel, message);
  },
  listMessage: (list: HydratedDocument<IList> | IList): string => {
    let msg = `**${list.name}** [${list.language}]\n`;
    msg += `*by ${(list.creator as IUser).username}*\n`;
    msg += `${list.description ? `${parseSymbols(list.description)}\n` : ""}`;
    msg += ` - Categories: ${getCategoryLabel(BotLanguage.EN, list)}\n`;
    msg += list.difficulty ? ` - Difficulty: ${getDifficultyMessage(list.difficulty)}\n` : "";
    msg += list.frequency ? ` - Frequency: ${capitalize(getFrequencyMessage(list.frequency))} changes\n` : "";
    return msg;
  },
  rateList: (_game: IGame) => {},
  sendMedia: (game: IGame, url: string) => {
    bot.queueMedia(game.discordChannel, url, getBlurbType(url));
  },
  categoriesMessage: (game: IGame): string => {
    return Object.keys(categories)
      .sort()
      .map(
        (category) =>
          `**${i18n(game.settings.language, `${category}.name`, { ns: "categories" })}**\n` +
          categories[category]
            .sort()
            .map(
              (subcategory) =>
                ` - ${i18n(game.settings.language, `${category}.${subcategory}`, { ns: "categories" })}` +
                `${game.disabledCategories.includes(`${category}.${subcategory}`) ? emojis.off : emojis.on}`,
            )
            .join("\n"),
      )
      .join("\n");
  },
};

const guessed = async (game: IGame, player: IPlayer, value: string, blurb: string, score: number, accuracy: string) => {
  let message = `**${getGuessedMessage(game.settings.language, parseSymbols(value), getPlayerName(player, true))}**`;
  message += "\n--- " + getStreakMessage(game.streak.count) + " ---\n";
  message += blurb;
  message += `\n__${player.scoreDaily - score} + ${i18n(game.settings.language, "point", {
    count: score,
  })} (${accuracy})__`;
  const answersLeft = game.list.values.filter(({ guesser }) => !guesser);
  if (answersLeft.length > 0) {
    message += `\n**${game.list.name}**`;
    message += game.list.values.reduce((str, { guesser, value }, index) => {
      if (!guesser) {
        str += "\n\t";
        str += index + 1;
        str += ": ";
        str += getHint(game.hints, value);
      }
      return str;
    }, "");
  } else {
    message += `\n${i18n(game.settings.language, "sentences.roundOver")}`;
  }
  return bot.queueMessage(game.discordChannel, message);
};

export type DiscordMessage = {
  id: string;
  from: DiscordUser;
  command?: string;
  text: string;
  channelId: string;
};

export const convertDiscordUserToPlayer = async (
  game: IGame,
  from: DiscordUser,
): Promise<HydratedDocument<IPlayer> | undefined> => {
  let player = await Player.findOne({
    game: game._id,
    username: from.id,
  }).exec();
  if (!player) {
    const newPlayer = new Player({
      game: game._id,
      username: from.id,
      first_name: maskUrls(from.displayName || from.username),
      admin: false,
    });
    const savedPlayer = await newPlayer.save();
    console.log(`${game._id} - Player ${from.displayName} created for Discord`);
    return savedPlayer;
  } else {
    player.first_name = maskUrls(from.displayName || from.username);
    player.present = true;
    await player.save();
    return player;
  }
};
