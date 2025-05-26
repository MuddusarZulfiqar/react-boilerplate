import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/api";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AuthProvider } from "./context/Auth.context";
import "@/styles/main.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
        {import.meta.env.VITE_APP_ENV === "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
);
