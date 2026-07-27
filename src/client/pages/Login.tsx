import { useNavigate } from "react-router-dom";
import { useFirebaseUI } from "../hooks/useFirebaseUI";

export default function Login() {
  const navigate = useNavigate();

  useFirebaseUI("firebaseui-auth-container", true, () => navigate("/home"));

  return (
    <div className="container" style={{ maxWidth: 400, marginTop: 40 }}>
      <h2>Login</h2>
      <div id="firebaseui-auth-container" />
    </div>
  );
}
