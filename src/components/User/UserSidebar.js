import React from "react";
import { Link } from "react-router-dom";

const UserSidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/user/allorders" style={{ textDecoration: "none" }}>
        <div
          className="admin-side-text p-3 mt-2"
          style={{ borderBottom: "1px solid gray" }}
        >
          My Orders
        </div>
      </Link>
      <Link to="/user/favorites" style={{ textDecoration: "none" }}>
        <div
          className="admin-side-text p-3"
          style={{ borderBottom: "1px solid gray" }}
        >
          Favorites
        </div>
      </Link>
      <Link to="/user/address" style={{ textDecoration: "none" }}>
        <div
          className="admin-side-text p-3"
          style={{ borderBottom: "1px solid gray" }}
        >
          My Address
        </div>
      </Link>
      <Link to="/user/profile" style={{ textDecoration: "none" }}>
        <div
          className="admin-side-text p-3"
          style={{ borderBottom: "1px solid gray" }}
        >
          My Profile
        </div>
      </Link>
    </div>
  );
};

export default UserSidebar;
