import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "./context/Auth.Provider";
import "@/styles/main.css";
import ErrorBoundary from "@/components/core/ErrorBoundary";
import ReduxProviderWrapper from "./context/Redux.Provider";

// settings.requireRedux
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReduxProviderWrapper>
        <AuthProvider>
          <ErrorBoundary>
            <App />
            {import.meta.env.VITE_APP_ENV === "development" && (
              <ReactQueryDevtools initialIsOpen={false} />
            )}
          </ErrorBoundary>
        </AuthProvider>
      </ReduxProviderWrapper>
    </QueryClientProvider>
  </StrictMode>
);
