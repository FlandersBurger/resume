import { HydratedDocument } from "mongoose";
import { Game, GameRound, List } from "@models/index";
import { GameType, IGame } from "@models/tenthings/game";
import { convertDiscordUserToPlayer } from ".";
import bot, { DiscordButtonInteraction } from "@root/connections/discord";
import i18n from "@root/i18n";
import { processHint } from "@tenthings/hints";
import { checkSkipper, processSkip, vetoSkip } from "@tenthings/skips";
import { getStats, getScores } from "@tenthings/providers/telegram/stats";
import { Action, Actor, isDelaySetting, isToggleSetting } from "@tenthings/engine/actions";
import { dispatch } from "@tenthings/engine/queue";
import { getLanguageCounts } from "@tenthings/languageCounts";
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

// Typed from getPlayer: importing IPlayer would pull this file into the models ↔ providers cycle.
type DiscordPlayer = NonNullable<Awaited<ReturnType<typeof getPlayer>>>;

const toActor = (player: DiscordPlayer, interaction: DiscordButtonInteraction, isAdmin?: boolean): Actor => ({
  playerId: String(player._id),
  name: player.first_name || interaction.displayName,
  isAdmin,
});

type ActionBody<A = Action> = A extends Action ? Omit<A, "gameId" | "actor"> : never;

/** Dispatch an admin-only Action; the Engine turns it down if the presser isn't a server admin. */
const dispatchAsAdmin = async (
  game: HydratedDocument<IGame>,
  interaction: DiscordButtonInteraction,
  body: ActionBody,
  isAdmin?: boolean,
) => {
  const player = await getPlayer(game, interaction);
  if (!player) return;
  const admin = isAdmin ?? (await bot.checkAdmin(interaction.guildId, interaction.userId));
  dispatch({ ...body, gameId: String(game._id), actor: toActor(player, interaction, admin) } as Action);
};

export default async (interaction: DiscordButtonInteraction) => {
  const [type, ...rest] = interaction.customId.split(":");

  switch (type) {
    // ── Vote ───────────────────────────────────────────────────────────────────
    case "vote": {
      const game = await Game.findOne({ discordChannelId: interaction.channelId });
      if (!game) break;
      const player = await getPlayer(game, interaction);
      if (!player) break;
      const [voteString, listId] = rest;
      const vote = parseInt(voteString) > 0 ? 1 : -1;
      dispatch({
        type: "vote",
        gameId: String(game._id),
        actor: toActor(player, interaction),
        listId,
        voterId: interaction.userId,
        vote,
      });
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
      const player = await getPlayer(game, interaction);
      if (!player) break;
      const [listId] = rest;
      dispatch({ type: "pick", gameId: String(game._id), actor: toActor(player, interaction), listId });
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
        case "langs":
          bot.sendMessageWithComponents(
            game.discordChannel,
            `<b>${i18n(game.settings.language, "triviaLangauges")}</b>`,
            languagesKeyboard(game, await getLanguageCounts()),
          );
          break;
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
          // Admin already checked above.
          if (isToggleSetting(key)) await dispatchAsAdmin(game, interaction, { type: "toggleSetting", key }, true);
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
      const [category] = rest;
      await dispatchAsAdmin(game, interaction, { type: "toggleCategory", category });
      break;
    }

    // ── Language selection ─────────────────────────────────────────────────────
    case "botlang": {
      const game = await Game.findOne({ discordChannelId: interaction.channelId });
      if (!game) break;
      const [language] = rest;
      await dispatchAsAdmin(game, interaction, { type: "setBotLanguage", language });
      break;
    }

    case "trivialang": {
      const game = await Game.findOne({ discordChannelId: interaction.channelId });
      if (!game) break;
      const [language] = rest;
      await dispatchAsAdmin(game, interaction, { type: "toggleTriviaLanguage", language });
      break;
    }

    // ── Delay settings ─────────────────────────────────────────────────────────
    case "delay": {
      const game = await Game.findOne({ discordChannelId: interaction.channelId });
      if (!game) break;
      const [key, seconds] = rest;
      if (isDelaySetting(key))
        await dispatchAsAdmin(game, interaction, { type: "setDelay", key, seconds: parseInt(seconds) });
      break;
    }
  }
};
