import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/authProvider";
import request from "@/utils/request";

const Logout = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/auth/login", { replace: true });
    localStorage.removeItem("token");
  };

  setTimeout(() => {
    handleLogout();
  }, 1 * 1000);

  return <>Logout Page</>;
};

export default Logout;
