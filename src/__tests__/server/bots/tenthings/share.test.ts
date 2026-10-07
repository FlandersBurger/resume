import { getPlayerCard, getRoundCard } from "@tenthings/share";
import { IGame } from "@models/tenthings/game";
import { IPlayer } from "@models/tenthings/player";

const makeGame = (guessers: (string | undefined)[], extra: Partial<IGame> = {}) =>
  ({
    _id: "game1",
    hints: 2,
    list: { name: "Countries in Europe", values: guessers.map((guesser) => ({ value: "x", blurb: "", guesser })) },
    ...extra,
  }) as unknown as IGame;

describe("getRoundCard", () => {
  test("colours answers by guesser, most answers first", () => {
    const card = getRoundCard(makeGame(["b", "a", "b", "c", "b", "a", "b", "a", "c", "b"]));
    // b: 5 answers, a: 3, c: 2
    expect(card).toContain("🟦🟥🟦🟩🟦🟥🟦🟥🟩🟦");
  });

  test("handles populated guessers and unguessed answers", () => {
    const players = [{ _id: "p1" }, { _id: "p2" }];
    const card = getRoundCard(makeGame([players[0], players[1], players[0], undefined] as any));
    expect(card).toContain("🟦🟥🟦⬛");
    expect(card).toContain("👥 2");
  });

  test("shares the last square once the palette runs out", () => {
    const card = getRoundCard(makeGame(["a", "a", "b", "c", "d", "e", "f", "g", "h", "i"]));
    expect(card).toContain("🟦🟦🟥🟩🟨🟪🟧🟫⬜⬜");
  });

  test("shows the round time when the start is known", () => {
    const card = getRoundCard(makeGame(["a"], { roundDate: new Date(Date.now() - 252_000) }));
    expect(card).toContain("⏱️ 4:12 · 💡 2 · 👥 1");
  });

  test("omits the time for rounds started before roundDate existed", () => {
    const card = getRoundCard(makeGame(["a"]));
    expect(card).not.toContain("⏱️");
    expect(card).toContain("💡 2 · 👥 1");
  });

  test("is a copyable block with the list name and a link", () => {
    const card = getRoundCard(makeGame(["a"]));
    expect(card).toMatch(/^<pre>Ten Things 🔟 Countries in Europe\n[\s\S]*\nbelgocanadian\.com\/tenthings<\/pre>$/);
  });
});

describe("getPlayerCard", () => {
  test("shows rank, score and a streak that includes today", () => {
    const card = getPlayerCard({ scoreDaily: 47, playStreak: 11 } as IPlayer, { ahead: 1, total: 7 });
    expect(card).toContain("🥈 #2/7 · ⭐ 47");
    expect(card).toContain("🔥 12");
  });

  test("uses a generic medal outside the podium", () => {
    const card = getPlayerCard({ scoreDaily: 10, playStreak: 0 } as IPlayer, { ahead: 5, total: 9 });
    expect(card).toContain("🏅 #6/9 · ⭐ 10");
    expect(card).not.toContain("🔥");
  });

  test("skips the ranking when the player hasn't scored today", () => {
    const card = getPlayerCard({ scoreDaily: 0, playStreak: 3 } as IPlayer);
    expect(card).not.toContain("#");
    expect(card).toContain("⭐ 0");
    expect(card).toContain("🔥 3");
  });
});
