import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet, useLocation } from "react-router";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "@/constants";
import { Box, Container } from "@mui/material";
import PublicHeader from "@/components/layout/PublicHeader";
import PublicFooter from "@/components/layout/PublicFooter";
function PublicLayout() {
    const { pathname } = useLocation();
    return (_jsxs(Box, { display: "flex", flexDirection: "column", minHeight: "100vh", children: [_jsx(PublicHeader, {}), _jsx(Box, { component: "main", flexGrow: 1, py: 4, children: _jsx(Container, { maxWidth: "lg", children: _jsx(motion.div, { initial: "initial", animate: "in", variants: pageVariants, transition: pageTransition, children: _jsx(Outlet, {}) }, pathname) }) }), _jsx(PublicFooter, {})] }));
}
export default PublicLayout;
