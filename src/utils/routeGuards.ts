// utils/routeGuards.ts
import { redirect } from 'react-router'
import { RoleType } from '@/types'
import { store } from "@/store";


interface RequireAuthOptions {
  allowedRoles?: RoleType[]
}

// Used in protected routes
export function requireAuth(options?: RequireAuthOptions) {
  return async ({ request }: { request: Request }) => {
    const state = store.getState(); // ✅ access Redux state

    const token = localStorage.getItem('token')
    const role = state.auth.user?.role as RoleType

    const url = new URL(request.url)
    const pathname = url.pathname

    if (!token) {
      // Redirect to login and preserve the original destination
      return redirect(`/auth/login?redirectTo=${pathname}`)
    }

    if (options?.allowedRoles && !options.allowedRoles.includes(role)) {
      return redirect('/dashboard/unauthorized')
    }

    return null // allow access
  }
}

// Used on /auth/login, etc., to redirect logged-in users
export function nonRequireAuth() {
  return async ({ request }: { request: Request }) => {
    const token = localStorage.getItem('token')

    if (token) {
      const url = new URL(request.url)
      const redirectTo = url.searchParams.get('redirectTo') || '/dashboard'
      return redirect(redirectTo)
    }

    return null
  }
}
