import moment, { Moment } from "moment";
import { List, Player } from "../../../models";
import { IGame } from "../../../models/tenthings/game";
import { IPlayer } from "../../../models/tenthings/player";
import { HydratedDocument, Types } from "mongoose";
import { angleBrackets, maskUrls, removeHTML } from "../../../utils/string-helpers";
import { newRound } from "./maingame";
import { getListScore } from "./lists";

import bot from "../../../connections/telegram";
import i18n from "../../../i18n";

import { getDailyScores } from "./stats";
import { banListKeyboard } from "./keyboards";
import { IMessage } from "./messages";

const SKIP_DELAY = 10;
const VETO_DELAY = 15;

export const skipCache: { [key: string]: { timer: number; playerId: Types.ObjectId } } = {};
export const vetoCache: { [key: string]: Moment } = {};
const skippers: { [key: string]: { delay: number; lastSkipped: Moment } } = {};

const skipCooldown = (game: IGame, skipper: IPlayer) => {
  if (skipCache[game.chat_id]) {
    if (skipCache[game.chat_id].timer > 0) {
      skipCache[game.chat_id].timer--;
      setTimeout(() => {
        skipCooldown(game, skipper);
      }, 1000);
    } else {
      skipList(game, skipper);
    }
  }
};

export const processSkip = (game: IGame, skipper: IPlayer) => {
  if (parseInt(game.chat_id) < 0) {
    if (skipCache[game.chat_id] && skipCache[game.chat_id].playerId !== skipper._id) {
      skipCache[game.chat_id].timer = 2;
    } else if (skipCache[game.chat_id] && skipCache[game.chat_id].playerId === skipper._id) {
      bot.queueMessage(game.chat_id, i18n(game.settings.language, "sentences.skipDenial"));
    } else {
      bot.queueMessage(
        game.chat_id,
        i18n(game.settings.language, "sentences.skipConfirm", {
          list: game.list.name,
          skipDelay: SKIP_DELAY,
        })
      );
      skipCache[game.chat_id] = {
        timer: SKIP_DELAY,
        playerId: skipper._id,
      };
      skipCooldown(game, skipper);
    }
  } else {
    //No need to have a delay in a personal chat
    skipList(game, skipper);
  }
};

const skipList = (game: IGame, skipper: IPlayer) => {
  Player.updateMany(
    {
      game: game._id,
      _id: skipCache[game.chat_id] ? { $in: [skipCache[game.chat_id].playerId, skipper._id] } : skipper._id,
    },
    {
      $set: { hintStreak: 0 },
      $inc: { skips: 1 },
    }
  ).exec(async (err) => {
    if (err) return bot.notifyAdmin(`Skip List Error:\n${err}`);
    let message = `${i18n(game.settings.language, "sentences.skippedList", {
      list: game.list.name,
    })}\n`;
    message += game.list.values.reduce((str, { guesser, value }, index) => {
      str += `\t${index + 1}: ${angleBrackets(value)} - <i>`;
      if (!guesser || !guesser.first_name) {
        str += i18n(game.settings.language, "sentences.notGuessed");
      } else {
        str += maskUrls(removeHTML(guesser.first_name));
      }
      str += "</i>\n";
      return str;
    }, "");
    bot.queueMessage(game.chat_id, message);
    bot.sendKeyboard(
      game.chat_id,
      `Experimental feature to permanently ban list from game\nDo you want to ban "${game.list.name}"`,
      banListKeyboard(game.settings.language, game.list)
    );
    delete skipCache[game.chat_id];
    let foundList = await List.findOne({
      _id: game.list._id,
    })
      .select("_id plays skips votes score")
      .exec();
    if (!foundList) return newRound(game);
    if (!foundList.skips) {
      foundList.skips = 0;
    }
    foundList.skips++;
    foundList.score = getListScore(foundList);
    try {
      await foundList.validate();
      await foundList.save();
    } catch (err) {
      return bot.notifyAdmin(`Skip List Error:\n${err}`);
    }
    bot.queueMessage(game.chat_id, await getDailyScores(game, 5));
    newRound(game);
  });
};

export const checkSkipper = async (game: IGame, msg: IMessage, player: IPlayer) => {
  if (parseInt(game.chat_id) > 0) return true;
  if (!vetoCache[game.chat_id] || vetoCache[game.chat_id] < moment().subtract(VETO_DELAY, "seconds")) {
    delete vetoCache[game.chat_id];
    if (skippers[player.id]) {
      //Check for spamming if it's the same player
      if (skippers[player.id].lastSkipped < moment().subtract(skippers[player.id].delay, "seconds")) {
        delete skippers[player.id];
      } else {
        if (skippers[player.id].delay < 10) {
          skippers[player.id].lastSkipped = moment();
          skippers[player.id].delay += 10;
          return false;
        } else if (skippers[player.id].delay < 50) {
          skippers[player.id].lastSkipped = moment();
          skippers[player.id].delay += 10;
          bot.queueMessage(
            msg.chatId,
            i18n(game.settings.language, "sentences.skipShortBan", {
              name: player.first_name,
              delay: skippers[player.id].delay,
            })
          );
          return false;
        } else if (skippers[player.id].delay < 60) {
          skippers[player.id].lastSkipped = moment();
          skippers[player.id].delay += 10;
          bot.queueMessage(
            msg.chatId,
            i18n(game.settings.language, "sentences.skipBanThreat", {
              name: player.first_name,
              delay: skippers[player.id].delay,
            })
          );
          return false;
        } else if (skippers[player.id].delay != 3600) {
          skippers[player.id].delay = 3600;
          i18n(game.settings.language, "sentences.skipLongBan", {
            name: player.first_name,
          });
          return false;
        }
      }
    } else {
      //Start skip spam timer
      skippers[player.id] = {
        lastSkipped: moment(),
        delay: 15,
      };
    }
  }
  return true;
};

export const vetoSkip = async (game: IGame, player: HydratedDocument<IPlayer>) => {
  player.vetoes++;
  await player.save();
  if (skipCache[game.chat_id]) {
    delete skipCache[game.chat_id];
    vetoCache[game.chat_id] = moment();
    bot.queueMessage(
      game.chat_id,
      i18n(game.settings.language, "sentences.skipVeto", {
        name: player.first_name,
        vetoDelay: VETO_DELAY,
      })
    );
  } else {
    bot.queueMessage(
      game.chat_id,
      i18n(game.settings.language, "sentences.skipNotFound", {
        name: player.first_name,
      })
    );
  }
};

export const abortSkip = (game: IGame, player: IPlayer) => {
  delete skipCache[game.chat_id];
  vetoCache[game.chat_id] = moment();
  bot.queueMessage(
    game.chat_id,
    i18n(game.settings.language, "sentences.skipAbort", {
      name: player.first_name,
      vetoDelay: VETO_DELAY,
    })
  );
};
