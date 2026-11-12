import { Game } from "@root/models";
import { createMaingame } from "@tenthings/maingame";
import { SYSTEM_ACTOR } from "@tenthings/engine/actions";
import { dispatch } from "@tenthings/engine/queue";
import { IGame } from "@models/tenthings/game";
import { getBlurbType } from "@models/tenthings/list";
import { HydratedDocument } from "mongoose";
import { MAX_HINTS, getHint } from "@tenthings/hints";
import type { WebAnswerView, WebGameView } from "@utils/tenthings-web";

export const getWebGame = async (webGameId: number = 1): Promise<HydratedDocument<IGame>> => {
  let game = await Game.findOne({ platform: "web", webGameId })
    .populate("list.creator", "username")
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

type Named = { username?: string; first_name?: string };
const nameOf = (person: unknown) => {
  const { username, first_name } = (person ?? {}) as Named;
  return username || first_name || "";
};

/**
 * The web Game as a Player may see it: only what the page shows. Unguessed Answers leave the
 * server masked with the Round's Hints, without their value or Blurb.
 */
export const toWebGameView = (game: IGame): WebGameView => {
  const { list, hints } = game;
  const answers = (list?.values ?? []).map((answer, i): WebAnswerView => {
    const _id = String((answer as { _id?: unknown })._id ?? i);
    if (!answer.guesser) return { _id, maskedValue: getHint(hints, answer.value), guessed: false };
    return {
      _id,
      maskedValue: answer.value,
      guessed: true,
      value: answer.value,
      blurb: answer.blurb || undefined,
      blurbType: answer.blurb ? getBlurbType(answer.blurb) : undefined,
      guesser: nameOf(answer.guesser),
    };
  });
  return {
    webGameId: game.webGameId ?? 1,
    hints,
    hintsLeft: Math.max(0, MAX_HINTS - hints),
    list: {
      _id: list?._id ? String(list._id) : undefined,
      name: list?.name,
      description: list?.description || undefined,
      creator: nameOf(list?.creator) || undefined,
      answers,
    },
  };
};
