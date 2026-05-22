import { useState } from "react";
import { useApp } from "../context/AppContext";
import { updateUser, changeUsername, changePassword } from "../api/users";

export default function Profile() {
  const { currentUser, setUser, toast } = useApp();
  const [usernameToggle, setUsernameToggle] = useState(true);
  const [newUsername, setNewUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  if (!currentUser) return <h1 className="text-danger">You are not logged in</h1>;

  const handleChangeUsername = async () => {
    try {
      const updated = await changeUsername(currentUser._id, newUsername);
      setUser(updated as any); toast("Username updated"); setUsernameToggle(true);
    } catch { toast("Failed to update username"); }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await changePassword(currentUser._id, oldPassword, newPassword);
      toast("Password updated"); setOldPassword(""); setNewPassword("");
    } catch { toast("Failed to update password"); }
  };

  return (
    <div className="container" id="profile-page">
      <h1>Profile</h1>
      <div className="form-group">
        {usernameToggle ? (
          <div className="input-group">
            <span className="input-group-btn">
              <button onClick={() => setUsernameToggle(false)} className="btn btn-default">
                <i className="fa fa-pencil" />
              </button>
            </span>
            <input disabled className="form-control" type="text" placeholder={currentUser.username} />
          </div>
        ) : (
          <div className="input-group">
            <span className="input-group-btn">
              <button onClick={handleChangeUsername} className="btn btn-default">
                <i className="fa fa-save" />
              </button>
              <button onClick={() => setUsernameToggle(true)} className="btn btn-default">
                <i className="fa fa-times" />
              </button>
            </span>
            <input className="form-control" type="text" value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)} />
          </div>
        )}
      </div>
      <form onSubmit={handleChangePassword}>
        <h4>Change Password</h4>
        <div className="form-group">
          <input className="form-control" type="password" placeholder="Current password"
            value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <input className="form-control" type="password" placeholder="New password"
            value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-default">Change Password</button>
      </form>
    </div>
  );
}
