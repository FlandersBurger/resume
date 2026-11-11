import { HydratedDocument } from "mongoose";
import { Game, List } from "@models/index";
import { IGame } from "@models/tenthings/game";
import { IList } from "@models/tenthings/list";
import { capitalize } from "@utils/string-helpers";
import { makePercentage } from "@root/utils/number-helpers";

import moment from "moment";
import { getDifficultyMessage, getFrequencyMessage } from "@tenthings/messages";

import i18n from "@root/i18n";

import { getScores, getStats } from "@tenthings/providers/telegram/stats";
import { ActionOrigin, Actor, isToggleSetting } from "@tenthings/engine/actions";
import { dispatch } from "@tenthings/engine/queue";
import { getLanguageCounts } from "@tenthings/languageCounts";
import { curateListKeyboard } from "./keyboards";
import {
  categoriesKeyboard,
  delayKeyboard,
  languageKeyboard,
  languagesKeyboard,
  listStatsKeyboard,
  playerStatsKeyboard,
  settingsKeyboard,
  subcategoriesKeyboard,
} from "@tenthings/keyboards";
import bot, { TelegramUser } from "@root/connections/telegram";
import { adminOnly } from "@root/controllers/bots/tenthings/providers/telegram/errors";
import { convertTelegramUserToPlayer } from ".";
import { newRound } from "../../maingame";
import { TelegramCallbackDataType, TelegramCallbackDataTypeDelay, callbackDateTypeDelays } from "./callback-types";

export { TelegramCallbackDataType, TelegramCallbackDataTypeDelay, callbackDateTypeDelays } from "./callback-types";

export type TelegramCallbackData = {
  id: string;
  type: string;
  date: Date;
  from: TelegramUser;
  chatId: number;
  callbackQueryId: string;
  text: string;
  data: string;
};

