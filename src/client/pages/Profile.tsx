import { useState, useEffect } from "react";
import { useApp } from "../context/AppContext";
import { updateUser, changeUsername, changePassword } from "../services/users";

export default function Profile() {
  const { currentUser, setUser, toast } = useApp();
  const [usernameToggle, setUsernameToggle] = useState(true);
  const [newUsername, setNewUsername] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [flags, setFlags] = useState<string[]>([]);
  const [allCountries, setAllCountries] = useState<{ code: string; name: string }[]>([]);
  const [flagSearch, setFlagSearch] = useState("");
  const [flagDropdownOpen, setFlagDropdownOpen] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setBirthDate(currentUser.birthDate ? new Date(currentUser.birthDate).toISOString().slice(0, 10) : "");
      // stored values may be "flag-be" (old format) or bare "be" — normalise to ISO code
      setFlags((currentUser.flags ?? []).map((f) => f.startsWith("flag-") ? f.slice(5) : f));
    }
  }, [currentUser]);

  useEffect(() => {
    fetch("/flags.json")
      .then((r) => r.json())
      .then((data: Record<string, string>) =>
        setAllCountries(Object.entries(data).map(([code, name]) => ({ code, name })))
      )
      .catch(() => {});
  }, []);

  const handleUpdateUser = async (updatedFlags?: string[], updatedBirthDate?: string) => {
    if (!currentUser) return;
    try {
      const updated = await updateUser({
        _id: currentUser._id,
        flags: updatedFlags ?? flags,
        birthDate: (updatedBirthDate ?? birthDate) || undefined,
      } as any);
      setUser(updated as any);
    } catch (err: any) {
      toast("Failed to update profile: " + (err?.response?.status ?? err?.message ?? "unknown error"));
    }
  };

  const handleAddFlag = (code: string) => {
    if (flags.includes(code)) return;
    const next = [...flags, code];
    setFlags(next);
    setFlagSearch("");
    setFlagDropdownOpen(false);
    handleUpdateUser(next);
  };

  const handleRemoveFlag = (code: string) => {
    const next = flags.filter((f) => f !== code);
    setFlags(next);
    handleUpdateUser(next);
  };

  const countryName = (code: string) => allCountries.find((c) => c.code === code)?.name ?? code;

  const filteredCountries = flagSearch
    ? allCountries.filter(
        (c) => c.name.toLowerCase().includes(flagSearch.toLowerCase()) && !flags.includes(c.code)
      )
    : [];

  if (!currentUser) return <h1 className="text-danger">You are not logged in</h1>;

  const handleChangeUsername = async () => {
    try {
      const updated = await changeUsername(currentUser._id, newUsername);
      setUser(updated as any);
      toast("Username updated");
      setUsernameToggle(true);
    } catch {
      toast("Failed to update username");
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await changePassword(currentUser._id, oldPassword, newPassword);
      toast("Password updated");
      setOldPassword("");
      setNewPassword("");
    } catch {
      toast("Failed to update password");
    }
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
            <input
              className="form-control"
              type="text"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </div>
        )}
      </div>
      <div className="form-group">
        <label>Birth Date</label>
        <input
          className="form-control"
          type="date"
          value={birthDate}
          onChange={(e) => {
            setBirthDate(e.target.value);
            handleUpdateUser(undefined, e.target.value);
          }}
        />
      </div>
      <div className="form-group">
        <label>Countries</label>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 6 }}>
          {flags.map((code) => (
            <span key={code} className="label label-default" style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 8px", fontSize: 13 }}>
              <img src={`/flags/${code}.png`} alt={code} style={{ width: 20, height: 14, objectFit: "cover" }} />
              {countryName(code)}
              <button type="button" onClick={() => handleRemoveFlag(code)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, marginLeft: 4, lineHeight: 1 }}>
                <i className="fa fa-times" />
              </button>
            </span>
          ))}
        </div>
        <div style={{ position: "relative" }}>
          <input
            className="form-control"
            type="text"
            placeholder="Add a country..."
            value={flagSearch}
            onChange={(e) => { setFlagSearch(e.target.value); setFlagDropdownOpen(true); }}
            onFocus={() => setFlagDropdownOpen(true)}
            onBlur={() => setTimeout(() => setFlagDropdownOpen(false), 150)}
          />
          {flagDropdownOpen && filteredCountries.length > 0 && (
            <ul className="dropdown-menu" style={{ display: "block", width: "100%", maxHeight: 200, overflowY: "auto" }}>
              {filteredCountries.slice(0, 32).map((c) => (
                <li key={c.code}>
                  <a href="#" onMouseDown={(e) => { e.preventDefault(); handleAddFlag(c.code); }} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <img src={`/flags/${c.code}.png`} alt={c.code} style={{ width: 20, height: 14, objectFit: "cover" }} />
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <form onSubmit={handleChangePassword}>
        <h4>Change Password</h4>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="Current password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-default">
          Change Password
        </button>
      </form>
    </div>
  );
}
