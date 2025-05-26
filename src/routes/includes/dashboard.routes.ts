import { Role } from '@/constants'
import DashboardLayout from '@/layouts/Dashboard.layout'
import AdminDashboard from '@/pages/dashboard/admin/AdminDashboard'
import UserDashboard from '@/pages/dashboard/admin/UserDashboard'
import { requireAuth } from '@/utils/routeGuards'

const dashboardRoutes = {
    path: "dashboard",
    Component: DashboardLayout,
    loader: requireAuth(),
    children:[
        // Routes accessible by both user and admin
        {
            index: true,
            Component: UserDashboard,
        },
        // Admin-only routes group
        {
            path:"admin",
            loader: requireAuth({ allowedRoles: [Role.admin] }),
            children: [
                {
                    index: true,
                    Component: AdminDashboard
                },
            ]
        }
    ]

}

export default dashboardRoutes
