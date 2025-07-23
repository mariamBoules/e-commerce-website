import React from "react";
import { Container, Row } from "react-bootstrap";
import CartItem from "../Cart/CartItem";
import AdminOrderItem from "./AdminOrderItem";

const AdminAllOrders = () => {
  return (
    <Container>
      <Row>
        <h3 className="admin-content-text mt-3">Manage All Products</h3>
      </Row>
      <Row>
        <AdminOrderItem/>
        <AdminOrderItem/>
        <AdminOrderItem/>
        
      </Row>
    </Container>
  );
};

export default AdminAllOrders;
