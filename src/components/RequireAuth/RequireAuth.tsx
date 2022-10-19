import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { UserRole } from "../../types/UserRole";

interface Props {
  allowedRoles: UserRole[];
}

export const RequireAuth = ({ allowedRoles }: Props) => {
  const { auth } = useAuth();
  const location = useLocation();

  if (!auth?.role)
    return <Navigate to="/" state={{ from: location }} replace />;

  return allowedRoles.includes(auth?.role) ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  );
};
