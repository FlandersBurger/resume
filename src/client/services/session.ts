import http, { setAuthToken, clearAuthToken } from "./http";
import { getUser, User } from "./users";

/**
 * The signed-in session: the site's JWT, kept in localStorage and sent as `X-Auth` on every
 * `http` request. Nothing else should read or write the token.
 */
const TOKEN_KEY = "token";

function startSession(token: string) {
  window.localStorage.setItem(TOKEN_KEY, token);
  setAuthToken(token);
}

function clearSession() {
  window.localStorage.removeItem(TOKEN_KEY);
  clearAuthToken();
}

// Put the stored token on `http` as soon as the app loads, before any page fetches.
const stored = window.localStorage.getItem(TOKEN_KEY);
if (stored) setAuthToken(stored);

/** Exchange a sign-in payload (Firebase or Telegram) for a session, and return the User. */
export async function signIn(payload: object): Promise<User> {
  const { data: token } = await http.post<string>("/api/users/authenticate", { user: payload });
  startSession(token);
  return getUser();
}

/** The User of the stored session, or null when there is none or the token no longer works. */
export async function restoreSession(): Promise<User | null> {
  if (!window.localStorage.getItem(TOKEN_KEY)) return null;
  try {
    return await getUser();
  } catch {
    clearSession();
    return null;
  }
}

/** End the session here and in Firebase. Other saved preferences (theme, admin mode) stay. */
export function signOut() {
  clearSession();
  import("./firebase").then(({ firebaseSignOut }) => firebaseSignOut()).catch(() => {});
}
