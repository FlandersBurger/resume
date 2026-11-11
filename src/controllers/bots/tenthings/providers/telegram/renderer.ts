// Renders Engine Events in a Telegram chat: answers the button's callback, edits its keyboard,
// and posts the messages the chat should see.

import moment from "moment";
import shuffle from "lodash/shuffle";
import { Player } from "@models/index";
import { IGame } from "@models/tenthings/game";
import i18n from "@root/i18n";
import bot from "@root/connections/telegram";
import { makePercentage } from "@root/utils/number-helpers";
import { parseSymbols } from "@utils/string-helpers";
import emojis from "@tenthings/emojis";
import { getLanguageCounts } from "@tenthings/languageCounts";
import {
  confirmBanKeyboard,
  languageKeyboard,
  languagesKeyboard,
  searchResultsKeyboard,
  settingsKeyboard,
  subcategoriesKeyboard,
} from "@tenthings/keyboards";
import type { Renderer } from "@tenthings/engine/rendering";
import { adminOnly } from "./errors";

const onOff = (game: IGame, on: boolean) => i18n(game.settings.language, on ? "on" : "off");

export const renderTelegram: Renderer = async (game, events, { action, origin }) => {
  const { language } = game.settings;
  const channel = game.telegramChannel;
  const answer = (text: string) => origin.callbackQueryId && bot.answerCallback(origin.callbackQueryId, text);
  const editKeyboard = (keyboard: ReturnType<typeof settingsKeyboard>) =>
    origin.messageId && bot.queueEditKeyboard(channel, origin.messageId, keyboard);
  const deleteButtonMessage = () => origin.messageId && bot.deleteMessage(channel, origin.messageId);

  for (const event of events) {
    switch (event.type) {
      case "listVoted":
        answer(event.vote > 0 ? emojis.thumbsUp : emojis.thumbsDown);
        // Votes on day-old messages count, but aren't announced.
        if (!origin.sentAt || moment(origin.sentAt) > moment().subtract(1, "days")) {
          bot.queueMessage(
            channel,
            i18n(language, `sentences.${event.vote > 0 ? "" : "dis"}likesList`, {
              name: parseSymbols(event.playerName),
              list: parseSymbols(event.listName),
              score: makePercentage(event.score),
            }),
          );
        }
        break;
      case "listNotFound":
        if (action.type === "vote") answer("Can't find list 😱");
        else bot.queueMessage(channel, i18n(language, "warnings.unfoundList"));
        if (action.type === "confirmBan") deleteButtonMessage();
        break;
      case "adminOnly": {
        const player = await Player.findById(event.playerId).exec();
        if (player) await adminOnly(game, player);
        break;
      }
      case "pickRejected":
        if (action.type === "search") {
          bot.queueMessage(channel, `${i18n(language, "sentences.queueFull", { name: event.playerName })}\n -> /lists`);
          break;
        }
        bot.queueMessage(
          channel,
          i18n(
            language,
            {
              queueFull: "warnings.fullQueue",
              alreadyRequested: "warnings.alreadyRequested",
              alreadyInQueue: "warnings.alreadyInQueue",
            }[event.reason],
            { name: event.playerName, list: event.listName },
          ),
        );
        break;
      case "listPicked":
        answer(i18n(language, "sentences.addedList", { list: event.listName }));
        bot.queueMessage(
          channel,
          i18n(language, "sentences.addedListToQueue", { list: event.listName, name: event.playerName }),
        );
        break;
      case "settingToggled":
        answer(`${event.key} -> ${onOff(game, event.on)}`);
        editKeyboard(settingsKeyboard(game));
        break;
      case "delaySet":
        answer(`${i18n(language, event.key)} set to ${event.seconds} seconds`);
        if (origin.messageId)
          bot.editMessage(channel, origin.messageId, i18n(language, "settings"), settingsKeyboard(game));
        break;
      case "triviaLanguageToggled":
        answer(`${event.language} -> ${onOff(game, event.on)}`);
        editKeyboard(languagesKeyboard(game, await getLanguageCounts()));
        break;
      case "botLanguageSet":
        answer(`${event.language} -> New bot language`);
        bot.setCommands(channel, event.language);
        editKeyboard(languageKeyboard(game));
        break;
      case "categoryToggled":
        answer(`${i18n(language, event.category, { ns: "categories" })} -> ${onOff(game, event.on)}`);
        editKeyboard(subcategoriesKeyboard(game, event.category.split(".")[0]));
        break;
      case "banRequested":
        bot.sendKeyboard(
          channel,
          i18n(language, `sentences.${event.corroborate ? "corroborateBan" : "confirmBan"}`, {
            list: event.listName,
            user: event.playerName,
          }),
          confirmBanKeyboard(game, event.listId),
        );
        break;
      case "banRequestMissing":
        deleteButtonMessage();
        break;
      case "banConfirmedBySamePlayer":
        bot.queueMessage(channel, i18n(language, "warnings.corroborateBanBySamePlayer", { name: event.playerName }));
        break;
      case "listBanned":
        bot.queueMessage(channel, i18n(language, "sentences.listBanned", { list: event.listName }));
        deleteButtonMessage();
        break;
      case "listAlreadyBanned":
        bot.queueMessage(channel, i18n(language, "sentences.alreadyBannedList", { list: event.listName }));
        deleteButtonMessage();
        break;
      case "searchEmpty":
        bot.queueMessage(channel, i18n(language, "sentences.emptySearch", { name: event.playerName }));
        break;
      case "searchResults": {
        if (event.lists.length === 0) {
          bot.queueMessage(
            channel,
            i18n(language, "sentences.noSearchResults", { search: event.query, name: event.playerName }),
          );
          break;
        }
        const results = shuffle(event.lists)
          .slice(0, 10)
          .map(({ id, name }) => ({ _id: id, name }));
        const isAdminChat = game.telegramChatId === parseInt(process.env.ADMIN_CHAT || "");
        bot.sendKeyboard(
          channel,
          `${i18n(language, `sentences.${isAdminChat ? "curate" : "queue"}List`)}\n<i>(${event.query})</i>`,
          searchResultsKeyboard(game, results),
        );
        break;
      }
      case "upcomingLists":
        bot.queueMessage(
          channel,
          event.listNames.length > 0
            ? `${i18n(language, "sentences.upcomingLists")}\n${event.listNames.map((name) => `- ${name}\n`).join("")}`
            : i18n(language, "sentences.noUpcomingLists"),
        );
        break;
      case "flushed":
        bot.queueMessage(channel, "Flushed this chat");
        break;
    }
  }
};
