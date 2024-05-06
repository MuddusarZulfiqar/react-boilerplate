import React, {useEffect} from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { roles } from "@/utils";
import { ProtectedRoute } from "./includes/ProtectedRoute";
const Login = React.lazy(() => import("@/views/Login"));
const Logout = React.lazy(() => import("@/views/protected/Logout"));
import AuthLayout from "@/layout/AuthLayout";
import NonRequiredAuth from "@/layout/NonRequiredAuth";
import FormView from "@/views/public/Form";
import AllowRole from "./includes/AllowRole";
import Forbidden from "../views/errors/403";
import PageNotFound from "../views/errors/404";
import {useAuthContext} from "@/providers/authProvider.jsx";


const Routes = () => {
  const { user,loading } = useAuthContext();
  // Define routes accessible to all users
  const [allRoutes,setAllRoutes] = React.useState([]);

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
  useEffect(() => {

    // Define routes accessible to authenticated users
    const routesForAuthenticatedOnly = [
      {
        path: "/dashboard",
        element: <ProtectedRoute />,
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
            path: "*",
            element: <PageNotFound height="31" />,
          },
        ],
      },
    ];

    // Define routes accessible to non-authenticated users
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

    // Determine which routes to use based on the user's authentication status
    const allRoutes = user ? [ ...routesForAuthenticatedOnly] : routesForNotAuthenticatedOnly;
    setAllRoutes(allRoutes);
    console.log(user, "User form routes");
  }, [user,loading]);
  // Create the browser router
  if(loading){
    return <div>Loading...</div>
  }
  const router = createBrowserRouter([
    ...routesForPublic,
    ...allRoutes,
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
