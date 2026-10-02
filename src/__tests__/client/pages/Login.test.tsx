import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useApp } from "../../../client/context/AppContext";
import Login from "../../../client/pages/Login";
import { defaultContextValue, AppContextValue } from "../../__mocks__/AppContextMock";

jest.mock("../../../client/context/AppContext", () => ({ useApp: jest.fn() }));
jest.mock("../../../client/components/LoginForm", () => ({
  __esModule: true,
  default: () => <div data-testid="login-form" />,
}));
jest.mock("../../../client/services/users", () => ({
  authenticate: jest.fn(),
  createUser: jest.fn(),
}));

const mockUseApp = useApp as jest.MockedFunction<typeof useApp>;

function renderLogin(overrides: Partial<AppContextValue> = {}) {
  mockUseApp.mockReturnValue({ ...defaultContextValue, ...overrides });
  return render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>,
  );
}

describe("Login page", () => {
  beforeEach(() => jest.clearAllMocks());

  it("renders the Login heading", () => {
    renderLogin();
    expect(screen.getByRole("heading", { name: "Login" })).toBeInTheDocument();
  });

  it("renders the login form", () => {
    renderLogin();
    expect(screen.getByTestId("login-form")).toBeInTheDocument();
  });
});
