import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { useApp } from "../../../client/context/AppContext";
import TenThingsLayout from "../../../client/pages/tenthings/TenThingsLayout";
import { defaultContextValue, AppContextValue } from "../../__mocks__/AppContextMock";

jest.mock("../../../client/context/AppContext", () => ({ useApp: jest.fn() }));

const mockUseApp = useApp as jest.MockedFunction<typeof useApp>;

function renderLayout(path: string, overrides: Partial<AppContextValue> = {}) {
  mockUseApp.mockReturnValue({ ...defaultContextValue, ...overrides });
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route element={<TenThingsLayout />}>
          <Route path="/tenthings" element={<p>home</p>} />
          <Route path="/tenthings-game/:gameId" element={<p>game</p>} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );
}

const tabNames = () => screen.getAllByRole("link").map((a) => a.textContent);

describe("TenThingsLayout", () => {
  it("shows only public tabs to anonymous visitors", () => {
    renderLayout("/tenthings", { currentUser: null, isAdmin: false });
    expect(tabNames()).toEqual(["Overview", "Lists"]);
    expect(screen.getByText("home")).toBeInTheDocument();
  });

  it("adds Play, Games and Stats for logged-in players", () => {
    renderLayout("/tenthings", { currentUser: { _id: "1", username: "bob" }, isAdmin: false });
    expect(tabNames()).toEqual(["Overview", "Play", "Lists", "Games", "Stats"]);
  });

  it("adds admin tabs for admins", () => {
    renderLayout("/tenthings", { currentUser: { _id: "1", username: "alice", admin: true }, isAdmin: true });
    expect(tabNames()).toEqual(["Overview", "Play", "Lists", "Games", "Stats", "Admin", "Sass"]);
  });

  it("marks the Games tab active on a specific game", () => {
    renderLayout("/tenthings-game/123", { currentUser: { _id: "1", username: "bob" }, isAdmin: false });
    expect(screen.getByText("Games")).toHaveClass("active");
    expect(screen.getByText("Overview")).not.toHaveClass("active");
  });
});
