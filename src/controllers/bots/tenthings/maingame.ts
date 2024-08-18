import moment from "moment";
import { HydratedDocument } from "mongoose";
const sampleSize = require("lodash/sampleSize");
const some = require("lodash/some");

import { Game, List, Player } from "@models/index";
import { IGame } from "@models/tenthings/game";
import { IList } from "@models/tenthings/list";
import { parseSymbols, maskUrls, removeHTML } from "@root/utils/string-helpers";
import { IUser } from "@models/user";
import { IPlayer } from "@models/tenthings/player";
import { IGuess, getAnswerScore } from "./guesses";
import { IMessage, getGuessedMessage, getListStats, getSnubbedMessage, getStreakMessage } from "./messages";
import { getHint, hintCache, hintCooldown } from "./hints";
import { getListScore, rateList, selectList } from "./lists";
import { getDailyScores } from "./stats";
import { abortSkip, skipCache } from "./skips";
import i18n from "@root/i18n";

import bot from "@root/connections/telegram";

export const createMaingame = async (chat_id: number, topicId?: number): Promise<HydratedDocument<IGame>> => {
  const game = new Game({
    chat_id,
    topicId,
    settings: { languages: ["EN"] },
  });
  const savedGame = await game.save();
  const newGame = await Game.findOne({ _id: savedGame._id }).exec();
  return newGame!;
};

/*
  ██████ ██   ██ ███████  ██████ ██   ██     ██████   ██████  ██    ██ ███    ██ ██████  
 ██      ██   ██ ██      ██      ██  ██      ██   ██ ██    ██ ██    ██ ████   ██ ██   ██ 
 ██      ███████ █████   ██      █████       ██████  ██    ██ ██    ██ ██ ██  ██ ██   ██ 
 ██      ██   ██ ██      ██      ██  ██      ██   ██ ██    ██ ██    ██ ██  ██ ██ ██   ██ 
  ██████ ██   ██ ███████  ██████ ██   ██     ██   ██  ██████   ██████  ██   ████ ██████  
*/

export const checkRound = (game: IGame) => {
  if (game.list.values.filter(({ guesser }) => !guesser?.first_name).length === 0) {
    setTimeout(async () => {
      sendMaingameMessage(game);
      const foundList = await List.findOne({ _id: game.list._id }).exec();
      if (foundList) {
        let message = getListStats(game.settings.language, foundList, undefined);
        message += await getDailyScores(game, 5);
        bot.queueMessage(game.chat_id, message);
        foundList.lastPlayDate = moment().toDate();
        foundList.save();
      }
      setTimeout(() => {
        rateList(game);
        setTimeout(() => {
          newRound(game);
        }, 1000);
      }, 1000);
    }, 1000);
  }
};

/*
 ███    ██ ███████ ██     ██     ██████   ██████  ██    ██ ███    ██ ██████  
 ████   ██ ██      ██     ██     ██   ██ ██    ██ ██    ██ ████   ██ ██   ██ 
 ██ ██  ██ █████   ██  █  ██     ██████  ██    ██ ██    ██ ██ ██  ██ ██   ██ 
 ██  ██ ██ ██      ██ ███ ██     ██   ██ ██    ██ ██    ██ ██  ██ ██ ██   ██ 
 ██   ████ ███████  ███ ███      ██   ██  ██████   ██████  ██   ████ ██████  
*/

export const newRound = (currentGame: IGame) => {
  Game.findOne({
    _id: currentGame._id,
  })
    .select("_id chat_id playedLists list listsPlayed pickedLists cycles guessers hints disabledCategories settings")
    .populate("list.creator")
    .exec(async (err, game) => {
      if (err) return console.error(err);
      if (!game) return console.log("Game not found");
      let players = await Player.find({
        game: currentGame._id,
        id: {
          $in: game.guessers,
        },
      }).exec();
      const list: HydratedDocument<IList> = await selectList(game);
      if (game.pickedLists.length > 0) {
        game.pickedLists = game.pickedLists.filter((pickedList) => pickedList != list._id);
      }
      list.plays++;
      list.score = getListScore(list);
      try {
        await list.validate();
        await list.save();
      } catch (error) {
        bot.notifyAdmin(`New Round List Error\n${error}\n\n${list}`);
      }
      for (let player of players) {
        player.lists++;
        await player.save();
      }
      if (game.chat_id === -1001182285167) console.log("saved players");
      game.list = JSON.parse(JSON.stringify(list));
      game.list.answers = game.list.values.length;
      game.list.values = sampleSize(game.list.values, 10);
      game.listsPlayed++;
      game.hints = 0;
      hintCache[game.id] = 3;
      hintCooldown(game.id);
      game.guessers = [];
      let message = i18n(game.settings.language, "sentences.newRound");
      message += `\n${i18n(game.settings.language, "category", {
        count: game.list.categories.length,
      })}: `;
      message += `<b>${game.list.categories
        .map((category) => i18n(game.settings.language, `categories.${category}`))
        .join(", ")}</b>`;
      bot.queueMessage(game.chat_id, message);
      setTimeout(() => {
        let message = `<b>${game.list.name}</b> (${game.list.answers}) ${i18n(
          game.settings.language,
          "sentences.createdBy",
          { creator: (game.list.creator as IUser).username },
        )}`;
        message += game.list.description ? `\n<i>${parseSymbols(game.list.description)}</i>` : "";
        bot.queueMessage(game.chat_id, message);
      }, 2000);
      game.playedLists.push(game.list._id);
      game.save((err) => {
        if (err) bot.notifyAdmin("newRound: " + JSON.stringify(err) + "\n" + JSON.stringify(game));
        else console.log(`${game.chat_id} - New round started -> "${list.name}"`);
      });
    });
};

