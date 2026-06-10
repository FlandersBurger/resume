import { Request, Response, Router } from "express";
import categories from "@root/controllers/bots/tenthings/categories";
import i18n from "@root/i18n";

export const tenthingsCategoriesRoute = Router();

type CategoryOption = {
  value: string;
  label: string;
  subcategories?: CategoryOption[];
};

tenthingsCategoriesRoute.get("/", (_: Request, res: Response) => {
  const labeledCategories: CategoryOption[] = Object.keys(categories)
    .map((category: string) => ({
      value: category,
      label: i18n("en", `${category}.name`, { ns: "categories" }),
      subcategories: categories[category]
        .map((subcategory: string) => ({
          value: `${category}.${subcategory}`,
          label: i18n("en", `${category}.${subcategory}`, { ns: "categories" }),
        }))
        .sort((a, b) => a.label.localeCompare(b.label)),
    }))
    .sort((a, b) => a.label.localeCompare(b.label));
  res.json(labeledCategories);
});
