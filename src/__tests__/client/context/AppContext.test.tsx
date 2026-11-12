import { renderHook, act } from "@testing-library/react";
import { AppProvider, useApp } from "../../../client/context/AppContext";

import { restoreSession, signOut } from "../../../client/services/session";

jest.mock("../../../client/services/session", () => ({
  restoreSession: jest.fn().mockResolvedValue(null),
  signOut: jest.fn(),
}));

function wrapper({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}

describe("AppProvider / useApp", () => {
  it("throws when used outside AppProvider", () => {
    // Suppress the expected error in the console during this test
    const spy = jest.spyOn(console, "error").mockImplementation(() => {});
    expect(() => renderHook(() => useApp())).toThrow("useApp must be used inside AppProvider");
    spy.mockRestore();
  });

  it("provides default state", () => {
    const { result } = renderHook(() => useApp(), { wrapper });
    expect(result.current.currentUser).toBeNull();
    expect(result.current.toasts).toEqual([]);
    expect(result.current.showLogin).toBe(false);
    expect(result.current.loginLoading).toBe(false);
  });

  it("setUser updates currentUser", () => {
    const { result } = renderHook(() => useApp(), { wrapper });
    act(() => {
      result.current.setUser({ _id: "u1", username: "alice" });
    });
    expect(result.current.currentUser).toEqual({ _id: "u1", username: "alice" });
  });

  it("setUser to null clears currentUser", () => {
    const { result } = renderHook(() => useApp(), { wrapper });
    act(() => {
      result.current.setUser({ _id: "u1", username: "alice" });
    });
    act(() => {
      result.current.setUser(null);
    });
    expect(result.current.currentUser).toBeNull();
  });

  it("toast adds a toast message", () => {
    const { result } = renderHook(() => useApp(), { wrapper });
    act(() => {
      result.current.toast("Hello!");
    });
    expect(result.current.toasts).toHaveLength(1);
    expect(result.current.toasts[0].message).toBe("Hello!");
  });

  it("toast auto-removes after 3 seconds", () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useApp(), { wrapper });
    act(() => {
      result.current.toast("Temporary");
    });
    expect(result.current.toasts).toHaveLength(1);
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(result.current.toasts).toHaveLength(0);
    jest.useRealTimers();
  });

  it("multiple toasts stack and each removes independently", () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useApp(), { wrapper });
    act(() => {
      result.current.toast("First");
      result.current.toast("Second");
    });
    expect(result.current.toasts).toHaveLength(2);
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    expect(result.current.toasts).toHaveLength(0);
    jest.useRealTimers();
  });

  it("flipTheme increments themeCounter from 6 to 1 (cycles 1-6)", () => {
    const { result } = renderHook(() => useApp(), { wrapper });
    // initial is 6
    expect(result.current.themeCounter).toBe(6);
    act(() => {
      result.current.flipTheme();
    });
    expect(result.current.themeCounter).toBe(1);
    act(() => {
      result.current.flipTheme();
    });
    expect(result.current.themeCounter).toBe(2);
    // advance to 6
    for (let i = 0; i < 4; i++)
      act(() => {
        result.current.flipTheme();
      });
    expect(result.current.themeCounter).toBe(6);
    // wraps back to 1
    act(() => {
      result.current.flipTheme();
    });
    expect(result.current.themeCounter).toBe(1);
  });

  it("openLogin sets showLogin to true", () => {
    const { result } = renderHook(() => useApp(), { wrapper });
    act(() => {
      result.current.openLogin();
    });
    expect(result.current.showLogin).toBe(true);
  });

  it("closeLogin sets showLogin to false", () => {
    const { result } = renderHook(() => useApp(), { wrapper });
    act(() => {
      result.current.openLogin();
    });
    act(() => {
      result.current.closeLogin();
    });
    expect(result.current.showLogin).toBe(false);
  });

  it("setLoginLoading updates loginLoading", () => {
    const { result } = renderHook(() => useApp(), { wrapper });
    act(() => {
      result.current.setLoginLoading(true);
    });
    expect(result.current.loginLoading).toBe(true);
    act(() => {
      result.current.setLoginLoading(false);
    });
    expect(result.current.loginLoading).toBe(false);
  });

  it("restores the stored session on load", async () => {
    (restoreSession as jest.Mock).mockResolvedValueOnce({ _id: "u1", username: "alice" });
    const { result } = renderHook(() => useApp(), { wrapper });
    await act(async () => {});
    expect(result.current.currentUser).toEqual({ _id: "u1", username: "alice" });
  });

  it("logout ends the session and clears currentUser", () => {
    const { result } = renderHook(() => useApp(), { wrapper });
    act(() => {
      result.current.setUser({ _id: "u1", username: "alice" });
    });
    act(() => {
      result.current.logout();
    });
    expect(result.current.currentUser).toBeNull();
    expect(signOut).toHaveBeenCalled();
  });
});
