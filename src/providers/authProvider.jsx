/**
 * This module exports a React context and a provider for managing authentication state.
 *
 * @module AuthProvider
 * @file This file is part of the `providers` directory and contains the `AuthProvider` component and `useAuth` hook for managing authentication state in a React application.
 */

import { createContext, useContext, useMemo, useState } from "react";

/**
 * `AuthContext` is a React context for managing authentication state.
 *
 * @type {React.Context}
 */
const AuthContext = createContext();

/**
 * `AuthProvider` is a React component that provides the `AuthContext` to its children.
 * It manages the authentication state, which includes the user data and authentication token.
 *
 * @param {Object} props - The props for the component.
 * @param {React.ReactNode} props.children - The children components to render inside the provider.
 */
const AuthProvider = ({ children }) => {
  /**
   * `user` is a state variable for the user data and authentication token.
   * It is initialized with the authentication token from the cookie, if it exists.
   *
   * @type {[Object, Function]}
   */
  const [user, setUser] = useState(() => {
    // get token from cookie
    const token = document.cookie
        .split(";")
        .find((item) => item.includes("token"));
    if (token) {
      return token;
    } else {
      return null;
    }
  });

  /**
   * `updateUser` is a function that updates the user data and authentication token.
   * If `userData` is provided, it sets the user data and stores the authentication token in local storage.
   * If `userData` is not provided, it clears the user data and removes the authentication token from local storage.
   *
   * @param {Object} userData - The new user data and authentication token.
   */
  const updateUser = (userData) => {
    if (userData) {
      setUser(userData.user);
      // localStorage.setItem("token", JSON.stringify(userData?.token));
    } else {
      setUser(null);
      localStorage.removeItem("token");
    }
  };

  /**
   * `contextValue` is a memoized value of the authentication context.
   * It includes the user data and the `updateUser` function.
   *
   * @type {Object}
   */
  const contextValue = useMemo(
      () => ({
        user,
        setUser: updateUser, // Use the updated function
      }),
      [user]
  );

  // Provide the authentication context to the children components
  return (
      <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

/**
 * `useAuth` is a custom React hook that provides a convenient way to access the authentication context.
 *
 * @returns {Object} The authentication context.
 */

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

/**
 * The `AuthProvider` component and `useAuth` hook are exported for use in other parts of the application.
 */
export default AuthProvider;