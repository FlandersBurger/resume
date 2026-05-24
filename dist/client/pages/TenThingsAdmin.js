"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const users_1 = require("../services/users");
const tenthings_1 = require("../services/tenthings");
const AppContext_1 = require("../context/AppContext");
function TenThingsAdmin() {
    const { currentUser } = (0, AppContext_1.useApp)();
    const [users, setUsers] = (0, react_1.useState)([]);
    const [queue, setQueue] = (0, react_1.useState)("");
    const [paused, setPaused] = (0, react_1.useState)(false);
    const [searchUsername, setSearchUsername] = (0, react_1.useState)("");
    const [searchName, setSearchName] = (0, react_1.useState)("");
    const [searchEmail, setSearchEmail] = (0, react_1.useState)("");
    const [sortField, setSortField] = (0, react_1.useState)("username");
    const [sortReverse, setSortReverse] = (0, react_1.useState)(false);
    const loadData = () => {
        if (!currentUser?.admin)
            return;
        (0, users_1.getUsers)().then(setUsers);
        (0, tenthings_1.getQueue)().then((q) => setQueue(String(q ?? "")));
        (0, tenthings_1.getPause)().then(setPaused);
    };
    (0, react_1.useEffect)(() => {
        loadData();
    }, [currentUser]);
    const handleToggleBan = async (user) => {
        await (0, users_1.toggleBan)(user._id);
        setUsers((prev) => prev.map((u) => (u._id === user._id ? { ...u, banned: !u.banned } : u)));
    };
    const handleTogglePause = async () => {
        const result = await (0, tenthings_1.togglePause)();
        setPaused(result);
    };
    const handleSort = (field) => {
        if (sortField === field)
            setSortReverse((r) => !r);
        else {
            setSortField(field);
            setSortReverse(false);
        }
    };
    if (!currentUser?.admin)
        return <h2 className="text-danger">Admin only</h2>;
    const filteredUsers = users
        .filter((u) => (!searchUsername || u.username?.toLowerCase().includes(searchUsername.toLowerCase())) &&
        (!searchName || u.displayName?.toLowerCase().includes(searchName.toLowerCase())) &&
        (!searchEmail || u.email?.toLowerCase().includes(searchEmail.toLowerCase())))
        .sort((a, b) => {
        const av = a[sortField] ?? "";
        const bv = b[sortField] ?? "";
        const cmp = String(av).localeCompare(String(bv));
        return sortReverse ? -cmp : cmp;
    });
    return (<div className="page container-fluid">
      <h1 style={{ marginTop: 0 }}>Ten Things Admin</h1>

      <div className="btn-group" style={{ marginBottom: 16 }}>
        <button className="btn btn-default" onClick={loadData} title="Refresh">
          <i className="fas fa-sync"/>
        </button>
        <button className={`btn ${paused ? "btn-warning" : "btn-default"}`} onClick={handleTogglePause}>
          {paused ? "Unpause" : "Pause"}
        </button>
      </div>

      {queue && (<pre className="well well-sm" style={{ marginBottom: 16 }}>
          {queue}
        </pre>)}

      <table className="table table-striped table-condensed">
        <thead>
          <tr>
            <th style={{ cursor: "pointer" }} onClick={() => handleSort("_id")}>
              ID
            </th>
            <th style={{ cursor: "pointer" }} onClick={() => handleSort("username")}>
              Username
            </th>
            <th style={{ cursor: "pointer" }} onClick={() => handleSort("displayName")}>
              Name
            </th>
            <th style={{ cursor: "pointer" }} onClick={() => handleSort("email")}>
              Email
            </th>
            <th style={{ cursor: "pointer" }} onClick={() => handleSort("admin")}>
              Admin?
            </th>
            <th>Access</th>
          </tr>
          <tr>
            <td>
              <strong>{filteredUsers.length}</strong> / {users.length} users
            </td>
            <td>
              <input className="form-control input-sm" placeholder="Search" value={searchUsername} onChange={(e) => setSearchUsername(e.target.value)}/>
            </td>
            <td>
              <input className="form-control input-sm" placeholder="Search" value={searchName} onChange={(e) => setSearchName(e.target.value)}/>
            </td>
            <td>
              <input className="form-control input-sm" placeholder="Search" value={searchEmail} onChange={(e) => setSearchEmail(e.target.value)}/>
            </td>
            <td />
            <td />
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((u) => (<tr key={u._id}>
              <td style={{ fontSize: 11, color: "#aaa" }}>{u._id}</td>
              <td>{u.username}</td>
              <td>{u.displayName}</td>
              <td>{u.email}</td>
              <td>
                <i className={`fas ${u.admin ? "fa-unlock text-success" : "fa-lock text-muted"}`}/>
              </td>
              <td>
                <button className={`btn btn-sm ${u.banned ? "btn-danger" : "btn-success"}`} onClick={() => handleToggleBan(u)}>
                  <i className={`fas ${u.banned ? "fa-thumbs-down" : "fa-thumbs-up"}`}/>
                </button>
              </td>
            </tr>))}
        </tbody>
      </table>
    </div>);
}
exports.default = TenThingsAdmin;
//# sourceMappingURL=TenThingsAdmin.js.map