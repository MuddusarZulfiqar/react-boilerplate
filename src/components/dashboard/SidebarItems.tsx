import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavLink } from "react-router";
import { useAuth } from "@/hooks/useAuth";
import { sidebarItems } from "@/constants/sidebar";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSidebar } from "@/hooks/useSidebar";
import { RoleType } from "@/types";
// NavLink styling
const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  width: "100%",
};

const activeStyle: React.CSSProperties = {
  backgroundColor: "rgba(25, 118, 210, 0.12)", // MUI primary with alpha
  fontWeight: 600,
};

const SidebarItems = () => {
  const { user, logout } = useAuth();
  const filteredItems = useSidebar((user?.role as RoleType) || "user");

  return (
    <>
      {filteredItems.map((item) => (
        <NavLink
          to={item.path}
          key={item.path}
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
          end
        >
          <ListItemButton>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </NavLink>
      ))}

      <ListItemButton onClick={logout}>
        <ListItemIcon>
          <LogoutIcon /> {/* Optional: replace with a real logout icon */}
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </>
  );
};

export default SidebarItems;
