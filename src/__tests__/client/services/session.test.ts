jest.mock("../../../client/services/users", () => ({ getUser: jest.fn() }));
jest.mock("../../../client/services/firebase", () => ({ firebaseSignOut: jest.fn().mockResolvedValue(undefined) }));

const user = { _id: "u1", username: "alice" };

/** Load the session module fresh, as the app does on page load, with the modules it talks to. */
function load() {
  let loaded!: {
    session: typeof import("../../../client/services/session");
    http: typeof import("../../../client/services/http").default;
    getUser: jest.Mock;
    firebaseSignOut: jest.Mock;
  };
  jest.isolateModules(() => {
    loaded = {
      session: require("../../../client/services/session"),
      http: require("../../../client/services/http").default,
      getUser: require("../../../client/services/users").getUser,
      firebaseSignOut: require("../../../client/services/firebase").firebaseSignOut,
    };
  });
  const header = () => loaded.http.defaults.headers.common["X-Auth"];
  return { ...loaded, header };
}

beforeEach(() => {
  localStorage.clear();
});

describe("on page load", () => {
  it("sends the stored token with every request", () => {
    localStorage.setItem("token", "stored");
    expect(load().header()).toBe("stored");
  });

  it("sends no token when there is none", () => {
    expect(load().header()).toBeUndefined();
  });
});

describe("signIn", () => {
  it("stores the token, sends it with every request, and returns the User", async () => {
    const { session, http, getUser, header } = load();
    const post = jest.spyOn(http, "post").mockResolvedValueOnce({ data: "jwt" });
    getUser.mockResolvedValueOnce(user);

    await expect(session.signIn({ authType: "telegram" })).resolves.toEqual(user);
    expect(post).toHaveBeenCalledWith("/api/users/authenticate", { user: { authType: "telegram" } });
    expect(localStorage.getItem("token")).toBe("jwt");
    expect(header()).toBe("jwt");
  });
});

describe("restoreSession", () => {
  it("returns null without a request when there is no token", async () => {
    const { session, getUser } = load();
    await expect(session.restoreSession()).resolves.toBeNull();
    expect(getUser).not.toHaveBeenCalled();
  });

  it("returns the User of a working token", async () => {
    localStorage.setItem("token", "good");
    const { session, getUser, header } = load();
    getUser.mockResolvedValueOnce(user);
    await expect(session.restoreSession()).resolves.toEqual(user);
    expect(header()).toBe("good");
  });

  it("ends the session when the token no longer works", async () => {
    localStorage.setItem("token", "expired");
    const { session, getUser, header } = load();
    getUser.mockRejectedValueOnce(new Error("401"));
    await expect(session.restoreSession()).resolves.toBeNull();
    expect(localStorage.getItem("token")).toBeNull();
    expect(header()).toBeUndefined();
  });
});

describe("signOut", () => {
  it("stops sending the token and forgets it, but keeps other preferences", () => {
    localStorage.setItem("token", "abc");
    localStorage.setItem("darkMode", "true");
    const { session, header } = load();
    session.signOut();
    expect(header()).toBeUndefined();
    expect(localStorage.getItem("token")).toBeNull();
    expect(localStorage.getItem("darkMode")).toBe("true");
  });

  it("signs out of Firebase too", async () => {
    const { session, firebaseSignOut } = load();
    session.signOut();
    await new Promise((r) => setTimeout(r, 0));
    expect(firebaseSignOut).toHaveBeenCalled();
  });
});
