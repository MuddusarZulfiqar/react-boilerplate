import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "./context/Auth.context";
import "@/styles/main.css";
import ErrorBoundary from "@/components/core/ErrorBoundary";
import ReduxProviderWrapper from "./context/Redux.Provider";
// settings.requireRedux
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsx(QueryClientProvider, { client: queryClient, children: _jsx(ReduxProviderWrapper, { children: _jsx(AuthProvider, { children: _jsxs(ErrorBoundary, { children: [_jsx(App, {}), import.meta.env.VITE_APP_ENV === "development" && (_jsx(ReactQueryDevtools, { initialIsOpen: false }))] }) }) }) }) }));
