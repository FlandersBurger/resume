import { IGame, IGameList, IGameListValue } from "@root/models/tenthings/game";
import { IList } from "@root/models/tenthings/list";
import { IPlayer } from "@root/models/tenthings/player";

export type Provider = {
  message: (game: IGame, message: string) => void;
  newRound: (game: IGame, list: IList | IGameList) => void;
  endOfRound: (game: IGame, list: IList) => Promise<void>;
  newList: (game: IGame) => void;
  skipList: (game: IGame) => void;
  dailyScores: (game: IGame, limit?: number) => void;
  dailyWinners: (game: IGame, winners: IPlayer[], score: number) => void;
  guessed: (game: IGame, player: IPlayer, match: IGameListValue, score: number, accuracy: string) => void;
  mainGameMessage: (game: IGame, long?: boolean) => void;
  miniGameMessage: (game: IGame) => void;
  miniGameGuessed: (game: IGame, player: IPlayer, score: number, accuracy: string) => void;
  tinyGameMessage: (game: IGame) => void;
  tinyGameGuessed: (game: IGame, player: IPlayer, score: number, accuracy: string) => void;
  listMessage: (list: IList) => string;
  categoriesMessage: (game: IGame) => string;
};
