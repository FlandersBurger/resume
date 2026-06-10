import http from "./http";

export interface TenThingsList {
  _id: string;
  name: string;
  description?: string;
  language: string;
  categories: string[];
  answers: number;
  creator: { _id: string; username: string };
  values: TenThingsValue[];
  isDynamic?: boolean;
  starred?: boolean;
  date?: string;
  modifyDate?: string;
  plays?: number;
  playRatio?: number;
  upvotes?: number;
  downvotes?: number;
  likeRatio?: number;
  bans?: number;
  skips?: number;
  picks?: number;
  hints?: number;
  score?: number;
  calculatedDifficulty?: number;
  difficulty?: number;
  frequency?: number;
}

export interface TenThingsValue {
  _id: string;
  value: string;
  maskedValue?: string;
  blurb?: string;
  blurbType?: string;
  guesser?: { username?: string; first_name?: string };
  creator?: { _id: string; username: string };
  date?: string;
  modifyDate?: string;
}

export interface Language {
  code: string;
  name: string;
  native: string;
}

export interface GetListsOptions {
  limit?: number;
  page?: number;
  sortBy?: string;
  orderBy?: string;
  language?: string[];
  categories?: string[];
  languageNot?: string[];
  categoriesNot?: string[];
  search?: string;
  name?: string;
}

export async function getLists(options: GetListsOptions = {}) {
  const params = new URLSearchParams();
  if (options.limit) params.append("limit", String(options.limit));
  if (options.page) params.append("page", String(options.page));
  if (options.sortBy) params.append("sort_by", options.sortBy);
  if (options.orderBy) params.append("order_by", options.orderBy);
  if (options.language?.length) params.append("language", options.language.join(","));
  if (options.categories?.length) params.append("categories", options.categories.join(","));
  if (options.languageNot?.length) params.append("!language", options.languageNot.join(","));
  if (options.categoriesNot?.length) params.append("!categories", options.categoriesNot.join(","));
  if (options.search) params.append("search", options.search);
  if (options.name) params.append("name", options.name);
  const { data } = await http.get<{ result: TenThingsList[]; count: number; nextPage: number }>(
    `/api/tenthings/lists?${params}`,
  );
  return { lists: data.result, count: data.count };
}

export async function getList(id: string) {
  const { data } = await http.get<TenThingsList>(`/api/tenthings/lists/${id}`);
  return data;
}

export async function createList(userId: string, list: Partial<TenThingsList>) {
  // Strip out temporary IDs from values array before sending to API
  const cleanList = {
    ...list,
    values: (list.values || []).map(({ _id, ...value }) => {
      // Only include _id if it's a valid 24-char ObjectId, otherwise let API generate it
      if (_id && typeof _id === "string" && /^[0-9a-f]{24}$/.test(_id)) {
        return { _id, ...value };
      }
      return value;
    }),
  };
  delete cleanList._id; // Ensure _id is not sent for new list
  const { data } = await http.post<TenThingsList>("/api/tenthings/lists", { user: userId, list: cleanList });
  return data;
}

export async function updateList(list: TenThingsList) {
  const { data } = await http.put<TenThingsList>(`/api/tenthings/lists/${list._id}`, list);
  return data;
}

export async function deleteList(id: string) {
  await http.delete(`/api/tenthings/lists/${id}`);
}

export async function getBlurbs(id: string, type: string) {
  const res = await http.post(`/api/tenthings/lists/${id}/blurbs/${type}`);
  return res.data as TenThingsList;
}

export async function mergeLists(ids: string[]) {
  await http.post("/api/tenthings/lists/merge", { lists: ids });
}

export async function getRandomList() {
  const { data } = await http.post<TenThingsList>("/api/tenthings/lists/random");
  return data;
}

export async function searchLists(name: string) {
  const { data } = await http.get<TenThingsList[]>(`/api/tenthings/search/list-names/${name}`);
  return data;
}

export interface CategoryOption {
  value: string;
  label: string;
  subcategories?: CategoryOption[];
}

export async function getCategories() {
  const { data } = await http.get<CategoryOption[]>("/api/tenthings/categories");
  return data;
}

export async function getLanguages() {
  const { data } = await http.get<Language[]>("/api/tenthings/languages");
  return data;
}

export async function getPause() {
  const { data } = await http.get<boolean>("/api/tenthings/pause");
  return data;
}

export async function togglePause() {
  const { data } = await http.post<boolean>("/api/tenthings/pause");
  return data;
}

export async function getQueue() {
  const { data } = await http.get<string>("/bots/tenthings/queue");
  return data;
}

export async function getGame(id: string) {
  const { data } = await http.get(`/api/tenthings/games/${id}`);
  return data;
}

export async function updateGameCategory(gameId: string, category: string) {
  const { data } = await http.post(`/api/tenthings/games/${gameId}/category/${encodeURIComponent(category)}`);
  return data;
}

export async function updateGameSettings(gameId: string, settings: any) {
  const { data } = await http.put(`/api/tenthings/games/${gameId}/settings`, settings);
  return data;
}

export async function getPlayStats() {
  const { data } = await http.get("/api/tenthings/stats/play");
  return data;
}

export async function getListLanguageStats() {
  const { data } = await http.get("/api/tenthings/stats/languages");
  return data as { _id: { language: string; year: number }; count: number }[];
}

export async function getGameStats() {
  const { data } = await http.get("/api/tenthings/stats/games");
  return data as { _id: { language: string; year: number }; count: number }[];
}

export async function getListCategoryStats() {
  const { data } = await http.get("/api/tenthings/stats/categories");
  return data as { _id: string; count: number }[];
}
