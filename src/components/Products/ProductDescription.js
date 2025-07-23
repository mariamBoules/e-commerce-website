import { Col, Row } from "react-bootstrap";
import star from "../../images/rate.png";
import useViewSpecificProduct from "../../useHook/Products/useViewSpecificProduct";
import { useParams } from "react-router-dom";

const ProductDescription = () => {
  const id = useParams();
  const [item, images, category, brands] = useViewSpecificProduct(id);
  return (
    <div>
      <Row>
        <p className="cat-text mt-5">{category}</p>
        <p className="cat-title">{item.title}</p>
        <p className="cat-rate">
          <img
            src={star}
            alt=""
            height="15px"
            width="15px"
            style={{ marginBottom: "5px" }}
          />{" "}
          0
        </p>
        <p className="cat-text">
          Brand Name : <span className="brand-text">{brands}</span>
        </p>
        <Row>
          <Col className="d-flex flex-row mx-2">
            {item?.availableColors
              ? item.availableColors.map((color, index) => {
                  return (
                    <div
                      key={index}
                      className="color"
                      style={{ backgroundColor: color, marginRight: "5px" }}
                    ></div>
                  );
                })
              : null}
          </Col>
        </Row>
        <Row>
          <p className="cat-text mt-4">Details : </p>
          <p className="product-description">{item.description}</p>
        </Row>
        <Row>
          <div className="d-flex flex-row">
            <div className="product-price">EGP {item.price}</div>
            <button className="product-cart-add mx-2">Add to Cart</button>
          </div>
        </Row>
      </Row>
    </div>
  );
};

export default ProductDescription;