export default async (callbackQuery: TelegramCallbackData) => {
  const game: HydratedDocument<IGame> | null = await Game.findOne({ telegramChatId: callbackQuery.chatId });
  if (!game) {
    return;
  }
  try {
    await game.validate();
  } catch (err) {
    game.guessers = [];
    game.streak = {
      player: undefined,
      count: 0,
    };
    newRound(game);
    console.log("Game reset in callback:", game._id);
    return;
  }
  const player = await convertTelegramUserToPlayer(game, callbackQuery.from);
  if (!player || player.banned) {
    return;
  }
  let list: HydratedDocument<IList> | null;
  const gameId = String(game._id);
  const actor = (isAdmin?: boolean): Actor => ({
    playerId: String(player._id),
    name: callbackQuery.from.name ?? player.first_name,
    isAdmin,
  });
  // Only the main group chat restricts Bans to its admins; everywhere else any Player may ban.
  const mayBan = async () =>
    game.telegramChatId !== parseInt(process.env.GROUP_CHAT || "") || (await bot.checkAdmin(game, callbackQuery.from));
  const origin: ActionOrigin = {
    callbackQueryId: callbackQuery.callbackQueryId,
    messageId: callbackQuery.id,
    sentAt: moment(callbackQuery.date).toISOString(),
  };
  switch (callbackQuery.type) {
    case TelegramCallbackDataType.Vote: {
      const [voteString, listId] = callbackQuery.data.split("_");
      const vote = parseInt(voteString) > 0 ? 1 : -1;
      dispatch({ type: "vote", gameId, actor: actor(), listId, voterId: callbackQuery.from.id, vote }, origin);
      break;
    }
    case TelegramCallbackDataType.StatOptions:
      if (await bot.checkAdmin(game, callbackQuery.from)) {
        if (!game) return;
        const text = i18n(game.settings.language, `stats.${callbackQuery.data}`);
        switch (callbackQuery.data) {
          case "list":
            bot.answerCallback(callbackQuery.callbackQueryId, text);
            bot.sendKeyboard(game.telegramChannel, `<b>${text}</b>`, listStatsKeyboard(game));
            break;
          case "player":
            bot.answerCallback(callbackQuery.callbackQueryId, text);
            bot.sendKeyboard(game.telegramChannel, `<b>${text}</b>`, playerStatsKeyboard(game));
            break;
          case "global":
            bot.answerCallback(callbackQuery.callbackQueryId, text);
            getStats(game, "global", callbackQuery.from.name);
            break;
          case "game":
            bot.answerCallback(callbackQuery.callbackQueryId, text);
            getStats(game, "g", callbackQuery.from.name);
            break;
        }
      }
      break;
    case TelegramCallbackDataType.Stats:
      bot.answerCallback(callbackQuery.callbackQueryId, "");
      getStats(game, callbackQuery.data, callbackQuery.from.name);
      break;
    case TelegramCallbackDataType.Score:
      if (callbackQuery.from.name === "^") return;
      bot.answerCallback(callbackQuery.callbackQueryId, "Score");
      getScores(game, callbackQuery.data);
      break;
    case TelegramCallbackDataType.Category:
      if (game.telegramChatId != parseInt(process.env.GROUP_CHAT || "")) {
        if (await bot.checkAdmin(game, callbackQuery.from)) {
          bot.queueEditMessage(
            game.telegramChannel,
            callbackQuery.id,
            i18n(game.settings.language, `${callbackQuery.data}.name`, { ns: "categories" }),
            subcategoriesKeyboard(game, callbackQuery.data),
          );
        }
      }
      break;
    case TelegramCallbackDataType.Subcategory:
      if (game.telegramChatId != parseInt(process.env.GROUP_CHAT || "") && callbackQuery.data) {
        const isAdmin = await bot.checkAdmin(game, callbackQuery.from);
        dispatch({ type: "toggleCategory", gameId, actor: actor(isAdmin), category: callbackQuery.data }, origin);
      }
      break;
    case TelegramCallbackDataType.Setting:
      if (game.telegramChatId !== parseInt(process.env.ADMIN_CHAT || "")) {
        if (await bot.checkAdmin(game, callbackQuery.from)) {
          if (!game || !callbackQuery.data) return;
          if (callbackQuery.data === "langs") {
            bot.queueEditMessage(
              game.telegramChannel,
              callbackQuery.id,
              i18n(game.settings.language, "triviaLangauges"),
              languagesKeyboard(game, await getLanguageCounts()),
            );
          } else if (callbackQuery.data === "lang") {
            bot.queueEditMessage(
              game.telegramChannel,
              callbackQuery.id,
              i18n(game.settings.language, "botLanguage"),
              languageKeyboard(game),
            );
          } else if (callbackQuery.data === "cats") {
            bot.queueEditMessage(
              game.telegramChannel,
              callbackQuery.id,
              i18n(game.settings.language, "category", { count: 0 }),
              categoriesKeyboard(game),
            );
          } else if (callbackQuery.data === "settings") {
            bot.editMessage(
              game.telegramChannel,
              callbackQuery.id,
              i18n(game.settings.language, "settings"),
              settingsKeyboard(game),
            );
          } else if (callbackDateTypeDelays.includes(callbackQuery.data as TelegramCallbackDataTypeDelay)) {
            // if (game.telegramChatId < 0) {
            bot.editMessage(
              game.telegramChannel,
              callbackQuery.id,
              `${i18n(game.settings.language, callbackQuery.data)}\n${i18n(game.settings.language, `sentences.${callbackQuery.data}`)}`,
              delayKeyboard(game, callbackQuery.data as TelegramCallbackDataTypeDelay),
            );

            // } else {
            //   bot.answerCallback(callbackQuery.callbackQueryId, "This setting doesn't apply in private chats");
            // }
          } else if (isToggleSetting(callbackQuery.data)) {
            dispatch({ type: "toggleSetting", gameId, actor: actor(true), key: callbackQuery.data }, origin);
          }
        } else {
          if (!game) return;
          adminOnly(game, player);
        }
      }
      break;
    case TelegramCallbackDataType.TriviaLanguages: {
      const isAdmin = await bot.checkAdmin(game, callbackQuery.from);
      dispatch({ type: "toggleTriviaLanguage", gameId, actor: actor(isAdmin), language: callbackQuery.data }, origin);
      break;
    }
    case TelegramCallbackDataType.BotLanguage: {
      const isAdmin = await bot.checkAdmin(game, callbackQuery.from);
      dispatch({ type: "setBotLanguage", gameId, actor: actor(isAdmin), language: callbackQuery.data }, origin);
      break;
    }
    case TelegramCallbackDataType.Pick:
      if (game.telegramChatId === parseInt(process.env.ADMIN_CHAT || "")) {
        const list: HydratedDocument<IList> | null = await List.findOne({ _id: callbackQuery.data })
          .populate("creator")
          .exec();
        if (!list) return;
        let msg = game.provider.listMessage(list);
        msg += ` - Created: ${moment(list.date).format("DD-MMM-YYYY")}\n`;
        msg += ` - Modified: ${moment(list.modifyDate).format("DD-MMM-YYYY")}\n`;
        msg += ` - Score: ${makePercentage(list.score)}\n`;
        msg += ` - Values: ${list.values.length}\n`;
        msg += ` - Plays: ${list.plays}\n`;
        msg += ` - Skips: ${list.skips}\n`;
        msg += ` - Hints: ${list.hints}\n\n`;
        msg += `Rate Difficulty and Update Frequency`;
        bot.notifyAdmins(msg, curateListKeyboard(list));
      } else {
        dispatch({ type: "pick", gameId, actor: actor(), listId: callbackQuery.data }, origin);
      }
      break;
    case TelegramCallbackDataType.Ban:
      dispatch({ type: "requestBan", gameId, actor: actor(await mayBan()), listId: callbackQuery.data }, origin);
      bot.answerCallback(callbackQuery.callbackQueryId, "");
      break;
    case TelegramCallbackDataType.ConfirmBan:
      dispatch({ type: "confirmBan", gameId, actor: actor(await mayBan()), listId: callbackQuery.data }, origin);
      bot.answerCallback(callbackQuery.callbackQueryId, "");
      break;
    case TelegramCallbackDataType.Values:
      list = await List.findOne({ _id: callbackQuery.data });
      if (!list) {
        bot.queueMessage(game.telegramChannel, "List not found");
      } else {
        bot.queueMessage(
          game.telegramChannel,
          list.values
            .sort((a, b) => (a.value < b.value ? -1 : 1))
            .reduce((message, item) => `${message}- ${item.value}\n`, `<b>${list.name}</b>\n`),
        );
      }
      break;
    case TelegramCallbackDataType.Description:
      if (!game) return;
      list = await List.findOne({ _id: callbackQuery.data }).exec();
      if (!list) return;
      bot.queueMessage(
        game.telegramChannel,
        `<b>${list.name}</b>\n${i18n(game.settings.language, "description")}:\n<i>${list.description || "N/A"}</i>`,
      );
      break;
    case TelegramCallbackDataType.Difficulty:
      const [difficultyString, difficultyListId] = callbackQuery.data.split("_");
      const difficulty = parseInt(difficultyString);
      await List.findOneAndUpdate({ _id: difficultyListId }, { difficulty });
      bot.answerCallback(callbackQuery.callbackQueryId, `List is ${getDifficultyMessage(difficulty)}`);
      list = await List.findOne({ _id: difficultyListId }).exec();
      if (!list) return;
      bot.queueEditKeyboard(game.telegramChannel, callbackQuery.id, curateListKeyboard(list));
      break;
    case TelegramCallbackDataType.Frequency:
      const [frequencyString, frequencyListId] = callbackQuery.data.split("_");
      const frequency = parseInt(frequencyString);
      await List.findOneAndUpdate({ _id: frequencyListId }, { frequency });
      bot.answerCallback(callbackQuery.callbackQueryId, `${capitalize(getFrequencyMessage(frequency))} changes`);
      list = await List.findOne({ _id: frequencyListId }).exec();
      if (!list) return;
      bot.queueEditKeyboard(game.telegramChannel, callbackQuery.id, curateListKeyboard(list));
      break;
    case TelegramCallbackDataType.SkipDelay:
    case TelegramCallbackDataType.VetoDelay:
    case TelegramCallbackDataType.HintDelay: {
      const isAdmin = await bot.checkAdmin(game, callbackQuery.from);
      const seconds = parseInt(callbackQuery.data);
      dispatch({ type: "setDelay", gameId, actor: actor(isAdmin), key: callbackQuery.type, seconds }, origin);
    }
  }
};
