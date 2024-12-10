import { join } from "path";
import fs from "fs";
import { IGame, IGameList } from "@root/models/tenthings/game";
import { IList } from "@root/models/tenthings/list";
import i18n from "@root/i18n";
import { BotLanguage } from "./languages";
import { uniq } from "lodash";

export const getCategoryLabel = (lng: BotLanguage, list: IList | IGameList): string => {
  if (!list.categories || list.categories.length === 0) return "";
  const mainCategories = list.categories.filter((category) => !category.includes("."));
  return mainCategories
    .sort()
    .map((category) => {
      const subcategories = list.categories
        .filter((subcategory) => subcategory.startsWith(category) && subcategory !== category)
        .map((subcategory) => i18n(lng, subcategory, { ns: "categories" }) || "");
      return (
        i18n(lng, `${category}.name`, { ns: "categories" }) +
        (subcategories.length > 0 ? " (" + subcategories.sort().join(", ") + ")" : "")
      );
    })
    .join(", ");
};

const categoriesPath = join(__dirname, "../../../../data/locales/en/categories.json");
const categoriesJson = JSON.parse(fs.readFileSync(categoriesPath, "utf8"));
const categories: { [key: string]: string[] } = Object.keys(categoriesJson).reduce(
  (result: { [key: string]: string[] }, category) => {
    result[category] = Object.keys(categoriesJson[category]).filter((subcategory) => subcategory !== "name");
    return result;
  },
  {},
);

export const setDisabledCategories = (game: IGame, selectedCategory: string): void => {
  const mainCategory = selectedCategory.split(".")[0];
  const categoryIndex = game.disabledCategories.indexOf(selectedCategory);
  const subcategories = categories[mainCategory].map((subcategory) => `${mainCategory}.${subcategory}`);
  if (Object.keys(categories).includes(selectedCategory)) {
    if (!subcategories.some((subcategory) => game.disabledCategories.includes(subcategory))) {
      // Disable all from category
      game.disabledCategories.push(mainCategory);
      game.disabledCategories = game.disabledCategories.concat(subcategories);
    } else {
      // Enable all from category
      game.disabledCategories = game.disabledCategories.filter((subcategory) => !subcategory.startsWith(mainCategory));
    }
  } else {
    if (categoryIndex >= 0) {
      game.disabledCategories.splice(categoryIndex, 1);
      if (game.disabledCategories.includes(mainCategory)) {
        // Enable the main category
        game.disabledCategories = game.disabledCategories.filter((category) => category !== mainCategory);
      }
    } else {
      game.disabledCategories.push(selectedCategory);
      if (subcategories.every((subcategory) => game.disabledCategories.includes(subcategory))) {
        // All subcategories were enabled
        game.disabledCategories.push(mainCategory);
      } else {
        // Enable the main category
        game.disabledCategories = game.disabledCategories.filter((category) => category !== mainCategory);
      }
    }
  }
  game.disabledCategories = uniq(game.disabledCategories);
};

export default categories;
