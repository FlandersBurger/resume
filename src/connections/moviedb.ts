// TMDB pictures for movie, TV and actor answers. Only exact matches count: a wrong poster is worse than none.
// A list about one person ("Tom Hanks - Movies", "Directed by X") looks titles up in that person's credits,
// and a cast list ("Riverdale - Cast") looks actors up in that show's cast. Otherwise a title counts only
// when exactly one movie or show has that name, and a person when someone has exactly that name.
import httpClient from "@root/http-client";

const IMAGE = "https://image.tmdb.org/t/p/w500";
const LANGUAGES: Record<string, string> = {
  PT: "pt-BR",
  ID: "id-ID",
  ES: "es-ES",
  FR: "fr-FR",
  NL: "nl-NL",
  DE: "de-DE",
};
const PERSON_KINDS =
  /^(movies|filmes|film|films|filmography|filmografia|k-dramas|dramas|drama|telenovelas|novelas|séries|series|tv shows|filmes e séries|movies and tv shows)$/i;
const CAST_KINDS = /^(cast|elenco|pemeran|actors|atores|cast members|voice cast)$/i;

interface Credit {
  id: number;
  media_type?: string;
  title?: string;
  name?: string;
  original_title?: string;
  original_name?: string;
  poster_path?: string | null;
  profile_path?: string | null;
  popularity?: number;
}

/** Compares titles and names ignoring case, accents, punctuation and "&" versus "and". */
export const sameName = (a: string, b: string) => {
  const norm = (s: string) =>
    s
      .toLowerCase()
      .normalize("NFD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/&/g, "and")
      .replace(/[^\p{L}\p{N}]+/gu, " ")
      .trim();
  return norm(a) === norm(b);
};

const names = (c: Credit) => [c.title, c.name, c.original_title, c.original_name].filter((n): n is string => !!n);

/** The one credit called `title`; none when there are several different ones, since we can't tell which. */
const onlyMatch = (credits: Credit[], title: string) => {
  const hits = credits.filter((c) => c.poster_path && names(c).some((n) => sameName(n, title)));
  return new Set(hits.map((c) => `${c.media_type}${c.id}`)).size === 1 ? hits[0] : undefined;
};

/** Who or what a list is about, when its name says: "Tom Hanks - Movies", "Directed by X", "Riverdale - Cast". */
export const screenSubject = (listName: string): { person?: string; show?: string } => {
  const directed = /^(?:Directed by|Dirigidos? por|Filmes dirigidos por) (.+)$/i.exec(listName);
  if (directed) return { person: directed[1] };
  const [, subject, kind] = /^(.+?) - (.+)$/.exec(listName) ?? [];
  if (!subject) return {};
  if (PERSON_KINDS.test(kind)) return { person: subject };
  if (CAST_KINDS.test(kind)) return { show: subject.replace(/\s*\((?:US|UK|\d{4})\)$/i, "") };
  return {};
};

/** Picture lookups for the answers of one list; the list's person or show is read once and reused. */
export const tmdbLookup = (listName: string, listLanguage = "EN", token = process.env.TMDB_TOKEN!) => {
  const language = LANGUAGES[listLanguage] ?? "en-US";
  const get = async <T>(path: string, params: Record<string, string> = {}): Promise<T | undefined> => {
    try {
      const query = new URLSearchParams({ api_key: token, ...params });
      return (await httpClient().get(`https://api.themoviedb.org/3/${path}?${query}`)).data as T;
    } catch (error) {
      console.error(error);
      return undefined;
    }
  };
  const findPerson = async (name: string) => {
    const found = await get<{ results: Credit[] }>("search/person", { query: name });
    return (found?.results ?? [])
      .filter((p) => names(p).some((n) => sameName(n, name)))
      .sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0))[0];
  };
  const subject = screenSubject(listName);
  let credits: Promise<Credit[]> | undefined;
  /** The subject person's movies and shows, in the list's language and in English. */
  const personCredits = () =>
    (credits ??= (async () => {
      const person = await findPerson(subject.person!);
      if (!person) return [];
      const read = (lang: string) =>
        get<{ cast: Credit[]; crew: Credit[] }>(`person/${person.id}/combined_credits`, { language: lang });
      const all = await Promise.all([read(language), language === "en-US" ? undefined : read("en-US")]);
      return all.flatMap((c) => [...(c?.cast ?? []), ...(c?.crew ?? [])]);
    })());
  let cast: Promise<Credit[]> | undefined;
  /** The subject show's (or movie's) cast; the most popular title with exactly that name. */
  const showCast = () =>
    (cast ??= (async () => {
      const [tv, movie] = await Promise.all(
        (["tv", "movie"] as const).map((type) =>
          get<{ results: Credit[] }>(`search/${type}`, { query: subject.show! }).then((r) =>
            (r?.results ?? []).map((c) => ({ ...c, media_type: type })),
          ),
        ),
      );
      const show = [...tv, ...movie]
        .filter((c) => names(c).some((n) => sameName(n, subject.show!)))
        .sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0))[0];
      if (!show) return [];
      const path = show.media_type === "tv" ? `tv/${show.id}/aggregate_credits` : `movie/${show.id}/credits`;
      return (await get<{ cast: Credit[] }>(path))?.cast ?? [];
    })());

  return {
    /** A poster for a movie (or show) title. */
    poster: async (title: string, type: "movie" | "tv") => {
      if (subject.person) {
        const credit = onlyMatch(await personCredits(), title);
        return credit ? IMAGE + credit.poster_path : undefined;
      }
      const found = await get<{ results: Credit[] }>(`search/${type}`, { query: title, language });
      const credit = onlyMatch(
        (found?.results ?? []).map((c) => ({ ...c, media_type: type })),
        title,
      );
      return credit ? IMAGE + credit.poster_path : undefined;
    },
    /** A picture of a person: from the show's cast on a cast list, else whoever has exactly that name. */
    person: async (name: string) => {
      if (subject.show) {
        const actor = (await showCast()).find((c) => c.profile_path && sameName(c.name ?? "", name));
        if (actor) return IMAGE + actor.profile_path;
      }
      const person = await findPerson(name);
      return person?.profile_path ? IMAGE + person.profile_path : undefined;
    },
  };
};
