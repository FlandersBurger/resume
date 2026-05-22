import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";

export function Navbar() {
  const { currentUser, themeCounter, flipTheme, logout } = useApp();
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar-collapse"
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <Link className="navbar-brand" to="/home">
            Resume
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/hobbies">Hobbies</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {currentUser && <li><Link to="/posts">Chat</Link></li>}
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" role="button">
                Games <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/asteroids">Asteroids</Link></li>
                <li><Link to="/bubbles">Bubbles</Link></li>
                <li><Link to="/charades">Charades</Link></li>
                <li><Link to="/workout">Workout</Link></li>
                <li><Link to="/lemmings">Lemmings</Link></li>
              </ul>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" role="button">
                Quizzes <span className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/google">Google</Link></li>
                <li><Link to="/logos">Logos</Link></li>
                <li><Link to="/animals">Animals</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/skeletons">Skeletons</Link></li>
              </ul>
            </li>
            <li><Link to="/tenthings">Ten Things</Link></li>
            <li><Link to="/lists">Lists</Link></li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a onClick={flipTheme} style={{ cursor: "pointer" }} title="Flip theme">
                <i className="fa fa-paint-brush" />
              </a>
            </li>
            {currentUser ? (
              <>
                <li><Link to="/profile">{currentUser.username}</Link></li>
                <li>
                  <a onClick={() => { logout(); navigate("/home"); }} style={{ cursor: "pointer" }}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <li><Link to="/login">Login</Link></li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
