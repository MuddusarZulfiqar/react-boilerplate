import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "@/layout/AuthLayout";
import NonRequiredAuth from "@/layout/NonRequiredAuth";
import FormView from "@/views/public/Form";
import PageNotFound from "@/views/errors/404";
import Dashboard from "@/layout/Dashboard.jsx";
import ProtectedRoute from "./ProtectedRoute";

const Login = React.lazy(() => import("@/views/Login"));

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
                roles={["user", "admin"]}
              />
            }
          >
            <Route path="" index element={<h1>Dashboard</h1>} />
            <Route path="profile" element={<h1>Profile</h1>} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
