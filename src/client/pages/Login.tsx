import { useState } from "react";
import { authenticate, createUser } from "../services/users";
import { useApp } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useFirebaseUI } from "../hooks/useFirebaseUI";

export default function Login() {
  const { setUser, toast } = useApp();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useFirebaseUI("firebaseui-auth-container", true, () => navigate("/home"));

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
