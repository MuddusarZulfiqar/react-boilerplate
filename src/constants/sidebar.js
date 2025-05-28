import { jsx as _jsx } from "react/jsx-runtime";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import InventoryIcon from '@mui/icons-material/Inventory';
export const sidebarItems = [
    {
        label: 'Dashboard',
        path: '/dashboard',
        icon: _jsx(DashboardIcon, {}),
        roles: ['admin', 'user'],
    },
    {
        label: 'Users',
        path: '/dashboard/users',
        icon: _jsx(PeopleIcon, {}),
        roles: ['admin'],
    },
    {
        label: 'Products',
        path: '/dashboard/products',
        icon: _jsx(InventoryIcon, {}),
        roles: ['admin', 'manager'],
    },
    {
        label: 'Admin Panel',
        path: '/dashboard/admin',
        icon: _jsx(AdminPanelSettingsIcon, {}),
        roles: ['admin'],
    },
];
