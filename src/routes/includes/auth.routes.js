import { lazyWithSuspense } from '@/utils';
const Login = lazyWithSuspense(() => import('@/pages/auth/Login'));
const PageNotFound = lazyWithSuspense(() => import('@/pages/error/PageNotFound'));
import AuthLayout from '@/layouts/Auth.layout';
import { redirect } from 'react-router';
import { nonRequireAuth } from '@/utils';
const authRoutes = {
    path: "/auth",
    Component: AuthLayout,
    loader: nonRequireAuth(),
    children: [
        {
            index: true,
            loader: () => redirect("/auth/login")
        },
        {
            path: "login",
            Component: Login
        },
        {
            path: "register",
            // Placeholder for future registration page
            loader: () => redirect("/auth/login"),
        },
        {
            path: "*",
            Component: PageNotFound
        }
    ]
};
export default authRoutes;
