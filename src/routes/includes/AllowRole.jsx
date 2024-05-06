import { Navigate, Outlet } from "react-router-dom";
import useAuth from "@/hooks/useAuth.js";

function AllowRole({ roles }) {
  const { user,loading } = useAuth();
    if(loading){
        return <div>Loading...</div>
    }
  console.log(user);
  if (user && roles.includes(user.roleSlug)) {
    return <Outlet />;
  } else {
    return <Navigate to="/403" />;
  }
}

export default AllowRole;
