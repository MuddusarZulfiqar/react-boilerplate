import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { loginRequest } from "@/api/services/login.service";
import toast from "react-hot-toast";
import { getCurrentUser } from "@/api/services/user.service";
import { useAppDispatch } from "@/hooks";
import { loginUser, logoutUser } from "@/store/slices/authSlice";
export const AuthContext = createContext(undefined);
export const AuthProvider = ({ children, }) => {
    const [user, setUser] = useState(null);
    const enabled = localStorage.getItem("token"); // Fetch user only if not logged in
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();
    // Fetch current user on mount
    const { isLoading, data } = useQuery({
        queryKey: ["auth", "me"],
        queryFn: getCurrentUser,
        enabled: !!enabled, // Only run if token exists
    });
    const { mutateAsync: loginMutate } = useMutation({
        mutationFn: (payload) => loginRequest(payload),
        onSuccess: (data) => {
            console.log("Login successful:", data);
            setUser(data);
            localStorage.setItem("token", data.accessToken); // Assuming the token is part of the user object
            queryClient.invalidateQueries({
                queryKey: ["auth", "me"],
            });
        },
        onError: (error) => {
            console.error("Login failed:", error);
            setUser(null);
            toast.error("Login failed. Please check your credentials.");
        },
    });
    const login = async (payload) => {
        await loginMutate(payload);
    };
    const logout = () => {
        localStorage.removeItem("token");
        sessionStorage.removeItem("role"); // Clear user role from session storage
        toast.success("Logged out successfully");
        dispatch(logoutUser()); // Dispatch logout action to update Redux state
        setTimeout(() => {
            setUser(null);
            queryClient.clear();
            window.location.href = "/auth/login"; // Redirect to login page after logout
        }, 1000); // Optional: delay for logout success message
    };
    useEffect(() => {
        if (data) {
            setUser(data);
            dispatch(loginUser(data)); // Dispatch login action to update Redux state
            if (data.role) {
                sessionStorage.setItem("role", data.role); // Store user role in session storage
            }
        }
    }, [data]);
    return (_jsx(AuthContext.Provider, { value: { user, login, logout, isLoading }, children: children }));
};
