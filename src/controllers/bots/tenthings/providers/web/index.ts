import { IGame, IGameList } from "@root/models/tenthings/game";
import { IList } from "@root/models/tenthings/list";
import { Provider } from "..";

export const web: Provider = {
  message: () => {},
  newRound: (game: IGame, list: IList | IGameList) => {
    console.log("New round started", game._id, list.name);
  },
  endOfRound: async (game: IGame, list: IList) => {
    console.log("Round ended", game._id, list.name);
  },
  newList: (game: IGame) => {
    console.log("New list created", game.list.name);
  },
  skipList: (game: IGame) => {
    console.log("List skipped", game.list.name);
  },
  dailyScores: () => {},
  dailyWinners: () => {},
  guessed: () => {},
  mainGameMessage: () => {},
  miniGameMessage: () => {},
  miniGameGuessed: () => {},
  tinyGameMessage: () => {},
  tinyGameGuessed: () => {},
  listMessage: () => "",
  categoriesMessage: () => "",
};
