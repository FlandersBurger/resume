import { Game, Player } from "@models/index";

export const chatNotFound = async (chat_id: number) => {
  const inactiveGame = await Game.findOneAndUpdate({ chat_id }, { $set: { enabled: false } });
  if (inactiveGame) {
    await Player.updateMany({ game: inactiveGame._id }, { $set: { present: false } }, { multi: true });
  }
  console.error(`Inactive chat disabled: ${chat_id}`);
};

export const botMuted = async (chat_id: number, reason?: string) => {
  const mutedGame = await Game.findOneAndUpdate({ chat_id }, { $set: { enabled: false } });
  if (mutedGame) {
    await Player.updateMany({ game: mutedGame._id }, { $set: { present: false } }, { multi: true });
  }
  console.error(`Muted game disabled: ${chat_id}${reason ? `, Reason: ${reason}` : ""}`);
};
