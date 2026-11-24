import Anthropic from "@anthropic-ai/sdk";
import { DIFFICULTIES, FREQUENCIES, ListSuggestions } from "@utils/list-suggestions";

const MODEL = "claude-sonnet-5-5";
/** Claude Sonnet 5.5 rates per token, and web search per request, to show what a run cost. */
const PRICE = { input: 2 / 1e6, cacheWrite: 2.5 / 1e6, cacheRead: 0.1 / 1e6, output: 10 / 1e6, search: 10 / 1000 };
/** Search results are long and billed as input, so Claude gets a few searches and is told to use them sparingly. */
const MAX_SEARCHES = 3;
const MAX_CONTINUATIONS = 5;
/** Enough of each blurb for Claude to see the list's style without paying for long ones in full. */
const BLURB_PREVIEW = 160;

export interface ListForVet {
  name: string;
  description?: string;
  language: string;
  categories: string[];
  difficulty?: number;
  frequency?: number;
  values: { value: string; blurb?: string }[];
}

const stringField = (description: string) => ({ type: "string", description }) as const;

const suggestion = {
  type: "object",
  additionalProperties: false,
  required: ["value", "reason", "source"],
  properties: {
    value: stringField("The answer exactly as it should appear in the list."),
    reason: stringField("Why, in at most 15 words."),
    source: stringField("A URL from a search that backs this up, or an empty string."),
  },
} as const;

const withFields = (extra: Record<string, { type: "string"; description: string }>) => ({
  ...suggestion,
  required: [...suggestion.required, ...Object.keys(extra)],
  properties: { ...suggestion.properties, ...extra },
});

const setting = (to: object, description: string) => ({
  description: `${description} null when it's fine as it is.`,
  anyOf: [
    {
      type: "object",
      additionalProperties: false,
      required: ["to", "reason"],
      properties: { to, reason: stringField("Why, in at most 15 words.") },
    },
    { type: "null" },
  ],
});

const submitTool = (validCategories: string[]): Anthropic.Beta.BetaTool => ({
  name: "submit_vet",
  description: "Hand back the vetting results. Call this exactly once, when you are done.",
  strict: true,
  input_schema: {
    type: "object",
    additionalProperties: false,
    required: [
      "add",
      "remove",
      "fix",
      "blurbs",
      "name",
      "description",
      "categories",
      "difficulty",
      "frequency",
      "note",
    ],
    properties: {
      add: {
        type: "array",
        description: "Answers missing from the list.",
        items: withFields({ blurb: stringField("A blurb for it in the list's style, or an empty string.") }),
      },
      remove: {
        type: "array",
        description: "Existing answers that are wrong or outside the list's scope. `value` is the existing answer.",
        items: suggestion,
      },
      fix: {
        type: "array",
        description: "Existing answers to rename. `value` is the existing answer, `to` the corrected one.",
        items: withFields({ to: stringField("The corrected answer.") }),
      },
      blurbs: {
        type: "array",
        description: "Blurbs for existing answers that have none. `value` is the existing answer.",
        items: withFields({ blurb: stringField("The blurb.") }),
      },
      name: setting(
        stringField("The new list name, as close to the creator's as possible."),
        "A new list name, only when the current one is a problem or breaks the naming style.",
      ),
      description: setting(
        stringField(
          "The description: a short bit of trivia that names none of the answers, or the creator's with only the problem fixed.",
        ),
        "A description when the list has none, or a fix when the current one is a problem.",
      ),
      categories: setting(
        { type: "array", items: { type: "string", enum: validCategories } },
        "The full set of categories the list should have.",
      ),
      difficulty: setting(
        { type: "integer", enum: DIFFICULTIES.map((_, i) => i) },
        `How hard the list is: ${DIFFICULTIES.map((d, i) => `${i} ${d}`).join(", ")}.`,
      ),
      frequency: setting(
        { type: "integer", enum: FREQUENCIES.map((_, i) => i) },
        `How often the answers change: ${FREQUENCIES.map((f, i) => `${i} ${f}`).join(", ")}.`,
      ),
      note: stringField("One or two sentences for the editor, or an empty string."),
    },
  },
});

