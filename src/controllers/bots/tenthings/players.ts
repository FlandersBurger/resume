import { IPlayer } from "@models/tenthings/player";
import { parseSymbols, maskUrls } from "@utils/string-helpers";

export const getPlayerName = (player: IPlayer, tagged = false): string => {
  if (!player) return "Player 404";
  const isSnowflake = player.username && /^\d+$/.test(player.username);
  return !isSnowflake && player.username
    ? (tagged ? "@" : "") + player.username
    : maskUrls(parseSymbols(player.first_name ?? ""));
};
