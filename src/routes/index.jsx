import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
const AuthLayout = React.lazy(() => import("@/layout/AuthLayout"));
const FormView = React.lazy(() => import("@/views/public/Form"));
const PageNotFound =  React.lazy(() => import("@/views/errors/404"));
const Login = React.lazy(() => import("@/views/Login"));
const ProtectedRoute = React.lazy(() => import("./ProtectedRoute"));
import NonRequiredAuth from "@/layout/NonRequiredAuth";
import Dashboard from "@/layout/Dashboard.jsx";
import {roles} from "@/utils";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/auth"} element={<AuthLayout />}>
          <Route path={""} element={<Navigate to={"/login"} />} />
          <Route path={"login"} element={<Login />} />
        </Route>
        <Route path={"/"} element={<NonRequiredAuth />}>
          <Route path={""} element={<h1>Home</h1>} />
          <Route path={"about-us"} element={<h1>About</h1>} />
          <Route path={"contact"} element={<h1>Contact</h1>} />
          <Route path={"form"} element={<FormView />} />
        </Route>

        <Route path={"dashboard"} element={<Dashboard />}>
          <Route
            element={
              <ProtectedRoute
                isLoginRequired={true}
                roles={[roles.user, roles.admin]}
              />
            }
          >

            <Route path="profile" element={<h1>Profile</h1>} />
          </Route>
          <Route
              element={
                <ProtectedRoute
                    isLoginRequired={true}
                />
              }
          >
            <Route path="" index element={<h1>Dashboard</h1>} />

          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
