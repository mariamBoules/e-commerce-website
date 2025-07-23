import React from "react";
import { Container, Row } from "react-bootstrap";
import AdminProductCard from "./AdminProductCard";

const AdminAllProducts = () => {
  return (
    <Container>
      <Row>
        <h3 className="admin-content-text mt-3">Manage All Products</h3>
      </Row>
      <Row>
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
        <AdminProductCard />
      </Row>
    </Container>
  );
};

export default AdminAllProducts;
