import { sidebarItems } from '@/constants';
export const useSidebar = (role) => {
    return sidebarItems.filter(item => item.roles.includes(role));
};