const SYSTEM = `You vet lists for Ten Things, a multiplayer trivia game. Each round shows players a list's name (and its description), picks 10 of its answers at random, and players try to guess those 10 by typing them in a chat. Guesses are matched loosely (case, accents and punctuation are ignored, and close spellings count), so an answer should be the name most people would type: short, canonical, without qualifiers players wouldn't think of. After an answer is guessed, its blurb is shown: a short fun fact or bit of context, or a link to an image or video.

Vet the whole list:
- answers: a good list beats a complete one. Because any answer can be one of a round's 10, every answer must be one that players who know the topic could think of; an answer nobody would guess stalls the round. First decide what kind of list it is:
  - a closed set (the planets, the members of a band, a season's episodes, the countries in a region): keep it complete, and add what's missing.
  - an open-ended pick (an actor's films, a band's songs, a show's characters, "famous" anything): keep only the entries the topic is known for. Suggest removing obscure ones (Losin' It on a Tom Cruise films list), and add only well-known missing ones (Top Gun if it were absent).
  Also remove answers that are wrong, out of date, duplicated or outside the list's scope, and fix misspellings and forms players are unlikely to type (e.g. "Lord Viren" when everyone says "Viren"). Never cut a list below 10 answers.
  A list with fewer than 10 answers, or none (a new list the creator has only named), needs filling: add every answer of a closed set, or the 15 to 20 best-known answers of an open-ended pick, with blurbs. Fill it from the name and description as the creator meant them.
- blurbs: write blurbs for answers that have none, and for answers you add, matching the style and length of the list's existing blurbs (a sentence or two when there are none yet). Write text only and never make up a URL. If the existing blurbs are mostly images or videos, skip blurbs and say in the note which image source would suit the list (movie posters, TV posters, actor pictures, book covers, music videos, Wikipedia, Unsplash, Pexels, or a Fandom wiki).
- name: the creator's name sets the list's intent and scope, and answers are vetted against it; never change that intent. Suggest a new name only when the current one is nonsensical or garbled, biased or offensive, needlessly limiting, doesn't match its answers, or breaks the naming style below. Don't reword a name that already follows the style just to polish it, and keep any change as close to the creator's as you can.
  Naming style: a game-show host should be able to shout the name and contestants know what to blurt out. Keep it short and self-explanatory ("Penguins", not "Types of Penguins", since penguin species are what anyone would name). Keep "Types of X" when the plain noun would invite named examples instead (a "Waterfalls" list would get Niagara, not "Plunge"), and never turn it into "X - Types". The categories are shown with the name, so they can carry context. A catalogue of one subject is "Subject - Kind", with a plain hyphen between spaces: "Tom Cruise - Movies", "The Beatles - Songs", "Breaking Bad - Characters", "Kamelot - Albums". For kinds: an artist's singles are "Songs"; a discography is "Albums" or "Songs", whichever its answers are; a filmography is "Movies" ("Movies & TV Shows" when it mixes both); "Roles" are character names and "Title Tracks" are K-pop lead songs, so keep both. "X - Movies" means movies X appears in, so use "Directed by X" and "Written by X" for work behind the camera or on the page. Use the phrases "Words starting with …" and "Things associated with …". Capitalize the first word and proper nouns, and keep small words (with, of, the, and, in, from, by, that) lowercase mid-name unless they're part of a title. Hyphens inside words stay (Spider-Man, K-dramas). Write LGBTQIA+ for any form of the acronym (LGBT, LGBTQ+), in every language and in descriptions too. Lists that aren't in English follow their own language's conventions.
- description: players see it while they guess, so it must never name, spell out or give away any answer, not even one or a partial one. When there is one, it's the creator's: leave it unless it's nonsensical, biased or offensive, wrong, or gives away an answer (then fix only that). When there is none, write one: a short bit of trivia about the topic rather than a dry summary, plus a few words on what counts when the name alone doesn't make that clear. Text only, no URLs.
- other settings: suggest the right categories (only from the allowed ones, as the complete set), how hard the list is, and how often its answers change. Leave a setting null when it's fine.

Keep the list's language: text for a list marked NL is in Dutch, and so on. Only suggest changes you are confident in. Most lists need no web search: search only when answers change over time or you are unsure about specific ones, and keep it to a couple of searches. When you are done, call submit_vet once with everything, using empty arrays and null where you have nothing to suggest.`;

