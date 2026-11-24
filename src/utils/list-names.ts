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

/** The name in the house phrasing, for English lists; other languages keep their own. */
export const standardizeListPhrases = (name: string, language: string): string =>
  language === "EN" ? ENGLISH_PHRASES.reduce((result, [from, to]) => result.replace(from, to), name) : name;
