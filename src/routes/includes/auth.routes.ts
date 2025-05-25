import { lazyWithSuspense } from '@/utils/lazyWithSuspense'
const Login = lazyWithSuspense(() => import('@/pages/auth/Login'))
const PageNotFound = lazyWithSuspense(() => import('@/pages/error/Auth404'))
import AuthLayout from '@/layouts/Auth.layout'
import { redirect } from 'react-router'

const authRoutes = {
    path: "/auth",
    Component: AuthLayout,
    children:[
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
            path:"*",
            Component: PageNotFound
        }
    ]

}

export default authRoutes



