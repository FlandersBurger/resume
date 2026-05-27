import { ReactNode } from "react";
import { useApp } from "../../client/context/AppContext";

export type AppContextValue = ReturnType<typeof useApp>;

export const defaultContextValue: AppContextValue = {
  currentUser: null,
  toasts: [],
  themeCounter: 1,
  showLogin: false,
  loginLoading: false,
  toast: jest.fn(),
  setUser: jest.fn(),
  flipTheme: jest.fn(),
  logout: jest.fn(),
  openLogin: jest.fn(),
  closeLogin: jest.fn(),
  setLoginLoading: jest.fn(),
};

jest.mock("../../client/context/AppContext", () => ({
  useApp: jest.fn(),
}));

export function makeContextWrapper(overrides: Partial<AppContextValue> = {}) {
  void overrides;
  return function Wrapper({ children }: { children: ReactNode }) {
    return <>{children}</>;
  };
}
