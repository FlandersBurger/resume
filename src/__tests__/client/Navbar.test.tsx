import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useApp } from "../../client/context/AppContext";
import { Navbar } from "../../client/components/Navbar";
import { defaultContextValue, AppContextValue } from "../__mocks__/AppContextMock";

jest.mock("../../client/context/AppContext", () => ({ useApp: jest.fn() }));
jest.mock("../../client/services/firebase", () => ({ firebaseSignOut: jest.fn() }));

const mockUseApp = useApp as jest.MockedFunction<typeof useApp>;

function renderNavbar(overrides: Partial<AppContextValue> = {}) {
  mockUseApp.mockReturnValue({ ...defaultContextValue, ...overrides });
  return render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );
}

describe("Navbar", () => {
  it("renders the brand link", () => {
    renderNavbar();
    expect(screen.getByText("Resume")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    renderNavbar();
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });

  it("shows Login link when no user is logged in", () => {
    renderNavbar({ currentUser: null, loginLoading: false });
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  it("shows a spinner when loginLoading is true", () => {
    renderNavbar({ currentUser: null, loginLoading: true });
    // spinner replaces "Login" text
    expect(screen.queryByText("Login")).not.toBeInTheDocument();
    expect(document.querySelector(".fa-spinner")).toBeInTheDocument();
  });

  it("shows profile dropdown when a user is logged in", () => {
    renderNavbar({
      currentUser: { _id: "1", username: "alice", displayName: "Alice" },
    });
    expect(screen.getByText("Profile")).toBeInTheDocument();
    expect(screen.getByText("Logout")).toBeInTheDocument();
  });

  it("shows Ten Things admin menu for admin users", () => {
    renderNavbar({
      currentUser: { _id: "1", username: "alice", admin: true },
    });
    expect(screen.getByText("Lists")).toBeInTheDocument();
    expect(screen.getByText("Play")).toBeInTheDocument();
    expect(screen.getByText("Admin")).toBeInTheDocument();
  });

  it("shows Ten Things link for non-admin users", () => {
    renderNavbar({ currentUser: null });
    expect(screen.getByText("Ten Things")).toBeInTheDocument();
  });

  it("shows Contact link (not dropdown) when not logged in", () => {
    renderNavbar({ currentUser: null });
    // Without a user the Contact link is a plain <li>, not a dropdown
    const contactLinks = screen.getAllByText("Contact");
    expect(contactLinks.length).toBeGreaterThan(0);
  });

  it("calls openLogin when Login is clicked", async () => {
    const openLogin = jest.fn();
    renderNavbar({ currentUser: null, loginLoading: false, openLogin });
    screen.getByText("Login").click();
    expect(openLogin).toHaveBeenCalledTimes(1);
  });
});
