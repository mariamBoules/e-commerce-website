import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const PaymentMethod = () => {
  return (
    <Container>
      <Row>
        <h3 className="cart-title my-3">Choose Payment Method</h3>
      </Row>
      <Row className="user-address-card">
        <Row className="d-flex justify-content-between">
          <Col>
            <input
              type="radio"
              style={{ height: "20px", width: "20px" }}
              id="group"
              name="payment"
              className="my-4"
            />
            <label for="group" className="mx-2 fs-5">
              Pay with Visa
            </label>
          </Col>
        </Row>
        <Row className="d-flex">
          <Col>
            <input
              type="radio"
              style={{ height: "20px", width: "20px" }}
              id="group"
              name="payment"
            />
            <label for="group" className="mx-2 fs-5">
              Pay in Cash
            </label>
          </Col>
        </Row>
      </Row>
      <Row>
        <Col className="d-flex justify-content-end my-4">
          <p className="product-price mx-3 d-inline">EGP 9,000</p>
          <button className="product-cart-add px-4 d-inline">Pay</button>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentMethod;
