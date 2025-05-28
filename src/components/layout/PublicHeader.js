import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/layout/PublicHeader.tsx
import { useAuth } from "@/hooks";
import { useAppSelector } from "@/hooks";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { NavLink } from "react-router";
import { settings } from "@/constants";
const PublicHeader = () => {
    const { user } = useAuth();
    // Only access Redux data if it's enabled
    const data = settings.requireRedux
        ? useAppSelector((state) => state.auth)
        : undefined;
    return (_jsx(AppBar, { position: "static", color: "primary", elevation: 0, children: _jsxs(Toolbar, { children: [_jsx(Typography, { variant: "h6", sx: { flexGrow: 1 }, children: "MyApp" }), _jsxs(Box, { display: "flex", gap: 2, children: [_jsx(Button, { component: NavLink, to: "/", color: "inherit", children: "Home" }), _jsx(Button, { component: NavLink, to: "/about", color: "inherit", children: "About" }), _jsx(Button, { component: NavLink, to: "/contact", color: "inherit", children: "Contact" }), user ? (_jsxs(Button, { component: NavLink, to: "/dashboard", color: "inherit", children: ["Dashboard (", data?.user?.firstName || user.firstName || "User", ")"] })) : (_jsx(Button, { component: NavLink, to: "/auth/login", color: "inherit", children: "Login" }))] })] }) }));
};
export default PublicHeader;
