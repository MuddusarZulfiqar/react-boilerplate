import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/layouts/DashboardLayout.tsx
import { AppBar, Avatar, Box, CircularProgress, CssBaseline, Divider, Drawer, IconButton, List, Toolbar, Typography, useTheme, } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Outlet, useLocation } from "react-router";
import SidebarItems from "@/components/dashboard/SidebarItems"; // Adjust the import path as necessary
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "@/constants";
import { useAuth } from "@/hooks";
const drawerWidth = 240;
const DashboardLayout = () => {
    const { pathname } = useLocation();
    const { user, isLoading } = useAuth();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    if (isLoading) {
        return (_jsx("div", { style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }, children: _jsx(CircularProgress, {}) }));
    }
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (_jsxs("div", { children: [_jsx(Toolbar, { children: _jsx(Typography, { variant: "h6", children: "MyApp" }) }), _jsx(Divider, {}), _jsx(List, { children: _jsx(SidebarItems, {}) })] }));
    return (_jsxs(Box, { sx: { display: "flex" }, children: [_jsx(CssBaseline, {}), _jsx(AppBar, { position: "fixed", sx: {
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }, children: _jsxs(Toolbar, { children: [_jsx(IconButton, { color: "inherit", edge: "start", onClick: handleDrawerToggle, sx: { mr: 2, display: { sm: "none" } }, children: _jsx(MenuIcon, {}) }), _jsxs(Typography, { variant: "h6", noWrap: true, children: ["Welcome", " ", (user && user?.firstName + " " + user?.lastName) || "Guest"] }), _jsx(Typography, { variant: "body2", sx: { marginLeft: "auto", color: theme.palette.grey[300] }, children: _jsx(Avatar, { alt: user?.firstName, src: user?.image }) })] }) }), _jsxs(Box, { component: "nav", sx: { width: { sm: drawerWidth }, flexShrink: { sm: 0 } }, children: [_jsx(Drawer, { variant: "temporary", open: mobileOpen, onClose: handleDrawerToggle, ModalProps: { keepMounted: true }, sx: {
                            display: { xs: "block", sm: "none" },
                            "& .MuiDrawer-paper": { width: drawerWidth },
                        }, children: drawer }), _jsx(Drawer, { variant: "permanent", sx: {
                            display: { xs: "none", sm: "block" },
                            "& .MuiDrawer-paper": { width: drawerWidth },
                        }, open: true, children: drawer })] }), _jsxs(Box, { component: "main", sx: {
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }, children: [_jsx(Toolbar, {}), _jsx(motion.div, { initial: "initial", animate: "in", variants: pageVariants, transition: pageTransition, children: _jsx(Outlet, {}) }, pathname)] })] }));
};
export default DashboardLayout;
