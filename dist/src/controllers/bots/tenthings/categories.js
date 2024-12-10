"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDisabledCategories = exports.getCategoryLabel = void 0;
const path_1 = require("path");
const fs_1 = __importDefault(require("fs"));
const i18n_1 = __importDefault(require("../../../../i18n"));
const lodash_1 = require("lodash");
const getCategoryLabel = (lng, list) => {
    if (!list.categories || list.categories.length === 0)
        return "";
    const mainCategories = list.categories.filter((category) => !category.includes("."));
    return mainCategories
        .sort()
        .map((category) => {
        const subcategories = list.categories
            .filter((subcategory) => subcategory.startsWith(category) && subcategory !== category)
            .map((subcategory) => (0, i18n_1.default)(lng, subcategory, { ns: "categories" }) || "");
        return ((0, i18n_1.default)(lng, `${category}.name`, { ns: "categories" }) +
            (subcategories.length > 0 ? " (" + subcategories.sort().join(", ") + ")" : ""));
    })
        .join(", ");
};
exports.getCategoryLabel = getCategoryLabel;
const categoriesPath = (0, path_1.join)(__dirname, "../../../../data/locales/en/categories.json");
const categoriesJson = JSON.parse(fs_1.default.readFileSync(categoriesPath, "utf8"));
const categories = Object.keys(categoriesJson).reduce((result, category) => {
    result[category] = Object.keys(categoriesJson[category]).filter((subcategory) => subcategory !== "name");
    return result;
}, {});
const setDisabledCategories = (game, selectedCategory) => {
    const mainCategory = selectedCategory.split(".")[0];
    const categoryIndex = game.disabledCategories.indexOf(selectedCategory);
    const subcategories = categories[mainCategory].map((subcategory) => `${mainCategory}.${subcategory}`);
    if (Object.keys(categories).includes(selectedCategory)) {
        if (!subcategories.some((subcategory) => game.disabledCategories.includes(subcategory))) {
            game.disabledCategories.push(mainCategory);
            game.disabledCategories = game.disabledCategories.concat(subcategories);
        }
        else {
            game.disabledCategories = game.disabledCategories.filter((subcategory) => !subcategory.startsWith(mainCategory));
        }
    }
    else {
        if (categoryIndex >= 0) {
            game.disabledCategories.splice(categoryIndex, 1);
            if (game.disabledCategories.includes(mainCategory)) {
                game.disabledCategories = game.disabledCategories.filter((category) => category !== mainCategory);
            }
        }
        else {
            game.disabledCategories.push(selectedCategory);
            if (subcategories.every((subcategory) => game.disabledCategories.includes(subcategory))) {
                game.disabledCategories.push(mainCategory);
            }
            else {
                game.disabledCategories = game.disabledCategories.filter((category) => category !== mainCategory);
            }
        }
    }
    game.disabledCategories = (0, lodash_1.uniq)(game.disabledCategories);
};
exports.setDisabledCategories = setDisabledCategories;
exports.default = categories;
//# sourceMappingURL=categories.js.map