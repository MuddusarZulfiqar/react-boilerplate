import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "nprogress/nprogress.css";
import ErrorBoundary from "@/components/core/ErrorBoundary.jsx";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/utils";
import CssBaseline from "@mui/material/CssBaseline";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <App />
        <CssBaseline />
      </ErrorBoundary>
    </ThemeProvider>
    <ToastContainer />
  </React.StrictMode>
);
