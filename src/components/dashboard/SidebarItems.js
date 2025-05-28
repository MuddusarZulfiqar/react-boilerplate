import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSidebar } from "@/hooks/useSidebar";
// NavLink styling
const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    display: "flex",
    width: "100%",
};
const activeStyle = {
    backgroundColor: "rgba(25, 118, 210, 0.12)", // MUI primary with alpha
    fontWeight: 600,
};
const SidebarItems = () => {
    const { user, logout } = useAuth();
    const filteredItems = useSidebar(user?.role || "user");
    return (_jsxs(_Fragment, { children: [filteredItems.map((item) => (_jsx(NavLink, { to: item.path, style: ({ isActive }) => isActive ? { ...linkStyle, ...activeStyle } : linkStyle, end: true, children: _jsxs(ListItemButton, { children: [_jsx(ListItemIcon, { children: item.icon }), _jsx(ListItemText, { primary: item.label })] }) }, item.path))), _jsxs(ListItemButton, { onClick: logout, children: [_jsxs(ListItemIcon, { children: [_jsx(LogoutIcon, {}), " "] }), _jsx(ListItemText, { primary: "Logout" })] })] }));
};
export default SidebarItems;
