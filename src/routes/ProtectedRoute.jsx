/**
 * `ProtectedRoute` is a React component that provides a protected route functionality.
 * It checks if the user is authenticated, if not, it redirects the user to the login page.
 * If the user is authenticated, it renders the `Dashboard` component.
 *
 * @module ProtectedRoute
 * @returns {JSX.Element} If the user is authenticated, the `Dashboard` component is returned.
 *                        If the user is not authenticated, a redirection to the login page is returned.
 */

import { Navigate } from "react-router-dom";
import { useAuth } from "@/providers/authProvider";
import Dashboard from "@/layout/Dashboard";

export const ProtectedRoute = () => {
  /**
   * `useAuth` is a custom hook that provides the current authenticated user.
   * If no user is authenticated, it returns `null`.
   */
  const { user } = useAuth();

  // If there's no authenticated user, redirect to the login page.
  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  // If there's an authenticated user, render the `Dashboard` component.
  return <Dashboard />;
};