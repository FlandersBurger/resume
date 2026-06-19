import { createContext, useContext, useReducer, useCallback, ReactNode, useEffect, useState } from "react";
import axios from "axios";
import { getUser } from "../services/users";

export interface User {
  _id: string;
  username: string;
  displayName?: string;
  email?: string;
  photoURL?: string;
  admin?: boolean;
  telegramId?: string;
  birthDate?: string;
  flags?: string[];
}

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
  toasts: Toast[];
  themeCounter: number;
  showLogin: boolean;
  loginLoading: boolean;
  showChat: boolean;
  adminMode: boolean;
  isAdmin: boolean;
  toast: (message: string) => void;
  setUser: (user: User | null) => void;
  flipTheme: () => void;
  logout: () => void;
  openLogin: () => void;
  closeLogin: () => void;
  setLoginLoading: (v: boolean) => void;
  openChat: () => void;
  closeChat: () => void;
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
  const [adminMode, setAdminMode] = useState(() => window.localStorage.getItem("adminMode") !== "false");
  const [state, dispatch] = useReducer(reducer, {
    currentUser: null,
    toasts: [],
    themeCounter: 6,
  });

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
    window.localStorage.clear();
    delete axios.defaults.headers.common["X-Auth"];
    dispatch({ type: "SET_USER", user: null });
    import("../services/firebase").then(({ firebaseSignOut }) => firebaseSignOut().catch(() => {}));
  }, []);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser()
        .then((user) => dispatch({ type: "SET_USER", user }))
        .catch(() => window.localStorage.removeItem("token"));
    }
  }, []);

  const isAdmin = !!state.currentUser?.admin && adminMode;

  return (
    <AppContext.Provider
      value={{
        ...state,
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
        adminMode,
        isAdmin,
        toggleAdminMode,
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
