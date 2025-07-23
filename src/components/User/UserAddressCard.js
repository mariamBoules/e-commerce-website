import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const UserAddressCard = () => {
  return (
    <Container className="user-address-card my-3 p-3">
      <Row className="d-flex justify-content-between">
        <Col>
          <p
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "#272727",
            }}
          >
            Home
          </p>
        </Col>

        <Col className="d-flex justify-content-end">
          <Link to="/user/address/edit" style={{ textDecoration: "none" }}>
            <div className="item-delete-edit px-2">Edit</div>
          </Link>
          <div className="item-delete-edit">Delete</div>
        </Col>
      </Row>
      <Row>
        <p style={{ fontSize: "16px", color: "#555550" }}>
          Pineapple House , Bikini Bottom
        </p>
        <p style={{ fontSize: "16px", color: "#979797" }}>
          Phone Number : <span style={{ color: "#555550" }}>01212131242</span>
        </p>
      </Row>
    </Container>
  );
};

export default UserAddressCard;
