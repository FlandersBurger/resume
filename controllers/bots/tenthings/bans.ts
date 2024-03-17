import { HydratedDocument, Types } from "mongoose";
import { List } from "../../../models";
import { IGame } from "../../../models/tenthings/game";
import { ICallbackData } from "./callbacks";

const bot = require("../../../connections/telegram");
import i18n from "../../../i18n";
import keyboards from "./keyboards";
const config = require("../../../config");

const cache: { [key: string]: string } = {};

export const initiateBan = async (game: IGame, data: ICallbackData) => {
  if (game.chat_id !== config.groupChat || (await bot.checkAdmin(game.chat_id, data.from_id))) {
    const foundList = await List.findOne({ _id: data.list }).exec();
    if (!foundList) {
      return bot.queueMessage(game.chat_id, i18n(game.settings.language, "warnings.unfoundList"));
    }
    if (game.bannedLists.some((bannedListId) => bannedListId.toString() == data.list)) {
      bot.queueMessage(
        game.chat_id,
        i18n(game.settings.language, "sentences.alreadyBannedList", { list: foundList.name })
      );
      bot.deleteMessage(data.chat_id, data.message_id);
    } else {
      cache[`${game._id}-${data.list}`] = data.from_id;
      if (foundList) {
        bot.sendKeyboard(
          game.chat_id,
          i18n(game.settings.language, `sentences.${parseInt(game.chat_id) > 0 ? "confirmBan" : "corroborateBan"}`, {
            list: foundList.name,
          }),
          keyboards.confirmBan(game.settings.language, foundList)
        );
      }
    }
  } else {
    bot.queueMessage(game.chat_id, i18n(game.settings.language, "warnings.adminFunction", { name: data.requestor }));
  }
};

export const processBan = (game: HydratedDocument<IGame>, data: ICallbackData) => {
  if (!cache[`${game._id}-${data.list}`]) {
    bot.queueMessage(game.chat_id, i18n(game.settings.language, "sentences.banNotFound", { name: data.requestor }));
    bot.deleteMessage(data.chat_id, data.message_id);
  } else if (cache[`${game._id}-${data.list}`] !== data.from_id || parseInt(game.chat_id) > 0) {
    banList(game, data.list!);
    delete cache[`${game._id}-${data.list}`];
    bot.deleteMessage(data.chat_id, data.message_id);
  } else {
    bot.queueMessage(
      game.chat_id,
      i18n(game.settings.language, "warnings.corroborateBanBySamePlayer", { name: data.requestor })
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
