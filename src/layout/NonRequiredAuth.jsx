import { Link, Outlet } from "react-router-dom";
import * as styles from "./styles/NonRequiredAuth.module.css";
import { useAuth } from "@/providers/authProvider";
function NonRequiredAuth() {
  const { user } = useAuth();
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul className={styles.nav}>
            <li>
              <Link to="/" className={styles.list_item}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about-us" className={styles.list_item}>
                About
              </Link>
            </li>
            <li>
              <Link to="contact" className={styles.list_item}>
                Contact
              </Link>
            </li>
            {user?.user ? (
              <li>
                <Link to="dashboard" className={styles.list_item}>
                  Dashboard
                </Link>
              </li>
            ) : (
              <li>
                <Link to="auth/login" className={styles.list_item}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default NonRequiredAuth;
