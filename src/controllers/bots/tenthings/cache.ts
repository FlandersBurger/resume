import { HydratedDocument, Types } from "mongoose";
import { Moment } from "moment";
import { Game, List } from "@/models";
import redis from "@/redis";
import { IGame } from "@/models/tenthings/game";
import { IList } from "@/models/tenthings/list";

export const votersCache: { [key: string]: { lastVoted: Moment; delay: number } } = {};

export const getGame = async (chat_id: number) => {
  const cachedGame = await redis.get(chat_id.toString());
  if (cachedGame) return cachedGame;
  else {
    const game = await Game.findOne({
      chat_id,
    });
    if (!game) return;
    await redis.set(game.chat_id.toString(), JSON.stringify(game));
    return game;
  }
};

export const saveGame = async (game: HydratedDocument<IGame>) => {
  await game.save();
  await redis.set(game.chat_id!.toString(), JSON.stringify(game));
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
