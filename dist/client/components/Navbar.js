"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navbar = void 0;
const react_router_dom_1 = require("react-router-dom");
const AppContext_1 = require("../context/AppContext");
const react_1 = require("react");
function Dropdown({ label, children }) {
    const [open, setOpen] = (0, react_1.useState)(false);
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target))
                setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);
    return (<li ref={ref} className={`dropdown${open ? " open" : ""}`}>
      <a className="dropdown-toggle" role="button" style={{ cursor: "pointer" }} onClick={() => setOpen((o) => !o)}>
        {label}
      </a>
      <ul className="dropdown-menu" onClick={() => setOpen(false)}>
        {children}
      </ul>
    </li>);
}
function Navbar() {
    const { currentUser, logout } = (0, AppContext_1.useApp)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (<nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
            <span className="icon-bar"/>
            <span className="icon-bar"/>
            <span className="icon-bar"/>
          </button>
          <react_router_dom_1.Link className="navbar-brand" to="/home">
            Resume
          </react_router_dom_1.Link>
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <react_router_dom_1.Link to="/experience">Experience</react_router_dom_1.Link>
            </li>
            <li>
              <react_router_dom_1.Link to="/skills">Skills</react_router_dom_1.Link>
            </li>
            <li>
              <react_router_dom_1.Link to="/hobbies">Hobbies</react_router_dom_1.Link>
            </li>
            <Dropdown label="Contact">
              <li>
                <react_router_dom_1.Link to="/contact">Contact</react_router_dom_1.Link>
              </li>
              {currentUser && (<li>
                  <react_router_dom_1.Link to="/posts">Chat</react_router_dom_1.Link>
                </li>)}
            </Dropdown>
            <Dropdown label="Games">
              <li>
                <react_router_dom_1.Link to="/asteroids">Asteroids</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/bubbles">Bubbles</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/charades">Charades</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/workout">Workout</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/lemmings">Lemmings</react_router_dom_1.Link>
              </li>
            </Dropdown>
            <Dropdown label="Quizzes">
              <li>
                <react_router_dom_1.Link to="/google">Google</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/logos">Logos</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/animals">Animals</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/flags">Flags</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/movies">Movies</react_router_dom_1.Link>
              </li>
              <li>
                <react_router_dom_1.Link to="/skeletons">Skeletons</react_router_dom_1.Link>
              </li>
            </Dropdown>
            {currentUser?.admin ? (<Dropdown label="Ten Things">
                <li>
                  <react_router_dom_1.Link to="/tenthings">Lists</react_router_dom_1.Link>
                </li>
                <li>
                  <react_router_dom_1.Link to="/tenthings-play">Play</react_router_dom_1.Link>
                </li>
                <li>
                  <react_router_dom_1.Link to="/tenthings-stats">Stats</react_router_dom_1.Link>
                </li>
                <li>
                  <react_router_dom_1.Link to="/tenthings-admin">Admin</react_router_dom_1.Link>
                </li>
              </Dropdown>) : (<li>
                <react_router_dom_1.Link to="/tenthings">Ten Things</react_router_dom_1.Link>
              </li>)}
          </ul>
          <ul className="nav navbar-nav navbar-right">
            {currentUser ? (<Dropdown label={currentUser.photoURL ? (<img src={currentUser.photoURL} alt={currentUser.username} className="img-circle img-profile" style={{ height: 34, width: 34, marginTop: -7, marginBottom: -7 }}/>) : (<i className="fa fa-user"/>)}>
                <li>
                  <react_router_dom_1.Link to="/profile">Profile</react_router_dom_1.Link>
                </li>
                <li role="separator" className="divider"/>
                <li>
                  <a style={{ cursor: "pointer" }} onClick={() => {
                logout();
                navigate("/home");
            }}>
                    Logout
                  </a>
                </li>
              </Dropdown>) : (<li>
                <react_router_dom_1.Link to="/login">Login</react_router_dom_1.Link>
              </li>)}
          </ul>
        </div>
      </div>
    </nav>);
}
exports.Navbar = Navbar;
//# sourceMappingURL=Navbar.js.map