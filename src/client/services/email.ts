import http from "./http";

export interface EmailPayload {
  email: string;
  name: string;
  phone: string;
  about: string;
  message: string;
}

export async function sendEmail(payload: EmailPayload) {
  const { data } = await http.post("/api/email", payload);
  return data;
}
