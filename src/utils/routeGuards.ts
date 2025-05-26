// utils/routeGuards.ts
import { redirect } from 'react-router'
import { RoleType } from '@/types'
import { Role } from '@/constants'


interface RequireAuthOptions {
  allowedRoles?: RoleType[]
}


export function requireAuth(options?: RequireAuthOptions) {
  return () => {
    const userJson = localStorage.getItem('token')
    if (!userJson) return redirect('/auth/login')
    // Assuming userJson is a JSON string that contains user data
    let currentRole = sessionStorage.getItem('role') as RoleType;
    if (options?.allowedRoles && !options.allowedRoles.includes(currentRole)) {
      return redirect('/dashboard/unauthorized') // make sure this route exists
    }

    return null
  }
}


export function nonRequireAuth() {
  return () => {
    const userJson = !!localStorage.getItem('token')

    if (userJson) {
      return redirect('/dashboard') // Redirect to dashboard if user is already logged in
    }
    return null
  }
}
