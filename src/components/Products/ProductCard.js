import { Card } from "react-bootstrap";
import fav from "../../images/fav-off.png";
import star from "../../images/rate.png";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Card
      className="shadow"
      style={{
        width: "18rem",
        padding: "20px",
        border: "none",
        margin: "20px",
        borderRadius: "5%",
      }}
    >
      <div style={{ position: "relative" }}>
        <Link
          to={`/productDetails/${product._id}`}
          style={{ textDecoration: "false" }}
        >
          <Card.Img
            variant="top"
            src={product.imageCover}
            style={{ width: "100%", height: "228px" }}
          />
        </Link>
        <Card.Img
          src={fav}
          style={{
            height: "25px",
            width: "25px",
            position: "absolute",
            top: "240px",
            right: "10px",
            cursor: "pointer",
          }}
        />
      </div>

      <Card.Body>
        <Card.Text>{product.title}</Card.Text>
      </Card.Body>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Card.Img
              variant="top"
              src={star}
              style={{ height: "20px", width: "20px", marginRight: "5px" }}
            />
            <Card.Text style={{ color: "#FFD700" }}>
              {product.ratingsQuantity}
            </Card.Text>
          </div>
          <Card.Text style={{ fontWeight: "bold" }}>
            EGP {product.price}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
