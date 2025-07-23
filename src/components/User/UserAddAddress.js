import React from "react";
import { Container, Row } from "react-bootstrap";

const UserAddAddress = () => {
  return (
    <Container>
      <Row className="admin-content-text mt-3 mx-3">Add an address</Row>
      <Row>
        <input
          type="text"
          placeholder="Address Type"
          className="user-input mt-4 mx-4"
          style={{ width: "600px" }}
        />
        <textarea
          placeholder="Address Description"
          className="user-input mt-3 mx-4"
          style={{ width: "600px", height: "150px" }}
        />
        <input
          type="text"
          placeholder="Phone Number"
          className="user-input mt-3 mx-4"
          style={{ width: "600px" }}
        />
      </Row>
      <Row className="d-flex justify-content-center mt-3">
        <button
          className="btn-save"
          style={{ width: "120px", marginLeft: "50px" }}
        >
          Add Address
        </button>
      </Row>
    </Container>
  );
};

export default UserAddAddress;
