"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const AppContext_1 = require("../../../client/context/AppContext");
jest.mock("../../../client/services/firebase", () => ({
  firebaseSignOut: jest.fn().mockResolvedValue(undefined),
}));
jest.mock("../../../client/services/users", () => ({
  getUser: jest.fn().mockResolvedValue({ _id: "u1", username: "alice" }),
}));
jest.mock("axios", () => {
  const actual = jest.requireActual("axios");
  return { ...actual, defaults: { headers: { common: {} } } };
});
function wrapper({ children }) {
  return <AppContext_1.AppProvider>{children}</AppContext_1.AppProvider>;
}
describe("AppProvider / useApp", () => {
  it("throws when used outside AppProvider", () => {
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    expect(() => (0, react_1.renderHook)(() => (0, AppContext_1.useApp)())).toThrow(
      "useApp must be used inside AppProvider",
    );
    spy.mockRestore();
  });
  it("provides default state", () => {
    const { result } = (0, react_1.renderHook)(() => (0, AppContext_1.useApp)(), { wrapper });
    expect(result.current.currentUser).toBeNull();
    expect(result.current.toasts).toEqual([]);
    expect(result.current.showLogin).toBe(false);
    expect(result.current.loginLoading).toBe(false);
  });
  it("setUser updates currentUser", () => {
    const { result } = (0, react_1.renderHook)(() => (0, AppContext_1.useApp)(), { wrapper });
    (0, react_1.act)(() => {
      result.current.setUser({ _id: "u1", username: "alice" });
    });
    expect(result.current.currentUser).toEqual({ _id: "u1", username: "alice" });
  });
  it("setUser to null clears currentUser", () => {
    const { result } = (0, react_1.renderHook)(() => (0, AppContext_1.useApp)(), { wrapper });
    (0, react_1.act)(() => {
      result.current.setUser({ _id: "u1", username: "alice" });
    });
    (0, react_1.act)(() => {
      result.current.setUser(null);
    });
    expect(result.current.currentUser).toBeNull();
  });
  it("toast adds a toast message", () => {
    const { result } = (0, react_1.renderHook)(() => (0, AppContext_1.useApp)(), { wrapper });
    (0, react_1.act)(() => {
      result.current.toast("Hello!");
    });
    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].message).toBe("Hello!");
  });
  it("toast auto-removes after 3 seconds", () => {
    jest.useFakeTimers();
    const { result } = (0, react_1.renderHook)(() => (0, AppContext_1.useApp)(), { wrapper });
    (0, react_1.act)(() => {
      result.current.toast("Temporary");
    });
    expect(result.current.toasts).toHaveLength(1);
    (0, react_1.act)(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(result.current.toasts).toHaveLength(0);
    jest.useRealTimers();
  });
  it("multiple toasts stack and each removes independently", () => {
    jest.useFakeTimers();
    const { result } = (0, react_1.renderHook)(() => (0, AppContext_1.useApp)(), { wrapper });
    (0, react_1.act)(() => {
      result.current.toast("First");
      result.current.toast("Second");
    });
    expect(result.current.toasts).toHaveLength(2);
    (0, react_1.act)(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(result.current.toasts).toHaveLength(0);
    jest.useRealTimers();
  });
  it("flipTheme increments themeCounter from 6 to 1 (cycles 1-6)", () => {
    const { result } = (0, react_1.renderHook)(() => (0, AppContext_1.useApp)(), { wrapper });
    expect(result.current.themeCounter).toBe(6);
    (0, react_1.act)(() => {
      result.current.flipTheme();
    });
    expect(result.current.themeCounter).toBe(1);
    (0, react_1.act)(() => {
      result.current.flipTheme();
    });
    expect(result.current.themeCounter).toBe(2);
    for (let i = 0; i < 4; i++)
      (0, react_1.act)(() => {
        result.current.flipTheme();
      });
    expect(result.current.themeCounter).toBe(6);
    (0, react_1.act)(() => {
      result.current.flipTheme();
    });
    expect(result.current.themeCounter).toBe(1);
  });
  it("openLogin sets showLogin to true", () => {
    const { result } = (0, react_1.renderHook)(() => (0, AppContext_1.useApp)(), { wrapper });
    (0, react_1.act)(() => {
      result.current.openLogin();
    });
    expect(result.current.showLogin).toBe(true);
  });
  it("closeLogin sets showLogin to false", () => {
    const { result } = (0, react_1.renderHook)(() => (0, AppContext_1.useApp)(), { wrapper });
    (0, react_1.act)(() => {
      result.current.openLogin();
    });
    (0, react_1.act)(() => {
      result.current.closeLogin();
    });
    expect(result.current.showLogin).toBe(false);
  });
  it("setLoginLoading updates loginLoading", () => {
    const { result } = (0, react_1.renderHook)(() => (0, AppContext_1.useApp)(), { wrapper });
    (0, react_1.act)(() => {
      result.current.setLoginLoading(true);
    });
    expect(result.current.loginLoading).toBe(true);
    (0, react_1.act)(() => {
      result.current.setLoginLoading(false);
    });
    expect(result.current.loginLoading).toBe(false);
  });
  it("logout clears currentUser and localStorage", () => {
    localStorage.setItem("token", "abc");
    const { result } = (0, react_1.renderHook)(() => (0, AppContext_1.useApp)(), { wrapper });
    (0, react_1.act)(() => {
      result.current.setUser({ _id: "u1", username: "alice" });
    });
    (0, react_1.act)(() => {
      result.current.logout();
    });
    expect(result.current.currentUser).toBeNull();
    expect(localStorage.getItem("token")).toBeNull();
  });
});
//# sourceMappingURL=AppContext.test.js.map
