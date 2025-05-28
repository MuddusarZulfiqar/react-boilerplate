import { useAuth } from "@/hooks";
import usePageTitle from "@/hooks/usePageTitle";
import React from "react";

function AdminDashboard() {
  usePageTitle("Admin Dashboard");

  const { user } = useAuth();
  return (
    <div className="table">
      <div className="table__head">
        <div className="table__row">
          <div className="table__row--cell">Name</div>
          <div className="table__row--cell">Status</div>
          <div className="table__row--cell">Role</div>
          <div className="table__row--cell">Actions</div>
        </div>
      </div>

      <div className="table__row">
        <div className="table__row--cell" data-label="Name">
          <img src={user?.image} alt="User Icon" />
          John Doe
        </div>

        <div className="table__row--cell" data-label="Status">
          <div className="status green">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10" />
            </svg>
            <p>Active</p>
          </div>
        </div>

        <div className="table__row--cell" data-label="Role">
          Administrator
        </div>

        <div className="table__row--cell" data-label="Actions">
          <ul className="action-btns">
            <li>
              <a href="#">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1.003 1.003 0 0 0 0-1.42l-2.34-2.34a1.003 1.003 0 0 0-1.42 0l-1.83 1.83 3.75 3.75 1.84-1.82z" />
                </svg>
              </a>
            </li>
            <li className="delete">
              <a href="#">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-4.5l-1-1z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Additional rows can go here */}
    </div>
  );
}

export default AdminDashboard;
