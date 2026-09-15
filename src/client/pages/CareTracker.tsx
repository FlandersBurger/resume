import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

import {
  CareLogEntry,
  CareLogType,
  createCareLogEntry,
  deleteCareLogEntry,
  getCareLogEntries,
  getCareLogSuggestions,
  updateCareLogEntry,
} from "../services/careLog";

const Page = styled.div`
  max-width: 640px;
  margin: 0 auto;
  padding: 20px 16px 60px;
`;

const Title = styled.h2`
  margin-bottom: 4px;
`;

const Subtitle = styled.div`
  color: var(--text-muted);
  font-size: 0.85em;
  margin-bottom: 18px;
`;

const TabsRow = styled.div`
  display: flex;
  gap: 6px;
  overflow-x: auto;
  padding-bottom: 4px;
  margin-bottom: 16px;
`;

const Tab = styled.button<{ $active: boolean }>`
  flex: none;
  padding: 8px 14px;
  border: 1px solid ${(p) => (p.$active ? "var(--accent)" : "var(--border)")};
  border-radius: 6px;
  background: ${(p) => (p.$active ? "var(--accent)" : "var(--surface)")};
  color: ${(p) => (p.$active ? "#fff" : "var(--text)")};
  font-size: 0.85em;
  font-weight: ${(p) => (p.$active ? 600 : 400)};
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    border-color: var(--accent);
  }
`;

const JumpDate = styled.input`
  flex: none;
  padding: 7px 10px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 0.85em;
  color: var(--text-secondary);
`;

const Card = styled.div`
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  padding: 16px;
  margin-bottom: 20px;
`;

const ChipsRow = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 14px;
`;

const Chip = styled.button<{ $active: boolean }>`
  padding: 6px 12px;
  border: 1px solid ${(p) => (p.$active ? "var(--accent)" : "var(--border)")};
  border-radius: 20px;
  background: ${(p) => (p.$active ? "var(--accent-soft)" : "var(--surface)")};
  color: ${(p) => (p.$active ? "var(--accent)" : "var(--text-secondary)")};
  font-size: 0.85em;
  font-weight: ${(p) => (p.$active ? 600 : 400)};
  cursor: pointer;
  &:hover {
    border-color: var(--accent);
  }
`;

const FormGrid = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 12px;
`;

const Field = styled.div<{ $grow?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: ${(p) => (p.$grow ? "1 1 220px" : "0 0 auto")};
`;

const FieldLabel = styled.label`
  font-size: 0.75em;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const TextInput = styled.input`
  padding: 8px 10px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 0.95em;
  color: var(--text);
  background: var(--surface);
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const Select = styled.select`
  padding: 8px 10px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 0.95em;
  color: var(--text);
  background: var(--surface);
`;

const TextArea = styled.textarea`
  padding: 8px 10px;
  border: 1px solid var(--border);
  border-radius: 6px;
  font-size: 0.95em;
  color: var(--text);
  background: var(--surface);
  min-height: 44px;
  resize: vertical;
  width: 100%;
  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

const PillsRow = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin: -6px 0 12px;
`;

const Pill = styled.button`
  padding: 4px 10px;
  border: 1px solid var(--border-soft);
  border-radius: 14px;
  background: var(--surface-alt);
  color: var(--text-secondary);
  font-size: 0.78em;
  cursor: pointer;
  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
`;

const ScaleRow = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
`;

const ScaleBtn = styled.button<{ $active: boolean }>`
  width: 34px;
  height: 34px;
  border: 1px solid ${(p) => (p.$active ? "var(--accent)" : "var(--border)")};
  border-radius: 6px;
  background: ${(p) => (p.$active ? "var(--accent)" : "var(--surface)")};
  color: ${(p) => (p.$active ? "#fff" : "var(--text-secondary)")};
  font-size: 0.85em;
  font-weight: 600;
  cursor: pointer;
`;

const SaveRow = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

const SaveBtn = styled.button`
  padding: 9px 24px;
  border: 1px solid var(--accent);
  border-radius: 6px;
  background: var(--accent);
  color: #fff;
  font-size: 0.9em;
  font-weight: 500;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
  &:hover:not(:disabled) {
    background: var(--accent-hover);
  }
`;

const CancelBtn = styled.button`
  padding: 9px 18px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--surface);
  color: var(--text-secondary);
  font-size: 0.9em;
  cursor: pointer;
`;

const EntryRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border-soft);
  &:last-child {
    border-bottom: none;
  }
