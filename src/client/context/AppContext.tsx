import { createContext, useContext, useReducer, useCallback, ReactNode, useEffect, useState } from "react";
import type { User } from "../services/users";
import { restoreSession, signOut } from "../services/session";

export type { User };

interface Toast {
  id: number;
  message: string;
}

interface AppState {
  currentUser: User | null;
  toasts: Toast[];
  themeCounter: number;
}

type Action =
  | { type: "SET_USER"; user: User | null }
  | { type: "ADD_TOAST"; id: number; message: string }
  | { type: "REMOVE_TOAST"; id: number }
  | { type: "FLIP_THEME" };

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_USER":
      return { ...state, currentUser: action.user };
    case "ADD_TOAST":
      return { ...state, toasts: [...state.toasts, { id: action.id, message: action.message }] };
    case "REMOVE_TOAST":
      return { ...state, toasts: state.toasts.filter((t) => t.id !== action.id) };
    case "FLIP_THEME":
      return { ...state, themeCounter: state.themeCounter < 6 ? state.themeCounter + 1 : 1 };
    default:
      return state;
  }
}

interface AppContextValue {
  currentUser: User | null;
  /** False until the stored session has been checked; until then `currentUser` may still arrive. */
  sessionRestored: boolean;
  toasts: Toast[];
  themeCounter: number;
  showLogin: boolean;
  loginLoading: boolean;
  showChat: boolean;
  unreadChat: number;
  adminMode: boolean;
  isAdmin: boolean;
  darkMode: boolean;
  toast: (message: string) => void;
  setUser: (user: User | null) => void;
  flipTheme: () => void;
  toggleDarkMode: () => void;
  logout: () => void;
  openLogin: () => void;
  closeLogin: () => void;
  setLoginLoading: (v: boolean) => void;
  openChat: () => void;
  closeChat: () => void;
  setUnreadChat: (count: number) => void;
  toggleAdminMode: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [showLogin, setShowLogin] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const openLogin = useCallback(() => setShowLogin(true), []);
  const closeLogin = useCallback(() => setShowLogin(false), []);
  const [showChat, setShowChat] = useState(false);
  const openChat = useCallback(() => setShowChat(true), []);
  const closeChat = useCallback(() => setShowChat(false), []);
  const [unreadChat, setUnreadChat] = useState(0);
  const [sessionRestored, setSessionRestored] = useState(false);
  const [adminMode, setAdminMode] = useState(() => window.localStorage.getItem("adminMode") !== "false");
  const [darkMode, setDarkMode] = useState(() => {
    const stored = window.localStorage.getItem("darkMode");
    if (stored !== null) return stored === "true";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  });
  const [state, dispatch] = useReducer(reducer, {
    currentUser: null,
    toasts: [],
    themeCounter: 6,
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prev) => {
      const next = !prev;
      window.localStorage.setItem("darkMode", String(next));
      return next;
    });
  }, []);

  const toast = useCallback((message: string) => {
    const id = Date.now();
    dispatch({ type: "ADD_TOAST", id, message });
    setTimeout(() => dispatch({ type: "REMOVE_TOAST", id }), 3000);
  }, []);

  const setUser = useCallback((user: User | null) => {
    dispatch({ type: "SET_USER", user });
  }, []);

  const flipTheme = useCallback(() => {
    dispatch({ type: "FLIP_THEME" });
  }, []);

  const toggleAdminMode = useCallback(() => {
    setAdminMode((prev) => {
      const next = !prev;
      window.localStorage.setItem("adminMode", String(next));
      return next;
    });
  }, []);

  const logout = useCallback(() => {
    signOut();
    dispatch({ type: "SET_USER", user: null });
  }, []);

  useEffect(() => {
    restoreSession().then((user) => {
      if (user) dispatch({ type: "SET_USER", user });
      setSessionRestored(true);
    });
  }, []);

  const isAdmin = !!state.currentUser?.admin && adminMode;

  return (
    <AppContext.Provider
      value={{
        ...state,
        sessionRestored,
        showLogin,
        loginLoading,
        setLoginLoading,
        toast,
        setUser,
        flipTheme,
        logout,
        openLogin,
        closeLogin,
        showChat,
        openChat,
        closeChat,
        unreadChat,
        setUnreadChat,
        adminMode,
        isAdmin,
        toggleAdminMode,
        darkMode,
        toggleDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
