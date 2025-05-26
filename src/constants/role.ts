
/**
 * Role management constants
 * @module constants/role
 * @description This module defines the roles used in the application.
 * It includes an object that maps role names to their corresponding Role enum values.
 * This allows for easy reference and management of user roles throughout the application.
 * @see types/role.ts for the Role enum and RoleType definition.
 */
import { Roles } from '@/types'

export const Role = {
    admin: Roles.ADMIN,
    user: Roles.USER,
    guest: Roles.GUEST,
} as const
