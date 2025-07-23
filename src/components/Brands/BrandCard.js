import React from "react";
import { Card, Button } from "react-bootstrap";

const BrandCard = ({img}) => {
  return (
    <Card style={{ width: "18rem" }} className="my-3 mx-3 shadow">
      <Card.Img variant="top" src={img} />
    </Card>
  );
};

export default BrandCard;
