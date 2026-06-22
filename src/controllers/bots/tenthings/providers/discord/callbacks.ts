import moment from "moment";
import find from "lodash/find";
import { Types } from "mongoose";
import { Game, GameRound, List } from "@models/index";
import { IVote } from "@models/tenthings/list";
import { GameType } from "@models/tenthings/game";
import { getListScore } from "@tenthings/lists";
import { votersCache } from "@tenthings/cache";
import { parseSymbols } from "@utils/string-helpers";
import { makePercentage } from "@root/utils/number-helpers";
import { setDisabledCategories } from "@tenthings/categories";
import { convertDiscordUserToPlayer } from ".";
import bot, { DiscordButtonInteraction } from "@root/connections/discord";
import i18n from "@root/i18n";
import { processHint } from "@tenthings/hints";
import { checkSkipper, processSkip, vetoSkip } from "@tenthings/skips";
import { getStats, getScores } from "@tenthings/providers/telegram/stats";
import { isBotLanguage, isSupportedLanguage, SupportedLanguage } from "@tenthings/languages";
import {
  categoriesKeyboard,
  confirmBanKeyboard,
  delayKeyboard,
  languageKeyboard,
  languagesKeyboard,
  listStatsKeyboard,
  playerStatsKeyboard,
  settingsKeyboard,
  subcategoriesKeyboard,
} from "@tenthings/keyboards";

const getPopulatedGame = (channelId: string) =>
  Game.findOne({ discordChannelId: channelId })
    .populate("list.creator")
    .populate("list.values.guesser")
    .populate("streak.player")
    .exec();

const getPlayer = (game: Awaited<ReturnType<typeof getPopulatedGame>>, interaction: DiscordButtonInteraction) => {
  if (!game) return undefined;
  return convertDiscordUserToPlayer(game, {
    id: interaction.userId,
    username: interaction.username,
    displayName: interaction.displayName,
    bot: false,
  });
};

