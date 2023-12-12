import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../providers/authProvider";

function AllowRole({ roles }) {
  const { user } = useAuth();
  console.log(user);
  if (user && roles.includes(user.role)) {
    return <Outlet />;
  } else {
    return <Navigate to="/403" />;
  }
}

export default AllowRole;
