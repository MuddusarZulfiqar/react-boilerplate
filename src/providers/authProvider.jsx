import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to hold the authentication token and user data
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("token");
    if (storedUser) {
      return storedUser;
    }
    return null;
  });

  // Function to set the authentication token and user data
  const updateUser = (userData) => {
    if (userData) {
      console.log(userData);
      setUser(userData.user);
      localStorage.setItem("token", JSON.stringify(userData?.token));
    } else {
      setUser(null);
      localStorage.removeItem("token");
    }
  };

  // useEffect(() => {
  //   if (user && user.token) {
  //     localStorage.setItem("token", user.token);
  //   }
  // }, [user]);

  // Memoized value of the authentication context
  const contextValue = useMemo(
    () => ({
      user,
      setUser,
      updateUser,
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
