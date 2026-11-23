const stream = jest.fn();
jest.mock("@anthropic-ai/sdk", () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({ beta: { messages: { stream } } })),
}));

import { costOf, vetList } from "@root/connections/claude";

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
    expect(result.cost).toBeCloseTo(1000 * 4e-6 + 100 * 20e-6);
    const params = stream.mock.calls[0][0];
    expect(params.model).toBe("claude-opus-5-5");
    expect(params.fallbacks).toBe("default");
    expect(params.tools[0]).toMatchObject({ type: "web_search_20260209", max_uses: 3 });
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
    ).toBeCloseTo(0.004 + 0.002 + 0.002 + 0.005 + 0.03);
  });
});
