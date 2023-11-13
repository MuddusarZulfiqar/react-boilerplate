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
      // console.log(response);
      localStorage.setItem("token", response.data.token);
      setUser({
        token: response.data.token,
        ...response.data.user,
      });
      navigate("/dashboard", { replace: true });
    } catch (error) {
      console.log(error);
    }
    // setUser({
    //   user: {
    //     name: "John Doe",
    //     email: "",
    //   },
    //   token: "1234567890",
    // });
    // navigate("/dashboard", { replace: true });
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
