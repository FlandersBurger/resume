import { useEffect, useState } from "react";
import { getUsers, toggleBan } from "../api/users";
import { getQueue, getPause, togglePause } from "../api/tenthings";
import { useApp } from "../context/AppContext";

export default function TenThingsAdmin() {
  const { currentUser } = useApp();
  const [users, setUsers] = useState<any[]>([]);
  const [queue, setQueue] = useState<any[]>([]);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!currentUser?.admin) return;
    getUsers().then(setUsers);
    getQueue().then(setQueue);
    getPause().then(setPaused);
  }, [currentUser]);

  const handleToggleBan = async (userId: string) => {
    const updated = await toggleBan(userId);
    setUsers((prev) => prev.map((u) => (u._id === updated._id ? updated : u)));
  };

  const handleTogglePause = async () => {
    const result = await togglePause();
    setPaused(result);
  };

  if (!currentUser?.admin) return <h2 className="text-danger">Admin only</h2>;

  return (
    <div>
      <h1>TenThings Admin</h1>
      <button className={`btn ${paused ? "btn-danger" : "btn-success"}`} onClick={handleTogglePause}>
        {paused ? "Resume" : "Pause"} TenThings
      </button>
      <h3>Queue ({queue.length})</h3>
      <ul className="list-group" style={{ marginBottom: 16 }}>
        {queue.map((item, i) => (
          <li key={i} className="list-group-item">{JSON.stringify(item)}</li>
        ))}
      </ul>
      <h3>Users</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Username</th>
            <th>Telegram</th>
            <th>Score</th>
            <th>Banned</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id}>
              <td>{u.username}</td>
              <td>{u.telegram?.username}</td>
              <td>{u.score}</td>
              <td>{u.banned ? "Yes" : "No"}</td>
              <td>
                <button
                  className={`btn btn-sm ${u.banned ? "btn-success" : "btn-warning"}`}
                  onClick={() => handleToggleBan(u._id)}
                >
                  {u.banned ? "Unban" : "Ban"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
