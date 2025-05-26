import { RoleType } from "./role";

/**
 * User management types
 * @module types/user
 * @description This module defines the user types used in the application.
 */

export interface User extends Token {
    id: string;
    username: string;
    email: string;
    firstName: string; // Optional, can be undefined
    lastName: string; // Optional, can be undefined
    role?: RoleType; // This can be a RoleType if you import it
    image?: string; // Optional, URL to the user's profile picture
    // extend the Dates interface to include createdAt and updatedAt
    [key: string]: any; // Allows for additional properties
    // ! This can be useful for dynamic user attributes
}


interface Token {
    accessToken: string; // JWT or similar token
    refreshToken?: string; // Optional, if your auth system uses refresh tokens
}