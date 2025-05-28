import { buildRoute } from '@/utils/routeBuilder';
import { axiosInstance } from '@/api';
import { apiRoutes } from '@/routes/api.routes';
export function fetchUsers() {
    const routeTemplate = apiRoutes.users.detail;
    const route = buildRoute(routeTemplate, { id: '123' }); // route is a string now
    return axiosInstance
        .get(route)
        .then((res) => {
        if (!res.data.success) {
            throw new Error(res.data.message || 'API returned unsuccessful response');
        }
        return res.data.data; // Return just the user array
    });
}
export function getCurrentUser() {
    const routeTemplate = apiRoutes.auth.me;
    const route = buildRoute(routeTemplate); // route is a string now
    return axiosInstance
        .get(route)
        .then((res) => {
        if (!res.data) {
            throw new Error('API returned unsuccessful response');
        }
        return res.data; // Return just the user object
    });
}
