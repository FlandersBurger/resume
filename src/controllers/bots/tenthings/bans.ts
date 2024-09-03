import { HydratedDocument } from "mongoose";
import { List } from "@models/index";
import { IGame } from "@models/tenthings/game";
import { CallbackData } from "./callbacks";

import i18n from "@root/i18n";
import { confirmBanListKeyboard } from "./keyboards";
import bot from "@root/connections/telegram";

const cache: { [key: string]: number } = {};

export const initiateBan = async (game: IGame, callbackQuery: CallbackData) => {
  if (
    game.chat_id !== parseInt(process.env.GROUP_CHAT || "") ||
    (await bot.checkAdmin(game.chat_id, callbackQuery.from.id))
  ) {
    const foundList = await List.findOne({ _id: callbackQuery.data }).exec();
    if (!foundList) {
      return bot.queueMessage(game.chat_id, i18n(game.settings.language, "warnings.unfoundList"), game.topicId);
    }
    if (game.bannedLists.some((bannedListId) => bannedListId.toString() == callbackQuery.data)) {
      bot.queueMessage(
        game.chat_id,
        i18n(game.settings.language, "sentences.alreadyBannedList", { list: foundList.name }),
        game.topicId,
      );
      bot.deleteMessage(callbackQuery.chatId, callbackQuery.id);
    } else {
      cache[`${game._id}-${callbackQuery.data}`] = callbackQuery.from.id;
      if (foundList) {
        bot.sendKeyboard(
          game.chat_id,
          i18n(game.settings.language, `sentences.${game.chat_id > 0 ? "confirmBan" : "corroborateBan"}`, {
            list: foundList.name,
          }),
          confirmBanListKeyboard(game.settings.language, foundList),
        );
      }
    }
  } else {
    bot.queueMessage(
      game.chat_id,
      i18n(game.settings.language, "warnings.adminFunction", { name: callbackQuery.from.name }),
      game.topicId,
    );
  }
};

export const processBan = (game: HydratedDocument<IGame>, callbackQuery: CallbackData) => {
  if (!cache[`${game._id}-${callbackQuery.data}`]) {
    bot.queueMessage(
      game.chat_id,
      i18n(game.settings.language, "sentences.banNotFound", { name: callbackQuery.from.name }),
      game.topicId,
    );
    bot.deleteMessage(callbackQuery.chatId, callbackQuery.id);
  } else if (cache[`${game._id}-${callbackQuery.data}`] !== callbackQuery.from.id || game.chat_id > 0) {
    banList(game, callbackQuery.data);
    delete cache[`${game._id}-${callbackQuery.data}`];
    bot.deleteMessage(callbackQuery.chatId, callbackQuery.id);
  } else {
    bot.queueMessage(
      game.chat_id,
      i18n(game.settings.language, "warnings.corroborateBanBySamePlayer", { name: callbackQuery.from.name }),
      game.topicId,
    );
  }
};

const banList = async (game: HydratedDocument<IGame>, listId: string) => {
  const list = await List.findOne({ _id: listId }).select("_id bans name").exec();
  if (list) {
    if (game.bannedLists.some((bannedListId) => bannedListId.toString() == listId)) {
      bot.queueMessage(
        game.chat_id,
        i18n(game.settings.language, "sentences.alreadyBannedList", { list: list.name }),
        game.topicId,
      );
    } else {
      game.bannedLists.push(list._id);
      await game.save();
      list.bans++;
      await list.save();
      bot.queueMessage(
        game.chat_id,
        i18n(game.settings.language, "sentences.listBanned", { list: list.name }),
        game.topicId,
      );
      console.log(`${game.chat_id} (${game.settings.language}) banned ${list.name}`);
    }
  } else {
    bot.queueMessage(game.chat_id, i18n(game.settings.language, "warnings.unfoundList"), game.topicId);
  }
};
