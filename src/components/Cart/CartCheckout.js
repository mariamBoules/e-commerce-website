import React from "react";
import { Link } from "react-router-dom";

const CartCheckout = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-row my-2" style={{ width: "100%" }}>
        <input
          type="text"
          className="coupon-input"
          placeholder="Enter coupon here"
          style={{ textAlign: "center" }}
        />
        <button className="coupon-btn">Apply</button>
      </div>
      <p className="product-price my-3" style={{ width: "100%" }}>
        EGP 9,000
      </p>
      <Link to="/order/paymentMethod" style={{ width: "100%" }}>
        <button className="btn-save" style={{ width: "100%" }}>
          Continue to Checkout
        </button>
      </Link>
    </div>
  );
};

export default CartCheckout;
