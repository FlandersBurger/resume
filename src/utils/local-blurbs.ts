// Before asking an outside source for an answer's picture or video, reuse one a related list already has:
// it's a single query instead of a request per answer, the links were picked by hand, and the same answer
// looks the same across lists. "Related" is narrow on purpose: the same text can be different things
// ("Mercury", "Red", "Pearl"), so only lists on the same subject, wiki or category count.
import { CATEGORY_WIKIS, SUBJECT_WIKIS, listSubject, wikiFor } from "./fandom-wikis";
import { accentInsensitivePattern, removeAllButLetters } from "./string-helpers";

export type BlurbSource =
  "fandom" | "movies" | "tv" | "actors" | "books" | "musicvideos" | "wiki" | "unsplash" | "pexels";

/** The top-level categories whose lists share pictures for each source; matches the editor's blurb menu. */
const SOURCE_CATEGORIES: Partial<Record<BlurbSource, string[]>> = {
  movies: ["movies"],
  tv: ["television"],
  actors: ["movies", "television"],
  books: ["literature"],
  wiki: ["culture", "nature", "misc", "society", "sports"],
  unsplash: ["culture", "nature", "misc", "society", "sports"],
  pexels: ["culture", "nature", "misc", "society", "sports"],
};

export interface RelatedScope {
  /** Lists whose name starts with one of these subjects. */
  subjects: string[];
  /** Lists in any of these categories. */
  categories: string[];
}

/** Which other lists may lend their blurbs to `list` for `source`. */
export const relatedScope = (list: { name: string; categories?: string[] }, source: BlurbSource): RelatedScope => {
  const subject = listSubject(list.name);
  if (source === "musicvideos") return { subjects: subject ? [subject] : [], categories: [] }; // same artist only
  if (source === "fandom") {
    const wiki = wikiFor(list);
    if (!wiki) return { subjects: subject ? [subject] : [], categories: [] };
    const subjects = Object.keys(SUBJECT_WIKIS).filter((s) => SUBJECT_WIKIS[s].url === wiki.url);
    const categories = Object.keys(CATEGORY_WIKIS).filter((c) => CATEGORY_WIKIS[c].url === wiki.url);
    return { subjects: [...new Set([...(subject ? [subject] : []), ...subjects])], categories };
  }
  // A list in "movies" borrows from other movie lists, not from every list it shares any category with.
  const own = new Set((list.categories ?? []).map((c) => c.split(".")[0]));
  return { subjects: [], categories: (SOURCE_CATEGORIES[source] ?? []).filter((c) => own.has(c)) };
};

/**
 * The MongoDB filter for lists in `scope` that have any of `answers`, or null when the scope is empty.
 * Matching the answers exactly first lets the `values.value` index do the work; the subject pattern ignores
 * accents, so "Pokemon - …" and "Pokémon - …" both count.
 */
export const relatedListsFilter = (scope: RelatedScope, answers: string[]) => {
  const related = [
    ...scope.subjects.map((subject) => ({ name: new RegExp(`^${accentInsensitivePattern(subject)}\\s+[-–—]`, "i") })),
    ...(scope.categories.length ? [{ categories: { $in: scope.categories } }] : []),
  ];
  if (!answers.length || !related.length) return null;
  return { "values.value": { $in: answers }, $or: related };
};

const isVideo = (blurb: string) => /youtu\.?be/.test(blurb);
const isImage = (blurb: string) =>
  !isVideo(blurb) && (/\.(jpeg|jpg|gif|png|webp)(\?.*|$)/i.test(blurb) || /unsplash|pexels/.test(blurb));

/**
 * For each answer, the best link blurb other lists give the same answer (compared ignoring case, accents and
 * punctuation): an animated GIF first, then the link most lists use. Only the kind the source fills counts,
 * videos for music videos and images otherwise; text blurbs are written for one list and never reused.
 */
export const pickLocalBlurbs = (
  answers: string[],
  others: { value: string; blurb?: string | null }[],
  source: BlurbSource,
): Map<string, string> => {
  const fits = source === "musicvideos" ? isVideo : isImage;
  const wanted = new Map(answers.map((answer) => [removeAllButLetters(answer), answer]));
  const counts = new Map<string, Map<string, number>>();
  for (const { value, blurb } of others) {
    const answer = wanted.get(removeAllButLetters(value));
    const link = blurb?.trim();
    if (!answer || !link || !/^https?:\/\//i.test(link) || !fits(link)) continue;
    const links = counts.get(answer) ?? counts.set(answer, new Map()).get(answer)!;
    links.set(link, (links.get(link) ?? 0) + 1);
  }
  const best = new Map<string, string>();
  for (const [answer, links] of counts) {
    const [top] = [...links].sort(
      ([a, x], [b, y]) => Number(/\.gif(\?|$)/i.test(b)) - Number(/\.gif(\?|$)/i.test(a)) || y - x,
    );
    best.set(answer, top[0]);
  }
  return best;
};
