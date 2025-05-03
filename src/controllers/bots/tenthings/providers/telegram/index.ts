import i18n from "@root/i18n";
import bot from "@root/connections/telegram";
import { getCategoryLabel } from "../../categories";
import { parseSymbols } from "@root/utils/string-helpers";
import { IGame, IGameList, IGameListValue } from "@root/models/tenthings/game";
import { IList } from "@root/models/tenthings/list";
import { IUser } from "@root/models/user";
import { Provider } from "..";
import { IPlayer } from "@root/models/tenthings/player";
import { getDailyMessage, getGuessedMessage, getListStats, getStreakMessage } from "../../messages";
import { getPlayerName } from "../../players";
import { getHint } from "../../hints";
import { banListKeyboard } from "./keyboards";
import { Player } from "@root/models";

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

export const telegram: Provider = {
  message: (game: IGame, message: string) => {
    bot.queueMessage(game.telegramChannel, message);
  },
  newRound: (game: IGame, list: IList | IGameList) => {
    let message = i18n(game.settings.language, "sentences.newRound");
    message += `\n${i18n(game.settings.language, "category", {
      count: game.list.categories.length,
    })}: `;
    message += `<b>${getCategoryLabel(game.settings.language, list)}</b>`;
    bot.queueMessage(game.telegramChannel, message);
  },
  endOfRound: async (game: IGame, list: IList) => {
    let message = getListStats(game.settings.language, list, undefined);
    message += await getDailyScores(game, 5);
    bot.queueMessage(game.telegramChannel, message);
  },
  newList: (game: IGame) => {
    let message = `<b>${game.list.name}</b> (${game.list.answers}) ${i18n(
      game.settings.language,
      "sentences.createdBy",
      { creator: (game.list.creator as IUser).username },
    )}`;
    message += game.list.description ? `\n<i>${parseSymbols(game.list.description)}</i>` : "";
    bot.queueMessage(game.telegramChannel, message);
  },
  skipList: (game: IGame) => {
    let message = `${i18n(game.settings.language, "sentences.skippedList", {
      list: game.list.name,
    })}\n`;
    message += game.list.values.reduce((str, { guesser, value }, index) => {
      str += `\t${index + 1}: ${parseSymbols(value)} - <i>`;
      if (!guesser) {
        str += i18n(game.settings.language, "sentences.notGuessed");
      } else {
        str += getPlayerName(guesser as IPlayer);
      }
      str += "</i>\n";
      return str;
    }, "");
    bot.queueMessage(game.telegramChannel, message);
    bot.sendKeyboard(
      game.telegramChannel,
      `Experimental feature to permanently ban list from game\nDo you want to ban "${game.list.name}"`,
      banListKeyboard(game.settings.language, game.list),
    );
  },
  dailyScores: async (game: IGame, limit?: number) => {
    bot.queueMessage(game.telegramChannel, await getDailyScores(game, limit));
  },
  dailyWinners: (game: IGame, winners: IPlayer[], score: number) => {
    let message = `<b>${winners.map((winner) => getPlayerName(winner, true)).join(" & ")} won with ${score} points!</b>\n\n`;
    message += getDailyMessage();
    // message += `\t - Bitcoin Address: bc1qnr4y95d3w5rwahcypazpjdv33g8wupewmw6rpa3s2927qvgmduqsvcpgfs`;
    //'\n\nCome join us in the <a href="https://t.me/tenthings">Ten Things Supergroup</a>!'
    bot.queueMessage(game.telegramChannel, message);
  },
  guessed: (game: IGame, player: IPlayer, match: IGameListValue, score: number, accuracy: string) => {
    if (match.blurb) {
      guessed(
        game,
        player,
        match.value,
        match.blurb.substring(0, 4) === "http"
          ? `<a href="${match.blurb}">&#8204;</a>`
          : `\n<i>${parseSymbols(match.blurb)}</i>`,
        score,
        accuracy,
      );
    } else {
      guessed(game, player, match.value, "", score, accuracy);
      /*
          request(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=Earth&generator=prefixsearch&exintro=1&explaintext=1&gpssearch=${encodeURIComponent(match.value)}`, (err, response, body) => {
            if (err) {
              guessed(game, player,  match.value, '', score, accuracy);
            } else {
              try {
                const pages = JSON.parse(body).query.pages;
                let result = pages[Object.keys(pages)[0]].extract;
                if (result.length > 200) {
                  result = result.substring(0, 200) + '...';
                }
                if (result && !result.includes('refer to:') && !result.includes('refers to:')) {
                  guessed(game, player, match.value, `\nRandom Wiki:\n<i>${result}</i>`, score, accuracy);
                } else {
                  guessed(game, player, match.value, '', score, accuracy);
                }
              } catch (e) {
                console.error(e);
                guessed(game, player, match.value, '', score, accuracy);
              }
            }
          });
          */
    }
  },
  mainGameMessage: (game: IGame, long = true) => {
    let message;
    if (long) {
      message = `<b>${game.list.name}</b> (${game.list.answers})\n`;
      message += game.list.creator
        ? ` ${i18n(game.settings.language, "sentences.createdBy", {
            creator: (game.list.creator as IUser).username,
          })}`
        : "";
      message += "\n";
      message += `${i18n(game.settings.language, "category", {
        count: game.list.categories.length,
      })}: `;
      message += `<b>${getCategoryLabel(game.settings.language, game.list)}</b>\n`;
      message += game.list.description
        ? game.list.description.includes("href")
          ? game.list.description
          : `<i>${parseSymbols(game.list.description)}</i>\n`
        : "";
    } else {
      message = `<b>${game.list.name}</b>\n`;
    }
    message += game.list.values.reduce((str, { guesser, value }, index) => {
      if (long) {
        if (!guesser?._id) {
          str += `\t<b>${index + 1}:</b> `;
          str += `<b>${getHint(game.hints, value)}</b>`;
          str += "\n";
        } else {
          str += `\t${index + 1}: `;
          str += `${parseSymbols(value)} - <i>${getPlayerName(guesser as IPlayer)}</i>`;
          str += "\n";
        }
      } else {
        if (!guesser?._id) {
          str += "\t";
          str += index + 1;
          str += ": ";
          str += getHint(game.hints, value);
          str += "\n";
        }
      }
      return str;
    }, "");
    bot.queueMessage(game.telegramChannel, message);
  },
  miniGameMessage: (game: IGame) => {
    let message = `<b>${i18n(game.settings.language, "sentences.findTheConnection")}</b>\n`;
    message += game.minigame.lists.reduce((msg, list) => {
      msg += `- ${list}\n`;
      return msg;
    }, "");
    message += `\n<b>${getHint(game.minigame.hints, game.minigame.answer)}</b>`;
    bot.queueMessage(game.telegramChannel, message);
  },
  miniGameGuessed: (game: IGame, player: IPlayer, score: number, accuracy: string) => {
    let message = `${i18n(game.settings.language, "sentences.minigameAnswered")} (${accuracy}%)\n`;
    message += getGuessedMessage(game.settings.language, game.minigame.answer, getPlayerName(player, true));
    message += `\n<u>${player.scoreDaily - score} + ${i18n(game.settings.language, "point", {
      count: score,
    })}</u>`;
    bot.queueMessage(game.telegramChannel, message);
  },
  tinyGameMessage: (game: IGame) => {
    let message = `<b>${i18n(game.settings.language, "sentences.findTheTitle")}</b>\n`;
    message += game.tinygame.clues.reduce((msg, clue) => {
      msg += `- ${parseSymbols(clue)}\n`;
      return msg;
    }, "");
    message += `\n<b>${getHint(game.tinygame.hints, game.tinygame.answer)}</b>`;
    bot.queueMessage(game.telegramChannel, message);
  },
  tinyGameGuessed: (game: IGame, player: IPlayer, score: number, accuracy: string) => {
    let message = `${i18n(game.settings.language, "sentences.tinygameAnswered")} (${accuracy}%)\n`;
    message += getGuessedMessage(game.settings.language, game.tinygame.answer, getPlayerName(player, true));
    message += `\n<u>${player.scoreDaily - score} + ${i18n(game.settings.language, "point", {
      count: score,
    })}</u>`;
    bot.queueMessage(game.telegramChannel, message);
  },
};

//  ██████  ██    ██ ███████ ███████ ███████ ███████ ██████
// ██       ██    ██ ██      ██      ██      ██      ██   ██
// ██   ███ ██    ██ █████   ███████ ███████ █████   ██   ██
// ██    ██ ██    ██ ██           ██      ██ ██      ██   ██
//  ██████   ██████  ███████ ███████ ███████ ███████ ██████

const guessed = async (game: IGame, player: IPlayer, value: string, blurb: string, score: number, accuracy: string) => {
  let message = getGuessedMessage(game.settings.language, parseSymbols(value), getPlayerName(player, true));
  message += getStreakMessage(game.streak.count);
  message += blurb;
  message += `\n<u>${player.scoreDaily - score} + ${i18n(game.settings.language, "point", {
    count: score,
  })} (${accuracy})</u>`;
  const answersLeft = game.list.values.filter(({ guesser }) => !guesser);
  if (answersLeft.length > 0) {
    message += `\n<b>${game.list.name}</b>`;
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
  return bot.queueMessage(game.telegramChannel, message);
};
