import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useAuth } from "../providers/authProvider";
import { ProtectedRoute } from "./ProtectedRoute";
const Login = React.lazy(() => import("@/views/Login"));
const Logout = React.lazy(() => import("@/views/protected/Logout"));
import AuthLayout from "../layout/AuthLayout";
import { Suspense } from "react";
import NonRequiredAuth from "@/layout/NonRequiredAuth";
const Routes = () => {
  const { user } = useAuth();

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
      ],
    },
  ];

  // Define routes accessible only to authenticated users
  const routesForAuthenticatedOnly = [
    {
      path: "/",
      element: <ProtectedRoute />, // Wrap the component in ProtectedRoute
      children: [
        {
          path: "/dashboard",
          element: <div>User Home Page</div>,
        },
        {
          path: "/dashboard/profile",
          element: <div>User Profile</div>,
        },
        {
          path: "/dashboard/logout",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Logout />
            </Suspense>
          ),
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
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Login />
            </Suspense>
          ),
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
      element: (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <h1>404 Page Not Found!</h1>
        </div>
      ),
    },
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
