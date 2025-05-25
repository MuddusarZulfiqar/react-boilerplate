/**
 * Builds a static route without modifying it.
 *
 * This overload is useful when calling `buildRoute()` with a known static route
 * (e.g., `'/auth/login'`), so the return type preserves the exact string literal.
 *
 * @param route - The static route string to return as-is.
 * @returns The same static route, preserving the literal type.
 */
export function buildRoute<T extends string>(route: T): T;

/**
 * Builds a dynamic route by replacing `:param` placeholders with actual values.
 *
 * Example:
 * ```ts
 * buildRoute('/users/:id', { id: 123 }); // → "/users/123"
 * buildRoute('/users/:userId/orders/:orderId', { userId: 5, orderId: 10 }); // → "/users/5/orders/10"
 * ```
 *
 * @param route - The route template containing placeholders (e.g., `/users/:id`)
 * @param params - An object mapping parameter names to their values
 * @returns The route with placeholders replaced by actual parameter values
 */
export function buildRoute<T extends Record<string, string | number>>(route: string, params: T): string;

/**
 * The implementation of `buildRoute`.
 * Determines whether parameters are provided and performs placeholder replacement accordingly.
 *
 * @param route - The route template or static string
 * @param params - (Optional) Route parameters to replace in the path
 * @returns Final route with dynamic segments replaced or static route
 */
export function buildRoute(route: string, params?: Record<string, string | number>): string {
  if (!params) return route;
  return Object.entries(params).reduce((path, [key, value]) => {
    return path.replace(`:${key}`, encodeURIComponent(String(value)));
  }, route);
}
