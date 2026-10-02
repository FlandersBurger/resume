import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ maxWidth: 400, marginTop: 40 }}>
      <h2>Login</h2>
      <LoginForm onSuccess={() => navigate("/home")} />
    </div>
  );
}
