import http from "./http";

export interface Post {
  _id: string;
  body: string;
  date: string;
  username?: string;
  poster?: { username: string };
}

export async function fetchPosts(): Promise<Post[]> {
  const { data } = await http.get<Post[]>("/api/posts");
  return data;
}

export async function createPost(body: string): Promise<Post> {
  const { data } = await http.post<Post>("/api/posts", { body });
  return data;
}

export async function getPost(id: string): Promise<Post> {
  const { data } = await http.get<Post>(`/api/posts/${id}`);
  return data;
}
