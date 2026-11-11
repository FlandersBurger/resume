// Renders Engine Events in a Telegram chat: answers the button's callback, edits its keyboard,
// and posts the messages the chat should see.

import moment from "moment";
import { Player } from "@models/index";
import { IGame } from "@models/tenthings/game";
import i18n from "@root/i18n";
import bot from "@root/connections/telegram";
import { makePercentage } from "@root/utils/number-helpers";
import { parseSymbols } from "@utils/string-helpers";
import emojis from "@tenthings/emojis";
import { getLanguageCounts } from "@tenthings/languageCounts";
import { languageKeyboard, languagesKeyboard, settingsKeyboard, subcategoriesKeyboard } from "@tenthings/keyboards";
import type { Renderer } from "@tenthings/engine/rendering";
import { adminOnly } from "./errors";

const onOff = (game: IGame, on: boolean) => i18n(game.settings.language, on ? "on" : "off");

export const renderTelegram: Renderer = async (game, events, { action, origin }) => {
  const { language } = game.settings;
  const channel = game.telegramChannel;
  const answer = (text: string) => origin.callbackQueryId && bot.answerCallback(origin.callbackQueryId, text);
  const editKeyboard = (keyboard: ReturnType<typeof settingsKeyboard>) =>
    origin.messageId && bot.queueEditKeyboard(channel, origin.messageId, keyboard);

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
        break;
      case "adminOnly": {
        const player = await Player.findById(event.playerId).exec();
        if (player) await adminOnly(game, player);
        break;
      }
      case "pickRejected":
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
    }
  }
};
