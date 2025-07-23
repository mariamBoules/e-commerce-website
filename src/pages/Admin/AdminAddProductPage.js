import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import AdminAddProduct from "../../components/Admin/AdminAddProduct";

const AdminAddProductPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <Col sm="3" md="2" lg="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" md="10" lg="10">
          <AdminAddProduct />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddProductPage;
