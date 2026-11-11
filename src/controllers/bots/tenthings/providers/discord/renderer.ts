// Renders Engine Events in a Discord channel. Discord buttons can't be edited in place here,
// so settings changes post a fresh message with the updated keyboard.

import { IGame } from "@models/tenthings/game";
import i18n from "@root/i18n";
import bot from "@root/connections/discord";
import { makePercentage } from "@root/utils/number-helpers";
import { parseSymbols } from "@utils/string-helpers";
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
import { renderRoundEvent } from "../roundRendering";

const onOff = (game: IGame, on: boolean) => i18n(game.settings.language, on ? "on" : "off");

export const renderDiscord: Renderer = async (game, events, { action }) => {
  const { language } = game.settings;
  const channel = game.discordChannel;

  for (const event of events) {
    switch (event.type) {
      case "listVoted":
        bot.queueMessage(
          channel,
          i18n(language, `sentences.${event.vote > 0 ? "" : "dis"}likesList`, {
            name: event.playerName,
            list: parseSymbols(event.listName),
            score: makePercentage(event.score),
          }),
        );
        break;
      case "listNotFound":
        if (action.type === "pick") bot.queueMessage(channel, i18n(language, "warnings.unfoundList"));
        break;
      case "banRequested":
        bot.sendMessageWithComponents(
          channel,
          i18n(language, "sentences.confirmBan", { list: event.listName, user: event.playerName }),
          confirmBanKeyboard(game, event.listId),
        );
        break;
      case "banRequestMissing":
      case "banConfirmedBySamePlayer":
        // Discord Bans don't need a second Player, and a stale confirm button does nothing.
        break;
      case "listBanned":
        bot.queueMessage(channel, i18n(language, "sentences.listBanned", { list: event.listName }));
        break;
      case "listAlreadyBanned":
        bot.queueMessage(channel, i18n(language, "sentences.alreadyBannedList", { list: event.listName }));
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
        const results = event.lists.slice(0, 10).map(({ id, name }) => ({ _id: id, name }));
        bot.sendMessageWithComponents(
          channel,
          `${i18n(language, "sentences.queueList")}\n*(${event.query})*\n${results.map((l, i) => `${i + 1}. ${l.name}`).join("\n")}`,
          searchResultsKeyboard(game, results.slice(0, 5)),
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
      case "adminOnly":
        // Discord ignores admin-only presses from other players, without a warning.
        break;
      case "pickRejected":
        bot.queueMessage(
          channel,
          i18n(
            language,
            {
              queueFull: "sentences.queueFull",
              alreadyRequested: "warnings.alreadyRequested",
              alreadyInQueue: "warnings.alreadyInQueue",
            }[event.reason],
            { name: event.playerName, list: event.listName },
          ),
        );
        break;
      case "listPicked":
        bot.queueMessage(
          channel,
          i18n(language, "sentences.addedListToQueue", { list: event.listName, name: event.playerName }),
        );
        break;
      case "settingToggled":
        bot.sendMessageWithComponents(channel, `${event.key} → ${onOff(game, event.on)}`, settingsKeyboard(game));
        break;
      case "delaySet":
        bot.sendMessageWithComponents(channel, `<b>${i18n(language, "settings")}</b>`, settingsKeyboard(game));
        break;
      case "triviaLanguageToggled":
        bot.sendMessageWithComponents(
          channel,
          `${event.language} → ${onOff(game, event.on)}`,
          languagesKeyboard(game, await getLanguageCounts()),
        );
        break;
      case "botLanguageSet":
        bot.sendMessageWithComponents(channel, `${event.language} → new bot language`, languageKeyboard(game));
        break;
      case "categoryToggled": {
        const [mainCategory, subcategory] = event.category.split(".");
        bot.sendMessageWithComponents(
          channel,
          subcategory === undefined
            ? `<b>${i18n(language, `${mainCategory}.name`, { ns: "categories" })}</b>`
            : `${i18n(language, event.category, { ns: "categories" })} → ${onOff(game, event.on)}`,
          subcategoriesKeyboard(game, mainCategory),
        );
        break;
      }
      default:
        await renderRoundEvent(game, event);
    }
  }
};
