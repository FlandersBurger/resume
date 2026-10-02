import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "../../client/components/LoginForm";
import { useFirebaseLogin } from "../../client/hooks/useFirebaseLogin";

jest.mock("../../client/hooks/useFirebaseLogin", () => ({ useFirebaseLogin: jest.fn() }));

const mockUseFirebaseLogin = useFirebaseLogin as jest.MockedFunction<typeof useFirebaseLogin>;

function makeLogin(overrides: Partial<ReturnType<typeof useFirebaseLogin>> = {}) {
  return {
    pending: false,
    error: null,
    clearError: jest.fn(),
    signInWithGoogle: jest.fn(),
    signInWithFacebook: jest.fn(),
    signInWithEmail: jest.fn(),
    registerWithEmail: jest.fn(),
    resetPassword: jest.fn().mockResolvedValue(true),
    ...overrides,
  } as ReturnType<typeof useFirebaseLogin>;
}

function renderForm(overrides: Partial<ReturnType<typeof useFirebaseLogin>> = {}) {
  const login = makeLogin(overrides);
  mockUseFirebaseLogin.mockReturnValue(login);
  render(<LoginForm />);
  return login;
}

describe("LoginForm", () => {
  beforeEach(() => jest.clearAllMocks());

  it("signs in with Google", async () => {
    const login = renderForm();
    await userEvent.click(screen.getByRole("button", { name: "Sign in with Google" }));
    expect(login.signInWithGoogle).toHaveBeenCalledTimes(1);
  });

  it("signs in with Facebook", async () => {
    const login = renderForm();
    await userEvent.click(screen.getByRole("button", { name: "Sign in with Facebook" }));
    expect(login.signInWithFacebook).toHaveBeenCalledTimes(1);
  });

  it("signs in with email and password", async () => {
    const login = renderForm();
    await userEvent.type(screen.getByLabelText("Email"), "a@b.com");
    await userEvent.type(screen.getByLabelText("Password"), "secret1");
    await userEvent.click(screen.getByRole("button", { name: "Sign in" }));
    expect(login.signInWithEmail).toHaveBeenCalledWith("a@b.com", "secret1");
  });

  it("registers with name, email and password", async () => {
    const login = renderForm();
    await userEvent.click(screen.getByRole("button", { name: "Create account" }));
    await userEvent.type(screen.getByLabelText("Name"), "  Laurent ");
    await userEvent.type(screen.getByLabelText("Email"), "a@b.com");
    await userEvent.type(screen.getByLabelText("Password"), "secret1");
    await userEvent.click(screen.getByRole("button", { name: "Create account" }));
    expect(login.registerWithEmail).toHaveBeenCalledWith("Laurent", "a@b.com", "secret1");
  });

  it("sends a password reset email and returns to sign in", async () => {
    const login = renderForm();
    await userEvent.click(screen.getByRole("button", { name: "Forgot password?" }));
    expect(screen.queryByLabelText("Password")).not.toBeInTheDocument();
    await userEvent.type(screen.getByLabelText("Email"), "a@b.com");
    await userEvent.click(screen.getByRole("button", { name: "Send reset email" }));
    expect(login.resetPassword).toHaveBeenCalledWith("a@b.com");
    expect(await screen.findByRole("button", { name: "Sign in" })).toBeInTheDocument();
  });

  it("stays on the reset form when the reset fails", async () => {
    renderForm({ resetPassword: jest.fn().mockResolvedValue(false) });
    await userEvent.click(screen.getByRole("button", { name: "Forgot password?" }));
    await userEvent.type(screen.getByLabelText("Email"), "a@b.com");
    await userEvent.click(screen.getByRole("button", { name: "Send reset email" }));
    expect(screen.getByRole("button", { name: "Send reset email" })).toBeInTheDocument();
  });

  it("shows the error message", () => {
    renderForm({ error: "Incorrect email or password." });
    expect(screen.getByRole("alert")).toHaveTextContent("Incorrect email or password.");
  });

  it("disables the buttons while pending", () => {
    renderForm({ pending: true });
    expect(screen.getByRole("button", { name: "Sign in with Google" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Sign in" })).toBeDisabled();
  });
});
