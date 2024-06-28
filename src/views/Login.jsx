import { useAuth } from "@/providers/AuthProvider.jsx";
import { Button } from "@mui/material";

const Login = () => {
  const { login } = useAuth();
  const handleLogin = async () => {
    try {
      await login();
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
