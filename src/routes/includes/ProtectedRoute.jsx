import { Navigate } from "react-router-dom";
import { useAuth } from "@/providers/authProvider";
import Dashboard from "@/layout/Dashboard";
export const ProtectedRoute = () => {
  const { user } = useAuth();

  console.log(user);
  // Check if the user is authenticated
  if (!user) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/auth/login" />;
  }

  // console.log(element);
  // Check if the route has a "meta" object with allowed roles
  // const allowedRoles = route.meta && route.meta.roles;

  // if (allowedRoles && !allowedRoles.includes(user.role)) {
  //   // User's role is not allowed to access this route; you can redirect to a 403 Forbidden page.
  //   return <Navigate to="/403" />;
  // }
  // If authenticated, render the child routes
  return <Dashboard />;
};
