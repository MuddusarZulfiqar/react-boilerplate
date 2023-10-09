import { Outlet, useNavigate } from "react-router-dom";
import * as styles from "./styles/AuthLayout.module.css";
import { Button, Typography } from "@mui/material";
function AuthLayout() {
  const navigate = useNavigate();
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
