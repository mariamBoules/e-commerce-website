import { Container } from "react-bootstrap";
import star from "../../images/rate.png";

const RateItem = () => {
  return (
    <Container
      style={{
        borderBottom: "1px solid #ccc",
        marginBottom: "10px",
      }}
    >
      <div className="d-flex">
        <div className="rate-name mx-2">Mr Krabs</div>
        <img src={star} alt="star" height="16px" width="16px" />
        <span className="cat-rate">4.5</span>
      </div>
      <p className="rate-description">Super Duper good</p>
    </Container>
  );
};

export default RateItem;
