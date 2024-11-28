import { join } from "path";
import fs from "fs";
import { IGameList } from "@root/models/tenthings/game";
import { IList } from "@root/models/tenthings/list";
import i18n from "@root/i18n";
import { BotLanguage } from "./languages";

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

export default categories;
