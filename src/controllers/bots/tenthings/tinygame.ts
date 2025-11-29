import moment from "moment";
import sampleSize from "lodash/sampleSize";
import { HydratedDocument } from "mongoose";
import { IGame } from "@models/tenthings/game";
import { IListValue } from "@models/tenthings/list";
import { IPlayer } from "@models/tenthings/player";
import { Guess, getAnswerScore } from "./guesses";
import { getRandomList } from "./lists";

export const createTinygame = async (game: HydratedDocument<IGame>) => {
  const availableLanguages =
    game.settings.languages && game.settings.languages.length > 0 ? game.settings.languages : ["EN"];
  let list = await getRandomList({
    categories: { $nin: game.disabledCategories },
    language: { $in: availableLanguages },
  });
  if (!list) {
    list = await getRandomList({
      categories: { $nin: game.disabledCategories },
      language: "EN",
    });
    if (!list) {
      list = await getRandomList({ language: "EN" });
    }
  }
  const tinygame = {
    answer: list!.name,
    clues: sampleSize(
      list!.values.map((answer: IListValue) => answer.value),
      10,
    ),
  };
  game.tinygame.answer = tinygame.answer;
  game.tinygame.hints = 1;
  game.tinygame.date = moment().toDate();
  game.tinygame.clues = tinygame.clues;
  game.provider.tinyGameMessage(game);
  try {
    await game.save();
  } catch (err) {
    console.error(`Tinygame Error\n${JSON.stringify(err)}`);
    throw err;
  }
  return true;
};

export const checkTinygame = async (game: HydratedDocument<IGame>, player: HydratedDocument<IPlayer>, guess: Guess) => {
  if (guess.match.value !== game.tinygame.answer) return;
  const score = getAnswerScore(game.tinygame.hints, guess.match.distance);
  player.score += score;
  player.scoreDaily += score;
  if (game.tinygame.hints === 0) player.hintStreak++;
  player.tinygamePlays++;
  if (player.infractions > 0) player.infractions--;
  await player.save();
  game.tinygame.plays++;
  await game.save();
  game.provider.tinyGameGuessed(game, player, score, (guess.match.distance * 100).toFixed(0));
  setTimeout(() => {
    createTinygame(game);
  }, 1000);
};
