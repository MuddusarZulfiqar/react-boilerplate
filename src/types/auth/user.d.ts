import { RoleType } from "./role";

/**
 * User management types
 * @module types/user
 * @description This module defines the user types used in the application.
 */

export interface User extends Dates {
    id: string;
    name: string;
    email: string;
    role: RoleType; // This can be a RoleType if you import it
    lastLogin?: string; // Optional, ISO date string
    isActive: boolean; // Indicates if the user account is active
    profilePictureUrl?: string; // Optional, URL to the user's profile picture
    // extend the Dates interface to include createdAt and updatedAt
    [key: string]: any; // Allows for additional properties
    // ! This can be useful for dynamic user attributes
}

interface Dates {
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
}
