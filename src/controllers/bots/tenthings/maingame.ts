import moment from "moment";
import { HydratedDocument } from "mongoose";
import sampleSize from "lodash/sampleSize";
import some from "lodash/some";

import { Game, List, Player } from "@models/index";
import { IGame, Platform } from "@models/tenthings/game";
import { IList } from "@models/tenthings/list";
import { parseSymbols } from "@root/utils/string-helpers";
import { IPlayer } from "@models/tenthings/player";
import { Guess, getAnswerScore } from "./guesses";
import { getSnubbedMessage } from "./messages";
import { hintCache, hintCooldown } from "./hints";
import { getListScore, rateList, selectList } from "./lists";
import { abortSkip, skipCache } from "./skips";
import i18n from "@root/i18n";

import bot from "@root/connections/telegram";

export const createMaingame = async (platformSettings: {
  chat_id: number;
  topicId?: number;
  platform: Platform;
}): Promise<HydratedDocument<IGame>> => {
  // const starredLists = await List.find({ starred: true }).select("_id");
  const game = new Game({
    ...platformSettings,
    settings: { languages: ["EN"] },
    //pickedLists: starredLists.map(({ _id }) => _id),
    pickedLists: ["5b444eeab1436b72a67aff8e"], // Numbers 0-9
    disabledCategories: ["culture.adult"],
  });
  const savedGame = await game.save();
  const newGame = await Game.findOne({ _id: savedGame._id }).exec();
  return newGame!;
};

//  ██████ ██   ██ ███████  ██████ ██   ██     ██████   ██████  ██    ██ ███    ██ ██████
// ██      ██   ██ ██      ██      ██  ██      ██   ██ ██    ██ ██    ██ ████   ██ ██   ██
// ██      ███████ █████   ██      █████       ██████  ██    ██ ██    ██ ██ ██  ██ ██   ██
// ██      ██   ██ ██      ██      ██  ██      ██   ██ ██    ██ ██    ██ ██  ██ ██ ██   ██
//  ██████ ██   ██ ███████  ██████ ██   ██     ██   ██  ██████   ██████  ██   ████ ██████

export const checkRound = (game: IGame) => {
  if (game.list.values.filter(({ guesser }) => !guesser?.first_name).length === 0) {
    setTimeout(async () => {
      game.provider.mainGameMessage(game);
      const foundList = await List.findOne({ _id: game.list._id }).exec();
      if (foundList) {
        game.provider.endOfRound(game, foundList);
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

// ███    ██ ███████ ██     ██     ██████   ██████  ██    ██ ███    ██ ██████
// ████   ██ ██      ██     ██     ██   ██ ██    ██ ██    ██ ████   ██ ██   ██
// ██ ██  ██ █████   ██  █  ██     ██████  ██    ██ ██    ██ ██ ██  ██ ██   ██
// ██  ██ ██ ██      ██ ███ ██     ██   ██ ██    ██ ██    ██ ██  ██ ██ ██   ██
// ██   ████ ███████  ███ ███      ██   ██  ██████   ██████  ██   ████ ██████

export const newRound = async (currentGame: IGame) => {
  const game = await Game.findOne({
    _id: currentGame._id,
  })
    .select(
      "_id chat_id topicId provider playedLists list listsPlayed pickedLists cycles guessers hints disabledCategories settings",
    )
    .populate("list.creator");
  if (!game) return console.log("Game not found");
  let players = await Player.find({
    game: currentGame._id,
    id: { $in: game.guessers },
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
  game.list = JSON.parse(JSON.stringify(list));
  game.list.answers = game.list.values.length;
  game.list.values = sampleSize(game.list.values, 10);
  game.listsPlayed++;
  game.hints = 0;
  hintCache[game.id] = 3;
  hintCooldown(game.id);
  game.guessers = [];
  game.provider.newRound(game, list);
  setTimeout(() => {
    game.provider.newList(game);
  }, 2000);
  game.playedLists.push(game.list._id);
  await game.save();
  console.log(`${game.chat_id} - New round started -> "${list.name}"`);
};

//  █████   ██████ ████████ ██ ██    ██  █████  ████████ ███████
// ██   ██ ██         ██    ██ ██    ██ ██   ██    ██    ██
// ███████ ██         ██    ██ ██    ██ ███████    ██    █████
// ██   ██ ██         ██    ██  ██  ██  ██   ██    ██    ██
// ██   ██  ██████    ██    ██   ████   ██   ██    ██    ███████

export const activate = async (game: HydratedDocument<IGame>, save = false) => {
  if (!game.enabled) {
    game.lastPlayDate = moment().toDate();
    game.enabled = true;
    game.provider.message(game, "Ten Things started");
    if (save) await game.save();
  }
};

export const deactivate = (game: HydratedDocument<IGame>) => {
  if (game.enabled) {
    game.enabled = false;
    game.save();
    game.provider.message(game, i18n(game.settings.language, "sentences.inactivity"));
  }
};

//  ██████ ██   ██ ███████  ██████ ██   ██
// ██      ██   ██ ██      ██      ██  ██
// ██      ███████ █████   ██      █████
// ██      ██   ██ ██      ██      ██  ██
//  ██████ ██   ██ ███████  ██████ ██   ██

export const checkMaingame = async (game: HydratedDocument<IGame>, player: HydratedDocument<IPlayer>, guess: Guess) => {
  if (guess.list !== game.list._id) return;
  game.lastPlayDate = moment().toDate();
  player.lastPlayDate = moment().toDate();
  if (skipCache[game.chat_id]) {
    abortSkip(game, player);
  }
  if (!some(game.guessers, (guesser: IPlayer) => guesser._id == player._id)) {
    game.guessers.push(player);
  }
  const match = game.list.values.find(({ value }) => value === guess.match.value);
  if (!player) {
    bot.notifyAdmin(`Something wrong with this guess:\n${JSON.stringify(guess)}`);
    console.error(`Something wrong with this guess:\n${JSON.stringify(guess)}`);
  }
  if (match && !match.guesser?.first_name) {
    match.guesser = player;
    player.answers++;
    const score = getAnswerScore(game.hints, guess.match.distance, game.guessers.length);
    const accuracy = `${(guess.match.distance * 100).toFixed(0)}%`;
    player.score += score;
    player.scoreDaily += score;
    if (game.hints === 0) {
      player.hintStreak++;
    }
    if (!game.streak || game.streak.player?._id != player._id) {
      game.streak = {
        player,
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
    game.provider.guessed(game, player, match, score, accuracy);
    setTimeout(() => {
      checkRound(game);
    }, 200);
  } else if (match) {
    player.snubs++;
    if (game.settings.snubs) {
      game.provider.message(game, getSnubbedMessage(parseSymbols(match.value), player, match.guesser));
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
