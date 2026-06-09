import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useApp } from "../context/AppContext";
import { useState, useEffect, useRef } from "react";

const NavbarToggle = styled.button`
  .navbar-default & {
    border-color: #fff;
    color: #fff;
  }
`;

const ProfileImg = styled.img`
  max-height: 40px;
`;

function Dropdown({ label, children }: { label: React.ReactNode; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <li ref={ref} className={`dropdown${open ? " open" : ""}`}>
      <a
        className="dropdown-toggle"
        role="button"
        style={{ cursor: "pointer" }}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
      >
        {label}
      </a>
      <ul className="dropdown-menu" onClick={() => setOpen(false)}>
        {children}
      </ul>
    </li>
  );
}

export function Navbar() {
  const { currentUser, logout, openLogin, loginLoading } = useApp();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <NavbarToggle
            type="button"
            className={`navbar-toggle${mobileOpen ? "" : " collapsed"}`}
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </NavbarToggle>
          <Link className="navbar-brand" to="/home">
            Resume
          </Link>
        </div>
        <div
          className={`navbar-collapse${mobileOpen ? " in" : " collapse"}`}
          id="navbar-collapse"
          onClick={() => setMobileOpen(false)}
        >
          <ul className="nav navbar-nav">
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            {currentUser ? (
              <Dropdown label="Contact">
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/posts">Chat</Link>
                </li>
              </Dropdown>
            ) : (
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            )}
            <Dropdown label="Doodles">
              <li>
                <Link to="/hobbies">Hobbies</Link>
              </li>
              <li>
                <Link to="/asteroids">Asteroids</Link>
              </li>
              <li>
                <Link to="/bubbles">Bubbles</Link>
              </li>
              <li>
                <Link to="/charades">Charades</Link>
              </li>
              <li>
                <Link to="/workout">Workout</Link>
              </li>
              <li>
                <Link to="/lemmings">Lemmings</Link>
              </li>
              <li>
                <Link to="/minesweeper">Minesweeper</Link>
              </li>
            </Dropdown>
            <Dropdown label="Quizzes">
              <li>
                <Link to="/google">Google</Link>
              </li>
              <li>
                <Link to="/logos">Logos</Link>
              </li>
              <li>
                <Link to="/animals">Animals</Link>
              </li>
              <li>
                <Link to="/flags">Flags</Link>
              </li>
              <li>
                <Link to="/movies">Movies</Link>
              </li>
              <li>
                <Link to="/skeletons">Skeletons</Link>
              </li>
            </Dropdown>
            {currentUser?.admin ? (
              <Dropdown label="Ten Things">
                <li>
                  <Link to="/tenthings">Lists</Link>
                </li>
                <li>
                  <Link to="/tenthings-play">Play</Link>
                </li>
                <li>
                  <Link to="/tenthings-stats">Stats</Link>
                </li>
                <li>
                  <Link to="/tenthings-admin">Admin</Link>
                </li>
              </Dropdown>
            ) : (
              <li>
                <Link to="/tenthings">Ten Things</Link>
              </li>
            )}
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a style={{ cursor: "pointer" }} title="Print resume" onClick={() => window.print()}>
                <i className="fa fa-print" />
              </a>
            </li>
            {currentUser ? (
              <Dropdown
                label={
                  currentUser.photoURL ? (
                    <ProfileImg
                      src={currentUser.photoURL}
                      alt={currentUser.username}
                      className="img-circle"
                      style={{ height: 34, width: 34, marginTop: -7, marginBottom: -7 }}
                    />
                  ) : (
                    <i className="fa fa-user" />
                  )
                }
              >
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms of Service</Link>
                </li>
                <li role="separator" className="divider" />
                <li>
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      logout();
                      navigate("/home");
                    }}
                  >
                    Logout
                  </a>
                </li>
              </Dropdown>
            ) : (
              <li>
                <a
                  style={{ cursor: loginLoading ? "default" : "pointer" }}
                  onClick={loginLoading ? undefined : openLogin}
                >
                  {loginLoading ? <i className="fa fa-spinner fa-spin" /> : "Login"}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
