/**
 * The house style for list names, shared by the list editor, the API and the name cleanup.
 *
 * `normalizeListName` only makes changes that are never wrong, so it runs on every save. Phrase and
 * kind conventions are a matter of judgement and are suggested, not applied.
 */

/**
 * A dash, minus sign or bar with spaces around it separates "Subject - Kind" and becomes a plain hyphen.
 * Without spaces it belongs to the text (Spider-Man, 1950s–1970s, UTC -5) and stays as it is.
 */
const SEPARATOR = /\s+[-‐-―−]+\s+/g;

/** How each language spells the kind after the last " - ", keyed by the word without case or accents. */
const KIND_SPELLINGS: Record<string, Record<string, string>> = {
  PT: {
    musicas: "Músicas",
    personagens: "Personagens",
    filmes: "Filmes",
    albuns: "Álbuns",
    faixas: "Faixas",
    letra: "Letra",
    integrantes: "Integrantes",
    membros: "Membros",
    novelas: "Novelas",
    series: "Séries",
  },
  ID: {
    lagu: "Lagu",
    lirik: "Lirik",
    album: "Album",
    film: "Film",
    anggota: "Anggota",
    karakter: "Karakter",
    pemeran: "Pemeran",
    drama: "Drama",
  },
};

const bare = (word: string) => word.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();

/** "NX Zero - músicas" → "NX Zero - Músicas", for languages with known kind words. */
const spellKind = (name: string, language?: string): string => {
  const spellings = language && KIND_SPELLINGS[language];
  const at = name.lastIndexOf(" - ");
  if (!spellings || at < 0) return name;
  const kind = spellings[bare(name.slice(at + 3))];
  return kind ? `${name.slice(0, at + 3)}${kind}` : name;
};

export const normalizeListName = (name: string, language?: string): string =>
  spellKind(name.replace(SEPARATOR, " - ").replace(/\s+/g, " ").trim(), language);

/** English phrasings with one house form: "Words starting with …". */
const ENGLISH_PHRASES: [RegExp, string][] = [
  [/\b(?:that|which) (?:starts?|begins?) with (.+?) and ends? with\b/gi, "starting with $1 and ending with"],
  [/\b(?:that|which) (?:starts?|begins?) with\b/gi, "starting with"],
  [/\bbeginning with\b/gi, "starting with"],
];

/** Indonesian reduplication is written with a hyphen: "Nama nama negara" → "Nama-nama negara". */
const hyphenateReduplication = (name: string) =>
  name.replace(
    /(?<![\p{L}-])(\p{L}{3,}) \1(?![\p{L}-])/giu,
    (match, word: string) => `${word}-${match.slice(word.length + 1)}`,
  );

/** The name in the house phrasing, for English and Indonesian lists; other languages keep their own. */
export const standardizeListPhrases = (name: string, language: string): string => {
  if (language === "EN") return ENGLISH_PHRASES.reduce((result, [from, to]) => result.replace(from, to), name);
  if (language === "ID") return hyphenateReduplication(name);
  return name;
};

/** The kinds the editor offers for "Subject - Kind" names, per language. */
export const LIST_KINDS: Record<string, string[]> = {
  EN: [
    "Songs",
    "Albums",
    "Movies",
    "Movies & TV Shows",
    "TV Shows",
    "Characters",
    "Cast",
    "Members",
    "Title Tracks",
    "Music Videos",
  ],
  PT: ["Músicas", "Álbuns", "Filmes", "Filmes e Séries", "Séries", "Personagens", "Elenco", "Membros", "Clipes"],
  ID: ["Lagu", "Album", "Film", "Drama", "Karakter", "Pemeran", "Anggota", "Video Klip"],
};

/** The part before the last " - ", when what follows is one of the language's kinds. */
const subjectOf = (name: string, language: string) => {
  const at = name.lastIndexOf(" - ");
  const kinds = (LIST_KINDS[language] ?? []).map(bare);
  return at >= 0 && kinds.includes(bare(name.slice(at + 3))) ? name.slice(0, at) : name;
};

/** "Subject - Kind", replacing a kind the name already ends in. */
export const withListKind = (name: string, kind: string, language: string): string => {
  const subject = subjectOf(name.trim(), language).trim();
  return subject ? `${subject} - ${kind}` : name;
};

export interface ListNameHint {
  message: string;
  /** The name with the hint applied, when there's one right answer. */
  fix?: string;
}

