import { ReactNode } from 'react';

export interface SidebarItem {
  label: string;
  path: string;
  icon: ReactNode;
  roles: string[]; // roles allowed to access this item
  children?: SidebarItem[]; // optional nested items
}
