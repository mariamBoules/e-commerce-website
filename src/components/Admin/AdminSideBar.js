import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  return (
    <div className="sidebar">
      <Link to="/admin/allorders" style={{ textDecoration: "none" }}>
        <div
          className="admin-side-text p-3 mt-2"
          style={{ borderBottom: "1px solid gray" }}
        >
          Manage Orders
        </div>
      </Link>
      <Link to="/admin/allproducts" style={{ textDecoration: "none" }}>
        <div
          className="admin-side-text p-3"
          style={{ borderBottom: "1px solid gray" }}
        >
          Manage Products
        </div>
      </Link>
      <Link to="/admin/addbrand" style={{ textDecoration: "none" }}>
        <div
          className="admin-side-text p-3"
          style={{ borderBottom: "1px solid gray" }}
        >
          Add a Brand
        </div>
      </Link>
      <Link to="/admin/addcategory" style={{ textDecoration: "none" }}>
        <div
          className="admin-side-text p-3"
          style={{ borderBottom: "1px solid gray" }}
        >
          Add a Category
        </div>
      </Link>
      <Link to="/admin/addsubcategory" style={{ textDecoration: "none" }}>
        <div
          className="admin-side-text p-3"
          style={{ borderBottom: "1px solid gray" }}
        >
          Add a sub-category
        </div>
      </Link>
      <Link to="/admin/addproduct" style={{ textDecoration: "none" }}>
        <div
          className="admin-side-text p-3"
          style={{ borderBottom: "1px solid gray" }}
        >
          Add a product
        </div>
      </Link>
    </div>
  );
};

export default AdminSideBar;
