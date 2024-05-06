import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import {useState} from "react";
import {loginRequest} from "@/services/auth";
import {useMutation} from "@tanstack/react-query";

import useAuth from "@/hooks/useAuth.js";
// import { useTheme } from "@mui/material/styles";

const Login = () => {
    const {
        login
    } = useAuth();
    const [userData] = useState({email: "stephen+dev@hellocustom.io", password: "Allah@123"});
    const navigate = useNavigate();
    const {error, isPending, mutate} = useMutation({
        mutationFn: loginRequest,
    onSuccess: async (data) => {
            localStorage.setItem('token', data?.token);
            await login(data?.userInfo);

            window.location.href = "/dashboard/profile"
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
