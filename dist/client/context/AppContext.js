"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useApp = exports.AppProvider = void 0;
const react_1 = require("react");
const axios_1 = __importDefault(require("axios"));
const firebase_1 = require("../services/firebase");
const users_1 = require("../services/users");
function reducer(state, action) {
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
const AppContext = (0, react_1.createContext)(null);
function AppProvider({ children }) {
    const [state, dispatch] = (0, react_1.useReducer)(reducer, {
        currentUser: null,
        toasts: [],
        themeCounter: 6,
    });
    const toast = (0, react_1.useCallback)((message) => {
        const id = Date.now();
        dispatch({ type: "ADD_TOAST", id, message });
        setTimeout(() => dispatch({ type: "REMOVE_TOAST", id }), 3000);
    }, []);
    const setUser = (0, react_1.useCallback)((user) => {
        dispatch({ type: "SET_USER", user });
    }, []);
    const flipTheme = (0, react_1.useCallback)(() => {
        dispatch({ type: "FLIP_THEME" });
    }, []);
    const logout = (0, react_1.useCallback)(() => {
        window.localStorage.clear();
        delete axios_1.default.defaults.headers.common["X-Auth"];
        dispatch({ type: "SET_USER", user: null });
        (0, firebase_1.firebaseSignOut)().catch(() => { });
    }, []);
    (0, react_1.useEffect)(() => {
        const token = window.localStorage.getItem("token");
        if (token) {
            (0, users_1.getUser)()
                .then((user) => dispatch({ type: "SET_USER", user }))
                .catch(() => window.localStorage.removeItem("token"));
        }
    }, []);
    return <AppContext.Provider value={{ ...state, toast, setUser, flipTheme, logout }}>{children}</AppContext.Provider>;
}
exports.AppProvider = AppProvider;
function useApp() {
    const ctx = (0, react_1.useContext)(AppContext);
    if (!ctx)
        throw new Error("useApp must be used inside AppProvider");
    return ctx;
}
exports.useApp = useApp;
//# sourceMappingURL=AppContext.js.map