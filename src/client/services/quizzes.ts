import http from "./http";

export async function getQuizFiles(quiz: string): Promise<string[]> {
  const { data } = await http.get<string[]>(`/api/quizzes/${quiz}`);
  return data;
}
