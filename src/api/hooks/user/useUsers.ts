import { useQuery } from '@tanstack/react-query';
// hooks/react-query/useUsers.ts
import { fetchUsers } from '@/api/services/user.service';

export function useUsers() {
  return useQuery({
    queryKey:['users',],
    queryFn:fetchUsers,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}
