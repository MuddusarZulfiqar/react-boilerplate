// AuthProvider.js
import { createContext, useContext, useEffect, useState } from 'react';
import {request} from "../utils/index.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [moduleAccess, setModuleAccess] = useState({});
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if(localStorage.getItem('token')){
      checkAuthStatus();
    } else {
        setLoading(false);
    }
  }, []);

  const checkAuthStatus = () => {
    // request.get('/api/check-auth')
    //     .then(response => {
    //       if (response.data.loggedIn) {
    //         setIsLoggedIn(true);
    //         setModuleAccess(response.data.moduleAccess);
    //         setUser(response.data.user);
    //       }
    //     })
    //     .catch(error => {
    //       console.error('Error checking authentication:', error);
    //     });

    setIsLoggedIn(true);
    setTimeout(() => {

      setUser({
        name: "John Doe",
        email: "",
        role: "admin",
      });
      setLoading(false);
    }, 1000);
  };

  const login = () => {
    return new Promise((resolve) => {
      setUser({
        name: "John Doe",
        email: "",
        role: "admin",
      });
        setIsLoggedIn(true);
        localStorage.setItem('token' , 'tokendfssafadsf');
      resolve();
        // request.post('/api/login', user)
        //     .then(response => {
        //         if (response.data.loggedIn) {
        //         setIsLoggedIn(true);
        //         setModuleAccess(response.data.moduleAccess);
        //         setUser(response.data.user);
        //         resolve(response.data);
        //         } else {
        //         reject(response.data);
        //         }
        //     })
        //     .catch(error => {
        //         console.error('Error logging in:', error);
        //         reject(error);
        //     });
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setModuleAccess({});
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
      <AuthContext.Provider value={{ isLoggedIn, moduleAccess, login, logout,user,loading }}>
        {children}
      </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
