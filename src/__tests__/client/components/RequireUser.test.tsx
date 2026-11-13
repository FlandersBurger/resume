import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { useApp } from "../../../client/context/AppContext";
import { RequireAdmin, RequireUser } from "../../../client/components/RequireUser";
import { defaultContextValue } from "../../__mocks__/AppContextMock";

jest.mock("../../../client/context/AppContext", () => ({ useApp: jest.fn() }));

const ann = { _id: "u1", username: "ann" };
const asApp = (value: Partial<typeof defaultContextValue>) =>
  (useApp as jest.Mock).mockReturnValue({ ...defaultContextValue, ...value });

describe("RequireUser", () => {
  it("shows the page to a signed-in User", () => {
    asApp({ currentUser: ann });
    render(<RequireUser>secret</RequireUser>);
    expect(screen.getByText("secret")).toBeInTheDocument();
  });

  it("shows nothing while the stored session is still being checked", () => {
    asApp({ currentUser: null, sessionRestored: false });
    const { container } = render(<RequireUser message="Log in to play.">secret</RequireUser>);
    expect(container).toBeEmptyDOMElement();
  });

  it("asks a signed-out visitor to log in, and opens the login", () => {
    const openLogin = jest.fn();
    asApp({ currentUser: null, openLogin });
    render(<RequireUser message="Log in to play.">secret</RequireUser>);
    expect(screen.queryByText("secret")).not.toBeInTheDocument();
    expect(screen.getByText("Log in to play.")).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /Log in/ }));
    expect(openLogin).toHaveBeenCalled();
  });

  it("guards nested routes when given no children", () => {
    asApp({ currentUser: ann });
    render(
      <MemoryRouter initialEntries={["/game"]}>
        <Routes>
          <Route element={<RequireUser />}>
            <Route path="/game" element={<p>the game</p>} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );
    expect(screen.getByText("the game")).toBeInTheDocument();
  });
});

describe("RequireAdmin", () => {
  it("shows the page to an admin", () => {
    asApp({ currentUser: { ...ann, admin: true }, isAdmin: true });
    render(<RequireAdmin>panel</RequireAdmin>);
    expect(screen.getByText("panel")).toBeInTheDocument();
  });

  it("shows nothing while the stored session is still being checked", () => {
    asApp({ currentUser: null, sessionRestored: false });
    const { container } = render(<RequireAdmin>panel</RequireAdmin>);
    expect(container).toBeEmptyDOMElement();
  });

  it("turns away a User who isn't an admin", () => {
    asApp({ currentUser: ann, isAdmin: false });
    render(<RequireAdmin>panel</RequireAdmin>);
    expect(screen.queryByText("panel")).not.toBeInTheDocument();
    expect(screen.getByText("Admin only")).toBeInTheDocument();
  });
});
