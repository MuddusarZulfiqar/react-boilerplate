import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "nprogress/nprogress.css";
import ErrorBoundary from "@/components/core/ErrorBoundary.jsx";
import "./index.css";
import "@/assets/scss/styles.scss";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/utils";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import { store } from "@/app/store";
import { AuthProvider } from "./providers/AuthProvider.jsx";
import { HelmetProvider } from "react-helmet-async";

import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <ErrorBoundary>
              <AuthProvider>
                <Profiler
                  id="App"
                  onRender={(id, phase, actualDuration) => {
                    console.log({ id, phase, actualDuration });
                  }}
                >
                  <HelmetProvider>
                    <App />
                  </HelmetProvider>
                </Profiler>
              </AuthProvider>
              <CssBaseline />
            </ErrorBoundary>
          </ThemeProvider>
            <ReactQueryDevtools/>
        </QueryClientProvider>
    </Provider>
    <ToastContainer />
  </React.StrictMode>
);
