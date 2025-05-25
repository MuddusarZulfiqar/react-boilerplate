import {createBrowserRouter} from "react-router";
import publicRoute from "./includes/public.routes";
import authRoutes from "./includes/auth.routes";
import dashboardRoutes from "./includes/dashboard.routes";
export const router = createBrowserRouter([
  // Public Routes
  publicRoute,
  // Auth Routes
  authRoutes,
  // Dashboard Routes
  dashboardRoutes
]);