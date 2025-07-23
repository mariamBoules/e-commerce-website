import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductDescription from "./ProductDescription";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const id = useParams();

  return (
    <div>
      <Container>
        <Row>
          <Col lg="4">
            <ProductGallery />
          </Col>
          <Col lg="8">
            <ProductDescription />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
