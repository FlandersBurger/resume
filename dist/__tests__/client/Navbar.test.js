"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@testing-library/react");
const react_router_dom_1 = require("react-router-dom");
const AppContext_1 = require("../../client/context/AppContext");
const Navbar_1 = require("../../client/components/Navbar");
const AppContextMock_1 = require("../__mocks__/AppContextMock");
jest.mock("../../client/context/AppContext", () => ({ useApp: jest.fn() }));
jest.mock("../../client/services/firebase", () => ({ firebaseSignOut: jest.fn() }));
const mockUseApp = AppContext_1.useApp;
function renderNavbar(overrides = {}) {
  mockUseApp.mockReturnValue({ ...AppContextMock_1.defaultContextValue, ...overrides });
  return (0, react_1.render)(
    <react_router_dom_1.MemoryRouter>
      <Navbar_1.Navbar />
    </react_router_dom_1.MemoryRouter>,
  );
}
describe("Navbar", () => {
  it("renders the brand link", () => {
    renderNavbar();
    expect(react_1.screen.getByText("Resume")).toBeInTheDocument();
  });
  it("renders navigation links", () => {
    renderNavbar();
    expect(react_1.screen.getByText("Experience")).toBeInTheDocument();
    expect(react_1.screen.getByText("Skills")).toBeInTheDocument();
  });
  it("shows Login link when no user is logged in", () => {
    renderNavbar({ currentUser: null, loginLoading: false });
    expect(react_1.screen.getByText("Login")).toBeInTheDocument();
  });
  it("shows a spinner when loginLoading is true", () => {
    renderNavbar({ currentUser: null, loginLoading: true });
    expect(react_1.screen.queryByText("Login")).not.toBeInTheDocument();
    expect(document.querySelector(".fa-spinner")).toBeInTheDocument();
  });
  it("shows profile dropdown when a user is logged in", () => {
    renderNavbar({
      currentUser: { _id: "1", username: "alice", displayName: "Alice" },
    });
    expect(react_1.screen.getByText("Profile")).toBeInTheDocument();
    expect(react_1.screen.getByText("Logout")).toBeInTheDocument();
  });
  it("shows Ten Things admin menu for admin users", () => {
    renderNavbar({
      currentUser: { _id: "1", username: "alice", admin: true },
    });
    expect(react_1.screen.getByText("Lists")).toBeInTheDocument();
    expect(react_1.screen.getByText("Play")).toBeInTheDocument();
    expect(react_1.screen.getByText("Admin")).toBeInTheDocument();
  });
  it("shows Ten Things link for non-admin users", () => {
    renderNavbar({ currentUser: null });
    expect(react_1.screen.getByText("Ten Things")).toBeInTheDocument();
  });
  it("shows Contact link (not dropdown) when not logged in", () => {
    renderNavbar({ currentUser: null });
    const contactLinks = react_1.screen.getAllByText("Contact");
    expect(contactLinks.length).toBeGreaterThan(0);
  });
  it("calls openLogin when Login is clicked", async () => {
    const openLogin = jest.fn();
    renderNavbar({ currentUser: null, loginLoading: false, openLogin });
    react_1.screen.getByText("Login").click();
    expect(openLogin).toHaveBeenCalledTimes(1);
  });
});
//# sourceMappingURL=Navbar.test.js.map
