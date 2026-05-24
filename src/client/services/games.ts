import http from "./http";

export async function getTenthings(id = 1) {
  const { data } = await http.get(`/api/tenthings/web/${id}`);
  return data;
}

export async function answerTenthings(id = 1, answer: string) {
  const { data } = await http.post(`/api/tenthings/web/${id}/answer`, { answer });
  return data;
}

export async function getTenthingsHint(id = 1) {
  const { data } = await http.post(`/api/tenthings/web/${id}/hint`);
  return data;
}

export async function skipTenthingsList(id = 1) {
  const { data } = await http.post(`/api/tenthings/web/${id}/skip`);
  return data;
}

export async function getHighscore(game: string, user: string) {
  const { data } = await http.get(`/api/games/${game}/${user}/highscore`);
  return data;
}

export async function setHighscore(game: string, user: string, score: number) {
  await http.post(`/api/games/${game}/${user}/highscore`, { score });
}

export async function fuzzyMatch(values: string[], guess: string) {
  const { data } = await http.post("/api/games/fuzzy_match", { values, guess });
  return data;
}
