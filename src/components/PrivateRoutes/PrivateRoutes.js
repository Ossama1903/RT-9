import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../Auth/Auth";
import { useEffect } from "react";
const PrivateRoutes = () => {
  const auth = useAuth();
  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
