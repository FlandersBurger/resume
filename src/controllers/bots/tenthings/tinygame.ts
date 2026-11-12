import moment from "moment";
import sampleSize from "lodash/sampleSize";
import { IGame } from "@models/tenthings/game";
import { IListValue } from "@models/tenthings/list";
import { getRandomList } from "./lists";

/** Draws a new Tinygame onto `game` (unsaved). */
export const drawTinygame = async (game: IGame) => {
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
  game.tinygame.answer = list!.name;
  game.tinygame.hints = 1;
  game.tinygame.date = moment().toDate();
  game.tinygame.clues = sampleSize(
    list!.values.map((answer: IListValue) => answer.value),
    10,
  );
  game.tinygame.nextHintAt = undefined;
};
