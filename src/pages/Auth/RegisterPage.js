import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "670px" }}
    >
      <Form>
        <Form.Group className="mb-3 mt-3 p-3" controlId="formUsername">
          <Form.Label className="w-100 text-center fs-4">User Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            style={{
              textAlign: "center",
              width: "700px",
              padding: "1vh",
              fontSize: "18px",
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3 p-3" controlId="formBasicEmail">
          <Form.Label className="w-100 text-center fs-4">
            Email address
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            style={{
              textAlign: "center",
              width: "700px",
              padding: "1vh",
              fontSize: "18px",
            }}
          />
        </Form.Group>

        <Form.Group className="mb-3 p-3" controlId="formBasicPassword">
          <Form.Label className="w-100 text-center fs-4">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            style={{
              textAlign: "center",
              width: "700px",
              padding: "1vh",
              fontSize: "18px",
            }}
          />
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="dark" type="submit" className="px-5">
            Register
          </Button>
        </div>

        <br />
        <Form.Text className="text-muted">
          Already have an account ?{"  "}
          <Link to="/login">
            {" "}
            <span
              style={{
                color: "#6900ff",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Click Here
            </span>
          </Link>
        </Form.Text>
      </Form>
    </Container>
  );
};

export default RegisterPage;
