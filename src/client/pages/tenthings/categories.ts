import { TenThingsList } from "../../services/tenthings";

/**
 * Adds or removes one category. Adding a subcategory ("music.kpop") adds its category too,
 * and removing a category removes its subcategories.
 */
export function toggleCategory(categories: string[], category: string): string[] {
  if (categories.includes(category)) {
    const rest = categories.filter((c) => c !== category);
    return category.includes(".") ? rest : rest.filter((c) => !c.startsWith(`${category}.`));
  }
  const parent = category.split(".")[0];
  return [...categories, ...(category.includes(".") && !categories.includes(parent) ? [parent] : []), category];
}

export type CategoryState = "checked" | "partial" | "unchecked";

/** Whether every, some or none of the lists have the category. */
export function categoryState(lists: Pick<TenThingsList, "categories">[], category: string): CategoryState {
  const having = lists.filter(({ categories }) => categories.includes(category)).length;
  if (lists.length && having === lists.length) return "checked";
  return having ? "partial" : "unchecked";
}

export interface CategoryChange {
  _id: string;
  categories: string[];
}

/**
 * Toggles a category on several lists at once: removed from all of them when they all have it,
 * otherwise added to those that don't. A list never loses its last category; those are returned
 * in `skipped` instead.
 */
export function toggleCategoryOnLists(
  lists: Pick<TenThingsList, "_id" | "name" | "categories">[],
  category: string,
): { changes: CategoryChange[]; skipped: string[] } {
  const removing = categoryState(lists, category) === "checked";
  const changes: CategoryChange[] = [];
  const skipped: string[] = [];
  for (const list of lists) {
    if (!removing && list.categories.includes(category)) continue;
    const categories = toggleCategory(list.categories, category);
    if (categories.length) changes.push({ _id: list._id, categories });
    else skipped.push(list.name);
  }
  return { changes, skipped };
}
