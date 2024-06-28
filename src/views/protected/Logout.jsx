import { useNavigate } from "react-router-dom";
import {useAuth} from "@/providers/AuthProvider.jsx";
import { useEffect } from "react";

const Logout = () => {
  const { logout } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/auth/login");
  }, [logout, navigate]);
  return <>Logout Page</>;
};

export default Logout;
