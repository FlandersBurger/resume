"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCategoryLabel = void 0;
const path_1 = require("path");
const fs_1 = __importDefault(require("fs"));
const i18n_1 = __importDefault(require("../../../i18n"));
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
exports.default = categories;
//# sourceMappingURL=categories.js.map