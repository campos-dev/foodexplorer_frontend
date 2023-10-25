import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../hooks/auth";

import { CustomerRoutes } from "./customerRoutes";
import { AdminRoutes } from "./adminRoutes";
import { AuthRoutes } from "./authRoutes";
import { USER_ROLE } from "../utils/roles";

export function Routes() {
  const { user, loading, signOut } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  function AccessRoutes() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;
      default:
        return <CustomerRoutes />;
    }
  }
  return (
    <BrowserRouter>{user ? <AccessRoutes /> : <AuthRoutes />}</BrowserRouter>
  );
}
