import http from "./http";

export type CareLogType = "poop" | "food" | "liquid" | "pain" | "med" | "temperature" | "vomit" | "mood" | "sleep";

export interface CareLogEntry {
  _id: string;
  type: CareLogType;
  date: string;
  notes?: string;
  consistency?: number;
  food?: string;
  amountMl?: number;
  liquidType?: string;
  durationMinutes?: number;
  location?: string;
  intensity?: number;
  medName?: string;
  dose?: string;
  route?: string;
  tempValue?: number;
  tempUnit?: "C" | "F";
  moodRating?: number;
}

export type CareLogInput = Omit<CareLogEntry, "_id">;

export async function getCareLogEntries(from?: Date, to?: Date): Promise<CareLogEntry[]> {
  const params: Record<string, string> = {};
  if (from) params.from = from.toISOString();
  if (to) params.to = to.toISOString();
  const { data } = await http.get<CareLogEntry[]>("/api/care-log", { params });
  return data;
}

export async function createCareLogEntry(entry: Partial<CareLogInput>): Promise<CareLogEntry> {
  const { data } = await http.post<CareLogEntry>("/api/care-log", entry);
  return data;
}

export async function updateCareLogEntry(id: string, entry: Partial<CareLogInput>): Promise<CareLogEntry> {
  const { data } = await http.put<CareLogEntry>(`/api/care-log/${id}`, entry);
  return data;
}

export async function deleteCareLogEntry(id: string): Promise<void> {
  await http.delete(`/api/care-log/${id}`);
}

export async function getCareLogSuggestions(type: CareLogType): Promise<Record<string, string>[]> {
  const { data } = await http.get<Record<string, string>[]>("/api/care-log/suggestions", { params: { type } });
  return data;
}
