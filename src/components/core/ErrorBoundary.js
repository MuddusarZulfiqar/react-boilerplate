import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/ErrorBoundary.tsx
import { Component } from "react";
import { Box, Button, Typography, Container, Card } from "@mui/material";
import { motion } from "framer-motion";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
class ErrorBoundary extends Component {
    state = {
        hasError: false,
        error: null,
    };
    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }
    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error:", error, info);
    }
    handleReload = () => {
        this.setState({ hasError: false, error: null });
        window.location.reload();
    };
    render() {
        if (this.state.hasError) {
            return (_jsx(Container, { maxWidth: "sm", sx: {
                    height: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                }, children: _jsxs(Card, { component: motion.div, initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.3 }, sx: {
                        padding: 4,
                        boxShadow: 3,
                        backgroundColor: "background.paper",
                    }, children: [_jsx(Box, { mb: 3, children: _jsx(ErrorOutlineIcon, { color: "error", sx: { fontSize: 80 } }) }), _jsx(Typography, { variant: "h4", color: "error", gutterBottom: true, children: "Oops! Something went wrong." }), _jsx(Typography, { variant: "body1", color: "text.secondary", mb: 4, children: this.state.error?.message ||
                                "An unexpected error has occurred. Please try again later." }), _jsx(Button, { variant: "contained", onClick: this.handleReload, size: "large", children: "Reload Page" })] }) }));
        }
        return this.props.children;
    }
}
export default ErrorBoundary;
