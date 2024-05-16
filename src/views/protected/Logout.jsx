import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/AuthProvider";
import request from "@/utils/request";
import useAuth from "@/hooks/useAuth.js";
import { useEffect } from "react";

const Logout = () => {
  const { logout } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/auth/login");
  }, [logout]);
  return <>Logout Page</>;
};

export default Logout;
