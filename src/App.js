import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RouterProvider } from "react-router";
import { router } from "@/routes";
import { Toaster } from "react-hot-toast";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme";
import "nprogress/nprogress.css";
import "@/assets/scss/styles.scss";
import usePageTitle from "./hooks/usePageTitle";
function App() {
    usePageTitle();
    return (_jsxs(ThemeProvider, { theme: theme, children: [_jsx(RouterProvider, { router: router }), _jsx(Toaster, { position: "bottom-center", 
                // add duration global
                toastOptions: {
                    duration: 4000,
                } }), _jsx(CssBaseline, {})] }));
}
export default App;