`;

const EntryIcon = styled.div`
  font-size: 1.3em;
  width: 28px;
  text-align: center;
  flex: none;
`;

const EntryBody = styled.div`
  flex: 1;
`;

const EntryTime = styled.span`
  color: var(--text-muted);
  font-size: 0.8em;
  margin-right: 8px;
`;

const EntryType = styled.span`
  font-weight: 600;
  color: var(--text);
  font-size: 0.92em;
`;

const EntrySummary = styled.div`
  color: var(--text-secondary);
  font-size: 0.92em;
  margin-top: 2px;
`;

const EntryNotes = styled.div`
  color: var(--text-muted);
  font-size: 0.82em;
  margin-top: 2px;
  font-style: italic;
`;

const EntryActions = styled.div`
  display: flex;
  gap: 6px;
  flex: none;
`;

const IconBtn = styled.button`
  border: none;
  background: none;
  color: var(--text-muted);
  cursor: pointer;
  font-size: 0.85em;
  padding: 2px 4px;
  &:hover {
    color: var(--accent);
  }
`;

const EmptyState = styled.div`
  color: var(--text-muted);
  text-align: center;
  padding: 24px 0;
  font-size: 0.9em;
`;

const TYPE_META: Record<CareLogType, { label: string; icon: string }> = {
  poop: { label: "Poop", icon: "\u{1F4A9}" },
  food: { label: "Food", icon: "\u{1F37D}️" },
  liquid: { label: "Liquid", icon: "\u{1F964}" },
  pain: { label: "Pain", icon: "\u{1F915}" },
  med: { label: "Med", icon: "\u{1F48A}" },
  temperature: { label: "Temp", icon: "\u{1F321}️" },
  vomit: { label: "Vomit", icon: "\u{1F92E}" },
  mood: { label: "Mood", icon: "\u{1F642}" },
  sleep: { label: "Sleep", icon: "\u{1F634}" },
};

const TYPE_ORDER: CareLogType[] = ["food", "liquid", "med", "poop", "pain", "temperature", "vomit", "mood", "sleep"];

const BRISTOL_OPTIONS = [
  { value: 1, label: "Type 1 — hard lumps" },
  { value: 2, label: "Type 2 — lumpy sausage" },
  { value: 3, label: "Type 3 — cracked sausage" },
  { value: 4, label: "Type 4 — smooth sausage (ideal)" },
  { value: 5, label: "Type 5 — soft blobs" },
  { value: 6, label: "Type 6 — mushy, ragged" },
  { value: 7, label: "Type 7 — watery, no solid pieces" },
];

const MOOD_OPTIONS = [
  { value: 1, label: "😣" },
  { value: 2, label: "😕" },
  { value: 3, label: "😐" },
  { value: 4, label: "🙂" },
  { value: 5, label: "😄" },
];

interface FormState {
  type: CareLogType;
  dateLocal: string;
  notes: string;
  consistency?: number;
  food: string;
  amountMl?: number;
  liquidType: string;
  durationMinutes?: number;
  location: string;
  intensity?: number;
  medName: string;
  dose: string;
  route: string;
  tempValue?: number;
  tempUnit: "C" | "F";
  moodRating?: number;
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

function toDateTimeLocal(d: Date) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function toDayKey(d: Date) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function dayLabel(key: string) {
  const todayKey = toDayKey(new Date());
  const yesterdayKey = toDayKey(new Date(Date.now() - 86400000));
  if (key === todayKey) return "Today";
  if (key === yesterdayKey) return "Yesterday";
  const d = new Date(`${key}T00:00:00`);
  return d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
}

function timeLabel(iso: string) {
  return new Date(iso).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
}

function makeEmptyForm(type: CareLogType = "food", dateLocal = toDateTimeLocal(new Date())): FormState {
  return {
    type,
    dateLocal,
    notes: "",
    consistency: undefined,
    food: "",
    amountMl: undefined,
    liquidType: "",
    durationMinutes: undefined,
    location: "",
    intensity: undefined,
    medName: "",
    dose: "",
    route: "",
    tempValue: undefined,
    tempUnit: (window.localStorage.getItem("careLog.tempUnit") as "C" | "F") || "C",
    moodRating: undefined,
  };
}

function isValid(f: FormState) {
  switch (f.type) {
    case "poop":
      return !!f.consistency;
    case "food":
      return !!f.food.trim();
    case "liquid":
      return !!f.amountMl;
    case "pain":
      return !!f.intensity;
    case "med":
      return !!f.medName.trim();
    case "temperature":
      return !!f.tempValue;
    case "mood":
      return !!f.moodRating;
    case "sleep":
      return !!f.durationMinutes;
    case "vomit":
      return true;
    default:
      return false;
  }
}

function summarize(e: CareLogEntry): string {
  switch (e.type) {
    case "poop":
      return BRISTOL_OPTIONS.find((o) => o.value === e.consistency)?.label ?? "—";
    case "food":
      return e.food || "—";
    case "liquid":
      return `${e.amountMl ?? "?"} ml${e.liquidType ? " · " + e.liquidType : ""}`;
    case "pain":
      return [`${e.intensity ?? "?"}/10`, e.location, e.durationMinutes ? `${e.durationMinutes} min` : undefined]
        .filter(Boolean)
        .join(" · ");
    case "med":
      return [e.medName, e.dose, e.route].filter(Boolean).join(" · ") || "—";
    case "temperature":
      return `${e.tempValue ?? "?"}°${e.tempUnit ?? "C"}`;
    case "vomit":
      return e.notes ? "" : "—";
    case "mood":
      return MOOD_OPTIONS.find((o) => o.value === e.moodRating)?.label ?? "—";
    case "sleep":
      return `${e.durationMinutes ?? "?"} min`;
    default:
      return "";
  }
}

const SUGGESTIBLE_TYPES: CareLogType[] = ["food", "liquid", "med", "pain"];

export default function CareTracker() {
  const [entries, setEntries] = useState<CareLogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [fromDate, setFromDate] = useState<Date | null>(null);
  const [selectedDay, setSelectedDay] = useState(toDayKey(new Date()));
  const [form, setForm] = useState<FormState>(() => makeEmptyForm());
  const [editingId, setEditingId] = useState<string | null>(null);
  const [suggestions, setSuggestions] = useState<Record<string, string>[]>([]);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getCareLogEntries()
      .then((data) => setEntries(data))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!SUGGESTIBLE_TYPES.includes(form.type)) {
      setSuggestions([]);
      return;
    }
    let cancelled = false;
    getCareLogSuggestions(form.type).then((data) => {
      if (!cancelled) setSuggestions(data);
    });
    return () => {
      cancelled = true;
    };
  }, [form.type]);

  const dayKeys = useMemo(() => {
    const set = new Set<string>();
    set.add(toDayKey(new Date()));
    for (const e of entries) set.add(toDayKey(new Date(e.date)));
    set.add(selectedDay);
    return Array.from(set).sort().reverse();
  }, [entries, selectedDay]);

  const dayEntries = useMemo(
    () =>
      entries
        .filter((e) => toDayKey(new Date(e.date)) === selectedDay)
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()),
    [entries, selectedDay],
  );

  const selectType = (type: CareLogType) => {
    setForm((f) => makeEmptyForm(type, f.dateLocal));
  };

  const startAddOnSelectedDay = () => {
    const now = new Date();
    const isToday = selectedDay === toDayKey(now);
    const dateLocal = isToday ? toDateTimeLocal(now) : `${selectedDay}T12:00`;
    setEditingId(null);
    setForm((f) => makeEmptyForm(f.type, dateLocal));
  };

  useEffect(() => {
    startAddOnSelectedDay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedDay]);

  const jumpToDate = async (value: string) => {
    if (!value) return;
    setSelectedDay(value);
    const target = new Date(`${value}T00:00:00`);
    if (!fromDate || target < fromDate) {
      const from = new Date(target);
      from.setDate(from.getDate() - 1);
      setLoading(true);
      const data = await getCareLogEntries(from, new Date());
      setEntries(data);
      setFromDate(from);
      setLoading(false);
    }
  };

  const resetForm = () => {
    setEditingId(null);
    startAddOnSelectedDay();
  };

  const startEdit = (entry: CareLogEntry) => {
    setEditingId(entry._id);
    setForm({
      type: entry.type,
      dateLocal: toDateTimeLocal(new Date(entry.date)),
      notes: entry.notes ?? "",
      consistency: entry.consistency,
      food: entry.food ?? "",
      amountMl: entry.amountMl,
      liquidType: entry.liquidType ?? "",
      durationMinutes: entry.durationMinutes,
      location: entry.location ?? "",
      intensity: entry.intensity,
      medName: entry.medName ?? "",
      dose: entry.dose ?? "",
      route: entry.route ?? "",
      tempValue: entry.tempValue,
      tempUnit: entry.tempUnit ?? "C",
      moodRating: entry.moodRating,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this entry?")) return;
    await deleteCareLogEntry(id);
    setEntries((prev) => prev.filter((e) => e._id !== id));
    if (editingId === id) resetForm();
  };

  const handleSave = async () => {
    if (!isValid(form) || saving) return;
    setSaving(true);
    const payload: Record<string, unknown> = {
      type: form.type,
      date: new Date(form.dateLocal).toISOString(),
      notes: form.notes.trim() || undefined,
    };
    switch (form.type) {
      case "poop":
        payload.consistency = form.consistency;
        break;
      case "food":
        payload.food = form.food.trim();
        break;
      case "liquid":
        payload.amountMl = form.amountMl;
        payload.liquidType = form.liquidType.trim() || undefined;
        break;
      case "pain":
        payload.intensity = form.intensity;
        payload.location = form.location.trim() || undefined;
        payload.durationMinutes = form.durationMinutes || undefined;
        break;
      case "med":
        payload.medName = form.medName.trim();
        payload.dose = form.dose.trim() || undefined;
        payload.route = form.route.trim() || undefined;
        break;
      case "temperature":
        payload.tempValue = form.tempValue;
        payload.tempUnit = form.tempUnit;
        window.localStorage.setItem("careLog.tempUnit", form.tempUnit);
        break;
      case "mood":
        payload.moodRating = form.moodRating;
        break;
      case "sleep":
        payload.durationMinutes = form.durationMinutes;
        break;
    }

    try {
      if (editingId) {
        const updated = await updateCareLogEntry(editingId, payload);
        setEntries((prev) => prev.map((e) => (e._id === updated._id ? updated : e)));
      } else {
        const created = await createCareLogEntry(payload);
        setEntries((prev) => [...prev, created]);
      }
      if (SUGGESTIBLE_TYPES.includes(form.type)) {
        getCareLogSuggestions(form.type).then(setSuggestions);
      }
      resetForm();
    } finally {
      setSaving(false);
    }
  };

  const applyPill = (values: Record<string, string>) => {
    setForm((f) => ({ ...f, ...values }));
  };

  return (
    <Page>
      <Helmet>
        <title>Care Log — Laurent Debacker</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Title>Care Log</Title>
      <Subtitle>Poop, food, liquids, meds, pain, and more — day by day.</Subtitle>

      <TabsRow>
        {dayKeys.map((key) => (
          <Tab key={key} $active={key === selectedDay} onClick={() => setSelectedDay(key)}>
            {dayLabel(key)}
          </Tab>
        ))}
        <JumpDate type="date" value="" onChange={(e) => jumpToDate(e.target.value)} title="Jump to an earlier date" />
      </TabsRow>

      <Card>
        <ChipsRow>
          {TYPE_ORDER.map((type) => (
            <Chip key={type} $active={form.type === type} onClick={() => selectType(type)}>
              {TYPE_META[type].icon} {TYPE_META[type].label}
            </Chip>
          ))}
        </ChipsRow>

        <FormGrid>
          <Field>
            <FieldLabel>When</FieldLabel>
            <TextInput
              type="datetime-local"
              value={form.dateLocal}
              onChange={(e) => setForm((f) => ({ ...f, dateLocal: e.target.value }))}
            />
          </Field>

          {form.type === "poop" && (
            <Field $grow>
              <FieldLabel>Consistency</FieldLabel>
              <Select
                value={form.consistency ?? ""}
                onChange={(e) => setForm((f) => ({ ...f, consistency: Number(e.target.value) || undefined }))}
              >
                <option value="">Select…</option>
                {BRISTOL_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </Select>
            </Field>
          )}

          {form.type === "food" && (
            <Field $grow>
              <FieldLabel>What</FieldLabel>
              <TextInput
                placeholder="e.g. 5 rice crackers"
                value={form.food}
                onChange={(e) => setForm((f) => ({ ...f, food: e.target.value }))}
              />
            </Field>
          )}

          {form.type === "liquid" && (
            <>
              <Field>
                <FieldLabel>Amount (ml)</FieldLabel>
                <TextInput
                  type="number"
                  min={0}
                  style={{ width: 100 }}
                  value={form.amountMl ?? ""}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, amountMl: e.target.value === "" ? undefined : Number(e.target.value) }))
                  }
                />
              </Field>
              <Field $grow>
                <FieldLabel>What</FieldLabel>
                <TextInput
                  placeholder="e.g. water, apple juice"
                  value={form.liquidType}
                  onChange={(e) => setForm((f) => ({ ...f, liquidType: e.target.value }))}
                />
              </Field>
            </>
          )}

          {form.type === "pain" && (
            <>
              <Field $grow>
                <FieldLabel>Location</FieldLabel>
                <TextInput
                  placeholder="e.g. belly, left leg"
                  value={form.location}
                  onChange={(e) => setForm((f) => ({ ...f, location: e.target.value }))}
                />
              </Field>
              <Field>
                <FieldLabel>Duration (min)</FieldLabel>
                <TextInput
                  type="number"
                  min={0}
                  style={{ width: 100 }}
                  value={form.durationMinutes ?? ""}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      durationMinutes: e.target.value === "" ? undefined : Number(e.target.value),
                    }))
                  }
                />
              </Field>
            </>
          )}

          {form.type === "med" && (
            <>
              <Field $grow>
                <FieldLabel>Medication</FieldLabel>
                <TextInput
                  placeholder="e.g. Ondansetron"
                  value={form.medName}
                  onChange={(e) => setForm((f) => ({ ...f, medName: e.target.value }))}
                />
              </Field>
              <Field>
                <FieldLabel>Dose</FieldLabel>
                <TextInput
                  placeholder="e.g. 4mg"
                  style={{ width: 100 }}
                  value={form.dose}
                  onChange={(e) => setForm((f) => ({ ...f, dose: e.target.value }))}
                />
              </Field>
              <Field>
                <FieldLabel>Route</FieldLabel>
                <TextInput
                  placeholder="e.g. oral"
                  style={{ width: 100 }}
                  value={form.route}
                  onChange={(e) => setForm((f) => ({ ...f, route: e.target.value }))}
                />
              </Field>
            </>
          )}

          {form.type === "temperature" && (
            <>
              <Field>
                <FieldLabel>Reading</FieldLabel>
                <TextInput
                  type="number"
                  step="0.1"
                  style={{ width: 100 }}
                  value={form.tempValue ?? ""}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, tempValue: e.target.value === "" ? undefined : Number(e.target.value) }))
                  }
                />
              </Field>
              <Field>
                <FieldLabel>Unit</FieldLabel>
                <Select
                  value={form.tempUnit}
                  onChange={(e) => setForm((f) => ({ ...f, tempUnit: e.target.value as "C" | "F" }))}
                >
                  <option value="C">°C</option>
                  <option value="F">°F</option>
                </Select>
              </Field>
            </>
          )}

          {form.type === "sleep" && (
            <Field>
              <FieldLabel>Duration (min)</FieldLabel>
              <TextInput
                type="number"
                min={0}
                style={{ width: 100 }}
                value={form.durationMinutes ?? ""}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    durationMinutes: e.target.value === "" ? undefined : Number(e.target.value),
                  }))
                }
              />
            </Field>
          )}
        </FormGrid>

        {form.type === "pain" && (
          <Field style={{ marginBottom: 12 }}>
            <FieldLabel>Intensity (1–10)</FieldLabel>
            <ScaleRow>
              {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                <ScaleBtn
                  key={n}
                  $active={form.intensity === n}
                  onClick={() => setForm((f) => ({ ...f, intensity: n }))}
                >
                  {n}
                </ScaleBtn>
              ))}
            </ScaleRow>
          </Field>
        )}

        {form.type === "mood" && (
          <Field style={{ marginBottom: 12 }}>
            <FieldLabel>Mood</FieldLabel>
            <ScaleRow>
              {MOOD_OPTIONS.map((o) => (
                <ScaleBtn
                  key={o.value}
                  $active={form.moodRating === o.value}
                  onClick={() => setForm((f) => ({ ...f, moodRating: o.value }))}
                  style={{ fontSize: "1.1em" }}
                >
                  {o.label}
                </ScaleBtn>
              ))}
            </ScaleRow>
          </Field>
        )}

        {suggestions.length > 0 && (
          <PillsRow>
            {suggestions.map((s, i) => (
              <Pill
                key={i}
                onClick={() =>
                  applyPill(
                    form.type === "med"
                      ? { medName: s.medName ?? "", dose: s.dose ?? "", route: s.route ?? "" }
                      : form.type === "liquid"
                        ? { liquidType: s.liquidType ?? "" }
                        : form.type === "pain"
                          ? { location: s.location ?? "" }
                          : { food: s.food ?? "" },
                  )
                }
              >
                {form.type === "med" ? [s.medName, s.dose, s.route].filter(Boolean).join(" · ") : Object.values(s)[0]}
              </Pill>
            ))}
          </PillsRow>
        )}

        <Field style={{ marginBottom: 14 }}>
          <FieldLabel>Notes (optional)</FieldLabel>
          <TextArea value={form.notes} onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))} />
        </Field>

        <SaveRow>
          {editingId && <CancelBtn onClick={resetForm}>Cancel</CancelBtn>}
          <SaveBtn disabled={!isValid(form) || saving} onClick={handleSave}>
            {editingId ? "Save changes" : "Add entry"}
          </SaveBtn>
        </SaveRow>
      </Card>

      <Card>
        {loading ? (
          <EmptyState>Loading…</EmptyState>
        ) : dayEntries.length === 0 ? (
          <EmptyState>Nothing logged for {dayLabel(selectedDay).toLowerCase()} yet.</EmptyState>
        ) : (
          dayEntries.map((e) => (
            <EntryRow key={e._id}>
              <EntryIcon>{TYPE_META[e.type].icon}</EntryIcon>
              <EntryBody>
                <EntryTime>{timeLabel(e.date)}</EntryTime>
                <EntryType>{TYPE_META[e.type].label}</EntryType>
                <EntrySummary>{summarize(e)}</EntrySummary>
                {e.notes && <EntryNotes>{e.notes}</EntryNotes>}
              </EntryBody>
              <EntryActions>
                <IconBtn onClick={() => startEdit(e)} title="Edit">
                  ✎
                </IconBtn>
                <IconBtn onClick={() => handleDelete(e._id)} title="Delete">
                  ✕
                </IconBtn>
              </EntryActions>
            </EntryRow>
          ))
        )}
      </Card>
    </Page>
  );
}
