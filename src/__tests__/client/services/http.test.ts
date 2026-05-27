import http, { setAuthToken, clearAuthToken } from "../../../client/services/http";

describe("setAuthToken", () => {
  afterEach(() => {
    clearAuthToken();
  });

  it("sets the X-Auth header on the http instance", () => {
    setAuthToken("my-token");
    expect(http.defaults.headers.common["X-Auth"]).toBe("my-token");
  });

  it("overwrites a previously set token", () => {
    setAuthToken("first");
    setAuthToken("second");
    expect(http.defaults.headers.common["X-Auth"]).toBe("second");
  });
});

describe("clearAuthToken", () => {
  it("removes the X-Auth header", () => {
    setAuthToken("to-remove");
    clearAuthToken();
    expect(http.defaults.headers.common["X-Auth"]).toBeUndefined();
  });

  it("is safe to call when no token is set", () => {
    expect(() => clearAuthToken()).not.toThrow();
  });
});
