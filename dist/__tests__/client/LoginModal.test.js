"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const user_event_1 = __importDefault(require("@testing-library/user-event"));
const AppContext_1 = require("../../client/context/AppContext");
const LoginModal_1 = __importDefault(require("../../client/components/LoginModal"));
const AppContextMock_1 = require("../__mocks__/AppContextMock");
jest.mock("../../client/context/AppContext", () => ({ useApp: jest.fn() }));
jest.mock("../../client/hooks/useFirebaseUI", () => ({
  useFirebaseUI: jest.fn(),
}));
const mockUseApp = AppContext_1.useApp;
function renderLoginModal(overrides = {}) {
  mockUseApp.mockReturnValue({ ...AppContextMock_1.defaultContextValue, ...overrides });
  return (0, react_1.render)(<LoginModal_1.default />);
}
describe("LoginModal", () => {
  it("renders nothing when showLogin is false", () => {
    const { container } = renderLoginModal({ showLogin: false });
    expect(container).toBeEmptyDOMElement();
  });
  it("renders the modal when showLogin is true", () => {
    renderLoginModal({ showLogin: true });
    expect(react_1.screen.getByRole("dialog")).toBeInTheDocument();
    expect(react_1.screen.getByText("Login")).toBeInTheDocument();
  });
  it("renders the firebaseui container element", () => {
    renderLoginModal({ showLogin: true });
    expect(document.getElementById("firebaseui-modal-container")).toBeInTheDocument();
  });
  it("calls closeLogin when the backdrop is clicked", async () => {
    const closeLogin = jest.fn();
    renderLoginModal({ showLogin: true, closeLogin });
    await user_event_1.default.click(document.querySelector(".modal-backdrop"));
    expect(closeLogin).toHaveBeenCalledTimes(1);
  });
  it("calls closeLogin when the × button is clicked", async () => {
    const closeLogin = jest.fn();
    renderLoginModal({ showLogin: true, closeLogin });
    await user_event_1.default.click(react_1.screen.getByLabelText("Close"));
    expect(closeLogin).toHaveBeenCalledTimes(1);
  });
});
//# sourceMappingURL=LoginModal.test.js.map