export const activate = async (game: HydratedDocument<IGame>, save = false) => {
  if (!game.enabled) {
    game.lastPlayDate = moment().toDate();
    game.enabled = true;
    bot.sendMessage(game.chat_id, "Ten Things started");
    if (save) await game.save();
  }
};

export const deactivate = (game: HydratedDocument<IGame>) => {
  if (game.enabled) {
    game.enabled = false;
    game.save();
    bot.sendMessage(game.chat_id, i18n(game.settings.language, "sentences.inactivity"));
  }
};

export const checkMaingame = async (
  game: HydratedDocument<IGame>,
  player: HydratedDocument<IPlayer>,
  guess: IGuess,
  msg: IMessage,
) => {
  if (guess.list !== game.list._id) return;
  game.lastPlayDate = moment().toDate();
  player.lastPlayDate = moment().toDate();
  if (skipCache[game.chat_id]) {
    abortSkip(game, player);
  }
  if (!some(game.guessers, (guesser: number) => guesser == msg.from.id)) {
    game.guessers.push(`${msg.from.id}`);
  }
  const match = game.list.values.find(({ value }) => value === guess.match.value);
  if (!player) {
    bot.notifyAdmin(`Something wrong with this guess:\n${JSON.stringify(guess)}`);
    console.error(`Something wrong with this guess:\n${JSON.stringify(guess)}`);
  }
  if (match && !match.guesser?.first_name) {
    match.guesser = msg.from;
    player.answers++;
    const score = getAnswerScore(game.hints, guess.match.distance, game.guessers.length);
    const accuracy = `${(guess.match.distance * 100).toFixed(0)}%`;
    player.score += score;
    player.scoreDaily += score;
    if (game.hints === 0) {
      player.hintStreak++;
    }
    if (!game.streak || game.streak.player != player.id) {
      game.streak = {
        player: player.id,
        count: 1,
      };
    } else {
      game.streak.count++;
    }
    if (player.streak < game.streak.count) {
      player.streak = game.streak.count;
    }
    if (player.scoreDaily > player.highScore) {
      player.highScore = player.scoreDaily;
    }
    if (player.maxHintStreak < player.hintStreak) {
      player.maxHintStreak = player.hintStreak;
    }
    if (match.blurb) {
      guessed(
        game,
        player,
        msg,
        match.value,
        match.blurb.substring(0, 4) === "http"
          ? `<a href="${match.blurb}">&#8204;</a>`
          : `\n<i>${parseSymbols(match.blurb)}</i>`,
        score,
        accuracy,
      );
    } else {
      guessed(game, player, msg, match.value, "", score, accuracy);
      /*
      request(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=Earth&generator=prefixsearch&exintro=1&explaintext=1&gpssearch=${encodeURIComponent(match.value)}`, (err, response, body) => {
        if (err) {
          guessed(game, player, msg, match.value, '', score, accuracy);
        } else {
          try {
            const pages = JSON.parse(body).query.pages;
            let result = pages[Object.keys(pages)[0]].extract;
            if (result.length > 200) {
              result = result.substring(0, 200) + '...';
            }
            if (result && !result.includes('refer to:') && !result.includes('refers to:')) {
              guessed(game, player, msg, match.value, `\nRandom Wiki:\n<i>${result}</i>`, score, accuracy);
            } else {
              guessed(game, player, msg, match.value, '', score, accuracy);
            }
          } catch (e) {
            console.error(e);
            guessed(game, player, msg, match.value, '', score, accuracy);
          }
        }
      });
      */
    }
    setTimeout(() => {
      checkRound(game);
    }, 200);
  } else if (match) {
    player.snubs++;
    if (game.settings.snubs) {
      bot.queueMessage(msg.chatId, getSnubbedMessage(match.value, player, match.guesser));
    }
  }
  try {
    await player.save();
    await game.save();
    return true;
  } catch (e) {
    console.log(player);
    console.error(e);
    console.trace();
    throw e;
  }
};

export const sendMaingameMessage = async (game: IGame, long = true) => {
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
    message += `<b>${game.list.categories
      .map((category) => i18n(game.settings.language, `categories.${category}`))
      .join(", ")}</b>\n`;
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
      if (!guesser?.first_name) {
        str += `\t<b>${index + 1}:</b> `;
        str += `<b>${getHint(game.hints, value)}</b>`;
        str += "\n";
      } else {
        str += `\t${index + 1}: `;
        str += `${parseSymbols(value)} - <i>${maskUrls(removeHTML(guesser.first_name))}</i>`;
        str += "\n";
      }
    } else {
      if (!guesser?.first_name) {
        str += "\t";
        str += index + 1;
        str += ": ";
        str += getHint(game.hints, value);
        str += "\n";
      }
    }
    return str;
  }, "");
  bot.queueMessage(game.chat_id, message);
};

const guessed = async (
  game: IGame,
  { scoreDaily, first_name }: IPlayer,
  { chatId }: IMessage,
  value: string,
  blurb: string,
  score: number,
  accuracy: string,
) => {
  let message = getGuessedMessage(game.settings.language, parseSymbols(value), parseSymbols(first_name));
  message += getStreakMessage(game.streak.count);
  message += blurb;
  message += `\n<u>${scoreDaily - score} + ${i18n(game.settings.language, "point", {
    count: score,
  })} (${accuracy})</u>`;
  const answersLeft = game.list.values.filter(({ guesser }) => !guesser?.first_name);
  if (answersLeft.length > 0) {
    message += `\n<b>${game.list.name}</b>`;
    message += game.list.values.reduce((str, { guesser, value }, index) => {
      if (!guesser?.first_name) {
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
  return await bot.queueMessage(chatId, message);
};
