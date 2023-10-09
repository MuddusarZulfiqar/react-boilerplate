import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/authProvider";
import Dashboard from "../layout/Dashboard";

export const ProtectedRoute = () => {
  const { user } = useAuth();
  console.log(user);
  // Check if the user is authenticated
  if (!user) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/auth/login" />;
  }

  // If authenticated, render the child routes
  return <Dashboard />;
};
