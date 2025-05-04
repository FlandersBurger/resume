import { IPlayer } from "@models/tenthings/player";
import { parseSymbols, maskUrls } from "@utils/string-helpers";

export const getPlayerName = (player: IPlayer, tagged = false): string => {
  if (!player) return "Player 404";
  return player.username ? (tagged ? "@" : "") + player.username : maskUrls(parseSymbols(player.first_name ?? ""));
};
