import BrandCard from "./BrandCard";
import { Container, Row, Spinner } from "react-bootstrap";
import Subtitle from "../Utilities/Subtitle";
import useHomeBrands from "../../useHook/Brands/useHomeBrands";

const BrandSection = () => {
  const [brands, loading] = useHomeBrands();

  return (
    <Container>
      {brands?.data?.length > 0 ? (
        <div>
          <Subtitle title="Brands" btnTitle="See More" path="/allbrands" />
          <Row>
            {loading === false ? (
              brands ? (
                brands.data.splice(0, 4).map((item, index) => {
                  return <BrandCard img={item.image} />;
                })
              ) : (
                <h4> No Brands </h4>
              )
            ) : (
              <Spinner animation="border" variant="secondary" />
            )}
          </Row>
        </div>
      ) : null}
    </Container>
  );
};

export default BrandSection;
