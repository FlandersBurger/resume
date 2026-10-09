import { getRoundCard } from "@tenthings/share";

type Guesser = string | { _id: string; first_name: string } | undefined;
const nameOf = (guesser: unknown) =>
  typeof guesser === "string" ? guesser : (guesser as { first_name: string }).first_name;

const makeGame = (answers: [string, Guesser][], extra: { roundDate?: Date } = {}) => ({
  hints: 2,
  list: { name: "Countries in Europe", values: answers.map(([value, guesser]) => ({ value, guesser })) },
  ...extra,
});

describe("getRoundCard", () => {
  test("lists every answer with who got it", () => {
    const card = getRoundCard(
      makeGame([
        ["France", "Maxime"],
        ["Portugal", "Priya"],
        ["Norway", "Maxime"],
      ]),
      nameOf,
    );
    expect(card).toContain("1. France - Maxime\n2. Portugal - Priya\n3. Norway - Maxime\n");
    expect(card).toContain("👥 2");
  });

  test("handles populated guessers and unguessed answers", () => {
    const maxime = { _id: "p1", first_name: "Maxime" };
    const card = getRoundCard(
      makeGame([
        ["France", maxime],
        ["Belgium", { ...maxime }],
        ["Greece", undefined],
      ]),
      nameOf,
    );
    expect(card).toContain("1. France - Maxime\n2. Belgium - Maxime\n3. Greece\n");
    expect(card).toContain("👥 1");
  });

  test("shows the round time when the start is known", () => {
    const card = getRoundCard(makeGame([["France", "a"]], { roundDate: new Date(Date.now() - 252_000) }), nameOf);
    expect(card).toContain("⏱️ 4:12 · 💡 2 · 👥 1");
  });

  test("omits the time for rounds started before roundDate existed", () => {
    const card = getRoundCard(makeGame([["France", "a"]]), nameOf);
    expect(card).not.toContain("⏱️");
    expect(card).toContain("💡 2 · 👥 1");
  });

  test("is a copyable block with the list name and a link", () => {
    const card = getRoundCard(makeGame([["France", "a"]]), nameOf);
    expect(card).toMatch(/^<pre>Ten Things\nCountries in Europe\n[\s\S]*\nbelgocanadian\.com\/tenthings<\/pre>$/);
  });
});
