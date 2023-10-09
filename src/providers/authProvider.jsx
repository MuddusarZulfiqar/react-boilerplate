import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to hold the authentication token
  const [user, setUser_] = useState(localStorage.getItem("token"));

  // Function to set the authentication token
  const setUser = (userData) => {
    setUser_(userData);
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("token", user);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  }, [user]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
