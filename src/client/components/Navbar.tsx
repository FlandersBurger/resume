import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useApp } from "../context/AppContext";
import { useState, useEffect, useRef } from "react";

const NavbarToggle = styled.button`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 0;
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  cursor: pointer;
  @media (max-width: 767px) {
    display: flex !important;
  }
  &:focus {
    outline: none;
    background: transparent !important;
  }
`;

const HamBar = styled.span<{ $open: boolean; $which: number }>`
  display: block;
  width: 20px;
  height: 2px;
  background: #666;
  border-radius: 1px;
  transition:
    transform 0.25s ease,
    opacity 0.2s ease;
  ${({ $open, $which }) =>
    $open &&
    ($which === 0
      ? "transform: translateY(7px) rotate(45deg);"
      : $which === 1
        ? "opacity: 0; transform: scaleX(0);"
        : "transform: translateY(-7px) rotate(-45deg);")}
`;

const ProfileImg = styled.img`
  max-height: 40px;
`;

const Overlay = styled.div<{ $open: boolean }>`
  display: none;
  @media (max-width: 767px) {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 99998;
    opacity: ${(p) => (p.$open ? 1 : 0)};
    pointer-events: ${(p) => (p.$open ? "auto" : "none")};
    transition: opacity 0.25s ease;
  }
`;

const Drawer = styled.div<{ $open: boolean }>`
  display: none;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 240px;
    background: #fff;
    border-right: 1px solid #ddd;
    z-index: 99999;
    transform: translateX(${(p) => (p.$open ? "0" : "-100%")});
    transition: transform 0.25s ease;
    overflow-y: auto;
    padding-top: 66px;
  }
`;

const DrawerNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  a,
  span {
    display: block;
    padding: 10px 20px;
    color: #555;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background: #f5f5f5;
      color: #333;
    }
  }
`;

const DrawerGroupHeader = styled.li`
  border-top: 1px solid #eee;
  padding: 10px 20px;
  font-size: 13px;
  color: #555;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  user-select: none;
  &:hover {
    background: #f5f5f5;
  }
`;

const DrawerGroupItems = styled.ul<{ $open: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: ${(p) => (p.$open ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.2s ease;
  background: #fafafa;
  a,
  span {
    padding-left: 32px;
  }
`;

const DrawerDivider = styled.li`
  border-top: 1px solid #eee;
`;

function DrawerGroup({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <DrawerGroupHeader
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
      >
        {label}
        <i className={`fa fa-chevron-${open ? "up" : "down"}`} style={{ fontSize: 11, color: "#aaa" }} />
      </DrawerGroupHeader>
      <DrawerGroupItems $open={open}>{children}</DrawerGroupItems>
    </>
  );
}

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
  const { currentUser, logout, openLogin, loginLoading, openChat } = useApp();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <Overlay $open={mobileOpen} onClick={() => setMobileOpen(false)} />
      <Drawer $open={mobileOpen} onClick={() => setMobileOpen(false)}>
        <DrawerNav>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/doodles">Doodles</Link>
          </li>
          {currentUser ? (
            <DrawerGroup label="Ten Things">
              <li>
                <Link to="/tenthings">Lists</Link>
              </li>
              <li>
                <Link to="/tenthings-play">Play</Link>
              </li>
              <li>
                <Link to="/tenthings-stats">Stats</Link>
              </li>
              {currentUser.admin && (
                <li>
                  <Link to="/tenthings-admin">Admin</Link>
                </li>
              )}
            </DrawerGroup>
          ) : (
            <li>
              <Link to="/tenthings">Ten Things</Link>
            </li>
          )}
          <DrawerDivider />
          <li>
            <span onClick={() => window.print()}>Print resume</span>
          </li>
          {currentUser ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <span
                  onClick={() => {
                    logout();
                    navigate("/home");
                  }}
                >
                  Logout
                </span>
              </li>
            </>
          ) : (
            <li>
              <span onClick={loginLoading ? undefined : openLogin}>{loginLoading ? "..." : "Login"}</span>
            </li>
          )}
        </DrawerNav>
      </Drawer>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavbarToggle type="button" className="navbar-toggle" onClick={() => setMobileOpen((o) => !o)}>
              <HamBar $open={mobileOpen} $which={0} />
              <HamBar $open={mobileOpen} $which={1} />
              <HamBar $open={mobileOpen} $which={2} />
            </NavbarToggle>
            <Link className="navbar-brand" to="/home">
              Resume
            </Link>
          </div>
          <div className="navbar-collapse collapse" id="navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/experience">Experience</Link>
              </li>
              <li>
                <Link to="/skills">Skills</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/doodles">Doodles</Link>
              </li>
              {currentUser ? (
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
                  {currentUser.admin && (
                    <li>
                      <Link to="/tenthings-admin">Admin</Link>
                    </li>
                  )}
                </Dropdown>
              ) : (
                <li>
                  <Link to="/tenthings">Ten Things</Link>
                </li>
              )}
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {currentUser && (
                <li>
                  <a style={{ cursor: "pointer" }} title="Chat" onClick={openChat}>
                    <i className="fa fa-comments" />
                  </a>
                </li>
              )}
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
    </>
  );
}
