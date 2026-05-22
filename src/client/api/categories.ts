import http from "./http";

export interface Task { name: string }
export interface Category { name: string; tasks: Task[] }

export async function getCategories(): Promise<Category[]> {
  const { data } = await http.get<Category[]>("/api/categories");
  return data;
}

export async function addCategory(category: string): Promise<Category> {
  const { data } = await http.post<Category>("/api/categories/", { category });
  return data;
}

export async function addTask(category: string, task: string): Promise<void> {
  await http.post(`/api/categories/${category}/tasks`, { task });
}
