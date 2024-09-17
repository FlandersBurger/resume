import { Game, Player } from "@models/index";
import bot from "@root/connections/telegram";
import i18n from "@root/i18n";
import { IGame } from "@root/models/tenthings/game";

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

export const adminOnly = async (game: IGame, name: string | undefined, additionalInfo: any) => {
  if (game.chat_id === parseInt(process.env.GROUP_CHAT || ""))
    bot.notifyAdmin(`Admin warning triggered by ${additionalInfo}`);
  bot.queueMessage(game.telegramChannel, i18n(game.settings.language, "warnings.adminFunction", { name }));
};