const preview = (blurb = "") => (blurb.length > BLURB_PREVIEW ? `${blurb.slice(0, BLURB_PREVIEW)}…` : blurb);

const describeList = (list: ListForVet, validCategories: string[], instruction?: string) =>
  [
    `List name: ${list.name}`,
    `Description: ${list.description || "(none)"}`,
    `Language: ${list.language}`,
    `Categories: ${list.categories.join(", ") || "none"}`,
    `Difficulty: ${DIFFICULTIES[list.difficulty ?? -1] ?? "not set"}`,
    `How often the answers change: ${FREQUENCIES[list.frequency ?? -1] ?? "not set"}`,
    `Allowed categories: ${validCategories.join(", ")}`,
    `\nAnswers (${list.values.length}), each with its blurb:`,
    ...list.values.map(({ value, blurb }) => `- ${value} | ${preview(blurb) || "(no blurb)"}`),
    instruction ? `\nThe editor also asks: ${instruction}` : "",
  ]
    .filter(Boolean)
    .join("\n");

export const costOf = (usage: Anthropic.Beta.BetaUsage) =>
  (usage.input_tokens ?? 0) * PRICE.input +
  (usage.cache_creation_input_tokens ?? 0) * PRICE.cacheWrite +
  (usage.cache_read_input_tokens ?? 0) * PRICE.cacheRead +
  (usage.output_tokens ?? 0) * PRICE.output +
  (usage.server_tool_use?.web_search_requests ?? 0) * PRICE.search;

export const isConfigured = () => !!process.env.ANTHROPIC_API_KEY;

let client: Anthropic | undefined;

/**
 * Asks Claude to vet a list (answers, blurbs and settings) and returns its suggestions, unreconciled, with
 * what the run cost in dollars. Nothing is saved: the editor reviews the suggestions and applies them.
 */
export const vetList = async (
  list: ListForVet,
  validCategories: string[],
  instruction?: string,
): Promise<{ suggestions: ListSuggestions; cost: number }> => {
  client ??= new Anthropic();
  const submit = submitTool(validCategories);
  const tools: Anthropic.Beta.BetaToolUnion[] = [
    { type: "web_search_20260209", name: "web_search", max_uses: MAX_SEARCHES },
    submit,
  ];
  const messages: Anthropic.Beta.BetaMessageParam[] = [
    { role: "user", content: describeList(list, validCategories, instruction) },
  ];
  let cost = 0;
  let nudged = false;

  for (let turn = 0; turn <= MAX_CONTINUATIONS; turn++) {
    const response = await client.beta.messages
      .stream({
        model: MODEL,
        max_tokens: 64000,
        betas: ["server-side-fallback-2026-07-01"],
        fallbacks: "default",
        output_config: { effort: "medium" },
        system: SYSTEM,
        tools,
        messages,
      })
      .finalMessage();
    cost += costOf(response.usage);

    if (response.stop_reason === "refusal") throw new Error("Claude declined to vet this list.");
    if (response.stop_reason === "max_tokens") throw new Error("Claude's answer was cut off.");

    const submitted = response.content.find(
      (block): block is Anthropic.Beta.BetaToolUseBlock => block.type === "tool_use" && block.name === submit.name,
    );
    if (submitted) return { suggestions: submitted.input as ListSuggestions, cost };

    if (response.stop_reason !== "pause_turn" && nudged) break;
    messages.push({ role: "assistant", content: response.content });
    // A paused server-tool turn resumes from the assistant content alone.
    if (response.stop_reason === "pause_turn") continue;
    nudged = true;
    messages.push({ role: "user", content: `Call ${submit.name} with your results.` });
  }
  throw new Error("Claude didn't return any results.");
};
