import React from "react";
import { Container, Row } from "react-bootstrap";
import AdminProductCard from "./AdminProductCard";

const AdminAllProducts = ({ products }) => {
  return (
    <Container>
      <Row>
        <h3 className="admin-content-text mt-3">Manage All Products</h3>
      </Row>
      <Row>
        {products ? (
          products.map((item, index) => (
            <AdminProductCard key={index} item={item} />
          ))
        ) : (
          <h4> No Products to show</h4>
        )}
      </Row>
    </Container>
  );
};

export default AdminAllProducts;
