import { RouterProvider } from "react-router";
import { router } from "@/routes";
import { Toaster } from "react-hot-toast";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "@/theme";
import "nprogress/nprogress.css";
import "@/assets/scss/styles.scss";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <Toaster
        position="bottom-center"
        // add duration global
        toastOptions={{
          duration: 4000,
        }}
      />
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
