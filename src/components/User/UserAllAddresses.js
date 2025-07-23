import React from "react";
import { Row } from "react-bootstrap";
import UserAddressCard from "./UserAddressCard";
import { Link } from "react-router-dom";

const UserAllAddresses = () => {
  return (
    <div style={{ minHeight: "670px" }}>
      <Row className="admin-content-text mt-3 mx-3">My Addresses</Row>

      <Row className="mx-3 my-2">
        <UserAddressCard />
        <UserAddressCard />
        <UserAddressCard />
      </Row>
      <Link to="/user/address/add" style={{ textDecoration: "none" }}>
        <Row className="justify-content-center">
          <button className="btn-add-address" style={{ width: "160px" }}>
            Add an Address
          </button>
        </Row>
      </Link>
    </div>
  );
};

export default UserAllAddresses;
