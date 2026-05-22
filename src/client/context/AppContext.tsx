import { createContext, useContext, useReducer, useCallback, ReactNode } from "react";
import axios from "axios";

export interface User {
  _id: string;
  username: string;
  email?: string;
  admin?: boolean;
  telegramId?: string;
  birthDate?: string;
  flags?: { name: string; flag: string }[];
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
  | { type: "ADD_TOAST"; message: string }
  | { type: "REMOVE_TOAST"; id: number }
  | { type: "FLIP_THEME" };

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "SET_USER":
      return { ...state, currentUser: action.user };
    case "ADD_TOAST": {
      const id = Date.now();
      return { ...state, toasts: [...state.toasts, { id, message: action.message }] };
    }
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
  toast: (message: string) => void;
  setUser: (user: User | null) => void;
  flipTheme: () => void;
  logout: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    currentUser: null,
    toasts: [],
    themeCounter: 6,
  });

  const toast = useCallback((message: string) => {
    const id = Date.now();
    dispatch({ type: "ADD_TOAST", message });
    setTimeout(() => dispatch({ type: "REMOVE_TOAST", id }), 3000);
  }, []);

  const setUser = useCallback((user: User | null) => {
    dispatch({ type: "SET_USER", user });
  }, []);

  const flipTheme = useCallback(() => {
    dispatch({ type: "FLIP_THEME" });
  }, []);

  const logout = useCallback(() => {
    window.localStorage.clear();
    delete axios.defaults.headers.common["X-Auth"];
    dispatch({ type: "SET_USER", user: null });
  }, []);

  return (
    <AppContext.Provider value={{ ...state, toast, setUser, flipTheme, logout }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used inside AppProvider");
  return ctx;
}
