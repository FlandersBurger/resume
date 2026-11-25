const stream = jest.fn();
jest.mock("@anthropic-ai/sdk", () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({ beta: { messages: { stream } } })),
}));

import { costOf, needsSearch, vetList } from "@root/connections/claude";

const list = {
  name: "Dragon Prince characters",
  language: "EN",
  categories: ["television"],
  difficulty: 0,
  values: [
    { value: "Rayla", blurb: "x".repeat(500) },
    { value: "Callum", blurb: "" },
  ],
};
const valid = ["television", "movies"];
const results = { add: [], remove: [], fix: [], blurbs: [], note: "fine" };
const usage = (extra: object = {}) => ({ input_tokens: 1000, output_tokens: 100, ...extra });

const reply = (message: object) => ({ finalMessage: () => Promise.resolve({ usage: usage(), ...message }) });
const submit = { type: "tool_use", id: "t1", name: "submit_vet", input: results };

beforeEach(() => stream.mockReset());

describe("vetList", () => {
  it("returns the submitted results and the cost", async () => {
    stream.mockReturnValueOnce(reply({ stop_reason: "tool_use", content: [submit] }));

    const result = await vetList(list, valid, "add the leads");

    expect(result.suggestions).toEqual(results);
    expect(result.cost).toBeCloseTo(1000 * 0.1e-6 + 100 * 0.5e-6, 9);
    const params = stream.mock.calls[0][0];
    expect(params.model).toBe("claude-haiku-5-5");
    expect(params.fallbacks).toBeUndefined();
    expect(params.output_config).toEqual({ effort: "low" });
    expect(params.cache_control).toEqual({ type: "ephemeral" });
    expect(params.tools[0]).toMatchObject({ type: "web_search_20250305", max_uses: 2 });
    const submitTool = params.tools[1];
    expect(submitTool.strict).toBe(true);
    expect(submitTool.input_schema.properties.categories.anyOf[0].properties.to.items.enum).toEqual(valid);

    const prompt = params.messages[0].content;
    expect(prompt).toContain("Difficulty: Easy");
    expect(prompt).toContain("How often the answers change: not set");
    expect(prompt).toContain("- Callum | (no blurb)");
    expect(prompt).toContain(`- Rayla | ${"x".repeat(160)}…`);
    expect(prompt).toContain("Allowed categories: television, movies");
    expect(prompt).toContain("The editor also asks: add the leads");
  });

  it("leaves web search out when the answers rarely change", async () => {
    stream.mockReturnValueOnce(reply({ stop_reason: "tool_use", content: [submit] }));

    await vetList({ ...list, frequency: 2 }, valid);

    expect(stream.mock.calls[0][0].tools.map((tool: { name: string }) => tool.name)).toEqual(["submit_vet"]);
  });

  it("resumes a paused search turn", async () => {
    const paused = [{ type: "server_tool_use", id: "s1", name: "web_search", input: { query: "x" } }];
    stream
      .mockReturnValueOnce(reply({ stop_reason: "pause_turn", content: paused }))
      .mockReturnValueOnce(reply({ stop_reason: "tool_use", content: [submit] }));

    await vetList(list, valid);

    const resumed = stream.mock.calls[1][0].messages;
    expect(resumed).toHaveLength(2);
    expect(resumed[1]).toEqual({ role: "assistant", content: paused });
  });

  it("nudges once when Claude answers in text, then gives up", async () => {
    stream.mockReturnValue(reply({ stop_reason: "end_turn", content: [{ type: "text", text: "Looks fine" }] }));
    await expect(vetList(list, valid)).rejects.toThrow("didn't return any results");
    expect(stream).toHaveBeenCalledTimes(2);
    expect(stream.mock.calls[1][0].messages.at(-1)).toEqual({
      role: "user",
      content: "Call submit_vet with your results.",
    });
  });

  it("reports a refusal", async () => {
    stream.mockReturnValueOnce(reply({ stop_reason: "refusal", content: [] }));
    await expect(vetList(list, valid)).rejects.toThrow("declined");
  });
});

describe("needsSearch", () => {
  it.each([
    [undefined, "", true],
    [0, "", true],
    [1, "", true],
    [2, "", false],
    [3, "", false],
    [3, "check the latest season", true],
    [3, "Search for missing ones", true],
    [3, "add new blurbs", false],
  ])("frequency %p with request %p → %p", (frequency, instruction, expected) => {
    expect(needsSearch({ ...list, frequency }, instruction)).toBe(expected);
  });
});

describe("costOf", () => {
  it("counts cache and web searches", () => {
    expect(
      costOf(
        usage({
          cache_read_input_tokens: 10_000,
          cache_creation_input_tokens: 1000,
          server_tool_use: { web_search_requests: 3 },
        }) as any,
      ),
    ).toBeCloseTo(0.0001 + 0.00005 + 0.0001 + 0.000125 + 0.03, 7);
  });
});
