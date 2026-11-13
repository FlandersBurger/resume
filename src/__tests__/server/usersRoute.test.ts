// Tokens come only from signing in (POST /authenticate): no route hands one out for a User id.
const mockFindOne = jest.fn();
jest.mock("@root/server", () => ({ firebaseAuth: {} }));
jest.mock("@models/index", () => ({ User: { findOne: mockFindOne }, Player: {} }));
jest.mock("@root/connections/telegram", () => ({ __esModule: true, default: {} }));

import express from "express";
import { AddressInfo } from "net";
import { Server } from "http";
import { usersRoute } from "@api/users";

let server: Server;
let base: string;

beforeAll((done) => {
  process.env.SECRET = "test-secret";
  const app = express();
  app.use((_, res, next) => {
    res.locals.isAuthorized = false;
    res.locals.isAdmin = false;
    next();
  });
  app.use("/api/users", usersRoute);
  server = app.listen(0, () => {
    base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

it("gives no token for a User id to an anonymous request", async () => {
  mockFindOne.mockResolvedValue({ id: "5ece428af848aa2fc392d000", username: "admin", admin: true });
  const res = await fetch(`${base}/api/users/5ece428af848aa2fc392d000/login`);
  expect(res.status).toBe(404);
  expect(mockFindOne).not.toHaveBeenCalled();
});
