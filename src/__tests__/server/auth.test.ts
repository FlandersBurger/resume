// The auth middleware: a valid X-Auth token signs the request in; anything else leaves it
// anonymous instead of failing it.
const mockFindOne = jest.fn();
jest.mock("@models/user", () => ({ __esModule: true, default: () => ({ findOne: mockFindOne }) }));

import jwt from "jwt-simple";
import { Types } from "mongoose";
import auth from "@root/auth";

const SECRET = "test-secret";
const ann = { _id: new Types.ObjectId(), admin: false };

/** Runs the middleware for a request with `token` as its X-Auth header. */
async function run(token?: string) {
  const req = { headers: token === undefined ? {} : { "x-auth": token } };
  const res = { locals: {} as Record<string, unknown> };
  const next = jest.fn();
  await auth(req as never, res as never, next);
  expect(next).toHaveBeenCalledWith();
  return res.locals;
}

beforeAll(() => {
  process.env.SECRET = SECRET;
});

beforeEach(() => {
  mockFindOne.mockReset();
  mockFindOne.mockResolvedValue(ann);
});

it("signs the request in with a valid token", async () => {
  const locals = await run(jwt.encode({ userid: String(ann._id) }, SECRET));
  expect(mockFindOne).toHaveBeenCalledWith({ _id: String(ann._id) });
  expect(locals).toMatchObject({ user: ann, isAuthorized: true, isAdmin: false });
});

it("marks admins", async () => {
  mockFindOne.mockResolvedValue({ ...ann, admin: true });
  expect(await run(jwt.encode({ userid: String(ann._id) }, SECRET))).toMatchObject({ isAdmin: true });
});

it.each([
  ["no header", undefined],
  ["an empty header", ""],
  ["a garbled token", "not-a-jwt"],
  ["a token signed with another secret", jwt.encode({ userid: String(ann._id) }, "other")],
  ["a token without a User id", jwt.encode({ foo: 1 }, SECRET)],
  ["a token whose User id isn't an id", jwt.encode({ userid: "nope" }, SECRET)],
])("leaves the request anonymous with %s", async (_, token) => {
  const locals = await run(token);
  expect(locals).toEqual({ isAuthorized: false, isAdmin: false });
  expect(mockFindOne).not.toHaveBeenCalled();
});

it("leaves the request anonymous when the token's User no longer exists", async () => {
  mockFindOne.mockResolvedValue(null);
  expect(await run(jwt.encode({ userid: String(ann._id) }, SECRET))).toEqual({ isAuthorized: false, isAdmin: false });
});

it("never authorizes the blocked test account", async () => {
  const blocked = { _id: new Types.ObjectId("5ece428af848aa2fc392d099"), admin: false };
  mockFindOne.mockResolvedValue(blocked);
  expect(await run(jwt.encode({ userid: String(blocked._id) }, SECRET))).toMatchObject({ isAuthorized: false });
});

it("still fails the request when the database does", async () => {
  mockFindOne.mockRejectedValue(new Error("db down"));
  await expect(
    auth(
      { headers: { "x-auth": jwt.encode({ userid: String(ann._id) }, SECRET) } } as never,
      { locals: {} } as never,
      jest.fn(),
    ),
  ).rejects.toThrow("db down");
});
