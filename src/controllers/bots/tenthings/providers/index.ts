import { IGame, IGameList } from "@root/models/tenthings/game";
import { IList } from "@root/models/tenthings/list";

export type Provider = {
  newRound: (game: IGame, list: IList | IGameList) => void;
  newList: (game: IGame) => void;
};
