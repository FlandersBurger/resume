import { useState } from "react";
import {
  AuthProvider,
  FacebookAuthProvider,
  GoogleAuthProvider,
  User as FirebaseUser,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { authenticate } from "../services/users";
import { useApp } from "../context/AppContext";

const ERROR_MESSAGES: Record<string, string> = {
  "auth/account-exists-with-different-credential":
    "An account already exists with this email. Sign in with the method you used originally.",
  "auth/email-already-in-use": "An account already exists with this email. Sign in instead.",
  "auth/invalid-credential": "Incorrect email or password.",
  "auth/invalid-email": "That email address is not valid.",
  "auth/missing-password": "Enter your password.",
  "auth/popup-blocked": "The sign-in popup was blocked by your browser. Allow popups and try again.",
  "auth/too-many-requests": "Too many attempts. Try again later.",
  "auth/user-disabled": "This account has been disabled.",
  "auth/user-not-found": "Incorrect email or password.",
  "auth/weak-password": "Password must be at least 6 characters.",
  "auth/wrong-password": "Incorrect email or password.",
};

// User dismissed the popup themselves; nothing to report
const SILENT_ERRORS = ["auth/popup-closed-by-user", "auth/cancelled-popup-request"];

export function getAuthErrorMessage(error: unknown): string | null {
  const code = (error as { code?: string })?.code ?? "";
  if (SILENT_ERRORS.includes(code)) return null;
  return ERROR_MESSAGES[code] ?? "Sign-in failed. Please try again.";
}

export function useFirebaseLogin(onSuccess?: () => void) {
  const { setUser, toast, setLoginLoading } = useApp();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function finishLogin(getPayload: () => Promise<object>) {
    onSuccess?.();
    setLoginLoading(true);
    try {
      const user = await authenticate(await getPayload());
      setUser(user as any);
      toast("Logged in");
    } catch {
      toast("Login failed");
    } finally {
      setLoginLoading(false);
    }
  }

  const completeSignIn = (firebaseUser: FirebaseUser, displayName = firebaseUser.displayName) =>
    finishLogin(async () => {
      const idToken = await firebaseUser.getIdToken(true);
      const { email, photoURL, emailVerified } = firebaseUser;
      return { authType: "firebase", displayName, email, photoURL, emailVerified, idToken };
    });

  async function run(action: () => Promise<void>): Promise<boolean> {
    setError(null);
    setPending(true);
    try {
      await action();
      return true;
    } catch (err) {
      setError(getAuthErrorMessage(err));
      return false;
    } finally {
      setPending(false);
    }
  }

  const signInWithProvider = (provider: AuthProvider) =>
    run(async () => {
      const { user } = await signInWithPopup(auth, provider);
      await completeSignIn(user);
    });

  return {
    pending,
    error,
    clearError: () => setError(null),
    signInWithGoogle: () => signInWithProvider(new GoogleAuthProvider()),
    signInWithFacebook: () => signInWithProvider(new FacebookAuthProvider()),
    // Widget data is verified server-side against the bot token
    signInWithTelegram: (data: object) => finishLogin(async () => ({ authType: "telegram", data })),
    signInWithEmail: (email: string, password: string) =>
      run(async () => {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        await completeSignIn(user);
      }),
    registerWithEmail: (displayName: string, email: string, password: string) =>
      run(async () => {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(user, { displayName });
        await completeSignIn(user, displayName);
      }),
    resetPassword: (email: string) =>
      run(async () => {
        await sendPasswordResetEmail(auth, email);
        toast("Password reset email sent");
      }),
  };
}
