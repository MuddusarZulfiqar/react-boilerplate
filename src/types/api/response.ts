/**
 * ApiResponse interface
 * @module types/api/response
 * @description This module defines the structure of API responses used in the application.
 */

export interface ApiResponse<T = any> {
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
    data: T[];
    total: number;
    page: number;
    limit: number;
}

export interface ErrorResponse {
    success: false;
    error: {
        code: string;
        message: string;
        details?: any; // Optional, can include additional error details
    };
}

