/**
 * This module exports a configuration object for the application.
 *
 * @module config
 * @file This file is part of the `constants` directory and contains the configuration settings used across the application.
 */

/**
 * `config` is an object that contains the configuration settings for the application.
 * It has the following properties:
 * - `API_URL`: The base URL for the API.
 * - `APP_NAME`: The name of the application.
 * - `APP_DESCRIPTION`: A description of the application.
 * - `APP_KEYWORDS`: Keywords associated with the application.
 * - `APP_FAVICON`: The path to the favicon for the application.
 * - `APP_VERSION`: The current version of the application.
 * - `API_TIMEOUT`: The maximum time, in milliseconds, for the API to respond.
 *
 * @type {Object}
 */
const config = {
  API_URL: "https://nodejs-ecommerce-store-production.up.railway.app/api/v1/",
  APP_NAME: "My App",
  APP_DESCRIPTION: "MY APP DESCRIPTION",
  APP_KEYWORDS: "MY APP KEYWORDS",
  APP_FAVICON: "/vite.svg",
  APP_VERSION: "0.0.0",
  API_TIMEOUT: 15000,
};

/**
 * The `config` object is exported for use in other parts of the application.
 */
export default config;