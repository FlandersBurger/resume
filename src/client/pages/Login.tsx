import { useState } from "react";
import { authenticate, createUser } from "../api/users";
import { useApp } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setUser, toast } = useApp();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Username"
            value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="form-group">
          <input className="form-control" type="password" placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          {isRegister ? "Create Account" : "Login"}
        </button>
      </form>
      <p style={{ marginTop: 12 }}>
        {isRegister ? "Already have an account? " : "Don't have an account? "}
        <a onClick={() => setIsRegister(!isRegister)} style={{ cursor: "pointer" }}>
          {isRegister ? "Login" : "Register"}
        </a>
      </p>
    </div>
  );
}
