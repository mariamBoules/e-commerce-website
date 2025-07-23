import React from "react";
import { Container } from "react-bootstrap";
import star from "../../images/rate.png";
import RateItem from "./RateItem";
import RatePost from "./RatePost";
import Pagination from "../Utilities/Pagination";

const RateContainer = () => {
  return (
    <Container className="rate-container my-2">
      <div className="d-flex align-items-center gap-2">
        <div className="brand-text my-4 mx-2">Reviews</div>
        <img src={star} alt="star" height="16px" width="16px" />
        <span className="cat-rate">4.5</span>
        <span className="rate-description">(100 reviews)</span>
      </div>
      <RatePost />

      <RateItem />
      <RateItem />
      <RateItem />
      <RateItem />

      <Pagination />
    </Container>
  );
};

export default RateContainer;
