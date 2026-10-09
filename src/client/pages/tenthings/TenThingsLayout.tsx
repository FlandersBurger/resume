import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useApp } from "../../context/AppContext";

const Tabs = styled.nav`
  display: flex;
  gap: 2px;
  margin: 0 0 20px;
  border-bottom: 1px solid var(--border);
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  a {
    flex: 0 0 auto;
    padding: 8px 14px;
    margin-bottom: -1px;
    border: 1px solid transparent;
    border-radius: 4px 4px 0 0;
    color: var(--text-muted);
    text-decoration: none;
    white-space: nowrap;
  }

  a:hover {
    color: var(--text);
    border-color: var(--border-soft) var(--border-soft) var(--border);
  }

  a.active {
    color: var(--text);
    background: var(--surface);
    border-color: var(--border) var(--border) var(--surface);
  }
`;

const AdminTabs = styled.span`
  display: flex;
  gap: 2px;
  margin-left: auto;
`;

export default function TenThingsLayout() {
  const { currentUser, isAdmin } = useApp();

  return (
    <>
      <Tabs aria-label="Ten Things">
        <NavLink to="/tenthings" end>
          Overview
        </NavLink>
        {currentUser && <NavLink to="/tenthings-play">Play</NavLink>}
        <NavLink to="/tenthings-lists">Lists</NavLink>
        {currentUser && <NavLink to="/tenthings-game">Games</NavLink>}
        {currentUser && <NavLink to="/tenthings-stats">Stats</NavLink>}
        {isAdmin && (
          <AdminTabs>
            <NavLink to="/tenthings-admin">Admin</NavLink>
            <NavLink to="/tenthings-sass">Sass</NavLink>
          </AdminTabs>
        )}
      </Tabs>
      <Outlet />
    </>
  );
}
