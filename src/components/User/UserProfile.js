import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const UserProfile = () => {
  return (
    <Container>
      <Row className="admin-content-text mt-3">My Profile</Row>
      <Row className="user-address-card my-3 p-3">
        <div className="d-flex justify-content-between">
          <Col>
            <p style={{ fontSize: "16px", color: "#979797" }}>
              Name :{" "}
              <span style={{ color: "#555550" }}>SpongeBob SquarePants</span>
            </p>
          </Col>

          <Col className="d-flex justify-content-end">
            <div className="item-delete-edit px-2">Edit</div>
          </Col>
        </div>
        <Row>
          <p style={{ fontSize: "16px", color: "#979797" }}>
            Phone Number : <span style={{ color: "#555550" }}>01212131242</span>
          </p>
          <p style={{ fontSize: "16px", color: "#979797" }}>
            E-mail{" "}
            <span style={{ color: "#555550" }}>tentacles@bikinibottom.com</span>
          </p>
        </Row>
      </Row>
      <Row>
        <p className="admin-content-text">Change Password</p>
        <Row>
          <input
            placeholder="Enter old password"
            className="input-form my-1 mx-3"
            style={{ width: "500px" }}
          />
        </Row>
        <Row>
          <input
            placeholder="Enter new password"
            className="input-form my-1 mx-3"
            style={{ width: "500px" }}
          />
        </Row>

        <Row className="d-flex justify-content-center">
          <button className="btn-a my-2" style={{width:"200px", marginRight:"220px"}}>Save Password</button>
        </Row>
      </Row>
    </Container>
  );
};

export default UserProfile;
