import {createContext, useContext, useMemo, useState} from "react";
import useAuth from "@/hooks/useAuth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = useAuth();
    const [userKey, setUserKey] = useState(0);


    // Force re-render when user changes
    useMemo(() => {
        setUserKey(prevKey => prevKey + 1);
    }, [auth.user]);

    console.log(auth.user, "Auth from AuthProvider");
  const contextValue = useMemo(() => auth, [auth]);

  // Provide the authentication context to the children components
  return (
      <AuthContext.Provider value={contextValue}>
        {children}
      </AuthContext.Provider>
  );
};

// Custom hook to consume the authentication context
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);

export default AuthProvider ;
