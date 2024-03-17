import { Game, Player } from "../../../models";

export const chatNotFound = async (chat_id: string) => {
  const inactiveGame = await Game.findOneAndUpdate({ chat_id }, { $set: { enabled: false } });
  if (inactiveGame) {
    await Player.updateMany({ game: inactiveGame._id }, { $set: { present: false } }, { multi: true });
  }
  console.error(`Inactive chat disabled: ${chat_id}`);
};