/** Kind words that have a house replacement, per language: the replacement, or a message when it depends. */
const KIND_FIXES: Record<string, Record<string, string | { message: string }>> = {
  EN: {
    singles: "Songs",
    tracklist: "Songs",
    filmography: "Movies",
    discography: { message: 'Name a discography "Albums" or "Songs", whichever its answers are.' },
  },
  PT: {
    cancoes: "Músicas",
    singles: "Músicas",
    songs: "Músicas",
    filmografia: "Filmes",
    movies: "Filmes",
    characters: "Personagens",
    cast: "Elenco",
    members: "Membros",
    lyrics: "Letra",
    albums: "Álbuns",
    discografia: { message: 'Name a discography "Álbuns" or "Músicas", whichever its answers are.' },
  },
  ID: {
    songs: "Lagu",
    singles: "Lagu",
    tracklist: "Lagu",
    "lirik lagu": "Lirik",
    lyrics: "Lirik",
    movies: "Film",
    filmografi: "Film",
    characters: "Karakter",
    cast: "Pemeran",
    members: "Anggota",
    albums: "Album",
    diskografi: { message: 'Name a discography "Album" or "Lagu", whichever its answers are.' },
  },
};

/** The kind written first, as "Lagu Raisa" or "Músicas de Zeca Pagodinho", per language. */
const KIND_FIRST: Record<string, [RegExp, string][]> = {
  PT: [
    [/^M[úu]sicas (?:de|do|da|dos|das) (.+)$/i, "Músicas"],
    [/^Personagens (?:de|do|da|dos|das) (.+)$/i, "Personagens"],
  ],
  ID: [
    [/^(?:Judul )?Lagu (.+)$/i, "Lagu"],
    [/^Karakter (.+)$/i, "Karakter"],
    [/^Anggota (.+)$/i, "Anggota"],
  ],
};

/** English small words that stay lowercase mid-name. "The" is left out: it often starts a name (The Beatles). */
const SMALL_WORDS = new Set([
  "a",
  "an",
  "and",
  "as",
  "at",
  "by",
  "for",
  "from",
  "in",
  "of",
  "on",
  "or",
  "that",
  "to",
  "with",
]);

const lowercaseSmallWords = (name: string) =>
  name
    .split(" - ")
    .map((part) =>
      part.replace(/(?<=[^\s:] )(\p{Lu}\p{Ll}*)(?= \S)/gu, (word) =>
        SMALL_WORDS.has(word.toLowerCase()) ? word.toLowerCase() : word,
      ),
    )
    .join(" - ");

/**
 * Suggestions that bring a name closer to the house style. They're only suggestions: names are the
 * creator's, so the editor shows them with a one-click fix and never applies them on its own.
 */
export const listNameHints = (name: string, language: string, categories: string[] = []): ListNameHint[] => {
  const hints: ListNameHint[] = [];
  const trimmed = name.trim();
  if (!trimmed) return hints;

  const phrased = standardizeListPhrases(trimmed, language);
  if (phrased !== trimmed)
    hints.push({
      message: language === "ID" ? "Write repeated words with a hyphen." : 'Write "starting with".',
      fix: phrased,
    });

  const at = trimmed.lastIndexOf(" - ");
  const kindFix = at >= 0 ? KIND_FIXES[language]?.[bare(trimmed.slice(at + 3))] : undefined;
  if (typeof kindFix === "string")
    hints.push({ message: `Name the kind "${kindFix}".`, fix: `${trimmed.slice(0, at)} - ${kindFix}` });
  else if (kindFix) hints.push({ message: kindFix.message });

  if (at < 0) {
    const english = trimmed.match(/^(.+) (Songs|Characters|Movies)$/);
    if (language === "EN" && english && (english[2] !== "Movies" || categories.includes("movies.filmography")))
      hints.push({
        message: `If this is one artist, show or person, name it "${english[1]} - ${english[2]}".`,
        fix: `${english[1]} - ${english[2]}`,
      });
    for (const [pattern, kind] of KIND_FIRST[language] ?? []) {
      const match = trimmed.match(pattern);
      if (match)
        hints.push({
          message: `If this is one artist or show, name it "${match[1]} - ${kind}".`,
          fix: `${match[1]} - ${kind}`,
        });
    }
  }

  if (language === "EN") {
    const lowered = lowercaseSmallWords(trimmed);
    if (lowered !== trimmed) hints.push({ message: "Keep small words like “with” and “of” lowercase.", fix: lowered });
  }
  return hints;
};
