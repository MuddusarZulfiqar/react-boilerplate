import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
// src/components/layout/PublicFooter.tsx
import { Box, Typography } from "@mui/material";
const PublicFooter = () => {
    return (_jsx(Box, { component: "footer", py: 2, textAlign: "center", bgcolor: "grey.100", children: _jsxs(Typography, { variant: "body2", color: "text.secondary", children: ["\u00A9 ", new Date().getFullYear(), " MyApp. All rights reserved."] }) }));
};
export default PublicFooter;
