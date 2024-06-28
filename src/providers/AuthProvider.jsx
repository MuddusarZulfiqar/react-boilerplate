// AuthProvider.js
import { createContext, useContext, useEffect, useState } from 'react';
import {useQuery,useMutation} from "@tanstack/react-query";
import {getMe} from "@/services/user/index.js";
import {loginRequest,logout as handleLogoutRequest} from "@/services/auth/index.js";
import { useQueryClient } from '@tanstack/react-query'
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [moduleAccess, setModuleAccess] = useState({});
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [requiredUser, setRequiredUser] = useState(false);
  const queryClient = useQueryClient();
  if(!loading) console.log('user', user);
  const {data:userData,isError:getUserError}=useQuery({
    queryKey: ['me'],
    queryFn: getMe,
    enabled: isLoggedIn && requiredUser,
  });

  const {mutate:handleLogin} = useMutation({
    mutationFn: ()=>loginRequest({
      email:'stephen+dev@hellocustom.io',
      password:'Allah@123'
    }),
    onSuccess: (data) => {
        setIsLoggedIn(true);
        setUser(data.userInfo);
        setRequiredUser(false);
        localStorage.setItem('token',data.token);
        queryClient.setQueryData(['me'],data.userInfo);
    },
  });

  const {mutate:handleLogout} = useMutation({
    mutationFn: handleLogoutRequest,
    enabled: false,
    onSuccess:()=>{
      setIsLoggedIn(false);
      setModuleAccess({});
      setUser(null);
      localStorage.removeItem('token');
      queryClient.clear();
    },
    onError:()=>{
      setLoading(false);
    }
  });


  useEffect(() => {
    if(userData){
      setUser(userData);
      setLoading(false);
    }
    if(getUserError){
      setLoading(false);
      queryClient.clear();
    }
  }, [userData,getUserError,queryClient]);


  useEffect(() => {
    if(localStorage.getItem('token')){
      checkAuthStatus();
    } else {
        setLoading(false);
    }
  }, []);

  const checkAuthStatus = () => {
    setIsLoggedIn(true);
    setRequiredUser(true);
  };

  const login = async () => {
    await handleLogin();
  };

  const logout = async () => {
    await handleLogout();
  };

  return (
      <AuthContext.Provider value={{ isLoggedIn, moduleAccess, login, logout,user,loading }}>
        {children}
      </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
