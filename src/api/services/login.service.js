import { buildRoute } from '@/utils/routeBuilder';
import { axiosInstance } from '@/api';
import { apiRoutes } from '@/routes/api.routes';
export function loginRequest(data) {
    const routeTemplate = apiRoutes.auth.login;
    const route = buildRoute(routeTemplate); // route is a string now
    return axiosInstance
        .post(route, data)
        .then((res) => {
        console.log('Login response:', res);
        if (!res) {
            throw new Error(res || 'API returned unsuccessful response');
        }
        return res.data; // Return just the user array
    });
}
