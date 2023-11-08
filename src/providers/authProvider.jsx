import { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // State to hold the authentication token and user data
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

  console.log(user);
  // Function to set the authentication token and user data
  const updateUser = (userData) => {
    if (userData) {
      setUser(userData.user);
      // localStorage.setItem("token", JSON.stringify(userData?.token));
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
      setUser: updateUser, // Use the updated function
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
