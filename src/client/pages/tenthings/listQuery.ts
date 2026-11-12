import type { GetListsOptions } from "../../services/tenthings";

export type SortDir = "asc" | "desc";
/** "name" searches List names only; "all" also searches Answers and descriptions. */
export type SearchField = "name" | "all";

/** What the Lists page is showing: search, filters and sort. Paging is kept separately. */
export interface ListFilter {
  search: string;
  searchField: SearchField;
  languages: string[];
  categories: string[];
  /** List quality states (admins only): "high", "neutral", "low". */
  quality: string[];
  sortBy: string;
  sortDir: SortDir;
  /** Only the signed-in User's own Lists. */
  mine: boolean;
}

export const DEFAULT_FILTER: ListFilter = {
  search: "",
  searchField: "name",
  languages: [],
  categories: [],
  quality: [],
  sortBy: "date",
  sortDir: "desc",
  mine: false,
};

const list = (value: string | null) => (value ? value.split(",").filter(Boolean) : []);

/** Read a filter from the page URL; anything missing falls back to the default. */
export function filterFromParams(params: URLSearchParams): ListFilter {
  const dir = params.get("dir");
  return {
    search: params.get("search") ?? DEFAULT_FILTER.search,
    searchField: params.get("field") === "all" ? "all" : "name",
    languages: list(params.get("lang")),
    categories: list(params.get("cat")),
    quality: list(params.get("quality")),
    sortBy: params.get("sort") || DEFAULT_FILTER.sortBy,
    sortDir: dir === "asc" || dir === "desc" ? dir : DEFAULT_FILTER.sortDir,
    mine: params.get("mine") === "1",
  };
}

/**
 * Write a filter into the page URL, leaving defaults out and keeping unrelated params
 * (such as the open List).
 */
export function filterToParams(filter: ListFilter, prev: URLSearchParams): URLSearchParams {
  const next = new URLSearchParams(prev);
  const put = (key: string, value: string, fallback: string) =>
    value && value !== fallback ? next.set(key, value) : next.delete(key);
  put("search", filter.search, DEFAULT_FILTER.search);
  put("field", filter.searchField, DEFAULT_FILTER.searchField);
  put("lang", filter.languages.join(","), "");
  put("cat", filter.categories.join(","), "");
  put("quality", filter.quality.join(","), "");
  put("sort", filter.sortBy, DEFAULT_FILTER.sortBy);
  put("dir", filter.sortDir, DEFAULT_FILTER.sortDir);
  put("mine", filter.mine ? "1" : "", "");
  return next;
}

/** The getLists request for a filter, without paging. `userId` is needed for "mine". */
export function toRequest(filter: ListFilter, userId?: string): GetListsOptions {
  return {
    ...(filter.searchField === "name" ? { name: filter.search } : { search: filter.search }),
    language: filter.languages,
    categories: filter.categories,
    quality: filter.quality,
    sortBy: filter.sortBy,
    orderBy: filter.sortDir,
    creator: filter.mine && userId ? userId : undefined,
  };
}

/** How many filters are narrowing the Lists (search and sort don't count). */
export const activeFilterCount = (filter: ListFilter) =>
  filter.languages.length + filter.categories.length + filter.quality.length + (filter.mine ? 1 : 0);

/** Clicking a column: flip the direction on the current column, or sort a new one ascending. */
export const toggleSort = (filter: ListFilter, column: string): Pick<ListFilter, "sortBy" | "sortDir"> =>
  filter.sortBy === column
    ? { sortBy: column, sortDir: filter.sortDir === "asc" ? "desc" : "asc" }
    : { sortBy: column, sortDir: "asc" };
