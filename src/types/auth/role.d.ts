/**
 * Role management types
 * @module types/role
 * @description This module defines the roles used in the application.
 * It includes an enum for predefined roles and a type for dynamic role management.
 */

export enum Roles {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

/**
 * RoleType is a type that allows for dynamic role management.
 * It maps string keys to Role enum values, allowing for additional roles to be added as needed.
 */

export type RoleType = typeof Roles[keyof typeof Roles]