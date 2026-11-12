import { Game } from "@root/models";
import { createMaingame } from "@tenthings/maingame";
import { SYSTEM_ACTOR } from "@tenthings/engine/actions";
import { dispatch } from "@tenthings/engine/queue";
import { IGame } from "@models/tenthings/game";
import { HydratedDocument } from "mongoose";
import { maskAnswers } from "@tenthings/hints";

export const getWebGame = async (webGameId: number = 1): Promise<HydratedDocument<IGame>> => {
  let game = await Game.findOne({ platform: "web", webGameId })
    .populate("list.creator")
    .populate("list.values.guesser", "username first_name");
  if (!game) {
    game = await createMaingame({ platform: "web", webGameId });
  }
  // A no-op while a Round is in progress, or when the next one is already on its way.
  const valuesLeft = game.list.values.filter(({ guesser }: any) => !guesser).length;
  if (game.list.values.length === 0 || valuesLeft === 0) {
    dispatch({ type: "startRound", gameId: String(game._id), actor: SYSTEM_ACTOR });
  }
  return game;
};

/** The web Game as Players may see it: unguessed Answers leave the server masked. */
export const getGameWithHints = (game: HydratedDocument<IGame>) => {
  const leanGame = game.toJSON();
  return {
    ...leanGame,
    list: { ...leanGame.list, values: maskAnswers(leanGame.list.values, leanGame.hints, { reveal: false }) },
  };
};
