// The auth middleware: a valid X-Auth token signs the request in, and comes back renewed once
// past half its life; anything else leaves the request anonymous instead of failing it.
const mockFindOne = jest.fn();
jest.mock("@models/user", () => ({ __esModule: true, default: () => ({ findOne: mockFindOne }) }));

import jwt from "jwt-simple";
import { Types } from "mongoose";
import auth from "@root/auth";
import { LEGACY_TOKENS_UNTIL, RENEWED_TOKEN_HEADER, TOKEN_LIFETIME_SECONDS, issueToken } from "@root/tokens";

const SECRET = "test-secret";
const DAY = 24 * 60 * 60 * 1000;
const ann = { _id: new Types.ObjectId(), admin: false };
const annId = String(ann._id);

/** Runs the middleware for a request with `token` as its X-Auth header. */
async function run(token?: string) {
  const req = { headers: token === undefined ? {} : { "x-auth": token } };
  const headers: Record<string, string> = {};
  const res = {
    locals: {} as Record<string, unknown>,
    setHeader: (name: string, value: string) => (headers[name] = value),
  };
  const next = jest.fn();
  await auth(req as never, res as never, next);
  expect(next).toHaveBeenCalledWith();
  return { locals: res.locals, renewed: headers[RENEWED_TOKEN_HEADER] };
}

/** A token `ageDays` old, as issueToken made it then. */
const tokenAged = (ageDays: number, userId = annId) => {
  jest.setSystemTime(Date.now() - ageDays * DAY);
  const token = issueToken(userId);
  jest.setSystemTime(Date.now() + ageDays * DAY);
  return token;
};

const anonymous = { isAuthorized: false, isAdmin: false };

beforeAll(() => {
  process.env.SECRET = SECRET;
});

beforeEach(() => {
  jest.useFakeTimers({ now: Date.UTC(2026, 10, 15) });
  mockFindOne.mockReset();
  mockFindOne.mockResolvedValue(ann);
});

afterEach(() => jest.useRealTimers());

it("signs the request in with a valid token, without renewing a fresh one", async () => {
  const { locals, renewed } = await run(issueToken(annId));
  expect(mockFindOne).toHaveBeenCalledWith({ _id: annId });
  expect(locals).toMatchObject({ user: ann, isAuthorized: true, isAdmin: false });
  expect(renewed).toBeUndefined();
});

it("marks admins", async () => {
  mockFindOne.mockResolvedValue({ ...ann, admin: true });
  expect((await run(issueToken(annId))).locals).toMatchObject({ isAdmin: true });
});

it("renews a token past half its life, for another full lifetime", async () => {
  const { locals, renewed } = await run(tokenAged(20));
  expect(locals).toMatchObject({ isAuthorized: true });
  const claims = jwt.decode(renewed!, SECRET);
  expect(claims.userid).toBe(annId);
  expect(claims.exp).toBe(Math.floor(Date.now() / 1000) + TOKEN_LIFETIME_SECONDS);
});

it("refuses a token that went unused for its whole lifetime", async () => {
  const { locals, renewed } = await run(tokenAged(31));
  expect(locals).toEqual(anonymous);
  expect(renewed).toBeUndefined();
  expect(mockFindOne).not.toHaveBeenCalled();
});

it("accepts a token from before expiry until the cutoff, swapping it for an expiring one", async () => {
  const legacy = jwt.encode({ userid: annId }, SECRET);
  const { locals, renewed } = await run(legacy);
  expect(locals).toMatchObject({ isAuthorized: true });
  expect(jwt.decode(renewed!, SECRET).exp).toBeGreaterThan(Date.now() / 1000);

  jest.setSystemTime(LEGACY_TOKENS_UNTIL);
  expect((await run(legacy)).locals).toEqual(anonymous);
});

it("doesn't renew a banned User's token", async () => {
  mockFindOne.mockResolvedValue({ ...ann, banned: true });
  expect((await run(tokenAged(20))).renewed).toBeUndefined();
});

it.each([
  ["no header", undefined],
  ["an empty header", ""],
  ["a garbled token", "not-a-jwt"],
  ["a token signed with another secret", jwt.encode({ userid: annId }, "other")],
  ["a token without a User id", jwt.encode({ foo: 1 }, SECRET)],
  ["a token whose User id isn't an id", jwt.encode({ userid: "nope" }, SECRET)],
])("leaves the request anonymous with %s", async (_, token) => {
  expect((await run(token)).locals).toEqual(anonymous);
  expect(mockFindOne).not.toHaveBeenCalled();
});

it("leaves the request anonymous when the token's User no longer exists", async () => {
  mockFindOne.mockResolvedValue(null);
  const { locals, renewed } = await run(tokenAged(20));
  expect(locals).toEqual(anonymous);
  expect(renewed).toBeUndefined();
});

it("never authorizes the blocked test account", async () => {
  const blocked = { _id: new Types.ObjectId("5ece428af848aa2fc392d099"), admin: false };
  mockFindOne.mockResolvedValue(blocked);
  expect((await run(issueToken(String(blocked._id)))).locals).toMatchObject({ isAuthorized: false });
});

it("still fails the request when the database does", async () => {
  mockFindOne.mockRejectedValue(new Error("db down"));
  const req = { headers: { "x-auth": issueToken(annId) } };
  await expect(auth(req as never, { locals: {}, setHeader: jest.fn() } as never, jest.fn())).rejects.toThrow("db down");
});
