import { buildRoute } from '@/utils/routeBuilder';
import { axiosInstance } from '@/api';
import type { User, UserResponse } from '@/types';
import { apiRoutes } from '@/routes/api.routes';
import type { AxiosResponse } from 'axios';
import { AuthRoute, UserRoute } from '@/types/api/apiRoutes';

export async function fetchUsers() {
  const routeTemplate: UserRoute = apiRoutes.users.all;
  const route = buildRoute(routeTemplate); // route is a string now
  
  return axiosInstance
    .get<UserResponse>(route)
    .then((res: AxiosResponse<UserResponse>) => {
      if (!res.status || res.status !== 200) {
        throw new Error('API returned unsuccessful response');
      }
      return res.data;  // Return just the user array
    });
}


export async function getCurrentUser() {
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

