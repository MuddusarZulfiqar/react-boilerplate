import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../providers/AuthProvider.jsx';

const ProtectedRoute = ({ isLoginRequired, roles }) => {
  const { isLoggedIn, user,loading } = useAuth();
  if(loading) return null;
  // Check if login is required and if user is authenticated
  if (isLoginRequired && !isLoggedIn) {
    return <Navigate to="/auth/login" />;
  }

  // Check if user has required roles
  if (roles && roles.length > 0 && !roles.some(role => role === user.role)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />
};

export default ProtectedRoute;
