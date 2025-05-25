import { ApiResponse } from '@/types';
import { buildRoute } from '@/utils/routeBuilder';
import { axiosInstance } from '../axiosInstance';
import type { User } from '@/types';
import { apiRoutes } from '@/routes/api.routes';
import type { AxiosResponse } from 'axios';

export function fetchUsers() {
  return axiosInstance
    .get<ApiResponse<User[]>>(buildRoute(apiRoutes.users.detail,{id:1}))
    .then((res: AxiosResponse<ApiResponse<User[]>>) => {
      if (!res.data.success) {
        throw new Error(res.data.message || 'API returned unsuccessful response');
      }
      return res.data.data;  // Return just the user array
    });
}
