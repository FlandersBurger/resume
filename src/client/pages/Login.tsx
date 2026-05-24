import { useState, useEffect, useRef } from "react";
import { authenticate, createUser } from "../services/users";
import { auth } from "../services/firebase";
import { useApp } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import * as firebaseui from "firebaseui";
import firebase from "firebase/compat/app";

export default function Login() {
  const { setUser, toast } = useApp();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const uiRef = useRef<firebaseui.auth.AuthUI | null>(null);

  useEffect(() => {
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
    uiRef.current = ui;
    ui.start("#firebaseui-auth-container", {
      callbacks: {
        signInSuccessWithAuthResult: (authResult) => {
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
                navigate("/home");
              })
              .catch(() => toast("Login failed"));
          });
          return false;
        },
        signInFailure: (error) => {
          console.error("FirebaseUI sign-in failure:", error);
          return Promise.resolve();
        },
      },
      signInFlow: "popup",
      signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.FacebookAuthProvider.PROVIDER_ID],
    });
    return () => {
      ui.reset();
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      let user;
      if (isRegister) {
        user = await createUser(username, password);
      } else {
        user = await authenticate({ authType: "password", username, password });
      }
      setUser(user as any);
      toast(isRegister ? "Account created" : "Logged in");
      navigate("/home");
    } catch {
      toast(isRegister ? "Registration failed" : "Login failed");
    }
  };

  return (
    <div className="container" style={{ maxWidth: 400, marginTop: 40 }}>
      <h2>{isRegister ? "Register" : "Login"}</h2>

      <div id="firebaseui-auth-container" />
    </div>
  );
}
