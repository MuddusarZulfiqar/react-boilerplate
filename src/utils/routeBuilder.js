/**
 * The implementation of `buildRoute`.
 * Determines whether parameters are provided and performs placeholder replacement accordingly.
 *
 * @param route - The route template or static string
 * @param params - (Optional) Route parameters to replace in the path
 * @returns Final route with dynamic segments replaced or static route
 */
export function buildRoute(route, params) {
    if (!params)
        return route;
    return Object.entries(params).reduce((path, [key, value]) => {
        return path.replace(`:${key}`, encodeURIComponent(String(value)));
    }, route);
}
