import http, { setAuthToken, clearAuthToken } from "./http";

export interface User {
  _id: string;
  username: string;
  displayName?: string;
  photoURL?: string;
  email?: string;
  admin?: boolean;
  telegramId?: string;
  birthDate?: string;
  flags?: string[];
}

export async function getUser(): Promise<User> {
  const { data } = await http.get<User>("/api/users");
  return data;
}

export async function getBotInfo(): Promise<{ telegramUsername: string }> {
  const { data } = await http.get<{ telegramUsername: string }>("/api/users/bot-info");
  return data;
}

export async function getUsers(): Promise<User[]> {
  const { data } = await http.get<User[]>("/api/users/all");
  return data;
}

export async function toggleBan(id: string): Promise<void> {
  await http.post(`/api/users/ban/${id}`);
}

export async function authenticate(payload: object): Promise<User> {
  const { data: token } = await http.post<string>("/api/users/authenticate", { user: payload });
  window.localStorage.setItem("token", token);
  setAuthToken(token);
  return getUser();
}

export async function linkTelegram(userId: string, telegramData: object): Promise<User> {
  await http.post(`/api/users/${userId}/telegram`, telegramData);
  return getUser();
}

export async function updateUser(user: Partial<User> & { _id: string }): Promise<User> {
  await http.post(`/api/users/${user._id}`, { user });
  return getUser();
}

export async function checkPassword(userId: string, password: string) {
  const { data } = await http.post(`/api/users/${userId}/verification`, { password });
  return data;
}

export async function changePassword(userId: string, oldPassword: string, newPassword: string) {
  await http.post(`/api/users/${userId}/password`, { oldPassword, newPassword });
}

export async function changeUsername(userId: string, newUsername: string): Promise<User> {
  await http.post(`/api/users/${userId}/username`, { newUsername });
  return getUser();
}

export async function createUser(username: string, password: string): Promise<User> {
  await http.post("/api/users", { username, password });
  const { data: token } = await http.get<string>(`/api/users/${username}/login`);
  window.localStorage.setItem("token", token);
  setAuthToken(token);
  return getUser();
}

export function logout() {
  window.localStorage.clear();
  clearAuthToken();
}
