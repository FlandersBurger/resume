import Anthropic from "@anthropic-ai/sdk";
import { ListSuggestions } from "@utils/list-suggestions";

const MODEL = "claude-opus-5-5";
/** Claude Opus 5.5 rates per token, and web search per request, to show what a run cost. */
const PRICE = { input: 4 / 1e6, cacheWrite: 5 / 1e6, cacheRead: 0.2 / 1e6, output: 20 / 1e6, search: 10 / 1000 };
const MAX_SEARCHES = 5;
const MAX_CONTINUATIONS = 5;

export interface ListForReview {
  name: string;
  description?: string;
  language: string;
  categories: string[];
  frequency?: number;
  values: string[];
}

export interface SuggestOptions {
  instruction?: string;
  webSearch?: boolean;
}

const FREQUENCY = ["changes frequently", "changes about once a year", "rarely changes", "never changes"];

const suggestion = {
  type: "object",
  additionalProperties: false,
  required: ["value", "reason", "source"],
  properties: {
    value: { type: "string", description: "The answer exactly as it should appear in the list." },
    reason: { type: "string", description: "Why, in at most 15 words." },
    source: { type: "string", description: "A URL that backs this up, or an empty string." },
  },
} as const;

const SUBMIT_TOOL: Anthropic.Beta.BetaTool = {
  name: "submit_suggestions",
  description: "Hand back the suggested changes to the list. Call this exactly once, when you are done.",
  strict: true,
  input_schema: {
    type: "object",
    additionalProperties: false,
    required: ["add", "remove", "fix", "note"],
    properties: {
      add: { type: "array", description: "Answers missing from the list.", items: suggestion },
      remove: {
        type: "array",
        description: "Existing answers that are wrong or outside the list's scope. `value` is the existing answer.",
        items: suggestion,
      },
      fix: {
        type: "array",
        description: "Existing answers to rename. `value` is the existing answer, `to` the corrected one.",
        items: {
          ...suggestion,
          required: [...suggestion.required, "to"],
          properties: { ...suggestion.properties, to: { type: "string", description: "The corrected answer." } },
        },
      },
      note: { type: "string", description: "One or two sentences for the editor, or an empty string." },
    },
  },
};

const SYSTEM = `You review lists for Ten Things, a multiplayer trivia game. Each round shows players a list's name and they try to guess the answers on it by typing them in a chat. Guesses are matched loosely (case, accents and punctuation are ignored, and close spellings count), so an answer should be the name most people would type: short, canonical, and without qualifiers players wouldn't think of.

Your job is to suggest changes to one list:
- add: answers that belong on the list but are missing.
- remove: answers that are wrong, out of date, duplicated, or outside what the list's name and description describe.
- fix: answers with a misspelling, or a form players are unlikely to type (e.g. "Lord Viren" when everyone says "Viren").

Only suggest changes you are confident in. An answer being obscure is not a reason to remove it. Keep the list's language: answers in a list marked NL are in Dutch, and so on. If the list's scope is unclear, say so in the note rather than guessing. When you are done, call submit_suggestions once with everything, using empty arrays for kinds with no suggestions.`;

const describeList = (list: ListForReview, instruction?: string) =>
  [
    `List name: ${list.name}`,
    list.description ? `Description: ${list.description}` : "",
    `Language: ${list.language}`,
    `Categories: ${list.categories.join(", ") || "none"}`,
    list.frequency != null && FREQUENCY[list.frequency]
      ? `How often the answers change: ${FREQUENCY[list.frequency]}`
      : "",
    `Current answers (${list.values.length}):`,
    ...list.values.map((value) => `- ${value}`),
    instruction ? `\nThe editor asks: ${instruction}` : "",
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
 * Asks Claude to review a list and returns its suggested additions, removals and renames, with what
 * the run cost in dollars. Nothing is saved: the editor reviews the suggestions and applies them.
 */
export const suggestListChanges = async (
  list: ListForReview,
  { instruction, webSearch = false }: SuggestOptions = {},
): Promise<{ suggestions: ListSuggestions; cost: number }> => {
  client ??= new Anthropic();
  const tools: Anthropic.Beta.BetaToolUnion[] = [SUBMIT_TOOL];
  if (webSearch) tools.unshift({ type: "web_search_20260209", name: "web_search", max_uses: MAX_SEARCHES });

  const messages: Anthropic.Beta.BetaMessageParam[] = [{ role: "user", content: describeList(list, instruction) }];
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

    if (response.stop_reason === "refusal") throw new Error("Claude declined to review this list.");
    if (response.stop_reason === "max_tokens") throw new Error("Claude's answer was cut off.");

    const submitted = response.content.find(
      (block): block is Anthropic.Beta.BetaToolUseBlock => block.type === "tool_use" && block.name === SUBMIT_TOOL.name,
    );
    if (submitted) return { suggestions: submitted.input as ListSuggestions, cost };

    if (response.stop_reason !== "pause_turn" && nudged) break;
    messages.push({ role: "assistant", content: response.content });
    // A paused server-tool turn resumes from the assistant content alone.
    if (response.stop_reason === "pause_turn") continue;
    nudged = true;
    messages.push({ role: "user", content: "Call submit_suggestions with your suggestions." });
  }
  throw new Error("Claude didn't return any suggestions.");
};
