import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/AuthProvider";
import request from "@/utils/request";

const Logout = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await request.get("/auth/logout");
      setUser(null);
      navigate("/auth/login", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  setTimeout(() => {
    handleLogout();
  }, 1 * 1000);

  return <>Logout Page</>;
};

export default Logout;
