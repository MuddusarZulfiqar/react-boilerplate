import { SidebarItem } from '@/types';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import InventoryIcon from '@mui/icons-material/Inventory';

export const sidebarItems: SidebarItem[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    icon: <DashboardIcon />,
    roles: ['admin', 'user'],
  },
  {
    label: 'Users',
    path: '/dashboard/users',
    icon: <PeopleIcon />,
    roles: ['admin'],
  },
  {
    label: 'Products',
    path: '/dashboard/products',
    icon: <InventoryIcon />,
    roles: ['admin', 'manager'],
  },
  {
    label: 'Admin Panel',
    path: '/dashboard/admin',
    icon: <AdminPanelSettingsIcon />,
    roles: ['admin'],
  },
];
