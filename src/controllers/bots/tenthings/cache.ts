import { HydratedDocument, Types } from "mongoose";
import moment, { Moment } from "moment";
import { Game, List } from "@models/index";
import redis from "@root/queue";
import { IGame } from "@models/tenthings/game";
import { IList } from "@models/tenthings/list";

export const votersCache: { [key: string]: { lastVoted: Moment; delay: number } } = {};

// Purge entries older than the maximum vote delay so the object doesn't retain
// one entry per unique voter indefinitely.
setInterval(() => {
  const cutoff = moment().subtract(5, "minutes");
  for (const key of Object.keys(votersCache)) {
    if (votersCache[key].lastVoted.isBefore(cutoff)) {
      delete votersCache[key];
    }
  }
}, 5 * 60_000);

export const getGame = async (telegramChatId: number) => {
  const cachedGame = await redis.get(telegramChatId.toString());
  if (cachedGame) return cachedGame;
  else {
    const game = await Game.findOne({
      telegramChatId,
    });
    if (!game) return;
    await redis.set(game.channelId, JSON.stringify(game));
    return game;
  }
};

export const saveGame = async (game: HydratedDocument<IGame>) => {
  await game.save();
  await redis.set(game.channelId, JSON.stringify(game));
};

export const getList = async (_id: Types.ObjectId) => {
  const listId = `list_${_id.toString()}`;
  const cachedList = await redis.get(listId);
  if (cachedList) return cachedList;
  else {
    const list = await List.findOne({
      _id,
    });
    if (!list) return;
    await redis.set(listId, JSON.stringify(list));
    return list;
  }
};

exports.saveList = async (list: HydratedDocument<IList>) => {
  await list.save();
  await redis.set(`list_${list._id.toString()}`, JSON.stringify(list));
};
