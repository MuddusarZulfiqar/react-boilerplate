import { ApiResponse } from '@/types';
import { buildRoute } from '@/utils/routeBuilder';
import { axiosInstance } from '@/api';
import type { User } from '@/types';
import { apiRoutes } from '@/routes/api.routes';
import type { AxiosResponse } from 'axios';
import { AuthRoute, UserRoute } from '@/types/api/apiRoutes';

export function fetchUsers() {
  const routeTemplate: UserRoute = apiRoutes.users.detail;
  const route = buildRoute(routeTemplate, { id: '123' }); // route is a string now
  
  return axiosInstance
    .get<ApiResponse<User[]>>(route)
    .then((res: AxiosResponse<ApiResponse<User[]>>) => {
      if (!res.data.success) {
        throw new Error(res.data.message || 'API returned unsuccessful response');
      }
      return res.data.data;  // Return just the user array
    });
}


export function getCurrentUser() {
  const routeTemplate: AuthRoute = apiRoutes.auth.me;
  const route = buildRoute(routeTemplate); // route is a string now
  
  return axiosInstance
    .get<User>(route)
    .then((res: AxiosResponse<User>) => {
      if (!res.data) {
        throw new Error('API returned unsuccessful response');
      }
      return res.data;  // Return just the user object
    });
}

