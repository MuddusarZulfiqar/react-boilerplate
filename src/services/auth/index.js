/**
 * This module exports functions for making authentication requests.
 *
 * @module auth
 * @file This file is part of the `services/auth` directory and contains functions for making authentication requests in a React application.
 */

import {request} from "@/utils/index.js";
import apiRoutes from "@/constants/api.js";

/**
 * `loginRequest` is an asynchronous function that makes a POST request to the login API.
 * It takes a `data` object as a parameter, which should contain the user's login credentials.
 * It returns the response data from the API.
 *
 * @async
 * @function
 * @param {Object} data - The user's login credentials.
 * @returns {Promise<Object>} The response data from the API.
 */
export const loginRequest = async (data) => {
    return await (await request.post(apiRoutes.auth.login, data)).data;
};

/**
 * `register` is an asynchronous function that makes a POST request to the register API.
 * It takes a `data` object as a parameter, which should contain the user's registration information.
 * It returns the response data from the API.
 *
 * @async
 * @function
 * @param {Object} data - The user's registration information.
 * @returns {Promise<Object>} The response data from the API.
 */
export const register = async (data) => {
    return await request.post(apiRoutes.auth.register, data);
};

/**
 * `logout` is an asynchronous function that makes a POST request to the logout API.
 * It does not take any parameters and returns the response data from the API.
 *
 * @async
 * @function
 * @returns {Promise<Object>} The response data from the API.
 */
export const logout = async () => {
    return await request.post(apiRoutes.auth.logout);
}

// Path: src/services/auth/index.js