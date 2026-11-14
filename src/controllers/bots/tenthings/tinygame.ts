import moment from "moment";
import sampleSize from "lodash/sampleSize";
import { IGame } from "@models/tenthings/game";
import { IListValue } from "@models/tenthings/list";
import { getRandomPoolList } from "./lists";

/** Draws a new Tinygame onto `game` (unsaved). */
export const drawTinygame = async (game: IGame) => {
  const availableLanguages =
    game.settings.languages && game.settings.languages.length > 0 ? game.settings.languages : ["EN"];
  const disabledCategories = new Set(game.disabledCategories);
  const allowed = (categories: string[] = []) => !categories.some((c) => disabledCategories.has(c));
  const list =
    (await getRandomPoolList((l) => availableLanguages.includes(l.language) && allowed(l.categories))) ??
    (await getRandomPoolList((l) => l.language === "EN" && allowed(l.categories))) ??
    (await getRandomPoolList((l) => l.language === "EN"));
  game.tinygame.answer = list!.name;
  game.tinygame.hints = 1;
  game.tinygame.date = moment().toDate();
  game.tinygame.clues = sampleSize(
    list!.values.map((answer: IListValue) => answer.value),
    10,
  );
  game.tinygame.nextHintAt = undefined;
};
