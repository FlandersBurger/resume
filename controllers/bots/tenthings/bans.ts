import { HydratedDocument, Types } from "mongoose";
import { List } from "../../../models";
import { IGame } from "../../../models/tenthings/game";
import { ICallbackData } from "./callbacks";

import bot from "../../../connections/telegram";
import i18n from "../../../i18n";
import { confirmBanListKeyboard } from "./keyboards";
const config = require("../../../config");

const cache: { [key: string]: number } = {};

export const initiateBan = async (game: IGame, callbackQuery: ICallbackData) => {
  if (game.chat_id !== config.groupChat || (await bot.checkAdmin(game.chat_id, callbackQuery.from.id))) {
    const foundList = await List.findOne({ _id: callbackQuery.data }).exec();
    if (!foundList) {
      return bot.queueMessage(game.chat_id, i18n(game.settings.language, "warnings.unfoundList"));
    }
    if (game.bannedLists.some((bannedListId) => bannedListId.toString() == callbackQuery.data)) {
      bot.queueMessage(
        game.chat_id,
        i18n(game.settings.language, "sentences.alreadyBannedList", { list: foundList.name })
      );
      bot.deleteMessage(callbackQuery.chatId, callbackQuery.id);
    } else {
      cache[`${game._id}-${callbackQuery.data}`] = callbackQuery.from.id;
      if (foundList) {
        bot.sendKeyboard(
          game.chat_id,
          i18n(game.settings.language, `sentences.${parseInt(game.chat_id) > 0 ? "confirmBan" : "corroborateBan"}`, {
            list: foundList.name,
          }),
          confirmBanListKeyboard(game.settings.language, foundList)
        );
      }
    }
  } else {
    bot.queueMessage(
      game.chat_id,
      i18n(game.settings.language, "warnings.adminFunction", { name: callbackQuery.from.name })
    );
  }
};

export const processBan = (game: HydratedDocument<IGame>, callbackQuery: ICallbackData) => {
  if (!cache[`${game._id}-${callbackQuery.data}`]) {
    bot.queueMessage(
      game.chat_id,
      i18n(game.settings.language, "sentences.banNotFound", { name: callbackQuery.from.name })
    );
    bot.deleteMessage(callbackQuery.chatId, callbackQuery.id);
  } else if (cache[`${game._id}-${callbackQuery.data}`] !== callbackQuery.from.id || parseInt(game.chat_id) > 0) {
    banList(game, callbackQuery.data);
    delete cache[`${game._id}-${callbackQuery.data}`];
    bot.deleteMessage(callbackQuery.chatId, callbackQuery.id);
  } else {
    bot.queueMessage(
      game.chat_id,
      i18n(game.settings.language, "warnings.corroborateBanBySamePlayer", { name: callbackQuery.from.name })
    );
  }
};

const banList = async (game: HydratedDocument<IGame>, listId: string) => {
  const list = await List.findOne({ _id: listId }).select("_id bans name").exec();
  if (list) {
    if (game.bannedLists.some((bannedListId) => bannedListId.toString() == listId)) {
      bot.queueMessage(game.chat_id, i18n(game.settings.language, "sentences.alreadyBannedList", { list: list.name }));
    } else {
      game.bannedLists.push(list._id);
      await game.save();
      list.bans++;
      await list.save();
      bot.queueMessage(game.chat_id, i18n(game.settings.language, "sentences.listBanned", { list: list.name }));
      console.log(`${game.chat_id} (${game.settings.language}) banned ${list.name}`);
    }
  } else {
    bot.queueMessage(game.chat_id, i18n(game.settings.language, "warnings.unfoundList"));
  }
};
