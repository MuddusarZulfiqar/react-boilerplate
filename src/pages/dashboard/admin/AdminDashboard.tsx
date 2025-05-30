import { useUsers } from "@/api/hooks/user/useUsers";
import { useAuth } from "@/hooks";
import usePageTitle from "@/hooks/usePageTitle";
import { User } from "@/types";
import { CircularProgress } from "@mui/material";
import React from "react";

function AdminDashboard() {
  usePageTitle("Admin Dashboard");

  const { user } = useAuth();
  const users = useUsers();
  const { data, isLoading, isError } = users;

  console.log("Users:", data);
  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <div className="table">
      <div className="table__head">
        <div className="table__row">
          <div className="table__row--cell">First Name</div>
          <div className="table__row--cell">Last Name</div>
          <div className="table__row--cell">Email</div>
          <div className="table__row--cell">Role</div>
          <div className="table__row--cell">User Name</div>
        </div>
      </div>

      {data?.users?.map((user) => {
        return (
          <div className="table__row" key={user.id}>
            <div className="table__row--cell" data-label="First Name">
              <img src={user?.image} alt="User Icon" />
              {user.firstName}
            </div>

            <div className="table__row--cell" data-label="Last Name">
              {user.lastName}
            </div>

            <div className="table__row--cell" data-label="Email">
              {user.email}
            </div>

            <div className="table__row--cell" data-label="Role">
              {user?.role
                ? user?.role.charAt(0).toUpperCase() + user?.role.slice(1)
                : "N/A"}
            </div>
            <div className="table__row--cell" data-label="User Name">
              {user.username}
            </div>
          </div>
        );
      })}

      {/* Additional rows can go here */}
    </div>
  );
}

export default AdminDashboard;
