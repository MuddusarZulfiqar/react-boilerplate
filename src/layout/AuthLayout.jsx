import {Outlet, useLocation, useNavigate} from "react-router-dom";
import * as styles from "./styles/AuthLayout.module.css";
import { Button, Typography } from "@mui/material";
import {useAuth} from "@/providers/AuthProvider.jsx";
import {useEffect} from "react";
function AuthLayout() {
  const navigate = useNavigate();
  const location = useLocation()
  const {user,loading} = useAuth();
    useEffect(() => {
        if (!loading && user) {
            navigate(
                location?.state?.from || "/dashboard",
                { replace: true }
            );
        }
    }, [user, navigate, location, loading]);
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            navigate("/", { replace: true });
          }}
        >
          Go to Home
        </Button>
      </header>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
      <footer className={styles.footer}>
        <Typography variant="body2" color="text.secondary" align="center">
          All rights reserved {"© "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </footer>
    </div>
  );
}

export default AuthLayout;
