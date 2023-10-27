import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import style from "./styles/Dashboard.module.css";
import { motion } from "framer-motion";
import { animation } from "@/constants";

function Dashboard() {
  const { pathname } = useLocation();

  return (
    <main className={style.main}>
      <aside className={style.aside}>
        <h1 className={style.logo}>Dashboard</h1>
        <nav className={style.nav}>
          <ul>
            <li>
              <NavLink
                to={{
                  pathname: "/dashboard",
                  state: {
                    from: "dashboard",
                  },
                }}
                end // end prop is used to match the path exactly
                className={style["nav-list"]}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={{
                  pathname: "/dashboard/profile",
                  state: {
                    from: "dashboard",
                  },
                }}
                end
                className={style["nav-list"]}
              >
                Profile
              </NavLink>
            </li>
            <li>
              <Link
                to={{
                  pathname: "/dashboard/logout",
                  state: {
                    from: "dashboard",
                  },
                }}
                className={style["nav-list"]}
              >
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <section className={style.section}>
        <motion.div
          key={pathname}
          initial="initial"
          animate="in"
          variants={animation.pageVariants}
          transition={animation.pageTransition}
        >
          <Outlet />
        </motion.div>
      </section>
    </main>
  );
}

export default Dashboard;
