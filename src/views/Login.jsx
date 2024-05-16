import { useNavigate } from "react-router-dom";
import { useAuth } from "@/providers/AuthProvider.jsx";
import { Button } from "@mui/material";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  // const theme = useTheme();
  const handleLogin = async () => {
    try {
      await login();
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button variant="contained" color="secondary" onClick={handleLogin}>
        Login
      </Button>
    </>
  );
};

export default Login;
