import { ApiResponse } from '@/types';
import { buildRoute } from '@/utils/routeBuilder';
import { axiosInstance } from '@/api';
import type { User } from '@/types';
import { apiRoutes } from '@/routes/api.routes';
import type { AxiosResponse } from 'axios';
import { AuthRoute } from '@/types/api/apiRoutes';
import { LoginFormValues } from '@/types/form';

export function loginRequest(data:LoginFormValues) {
  const routeTemplate: AuthRoute = apiRoutes.auth.login;
  const route = buildRoute(routeTemplate); // route is a string now
  
  return axiosInstance
    .post<User>(route,data)
    .then((res: AxiosResponse<User>) => {
      console.log('Login response:', res);
      if (!res) {
        throw new Error(res || 'API returned unsuccessful response');
      }
      return res.data;  // Return just the user array
    });
}

