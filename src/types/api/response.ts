/**
 * ApiResponse interface
 * @module types/api/response
 * @description This module defines the structure of API responses used in the application.
 */

export interface ApiResponse<T = unknown> {
    success: boolean;
    data: T;
    message?: string;
}

/**
 * ErrorResponse interface
 * @module types/api/response
 * @description This module defines the structure of error responses used in the application.
 */

export interface PaginatedResponse<T> {
    [key: string]: T[] | number | string; // Allows for additional properties
    total: number;
    page: number;
    limit: number;
}


export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue };
export interface ErrorResponse {
    success: false;
    error: {
        code: string;
        message: string;
        details?: JsonValue; // Optional, can include additional error details
    };
}





  