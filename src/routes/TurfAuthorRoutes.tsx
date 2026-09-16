import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";

interface TurfAuthorRouteProps {
  children: React.ReactNode;
}

const TurfAuthorRoutes = ({ children }: TurfAuthorRouteProps) => {
  const { user, loading } = useAuth();
  const { role, roleLoading } = useUserRole();
  const location = useLocation();

  if (loading || roleLoading) return <p>Loading...</p>;

  if (!user || role !== "turfAuthor") {
    return <Navigate to="/error" state={{ from: location.pathname }} replace />;
  }

  return children;
};

export default TurfAuthorRoutes;