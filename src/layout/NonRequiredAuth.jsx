import { Link, Outlet, NavLink } from "react-router-dom";
import * as styles from "./styles/NonRequiredAuth.module.css";
import useAuth from "@/hooks/useAuth.js";
function NonRequiredAuth() {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul className={styles.nav}>
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending " + styles.list_item
                    : isActive
                    ? "active-item " + styles.list_item
                    : "" + styles.list_item
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending " + styles.list_item
                    : isActive
                    ? "active-item " + styles.list_item
                    : "" + styles.list_item
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="contact"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending " + styles.list_item
                    : isActive
                    ? "active-item " + styles.list_item
                    : "" + styles.list_item
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="form"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending " + styles.list_item
                    : isActive
                    ? "active-item " + styles.list_item
                    : "" + styles.list_item
                }
              >
                Form
              </NavLink>
            </li>
            {user?._id ? (
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
