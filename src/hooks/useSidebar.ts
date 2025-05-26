import { sidebarItems } from '@/constants';
import { RoleType, SidebarItem } from '@/types';

export const useSidebar = (role: RoleType): SidebarItem[] => {
  return sidebarItems.filter(item => item.roles.includes(role));
};
