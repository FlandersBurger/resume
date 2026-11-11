// The chat renderer: the same HTML on every chat Platform, with each Platform's buttons and
// media where they differ. Messages are collected by a fake Platform instead of being sent.
jest.mock("@root/db", () => {
  const mongoose = jest.requireActual("mongoose");
  return { __esModule: true, default: { master: mongoose.createConnection() } };
});
jest.mock("@tenthings/providers/web", () => ({ web: {} }));
jest.mock("@tenthings/providers/telegram", () => ({ telegram: {} }));
jest.mock("@tenthings/providers/discord", () => ({ discord: {} }));
jest.mock("@root/queue", () => ({ __esModule: true, default: {} }));
jest.mock("@root/i18n", () => ({ __esModule: true, default: jest.fn((_, key: string) => key) }));

import { Types } from "mongoose";
import db from "@root/db";
import { Player } from "@models/index";
import { IGame } from "@models/tenthings/game";
import { IPlayer } from "@models/tenthings/player";
import { ChatPlatform, createChatProvider, listStatusMessage } from "@tenthings/providers/chat";
import { KeyboardDef } from "@tenthings/keyboards";
import { MEMORY_MONGO_TIMEOUT, openOnMemoryMongo } from "../../../helpers/memoryMongo";

let stop: () => Promise<void>;

beforeAll(async () => {
  ({ stop } = await openOnMemoryMongo(db.master));
}, MEMORY_MONGO_TIMEOUT);

afterAll(async () => {
  await stop?.();
});

type Sent = { html?: string; keyboard?: KeyboardDef; media?: string };

/** A Platform that records what it's asked to send; Telegram-like unless overridden. */
const fakePlatform = (overrides: Partial<ChatPlatform> = {}) => {
  const sent: Sent[] = [];
  const platform: ChatPlatform = {
    type: "telegram",
    keyboardConverter: (def) => def,
    send: (_game, html) => sent.push({ html }),
    sendKeyboard: (_game, html, keyboard) => sent.push({ html, keyboard }),
    sendMedia: (_game, media) => sent.push({ media }),
    buttonsOnRoundMessages: false,
    linkPreviews: true,
    promoteDiscord: true,
    ...overrides,
  };
  return { sent, provider: createChatProvider(platform) };
};
const discordLike = {
  type: "discord",
  buttonsOnRoundMessages: true,
  linkPreviews: false,
  promoteDiscord: false,
} as const;

const ann = { _id: new Types.ObjectId(), first_name: "Ann", scoreDaily: 12 } as unknown as IPlayer;

/** A Game mid-Round on "Planets": Mercury guessed by Ann, Venus still open. */
const makeGame = (provider: IGame["provider"]) =>
  ({
    _id: new Types.ObjectId(),
    provider,
    hints: 0,
    streak: { count: 1 },
    disabledCategories: [],
    settings: { language: "EN" },
    list: {
      _id: new Types.ObjectId(),
      name: "Planets",
      answers: 2,
      categories: ["science"],
      creator: { username: "laurent" },
      values: [{ value: "Mercury", guesser: ann, blurb: "https://example.com/mercury.png" }, { value: "Venus" }],
    },
  }) as unknown as IGame;

const buttonActions = (keyboard?: KeyboardDef) => keyboard?.flat().map(({ action }) => action);

describe("a new Round", () => {
  it("is a plain message where buttons don't go on Round messages", () => {
    const { sent, provider } = fakePlatform();
    provider.newRound(makeGame(provider), makeGame(provider).list);
    expect(sent).toHaveLength(1);
    expect(sent[0].keyboard).toBeUndefined();
    expect(sent[0].html).toContain("<b>Planets</b> (2)");
  });

  it("carries Hint and Skip buttons on Discord, with the same HTML", () => {
    const telegram = fakePlatform();
    const discord = fakePlatform(discordLike);
    telegram.provider.newRound(makeGame(telegram.provider), makeGame(telegram.provider).list);
    discord.provider.newRound(makeGame(discord.provider), makeGame(discord.provider).list);
    expect(buttonActions(discord.sent[0].keyboard)).toEqual(["hint", "skip"]);
    expect(discord.sent[0].html).toBe(telegram.sent[0].html);
  });
});

describe("a guessed Answer with an image Blurb", () => {
  it("hides the image link in the message where links preview", () => {
    const { sent, provider } = fakePlatform();
    const game = makeGame(provider);
    provider.guessed(game, ann, game.list.values[0], 3, "100%");
    expect(sent).toHaveLength(1);
    expect(sent[0].html).toContain('<a href="https://example.com/mercury.png">&#8204;</a>');
    expect(sent[0].html).toContain("<u>9 + point (100%)</u>");
  });

  it("sends the image as media where links don't preview", () => {
    const { sent, provider } = fakePlatform(discordLike);
    const game = makeGame(provider);
    provider.guessed(game, ann, game.list.values[0], 3, "100%");
    expect(sent[0].html).not.toContain("<a href");
    expect(sent[1]).toEqual({ media: "https://example.com/mercury.png" });
  });
});

describe("rating the List", () => {
  it("asks for a vote in its own message", () => {
    const { sent, provider } = fakePlatform();
    provider.rateList(makeGame(provider));
    expect(buttonActions(sent[0].keyboard)).toEqual(["vote", "vote"]);
  });

  it("puts the vote buttons on the end-of-Round stats on Discord", async () => {
    const { sent, provider } = fakePlatform(discordLike);
    const game = makeGame(provider);
    await Player.create({ game: game._id, first_name: "Ann", scoreDaily: 12 });
    await provider.endOfRound(game, { ...game.list, plays: 1 } as never);
    provider.rateList(game);
    expect(sent).toHaveLength(1);
    expect(buttonActions(sent[0].keyboard)).toEqual(["vote", "vote"]);
    expect(sent[0].html).toContain("Ann - 12");
  });
});

describe("the List status", () => {
  it("shows guessers and hints in full", () => {
    const html = listStatusMessage(makeGame({} as IGame["provider"]));
    expect(html).toContain("\t1: Mercury - <i>Ann</i>\n");
    expect(html).toMatch(/\t<b>2:<\/b> <b>[^<]+<\/b>\n/);
  });

  it("shows only the open hints when short", () => {
    const html = listStatusMessage(makeGame({} as IGame["provider"]), false);
    expect(html).not.toContain("Mercury");
    expect(html).toMatch(/^<b>Planets<\/b>\n\t2: \S+\n$/);
  });
});
