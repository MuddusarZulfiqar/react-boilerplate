import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Container, Paper, Typography } from "@mui/material";
import { Outlet, useLocation } from "react-router";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "@/constants";
function AuthLayout() {
    const { pathname } = useLocation();
    return (_jsx(Box, { minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", sx: {
            background: "linear-gradient(to right, #667eea, #764ba2)",
        }, children: _jsx(Container, { maxWidth: "sm", children: _jsxs(Paper, { elevation: 6, sx: { p: 4, borderRadius: 3 }, children: [_jsx(Typography, { variant: "h5", align: "center", gutterBottom: true, children: "Welcome" }), _jsx(motion.div, { initial: "initial", animate: "in", variants: pageVariants, transition: pageTransition, children: _jsx(Outlet, {}) }, pathname)] }) }) }));
}
export default AuthLayout;
