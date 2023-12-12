import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { roles } from "@/utils";
import { useAuth } from "@/providers/authProvider";
import { ProtectedRoute } from "./includes/ProtectedRoute";
const Login = React.lazy(() => import("@/views/Login"));
const Logout = React.lazy(() => import("@/views/protected/Logout"));
import AuthLayout from "@/layout/AuthLayout";
import NonRequiredAuth from "@/layout/NonRequiredAuth";
import FormView from "@/views/public/Form";
import AllowRole from "./includes/AllowRole";
import Forbidden from "../views/errors/403";
import PageNotFound from "../views/errors/404";

const Routes = () => {
  const { user } = useAuth();
  console.log(user);
  // Define public routes accessible to all users
  const routesForPublic = [
    {
      path: "/",
      element: <NonRequiredAuth />,
      children: [
        {
          path: "",
          element: <div>Home Page</div>,
        },
        {
          path: "/contact",
          element: <div>Contact Page</div>,
        },
        {
          path: "/about-us",
          element: <div>About Us Page</div>,
        },
        {
          path: "/form",
          element: <FormView />,
        },
      ],
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/dashboard",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "",
          element: <AllowRole roles={[roles.admin, roles.user]} />,
          children: [
            {
              path: "",
              element: <div>Dashboard</div>,
            },
          ],
        },

        {
          path: "profile",
          element: <AllowRole roles={[roles.admin, roles.user]} user={user} />,
          children: [
            {
              path: "",
              element: <div>Profile User</div>,
            },
          ],
        },
        {
          path: "logout",
          element: <Logout />,
        },

        // Dashboard 404 route
        {
          path: "/dashboard/*",
          element: <PageNotFound height="31" />,
        },
      ],
    },
  ];

  // Define routes accessible only to non-authenticated users
  const routesForNotAuthenticatedOnly = [
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...routesForPublic,
    ...(!user ? routesForNotAuthenticatedOnly : []),
    ...routesForAuthenticatedOnly,
    // Fallback route
    {
      path: "*",
      element: <PageNotFound />,
    },
    // 403 Forbidden route
    {
      path: "/403",
      element: <Forbidden />,
    },
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
