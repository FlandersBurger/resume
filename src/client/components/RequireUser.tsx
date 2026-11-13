import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { useApp } from "../context/AppContext";

/**
 * Renders `children` only for a signed-in User. Shows nothing while the stored session is still
 * being checked, so a reload doesn't flash "log in" at someone who is signed in.
 */
export function RequireUser({
  children = <Outlet />,
  message = "Log in to see this page.",
}: {
  /** What to guard; by default the nested routes. */
  children?: ReactNode;
  message?: string;
}) {
  const { currentUser, sessionRestored, openLogin } = useApp();
  if (currentUser) return <>{children}</>;
  if (!sessionRestored) return null;
  return (
    <div>
      <h2 className="text-muted">{message}</h2>
      <button className="btn btn-primary" onClick={openLogin}>
        <i className="fas fa-sign-in-alt" /> Log in
      </button>
    </div>
  );
}

/** Renders `children` only for a site admin with admin mode on. */
export function RequireAdmin({ children = <Outlet /> }: { children?: ReactNode }) {
  const { isAdmin, currentUser, sessionRestored } = useApp();
  if (isAdmin) return <>{children}</>;
  if (!currentUser && !sessionRestored) return null;
  return <h2 className="text-danger">Admin only</h2>;
}
