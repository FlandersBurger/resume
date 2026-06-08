import { useEffect, useRef } from "react";
import * as firebaseui from "firebaseui";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { authenticate } from "../services/users";
import { useApp } from "../context/AppContext";

export function useFirebaseUI(containerId: string, active: boolean, onSuccess?: () => void) {
  const { setUser, toast, setLoginLoading } = useApp();
  const uiRef = useRef<firebaseui.auth.AuthUI | null>(null);

  useEffect(() => {
    if (!active) return;
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
    uiRef.current = ui;
    ui.start(`#${containerId}`, {
      callbacks: {
        signInSuccessWithAuthResult: (authResult) => {
          onSuccess?.();
          setLoginLoading(true);
          authResult.user.getIdToken(true).then((idToken: string) => {
            const { displayName, email, photoURL, emailVerified } = authResult.user;
            authenticate({
              authType: "firebase",
              displayName,
              email,
              photoURL,
              emailVerified,
              idToken,
              data: authResult.user,
            })
              .then((user) => {
                setUser(user as any);
                toast("Logged in");
                setLoginLoading(false);
              })
              .catch(() => {
                setLoginLoading(false);
                toast("Login failed");
              });
          });
          return false;
        },
        signInFailure: (error) => {
          console.error("FirebaseUI sign-in failure:", error);
          return Promise.resolve();
        },
      },
      signInFlow: "popup",
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      ],
    });
    return () => {
      uiRef.current?.reset();
    };
  }, [active, containerId]);
}
