import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/authProvider";
import { Button } from "@mui/material";
import request from "../utils/request";
// import { useTheme } from "@mui/material/styles";

const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  // const theme = useTheme();
  const handleLogin = async () => {
    try {
      const response = await request.post("/auth/login", {
        email: "muddusar.zulfiqar@purelogics.net",
        password: "12345",
      });
      console.log(response);
      setUser({
        user: {
          name: "John Doe",
          email: "",
          role: "admin",
        },
        token: response.data.token,
      });
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
