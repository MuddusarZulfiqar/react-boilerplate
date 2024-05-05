import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import {useState} from "react";
import {loginRequest} from "@/services/auth";
import {QueryClient, useMutation} from "@tanstack/react-query";
// import { useTheme } from "@mui/material/styles";

const Login = () => {
    const queryClient = new QueryClient();
    const [userData] = useState({email: "stephen+dev@hellocustom.io", password: "Allah@123"});
    const navigate = useNavigate();
    const {error, isPending, mutate} = useMutation({
        mutationFn: loginRequest,
        onSuccess: (data) => {
            localStorage.setItem("token", data?.token);
            navigate("/dashboard");
            queryClient.setQueryData(['user'], data)
        },
        onError: (error) => {
            console.error(error);
        },
    })

    if (error) {
        return (<>
                <div>An error has occurred: {error?.message}</div>
            </>
        );
    }
    return (
        <>
            <Button variant="contained" color="secondary" disabled={
                isPending
            } onClick={() => {
                mutate(userData)
            }}
            >
                Login
            </Button>
        </>
    );
};

export default Login;
