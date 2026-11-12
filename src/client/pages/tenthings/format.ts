import type { CategoryOption } from "../../services/tenthings";

/** "05-Nov-2026", or "" for a missing or invalid date. */
export const formatDate = (d?: string | Date) => {
  if (!d) return "";
  const date = new Date(d);
  if (isNaN(date.getTime())) return "";
  return `${String(date.getDate()).padStart(2, "0")}-${date.toLocaleString("en", { month: "short" })}-${date.getFullYear()}`;
};

/** 0.42 → "42%", or "" when there's no number. */
export const formatPct = (n?: number) => (n != null ? `${Math.round(n * 100)}%` : "");

/** A List's categories for display: "Music (Rock, Pop), Sports", using the options' labels. */
export const categoryLabel = (categories: string[], options: CategoryOption[]) =>
  categories
    .filter((c) => !c.includes("."))
    .sort()
    .map((cat) => {
      const option = options.find((o) => o.value === cat);
      const subs = categories
        .filter((c) => c.startsWith(cat + "."))
        .map((c) => option?.subcategories?.find((s) => s.value === c)?.label ?? c.split(".")[1])
        .sort();
      return (option?.label ?? cat) + (subs.length ? ` (${subs.join(", ")})` : "");
    })
    .join(", ");
