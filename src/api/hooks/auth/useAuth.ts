import { useQuery } from '@tanstack/react-query';


const useAuth = () => {
    return useQuery({
        queryKey: ['auth'],
        queryFn: async () => {
        const response = await fetch('/api/auth');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
        },
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}