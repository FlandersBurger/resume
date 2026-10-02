import { useApp } from "../context/AppContext";
import LoginForm from "./LoginForm";

export default function LoginModal() {
  const { showLogin, closeLogin } = useApp();

  if (!showLogin) return null;

  return (
    <>
      <div className="modal-backdrop fade in" style={{ zIndex: 1040 }} onClick={closeLogin} />
      <div
        className="modal fade in"
        style={{ display: "block", zIndex: 1050, overflowY: "auto" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-modal-title"
        onClick={(e) => e.target === e.currentTarget && closeLogin()}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={closeLogin} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title" id="login-modal-title">
                Login
              </h4>
            </div>
            <div className="modal-body">
              <LoginForm onSuccess={closeLogin} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
