import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/authProvider";
import { Button } from "@mui/material";
import request from "../utils/request";
// import { useTheme } from "@mui/material/styles";

const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  // const theme = useTheme();
  const handleLogin = () => {
    setUser({
      user: {
        name: "John Doe",
        email: "",
      },
      token: "1234567890",
    });
    navigate("/dashboard", { replace: true });
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
