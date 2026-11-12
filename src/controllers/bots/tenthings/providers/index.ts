import { IGame, IGameList, IGameListValue } from "@root/models/tenthings/game";
import { IList } from "@root/models/tenthings/list";
import { IPlayer } from "@root/models/tenthings/player";
import { KeyboardDef } from "@tenthings/keyboards";

export type Provider = {
  type: "web" | "telegram" | "discord";
  keyboardConverter: (def: KeyboardDef) => any;

  message: (game: IGame, message: string) => void;
  newRound: (game: IGame, list: IList | IGameList) => void;
  endOfRound: (game: IGame, list: IList) => Promise<void>;
  skipList: (game: IGame) => void;
  dailyScores: (game: IGame, limit?: number) => void;
  /** The day's Daily scores, highest first, and its winners (names as shown). */
  endOfDay: (
    game: IGame,
    day: { scores: { name: string; score: number }[]; winners: { name: string }[]; score: number },
  ) => void;
  guessed: (game: IGame, player: IPlayer, match: IGameListValue, score: number, accuracy: string) => void;
  mainGameMessage: (game: IGame, long?: boolean) => void;
  miniGameMessage: (game: IGame) => void;
  miniGameGuessed: (game: IGame, player: IPlayer, answer: string, score: number, accuracy: string) => void;
  tinyGameMessage: (game: IGame) => void;
  tinyGameGuessed: (game: IGame, player: IPlayer, answer: string, score: number, accuracy: string) => void;
  rateList: (game: IGame) => void;
  sendMedia: (game: IGame, url: string) => void;
  listMessage: (list: IList) => string;
  categoriesMessage: (game: IGame) => string;
};
