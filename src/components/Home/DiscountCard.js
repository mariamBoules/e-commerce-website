import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../images/laptops.png";

const DiscountCard = () => {
  return (
    <Container>
      <Row className="discount-backcolor d-flex my-2 mx-3 align-items-center">
        <Col>
          <h3 className="discount-title">Discount on EVERYTHING !</h3>
        </Col>
        <Col>
          <img className="dicount-img" src={img} alt="discounted" />
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountCard;
