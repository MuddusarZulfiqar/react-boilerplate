/**
 * This module exports a React component for managing role-based access control in routing.
 *
 * @module AllowRole
 * @file This file is part of the `routes` directory and contains the `AllowRole` component for managing role-based access control in a React application.
 */

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../providers/authProvider";

/**
 * `AllowRole` is a React component that manages role-based access control in routing.
 * It checks if the current user's role is included in the allowed roles for a route.
 * If the user's role is allowed, it renders the route's component.
 * If the user's role is not allowed, it redirects the user to the 403 error page.
 *
 * @param {Object} props - The props for the component.
 * @param {Array.<string>} props.roles - The roles allowed for the route.
 * @returns {React.Element} A React element.
 */
function AllowRole({ roles }) {
  /**
   * `user` is an object that contains the current user's data, including their role.
   *
   * @type {Object}
   */
  const { user } = useAuth();

  // Log the user data for debugging purposes
  console.log(user);

  // Check if the user's role is allowed for the route
  if (user && roles.includes(user.role)) {
    // If the user's role is allowed, render the route's component
    return <Outlet />;
  }

  // If the user's role is not allowed, redirect the user to the 403 error page
  return <Navigate to="/403" />;
}

/**
 * The `AllowRole` component is exported for use in other parts of the application.
 */
export default AllowRole;