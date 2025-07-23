import React from "react";
import { Row } from "react-bootstrap";
import UserAllOrdersItem from "./UserAllOrdersItem";

const UserAllOrders = () => {
  return (
    <div>
      <Row className="admin-content-text mt-3 mx-3">Hello Sandy</Row>
      <Row>
        <UserAllOrdersItem />
        <UserAllOrdersItem />
      </Row>
    </div>
  );
};

export default UserAllOrders;
