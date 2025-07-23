import ProductCard from "./ProductCard";
import { Row, Container } from "react-bootstrap";
import Subtitle from "../Utilities/Subtitle";
const ProductCardContainer = ({ title, btnTitle, path, products }) => {
  return (
    <Container>
      {products ? (
        <Subtitle title={title} btnTitle={btnTitle} path={path} />
      ) : null}
      <Row>
        {products
          ? products.map((item, index) => {
              return <ProductCard product={item} key={index} />;
            })
          : null}
      </Row>
    </Container>
  );
};

export default ProductCardContainer;
