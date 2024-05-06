import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMe } from "@/services/user/index.js";

const useAuth = () => {
    const queryClient = useQueryClient();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const { refetch } = useQuery({
        queryKey: ['user'],
        queryFn: getMe,
        enabled: false,
    });

    useEffect(() => {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (token) {
            refetch().then(({ data }) => {
                setUser(data);
                setLoading(false);
            }).catch(() => {
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, [refetch]);

    // Update user state when user changes
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            refetch().then(({ data }) => {
                setUser(data);
            }).catch(() => {
                setUser(null);
            });
        } else {
            setUser(null);
        }
    }, [refetch]);

    const login = async (userData) => {
        // trigger the refetch
        try {
            setUser(userData);
            await refetch();
            setLoading(false);
        } catch (e) {
            setLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token');
        window.location.href = '/auth/login';
    };

    return { user, login, logout, loading };
};

export default useAuth;
