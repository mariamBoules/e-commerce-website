import React from "react";
import UserAllOrdersCard from "./UserAllOrdersCard";

const UserAllOrdersItem = () => {
  return (
    <div
      className="my-3 mx-3"
      style={{
        position: "relative",
        boxShadow: "0 1px 1px black",
        borderRadius: "20px",
        backgroundColor: " #ffffff",
      }}
    >
      <p className="order-title my-3 mx-2">Order #121</p>
      <UserAllOrdersCard />
      <UserAllOrdersCard />
      <UserAllOrdersCard />

      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <p className="mx-2">
            Status : <span className="stat">Pending</span>
          </p>
        </div>
        <div className="d-flex">
            <p className="brand-text mx-2">EGP 9,000</p>
        </div>
      </div>
    </div>
  );
};

export default UserAllOrdersItem;
