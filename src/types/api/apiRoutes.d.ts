import { apiRoutes } from "@/routes/api.routes";

/**
 * Represents the full structure of all API route definitions.
 * 
 * This type is inferred directly from the `apiRoutes` object, preserving
 * literal types (e.g., '/auth/login') if `apiRoutes` is defined with `as const`.
 */
export type ApiRoutes = typeof apiRoutes;

/**
 * Extracts all possible values (URLs) from the `auth` section of the API routes.
 * 
 * This is useful when you need a union of all `auth` endpoints, such as:
 * '/auth/login' | '/auth/me' | '/auth/refresh'
 */
export type AuthRoute = ApiRoutes['auth'][keyof ApiRoutes['auth']];

/**
 * Extracts all possible values (URLs) from the `user` section of the API routes.
 * 
 * This is useful when you need a union of all `user` endpoints, such as:
 * '/user/data'
 */
export type UserRoute = ApiRoutes['users'][keyof ApiRoutes['users']]