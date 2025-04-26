import { IGame, IGameList } from "@root/models/tenthings/game";
import { IList } from "@root/models/tenthings/list";
import { Provider } from ".";

export const web: Provider = {
  newRound: (game: IGame, list: IList | IGameList) => {
    console.log("New round started", game._id, list.name);
  },
  newList: (game: IGame) => {
    console.log("New list created", game.list.name);
  },
};
