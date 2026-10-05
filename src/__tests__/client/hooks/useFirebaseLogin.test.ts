import { act, renderHook } from "@testing-library/react";
import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useApp } from "../../../client/context/AppContext";
import { authenticate } from "../../../client/services/users";
import { getAuthErrorMessage, useFirebaseLogin } from "../../../client/hooks/useFirebaseLogin";
import { defaultContextValue } from "../../__mocks__/AppContextMock";

jest.mock("firebase/auth", () => ({
  GoogleAuthProvider: jest.fn(),
  signInWithPopup: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  sendPasswordResetEmail: jest.fn(),
  updateProfile: jest.fn(),
}));
jest.mock("../../../client/services/firebase", () => ({ auth: {} }));
jest.mock("../../../client/services/users", () => ({ authenticate: jest.fn() }));
jest.mock("../../../client/context/AppContext", () => ({ useApp: jest.fn() }));

const mockUseApp = useApp as jest.MockedFunction<typeof useApp>;
const mockAuthenticate = authenticate as jest.Mock;

const firebaseUser = {
  displayName: "Laurent",
  email: "a@b.com",
  photoURL: "https://example.com/p.png",
  emailVerified: true,
  getIdToken: jest.fn().mockResolvedValue("id-token"),
};

function setup() {
  const ctx = { ...defaultContextValue, setUser: jest.fn(), toast: jest.fn(), setLoginLoading: jest.fn() };
  mockUseApp.mockReturnValue(ctx);
  const onSuccess = jest.fn();
  const { result } = renderHook(() => useFirebaseLogin(onSuccess));
  return { result, ctx, onSuccess };
}

describe("useFirebaseLogin", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockAuthenticate.mockResolvedValue({ _id: "u1" });
  });

  it("authenticates with the backend after a popup sign-in", async () => {
    (signInWithPopup as jest.Mock).mockResolvedValue({ user: firebaseUser });
    const { result, ctx, onSuccess } = setup();

    await act(() => result.current.signInWithGoogle());

    expect(onSuccess).toHaveBeenCalled();
    expect(mockAuthenticate).toHaveBeenCalledWith({
      authType: "firebase",
      displayName: "Laurent",
      email: "a@b.com",
      photoURL: "https://example.com/p.png",
      emailVerified: true,
      idToken: "id-token",
    });
    expect(ctx.setUser).toHaveBeenCalledWith({ _id: "u1" });
    expect(ctx.toast).toHaveBeenCalledWith("Logged in");
    expect(ctx.setLoginLoading).toHaveBeenLastCalledWith(false);
  });

  it("signs in with email and password", async () => {
    (signInWithEmailAndPassword as jest.Mock).mockResolvedValue({ user: firebaseUser });
    const { result } = setup();

    await act(() => result.current.signInWithEmail("a@b.com", "secret1"));

    expect(signInWithEmailAndPassword).toHaveBeenCalledWith({}, "a@b.com", "secret1");
    expect(mockAuthenticate).toHaveBeenCalled();
  });

  it("sets the display name when registering", async () => {
    const newUser = { ...firebaseUser, displayName: null };
    (createUserWithEmailAndPassword as jest.Mock).mockResolvedValue({ user: newUser });
    const { result } = setup();

    await act(() => result.current.registerWithEmail("New Person", "a@b.com", "secret1"));

    expect(updateProfile).toHaveBeenCalledWith(newUser, { displayName: "New Person" });
    expect(mockAuthenticate).toHaveBeenCalledWith(expect.objectContaining({ displayName: "New Person" }));
  });

  it("reports a friendly error and does not authenticate on failure", async () => {
    (signInWithEmailAndPassword as jest.Mock).mockRejectedValue({ code: "auth/invalid-credential" });
    const { result, onSuccess } = setup();

    await act(() => result.current.signInWithEmail("a@b.com", "bad"));

    expect(result.current.error).toBe("Incorrect email or password.");
    expect(result.current.pending).toBe(false);
    expect(onSuccess).not.toHaveBeenCalled();
    expect(mockAuthenticate).not.toHaveBeenCalled();
  });

  it("ignores a popup closed by the user", async () => {
    (signInWithPopup as jest.Mock).mockRejectedValue({ code: "auth/popup-closed-by-user" });
    const { result } = setup();

    await act(() => result.current.signInWithGoogle());

    expect(result.current.error).toBeNull();
  });

  it("toasts when the backend rejects the login", async () => {
    (signInWithPopup as jest.Mock).mockResolvedValue({ user: firebaseUser });
    mockAuthenticate.mockRejectedValue(new Error("403"));
    const { result, ctx } = setup();

    await act(() => result.current.signInWithGoogle());

    expect(ctx.toast).toHaveBeenCalledWith("Login failed");
    expect(ctx.setUser).not.toHaveBeenCalled();
    expect(ctx.setLoginLoading).toHaveBeenLastCalledWith(false);
  });

  it("authenticates a Telegram widget login with the backend", async () => {
    const { result, ctx, onSuccess } = setup();
    const data = { id: 42, first_name: "Laurent", auth_date: 1, hash: "abc" };

    await act(() => result.current.signInWithTelegram(data));

    expect(onSuccess).toHaveBeenCalled();
    expect(mockAuthenticate).toHaveBeenCalledWith({ authType: "telegram", data });
    expect(ctx.setUser).toHaveBeenCalledWith({ _id: "u1" });
    expect(ctx.toast).toHaveBeenCalledWith("Logged in");
  });

  it("sends a password reset email and reports success", async () => {
    (sendPasswordResetEmail as jest.Mock).mockResolvedValue(undefined);
    const { result, ctx } = setup();

    let sent: boolean | undefined;
    await act(async () => {
      sent = await result.current.resetPassword("a@b.com");
    });

    expect(sent).toBe(true);
    expect(sendPasswordResetEmail).toHaveBeenCalledWith({}, "a@b.com");
    expect(ctx.toast).toHaveBeenCalledWith("Password reset email sent");
  });
});

describe("getAuthErrorMessage", () => {
  it("maps the account-exists error to guidance", () => {
    expect(getAuthErrorMessage({ code: "auth/account-exists-with-different-credential" })).toMatch(
      /Sign in with the method you used originally/,
    );
  });

  it("falls back to a generic message for unknown errors", () => {
    expect(getAuthErrorMessage(new Error("boom"))).toBe("Sign-in failed. Please try again.");
  });
});
