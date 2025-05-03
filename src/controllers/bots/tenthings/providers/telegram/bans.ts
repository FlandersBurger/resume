import { HydratedDocument } from "mongoose";
import { List } from "@models/index";
import { IGame } from "@models/tenthings/game";
import { TelegramCallbackData } from "./callbacks";

import i18n from "@root/i18n";
import { confirmBanListKeyboard } from "./keyboards";
import bot from "@root/connections/telegram";
import { adminOnly } from "@root/controllers/bots/tenthings/providers/telegram/errors";
import { convertTelegramUserToPlayer } from ".";

const cache: { [key: string]: number } = {};

export const initiateBan = async (game: IGame, callbackQuery: TelegramCallbackData) => {
  if (game.chat_id !== parseInt(process.env.GROUP_CHAT || "") || (await bot.checkAdmin(game, callbackQuery.from))) {
    const foundList = await List.findOne({ _id: callbackQuery.data }).exec();
    if (!foundList) {
      return game.provider.message(game, i18n(game.settings.language, "warnings.unfoundList"));
    }
    if (game.bannedLists.some((bannedListId) => bannedListId.toString() == callbackQuery.data)) {
      bot.queueMessage(
        game.telegramChannel,
        i18n(game.settings.language, "sentences.alreadyBannedList", { list: foundList.name }),
      );
      bot.deleteMessage(game.telegramChannel, callbackQuery.id);
    } else {
      cache[`${game._id}-${callbackQuery.data}`] = callbackQuery.from.id;
      if (foundList) {
        bot.sendKeyboard(
          game.telegramChannel,
          i18n(game.settings.language, `sentences.${game.chat_id > 0 ? "confirmBan" : "corroborateBan"}`, {
            list: foundList.name,
          }),
          confirmBanListKeyboard(game.settings.language, foundList),
        );
      }
    }
  } else {
    const player = await convertTelegramUserToPlayer(game, callbackQuery.from);
    if (player) adminOnly(game, player);
  }
};

export const processBan = (game: HydratedDocument<IGame>, callbackQuery: TelegramCallbackData) => {
  if (!cache[`${game._id}-${callbackQuery.data}`]) {
    bot.deleteMessage(game.telegramChannel, callbackQuery.id);
  } else if (cache[`${game._id}-${callbackQuery.data}`] !== callbackQuery.from.id || game.chat_id > 0) {
    banList(game, callbackQuery.data);
    delete cache[`${game._id}-${callbackQuery.data}`];
    bot.deleteMessage(game.telegramChannel, callbackQuery.id);
  } else {
    game.provider.message(
      game,
      i18n(game.settings.language, "warnings.corroborateBanBySamePlayer", { name: callbackQuery.from.name }),
    );
  }
};

const banList = async (game: HydratedDocument<IGame>, listId: string) => {
  const list = await List.findOne({ _id: listId }).select("_id bans name").exec();
  if (list) {
    if (game.bannedLists.some((bannedListId) => bannedListId.toString() == listId)) {
      game.provider.message(game, i18n(game.settings.language, "sentences.alreadyBannedList", { list: list.name }));
    } else {
      game.bannedLists.push(list._id);
      await game.save();
      list.bans++;
      await list.save();
      game.provider.message(game, i18n(game.settings.language, "sentences.listBanned", { list: list.name }));
      console.log(`${game.chat_id} (${game.settings.language}) banned ${list.name}`);
    }
  } else {
    game.provider.message(game, i18n(game.settings.language, "warnings.unfoundList"));
  }
};
