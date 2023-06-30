import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Auth/Auth";
import { useEffect } from "react";
const NonPrivateRoutes = () => {
  const auth = useAuth();
  return !auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default NonPrivateRoutes;
