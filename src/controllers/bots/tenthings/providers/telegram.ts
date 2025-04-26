import i18n from "@root/i18n";
import bot from "@root/connections/telegram";
import { getCategoryLabel } from "../categories";
import { parseSymbols } from "@root/utils/string-helpers";
import { IGame, IGameList } from "@root/models/tenthings/game";
import { IList } from "@root/models/tenthings/list";
import { IUser } from "@root/models/user";
import { Provider } from ".";

export const telegram: Provider = {
  newRound: (game: IGame, list: IList | IGameList) => {
    let message = i18n(game.settings.language, "sentences.newRound");
    message += `\n${i18n(game.settings.language, "category", {
      count: game.list.categories.length,
    })}: `;
    message += `<b>${getCategoryLabel(game.settings.language, list)}</b>`;
    bot.queueMessage(game.telegramChannel, message);
  },
  newList: (game: IGame) => {
    let message = `<b>${game.list.name}</b> (${game.list.answers}) ${i18n(
      game.settings.language,
      "sentences.createdBy",
      { creator: (game.list.creator as IUser).username },
    )}`;
    message += game.list.description ? `\n<i>${parseSymbols(game.list.description)}</i>` : "";
    bot.queueMessage(game.telegramChannel, message);
  },
};
