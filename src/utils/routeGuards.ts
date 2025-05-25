// utils/routeGuards.ts
import { redirect } from 'react-router'
import { RoleType } from '@/types'


interface RequireAuthOptions {
  allowedRoles?: RoleType[]
}


export function requireAuth(options?: RequireAuthOptions) {
  return () => {
    const userJson = localStorage.getItem('user')
    if (!userJson) return redirect('/auth/login')

    const user = JSON.parse(userJson)

    if (options?.allowedRoles && !options.allowedRoles.includes(user.role)) {
      return redirect('/dashboard/unauthorized') // make sure this route exists
    }

    return null
  }
}
