"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenthingsCategoriesRoute = void 0;
const express_1 = require("express");
const categories_1 = __importDefault(require("../../../../controllers/bots/tenthings/categories"));
const i18n_1 = __importDefault(require("../../../../i18n"));
exports.tenthingsCategoriesRoute = (0, express_1.Router)();
exports.tenthingsCategoriesRoute.get("/", (_, res) => {
    if (!res.locals.isAuthorized)
        res.sendStatus(401);
    else {
        const labeledCategories = Object.keys(categories_1.default).map((category) => ({
            value: category,
            label: (0, i18n_1.default)("en", `${category}.name`, { ns: "categories" }),
            subcategories: categories_1.default[category].map((subcategory) => ({
                value: `${category}.${subcategory}`,
                label: (0, i18n_1.default)("en", `${category}.${subcategory}`, { ns: "categories" }),
            })),
        }));
        res.json(labeledCategories);
    }
});
//# sourceMappingURL=categories.js.map