import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", marginTop: 60 }}>
      <h1>404 - Page Not Found</h1>
      <Link to="/home">Go Home</Link>
    </div>
  );
}
