import { Game, Player } from "@models/index";
import bot from "@root/connections/telegram";
import i18n from "@root/i18n";
import { IGame } from "@root/models/tenthings/game";
import { IPlayer } from "@root/models/tenthings/player";
import { getPlayerName } from "./players";
import { HydratedDocument } from "mongoose";

export const chatNotFound = async (chat_id: number) => {
  const inactiveGame = await Game.findOneAndUpdate({ chat_id }, { $set: { enabled: false } });
  if (inactiveGame) {
    await Player.updateMany({ game: inactiveGame._id }, { $set: { present: false } }, { multi: true });
  }
  console.error(`Inactive chat disabled: ${chat_id}`);
};

export const botMuted = async (chat_id: number, reason?: string) => {
  const mutedGame = await Game.findOneAndUpdate({ chat_id, enabled: true }, { $set: { enabled: false } });
  if (mutedGame) {
    await Player.updateMany({ game: mutedGame._id }, { $set: { present: false } }, { multi: true });
    console.error(`Muted game disabled: ${chat_id}${reason ? `, Reason: ${reason}` : ""}`);
  }
};

export const noTopic = async (chat_id: number) => {
  await Game.findOneAndUpdate({ chat_id }, { $set: { topicId: null } });
};

export const adminOnly = async (game: IGame, player: HydratedDocument<IPlayer>) => {
  player.infractions++;
  if (player.infractions < 4) {
    game.provider.message(
      game,
      `${i18n(game.settings.language, "warnings.adminFunction", { name: getPlayerName(player) })}\nID: ${player.id}`,
    );
  } else if (player.infractions === 4) {
    game.provider.message(
      game,
      `${i18n(game.settings.language, "warnings.abuse", { name: getPlayerName(player) })}\nID: ${player.id}`,
    );
  } else {
    game.provider.message(
      game,
      `${i18n(game.settings.language, "warnings.banned", { name: getPlayerName(player) })}\nID: ${player.id}`,
    );
    bot.notifyAdmin(
      `Banned player: ${getPlayerName(player)}\nID: ${player.id}\nChat: https://belgocanadian.com/tenthings/${game.chat_id}`,
    );
    player.banned = true;
  }
  await player.save();
};
