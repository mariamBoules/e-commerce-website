import React from "react";
import { Col } from "react-bootstrap";

const CategoryCard = ({ background, img, title }) => {
  return (
    <Col
      xs="6"
      sm="6"
      md="4"
      lg="2"
      className="my-4 d-flex justify-content-left"
    >
      <div className="allCards mb-3">
        <div
          className="category-card"
          style={{ backgroundColor: `${background}` }}
        ></div>
        <img src={img} alt="category" className="category-card-img" />
        <p className="my-2 category-card-text">{title}</p>
      </div>
    </Col>
  );
};

export default CategoryCard;
