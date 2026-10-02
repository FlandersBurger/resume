import { FormEvent, useState } from "react";
import styled from "styled-components";
import { useFirebaseLogin } from "../hooks/useFirebaseLogin";
import TelegramLoginButton from "./TelegramLoginButton";

// Set by vite.config.ts define; false in production builds
declare const __SHOW_FACEBOOK_LOGIN__: boolean;

type Mode = "signIn" | "register" | "reset";

const ProviderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px 12px;
  border: 1px solid var(--border, #ccc);
  border-radius: 4px;
  background: var(--surface, #fff);
  color: var(--text, #333);
  font-weight: 500;

  &:hover:not(:disabled) {
    background: var(--surface-alt, #f5f5f5);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`;

const TelegramRow = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 15px 0;
  color: var(--text-muted, #999);
  font-size: 12px;
  text-transform: uppercase;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-top: 1px solid var(--border-soft, #ddd);
  }
`;

const LinkRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  font-size: 13px;

  button {
    padding: 0;
    border: 0;
    background: none;
    color: inherit;
    text-decoration: underline;
  }
`;

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden="true">
    <path
      fill="#EA4335"
      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
    />
    <path
      fill="#FBBC05"
      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
    />
    <path
      fill="#34A853"
      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      fill="#1877F2"
      d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z"
    />
  </svg>
);

const TITLES: Record<Mode, string> = {
  signIn: "Sign in with email",
  register: "Create account",
  reset: "Reset password",
};

export default function LoginForm({ onSuccess }: { onSuccess?: () => void }) {
  const login = useFirebaseLogin(onSuccess);
  const [mode, setMode] = useState<Mode>("signIn");
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function switchMode(next: Mode) {
    login.clearError();
    setMode(next);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (mode === "signIn") login.signInWithEmail(email, password);
    else if (mode === "register") login.registerWithEmail(displayName.trim(), email, password);
    else login.resetPassword(email).then((sent) => sent && setMode("signIn"));
  }

  return (
    <div>
      <ProviderButton type="button" onClick={login.signInWithGoogle} disabled={login.pending}>
        <GoogleIcon />
        Sign in with Google
      </ProviderButton>
      <TelegramRow>
        <TelegramLoginButton onAuth={login.signInWithTelegram} />
      </TelegramRow>
      {__SHOW_FACEBOOK_LOGIN__ && (
        <ProviderButton type="button" onClick={login.signInWithFacebook} disabled={login.pending}>
          <FacebookIcon />
          Sign in with Facebook
        </ProviderButton>
      )}

      <Divider>or</Divider>

      <form onSubmit={handleSubmit} aria-label={TITLES[mode]}>
        {mode === "register" && (
          <div className="form-group">
            <label htmlFor="login-name">Name</label>
            <input
              id="login-name"
              className="form-control"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              autoComplete="name"
              required
            />
          </div>
        )}
        <div className="form-group">
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>
        {mode !== "reset" && (
          <div className="form-group">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete={mode === "register" ? "new-password" : "current-password"}
              minLength={mode === "register" ? 6 : undefined}
              required
            />
          </div>
        )}

        {login.error && (
          <div className="alert alert-danger" role="alert">
            {login.error}
          </div>
        )}

        <button type="submit" className="btn btn-primary btn-block" disabled={login.pending}>
          {mode === "signIn" ? "Sign in" : mode === "register" ? "Create account" : "Send reset email"}
        </button>
      </form>

      <LinkRow>
        {mode === "signIn" ? (
          <>
            <button type="button" onClick={() => switchMode("register")}>
              Create account
            </button>
            <button type="button" onClick={() => switchMode("reset")}>
              Forgot password?
            </button>
          </>
        ) : (
          <button type="button" onClick={() => switchMode("signIn")}>
            Back to sign in
          </button>
        )}
      </LinkRow>
    </div>
  );
}
