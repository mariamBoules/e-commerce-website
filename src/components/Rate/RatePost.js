import { Button, Col, Container, Row } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";

const RatePost = () => {
  const handleRating = (rate) => {
    console.log(rate);
  };

  return (
    <Container>
      <Row>
        <Col sm="12" className="d-flex gap-3">
          <p className="rate-name my-2">Spongebob Squarepants</p>
          <Rating
            onClick={handleRating}
            initialValue={3.5}
            size={20}
            allowFraction
          />
        </Col>
      </Row>

      <Row>
        <Col className="d-flex">
          <textarea
            className="input-form-area my-2 py-2 px-2"
            placeholder="Write your review ..."
          />
        </Col>
      </Row>
        <Col className="d-flex justify-content-end align-items-center">
          <div className="product-cart-add px-3 py-2 me-2 text-center d-inline">Submit</div>
        </Col>
    </Container>
  );
};

export default RatePost;
