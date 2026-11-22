const stream = jest.fn();
jest.mock("@anthropic-ai/sdk", () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({ beta: { messages: { stream } } })),
}));

import { costOf, suggestListChanges } from "@root/connections/claude";

const list = { name: "Dragon Prince characters", language: "EN", categories: ["television"], values: ["Rayla"] };
const suggestions = { add: [{ value: "Callum", reason: "lead", source: "" }], remove: [], fix: [], note: "" };
const usage = (extra: object = {}) => ({ input_tokens: 1000, output_tokens: 100, ...extra });

const reply = (message: object) => ({ finalMessage: () => Promise.resolve({ usage: usage(), ...message }) });
const submit = { type: "tool_use", id: "t1", name: "submit_suggestions", input: suggestions };

beforeEach(() => stream.mockReset());

describe("suggestListChanges", () => {
  it("returns the submitted suggestions and the cost", async () => {
    stream.mockReturnValueOnce(reply({ stop_reason: "tool_use", content: [submit] }));

    const result = await suggestListChanges(list, { instruction: "add the leads" });

    expect(result.suggestions).toEqual(suggestions);
    expect(result.cost).toBeCloseTo(1000 * 4e-6 + 100 * 20e-6);
    const params = stream.mock.calls[0][0];
    expect(params.model).toBe("claude-opus-5-5");
    expect(params.fallbacks).toBe("default");
    expect(params.tools.map((t: { name: string }) => t.name)).toEqual(["submit_suggestions"]);
    expect(params.messages[0].content).toContain("- Rayla");
    expect(params.messages[0].content).toContain("The editor asks: add the leads");
  });

  it("adds web search when asked and resumes a paused turn", async () => {
    const paused = [{ type: "server_tool_use", id: "s1", name: "web_search", input: { query: "x" } }];
    stream
      .mockReturnValueOnce(reply({ stop_reason: "pause_turn", content: paused }))
      .mockReturnValueOnce(reply({ stop_reason: "tool_use", content: [submit] }));

    const result = await suggestListChanges(list, { webSearch: true });

    expect(result.suggestions).toEqual(suggestions);
    expect(stream.mock.calls[0][0].tools[0]).toMatchObject({ type: "web_search_20260209", max_uses: 5 });
    const resumed = stream.mock.calls[1][0].messages;
    expect(resumed).toHaveLength(2);
    expect(resumed[1]).toEqual({ role: "assistant", content: paused });
  });

  it("nudges once when Claude answers in text, then gives up", async () => {
    stream.mockReturnValue(reply({ stop_reason: "end_turn", content: [{ type: "text", text: "Looks fine" }] }));
    await expect(suggestListChanges(list)).rejects.toThrow("didn't return any suggestions");
    expect(stream).toHaveBeenCalledTimes(2);
    expect(stream.mock.calls[1][0].messages.at(-1)).toEqual({
      role: "user",
      content: "Call submit_suggestions with your suggestions.",
    });
  });

  it("reports a refusal", async () => {
    stream.mockReturnValueOnce(reply({ stop_reason: "refusal", content: [] }));
    await expect(suggestListChanges(list)).rejects.toThrow("declined");
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