export default async (interaction: DiscordButtonInteraction) => {
  const [type, ...rest] = interaction.customId.split(":");

  switch (type) {
    // ── Vote ───────────────────────────────────────────────────────────────────
    case "vote": {
      const game = await Game.findOne({ discordChannelId: interaction.channelId });
      if (!game) break;

      const [voteString, listId] = rest;
      const vote = parseInt(voteString);

      let doVote = false;
      if (votersCache[interaction.userId]) {
        if (
          votersCache[interaction.userId].lastVoted <
          moment().subtract(votersCache[interaction.userId].delay, "seconds")
        ) {
          doVote = true;
          delete votersCache[interaction.userId];
        }
      } else {
        votersCache[interaction.userId] = { lastVoted: moment(), delay: 10 };
        doVote = true;
      }

      if (!doVote) break;

      const foundList = await List.findOne({ _id: listId }).select("name votes modifyDate score skips plays").exec();
      if (!foundList) break;

      let voter = find(foundList.votes, (v: IVote) => v.voter == interaction.userId);
      if (!voter) {
        foundList.votes.push({ voter: interaction.userId, vote, date: new Date(), modifyDate: new Date() });
      } else {
        voter.vote = vote;
        voter.modifyDate = new Date();
      }
      foundList.score = getListScore(foundList);
      delete (foundList as any).voters;
      await foundList.save();

      const player = await convertDiscordUserToPlayer(game, {
        id: interaction.userId,
        username: interaction.username,
        displayName: interaction.displayName,
        bot: false,
      });
      const playerName = player?.first_name || interaction.displayName;

      bot.queueMessage(
        game.discordChannel,
        i18n(game.settings.language, `sentences.${vote > 0 ? "" : "dis"}likesList`, {
          name: playerName,
          list: parseSymbols(foundList.name),
          score: makePercentage(foundList.score),
        }),
      );
      break;
    }

    // ── Main game actions ──────────────────────────────────────────────────────
    case "hint": {
      const game = await getPopulatedGame(interaction.channelId);
      if (!game) break;
      const player = await getPlayer(game, interaction);
      if (player) await processHint(game, player);
      break;
    }

    case "skip": {
      const game = await getPopulatedGame(interaction.channelId);
      if (!game) break;
      const player = await getPlayer(game, interaction);
      if (player && (await checkSkipper(game, player))) {
        processSkip(game, player);
      }
      break;
    }

    case "veto": {
      const game = await getPopulatedGame(interaction.channelId);
      if (!game) break;
      const player = await getPlayer(game, interaction);
      if (player) await vetoSkip(game, player);
      break;
    }

    case "minihint": {
      const game = await getPopulatedGame(interaction.channelId);
      if (!game) break;
      const player = await getPlayer(game, interaction);
      if (player) await processHint(game, player, GameType.MINIGAME);
      break;
    }

    case "miniskip": {
      const game = await getPopulatedGame(interaction.channelId);
      if (!game) break;
      const player = await getPlayer(game, interaction);
      if (player && (await checkSkipper(game, player))) {
        bot.queueMessage(game.discordChannel, `The minigame answer was:\n*${game.minigame.answer}*`);
        const { createMinigame } = await import("@tenthings/minigame");
        setTimeout(() => createMinigame(game), 200);
      }
      break;
    }

    case "tinyhint": {
      const game = await getPopulatedGame(interaction.channelId);
      if (!game) break;
      const player = await getPlayer(game, interaction);
      if (player) await processHint(game, player, GameType.TINYGAME);
      break;
    }

    case "tinyskip": {
      const game = await getPopulatedGame(interaction.channelId);
      if (!game) break;
      const player = await getPlayer(game, interaction);
      if (player && (await checkSkipper(game, player))) {
        bot.queueMessage(game.discordChannel, `The tinygame answer was:\n*${game.tinygame.answer}*`);
        const { createTinygame } = await import("@tenthings/tinygame");
        setTimeout(() => createTinygame(game), 200);
      }
      break;
    }

    // ── Search: pick list ──────────────────────────────────────────────────────
    case "pick": {
      const game = await Game.findOne({ discordChannelId: interaction.channelId });
      if (!game) break;
      const player = await convertDiscordUserToPlayer(game, {
        id: interaction.userId,
        username: interaction.username,
        displayName: interaction.displayName,
        bot: false,
      });
      if (!player) break;

      const [listId] = rest;
      if (game.pickedLists.length >= 10) {
        bot.queueMessage(
          game.discordChannel,
          i18n(game.settings.language, "sentences.queueFull", { name: player.first_name }),
        );
        break;
      }
      if (player.pickedLists.find((id: Types.ObjectId) => id.toString() === listId)) {
        player.infractions++;
        await player.save();
        bot.queueMessage(
          game.discordChannel,
          i18n(game.settings.language, "warnings.alreadyRequested", { name: player.first_name }),
        );
        break;
      }
      const pickedList = await List.findOne({ _id: listId }).exec();
      if (!pickedList) {
        bot.queueMessage(game.discordChannel, i18n(game.settings.language, "warnings.unfoundList"));
        break;
      }
      if (find(game.pickedLists, (id: Types.ObjectId) => id.equals(pickedList._id))) {
        bot.queueMessage(
          game.discordChannel,
          i18n(game.settings.language, "warnings.alreadyInQueue", {
            list: pickedList.name,
            name: player.first_name,
          }),
        );
      } else {
        player.pickedLists.push(pickedList._id);
        await player.save();
        game.pickedLists.push(pickedList._id);
        await GameRound.deleteOne({ gameId: game._id, listId: pickedList._id, outcome: "banned" });
        await game.save();
        pickedList.picks++;
        await pickedList.save();
        bot.queueMessage(
          game.discordChannel,
          i18n(game.settings.language, "sentences.addedListToQueue", {
            list: pickedList.name,
            name: player.first_name,
          }),
        );
      }
      break;
    }

    // ── Ban flow ───────────────────────────────────────────────────────────────
    case "ban": {
      const game = await Game.findOne({ discordChannelId: interaction.channelId });
      if (!game) break;
      if (!(await bot.checkAdmin(interaction.guildId, interaction.userId))) break;

      const [listId] = rest;
      const foundList = await List.findOne({ _id: listId }).exec();
      if (!foundList) break;

      if (await GameRound.exists({ gameId: game._id, listId: foundList._id, outcome: "banned" })) {
        bot.queueMessage(
          game.discordChannel,
          i18n(game.settings.language, "sentences.alreadyBannedList", { list: foundList.name }),
        );
      } else {
        bot.sendMessageWithComponents(
          game.discordChannel,
          i18n(game.settings.language, "sentences.confirmBan", {
            list: foundList.name,
            user: interaction.displayName,
          }),
          confirmBanKeyboard(game, listId),
        );
      }
      break;
    }

    case "confirmban": {
      const game = await Game.findOne({ discordChannelId: interaction.channelId });
      if (!game) break;
      if (!(await bot.checkAdmin(interaction.guildId, interaction.userId))) break;

      const [listId] = rest;
      const banTarget = await List.findOne({ _id: listId }).select("_id bans name").exec();
      if (!banTarget) break;

      if (await GameRound.exists({ gameId: game._id, listId: banTarget._id, outcome: "banned" })) {
        bot.queueMessage(
          game.discordChannel,
          i18n(game.settings.language, "sentences.alreadyBannedList", { list: banTarget.name }),
        );
      } else {
        await GameRound.create({
          gameId: game._id,
          listId: banTarget._id,
          outcome: "banned",
          categories: banTarget.categories ?? [],
          language: banTarget.language,
          answersRevealed: 0,
          hintsUsed: 0,
          playedAt: new Date(),
        });
        banTarget.bans++;
        await banTarget.save();
        bot.queueMessage(
          game.discordChannel,
          i18n(game.settings.language, "sentences.listBanned", { list: banTarget.name }),
        );
      }
      break;
    }

    // ── Stats ──────────────────────────────────────────────────────────────────
    case "statsopt": {
      const game = await Game.findOne({ discordChannelId: interaction.channelId });
      if (!game) break;
      const [subtype] = rest;
      switch (subtype) {
        case "list":
          bot.sendMessageWithComponents(game.discordChannel, "<b>List Stats</b>", listStatsKeyboard(game));
          break;
        case "player":
          bot.sendMessageWithComponents(game.discordChannel, "<b>Player Stats</b>", playerStatsKeyboard(game));
          break;
      }
      break;
    }

    case "stat": {
      const game = await Game.findOne({ discordChannelId: interaction.channelId });
      if (!game) break;
      await getStats(game, rest.join(":"), interaction.displayName);
      break;
    }

    case "score": {
      const game = await Game.findOne({ discordChannelId: interaction.channelId });
      if (!game) break;
      await getScores(game, rest[0]);
      break;
    }

    // ── Settings ───────────────────────────────────────────────────────────────
    case "setting": {
      const game = await Game.findOne({ discordChannelId: interaction.channelId });
      if (!game) break;
      if (!(await bot.checkAdmin(interaction.guildId, interaction.userId))) break;

      const [key] = rest;
      switch (key) {
        case "settings":
          bot.sendMessageWithComponents(
            game.discordChannel,
            `<b>${i18n(game.settings.language, "settings")}</b>`,
            settingsKeyboard(game),
          );
          break;
        case "lang":
          bot.sendMessageWithComponents(
            game.discordChannel,
            `<b>${i18n(game.settings.language, "botLanguage")}</b>`,
            languageKeyboard(game),
          );
          break;
        case "langs": {
          const availableLanguages = await List.aggregate([
            { $group: { _id: "$language", count: { $sum: 1 } } },
          ]).exec();
          bot.sendMessageWithComponents(
            game.discordChannel,
            `<b>${i18n(game.settings.language, "triviaLangauges")}</b>`,
            languagesKeyboard(game, availableLanguages),
          );
          break;
        }
        case "cats":
          bot.sendMessageWithComponents(
            game.discordChannel,
            `<b>${i18n(game.settings.language, "category", { count: 0 })}</b>`,
            categoriesKeyboard(game),
          );
          break;
        case "skipDelay":
        case "vetoDelay":
        case "hintDelay":
          bot.sendMessageWithComponents(
            game.discordChannel,
            `<b>${i18n(game.settings.language, key)}</b>\n${i18n(game.settings.language, `sentences.${key}`)}`,
            delayKeyboard(game, key),
          );
          break;
        default:
          (game.settings as any)[key] = !(game.settings as any)[key];
          await game.save();
          bot.sendMessageWithComponents(
            game.discordChannel,
            `${key} → ${(game.settings as any)[key] ? i18n(game.settings.language, "on") : i18n(game.settings.language, "off")}`,
            settingsKeyboard(game),
          );
      }
      break;
    }

    // ── Categories ─────────────────────────────────────────────────────────────
    case "cat": {
      const game = await Game.findOne({ discordChannelId: interaction.channelId });
      if (!game) break;
      if (!(await bot.checkAdmin(interaction.guildId, interaction.userId))) break;

      const [category] = rest;
      bot.sendMessageWithComponents(
        game.discordChannel,
        `<b>${i18n(game.settings.language, `${category}.name`, { ns: "categories" })}</b>`,
        subcategoriesKeyboard(game, category),
      );
      break;
    }

    case "subcat": {
      const game = await Game.findOne({ discordChannelId: interaction.channelId });
      if (!game) break;
      if (!(await bot.checkAdmin(interaction.guildId, interaction.userId))) break;

      const [fullKey] = rest;
      const mainCategory = fullKey.split(".")[0];
      const isAllToggle = !fullKey.includes(".");
      setDisabledCategories(game, fullKey);
      await game.save();
      bot.sendMessageWithComponents(
        game.discordChannel,
        isAllToggle
          ? `<b>${i18n(game.settings.language, `${fullKey}.name`, { ns: "categories" })}</b>`
          : `${i18n(game.settings.language, fullKey, { ns: "categories" })} → ${
              game.disabledCategories.includes(fullKey)
                ? i18n(game.settings.language, "off")
                : i18n(game.settings.language, "on")
            }`,
        subcategoriesKeyboard(game, mainCategory),
      );
      break;
    }

    // ── Language selection ─────────────────────────────────────────────────────
    case "botlang": {
      const game = await Game.findOne({ discordChannelId: interaction.channelId });
      if (!game) break;
      if (!(await bot.checkAdmin(interaction.guildId, interaction.userId))) break;

      const [langCode] = rest;
      if (!isBotLanguage(langCode)) break;
      game.settings.language = langCode;
      await game.save();
      bot.sendMessageWithComponents(game.discordChannel, `${langCode} → new bot language`, languageKeyboard(game));
      break;
    }

    case "trivialang": {
      const game = await Game.findOne({ discordChannelId: interaction.channelId });
      if (!game) break;
      if (!(await bot.checkAdmin(interaction.guildId, interaction.userId))) break;

      const [langCode] = rest;
      if (!isSupportedLanguage(langCode)) break;
      const isSelected = game.settings.languages.includes(langCode as SupportedLanguage);
      if (isSelected) {
        game.settings.languages = game.settings.languages.filter((l) => l !== langCode);
      } else {
        game.settings.languages.push(langCode as SupportedLanguage);
      }
      if (!game.settings.languages.length) {
        game.settings.languages = [SupportedLanguage.EN];
      }
      await game.save();
      const availableLanguages = await List.aggregate([{ $group: { _id: "$language", count: { $sum: 1 } } }]).exec();
      bot.sendMessageWithComponents(
        game.discordChannel,
        `${langCode} → ${isSelected ? i18n(game.settings.language, "off") : i18n(game.settings.language, "on")}`,
        languagesKeyboard(game, availableLanguages),
      );
      break;
    }

    // ── Delay settings ─────────────────────────────────────────────────────────
    case "delay": {
      const game = await Game.findOne({ discordChannelId: interaction.channelId });
      if (!game) break;
      if (!(await bot.checkAdmin(interaction.guildId, interaction.userId))) break;

      const [delayType, valueStr] = rest;
      if (!["skipDelay", "vetoDelay", "hintDelay"].includes(delayType)) break;
      const value = parseInt(valueStr);
      (game.settings as any)[delayType] = value;
      await game.save();
      bot.sendMessageWithComponents(
        game.discordChannel,
        `<b>${i18n(game.settings.language, "settings")}</b>`,
        settingsKeyboard(game),
      );
      break;
    }
  }
};
