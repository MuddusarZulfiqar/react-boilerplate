import { Role } from '@/constants';
import { requireAuth } from '@/utils';
import { lazyWithSuspense } from '@/utils';
import DashboardLayout from '@/layouts/Dashboard.layout';
const AdminDashboard = lazyWithSuspense(() => import('@/pages/dashboard/admin/AdminDashboard'));
const UserDashboard = lazyWithSuspense(() => import('@/pages/dashboard/user/UserDashboard'));
const NotFound = lazyWithSuspense(() => import('@/pages/dashboard/error/NotFound'));
const dashboardRoutes = {
    path: "dashboard",
    Component: DashboardLayout,
    loader: requireAuth(),
    children: [
        // Routes accessible by both user and admin
        {
            index: true,
            Component: UserDashboard,
        },
        // Admin-only routes group
        {
            path: "admin",
            loader: requireAuth({ allowedRoles: [Role.admin] }),
            children: [
                {
                    index: true,
                    Component: AdminDashboard
                },
            ]
        },
        {
            path: "*",
            Component: NotFound
        }
    ]
};
export default dashboardRoutes;
