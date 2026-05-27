"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const react_router_dom_1 = require("react-router-dom");
const AppContext_1 = require("../../../client/context/AppContext");
const Login_1 = __importDefault(require("../../../client/pages/Login"));
const AppContextMock_1 = require("../../__mocks__/AppContextMock");
jest.mock("../../../client/context/AppContext", () => ({ useApp: jest.fn() }));
jest.mock("../../../client/hooks/useFirebaseUI", () => ({ useFirebaseUI: jest.fn() }));
jest.mock("../../../client/services/users", () => ({
  authenticate: jest.fn(),
  createUser: jest.fn(),
}));
const mockUseApp = AppContext_1.useApp;
function renderLogin(overrides = {}) {
  mockUseApp.mockReturnValue({ ...AppContextMock_1.defaultContextValue, ...overrides });
  return (0, react_1.render)(
    <react_router_dom_1.MemoryRouter>
      <Login_1.default />
    </react_router_dom_1.MemoryRouter>,
  );
}
describe("Login page", () => {
  beforeEach(() => jest.clearAllMocks());
  it("renders the Login heading", () => {
    renderLogin();
    expect(react_1.screen.getByRole("heading", { name: "Login" })).toBeInTheDocument();
  });
  it("renders the firebaseui auth container", () => {
    renderLogin();
    expect(document.getElementById("firebaseui-auth-container")).toBeInTheDocument();
  });
});
//# sourceMappingURL=Login.test.js.map
