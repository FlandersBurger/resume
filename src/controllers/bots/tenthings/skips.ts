import moment, { Moment } from "moment";
import { List, Player } from "@models/index";
import { IGame } from "@models/tenthings/game";
import { IPlayer } from "@models/tenthings/player";
import { HydratedDocument, Types } from "mongoose";
import { newRound } from "./maingame";
import { getListScore } from "./lists";

import bot from "@root/connections/telegram";
import i18n from "@root/i18n";

import { getPlayerName } from "./players";

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
  if (vetoCache[game.chat_id]) {
    delete skipCache[game.chat_id];
    return;
  }
  if (game.chat_id < 0) {
    if (game.settings.skipDelay > 0) {
      if (skipCache[game.chat_id] && skipCache[game.chat_id].playerId !== skipper._id) {
        skipCache[game.chat_id].timer = 2;
      } else if (skipCache[game.chat_id] && skipCache[game.chat_id].playerId === skipper._id) {
        game.provider.message(game, i18n(game.settings.language, "sentences.skipDenial"));
      } else {
        game.provider.message(
          game,
          i18n(game.settings.language, "sentences.skipConfirm", {
            list: game.list.name,
            skipDelay: game.settings.skipDelay,
          }),
        );
        skipCache[game.chat_id] = {
          timer: game.settings.skipDelay,
          playerId: skipper._id,
        };
        skipCooldown(game, skipper);
      }
    } else {
      skipList(game, skipper);
    }
  } else {
    //No need to have a delay in a personal chat
    skipList(game, skipper);
  }
};

const skipList = async (game: IGame, skipper: IPlayer) => {
  await Player.updateMany(
    {
      game: game._id,
      _id: skipCache[game.chat_id] ? { $in: [skipCache[game.chat_id].playerId, skipper._id] } : skipper._id,
    },
    {
      $set: { hintStreak: 0 },
      $inc: { skips: 1 },
    },
  );
  game.provider.skipList(game);
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
  game.provider.dailyScores(game, 5);
  if (game.pickedLists.find((list) => list._id.equals(game.list._id))) {
    game.pickedLists = game.pickedLists.filter((list) => !list._id.equals(game.list._id));
  }
  newRound(game);
};

export const checkSkipper = async (game: IGame, player: IPlayer) => {
  if (game.chat_id > 0) return true;
  if (!vetoCache[game.chat_id] || vetoCache[game.chat_id] < moment().subtract(game.settings.vetoDelay, "seconds")) {
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
          game.provider.message(
            game,
            i18n(game.settings.language, "sentences.skipShortBan", {
              name: getPlayerName(player),
              delay: skippers[player.id].delay,
            }),
          );
          return false;
        } else if (skippers[player.id].delay < 60) {
          skippers[player.id].lastSkipped = moment();
          skippers[player.id].delay += 10;
          game.provider.message(
            game,
            i18n(game.settings.language, "sentences.skipBanThreat", {
              name: getPlayerName(player),
              delay: skippers[player.id].delay,
            }),
          );
          return false;
        } else if (skippers[player.id].delay != 3600) {
          skippers[player.id].delay = 3600;
          i18n(game.settings.language, "sentences.skipLongBan", {
            name: getPlayerName(player),
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
    game.provider.message(
      game,
      i18n(game.settings.language, "sentences.skipVeto", {
        name: getPlayerName(player),
        vetoDelay: game.settings.vetoDelay,
      }),
    );
  } else {
    game.provider.message(
      game,
      i18n(game.settings.language, "sentences.skipNotFound", {
        name: getPlayerName(player),
      }),
    );
  }
};

export const abortSkip = (game: IGame, player: IPlayer) => {
  delete skipCache[game.chat_id];
  vetoCache[game.chat_id] = moment();
  game.provider.message(
    game,
    i18n(game.settings.language, "sentences.skipAbort", {
      name: getPlayerName(player),
      vetoDelay: game.settings.vetoDelay,
    }),
  );
};
