"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultContextValue = void 0;
exports.makeContextWrapper = makeContextWrapper;
exports.defaultContextValue = {
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
function makeContextWrapper(overrides = {}) {
  void overrides;
  return function Wrapper({ children }) {
    return <>{children}</>;
  };
}
//# sourceMappingURL=AppContextMock.js.map
