import Subtitle from "../Utilities/Subtitle";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "../Categories/CategoryCard";
import useHomeCategory from "../../useHook/Category/useHomeCategory";


const Categories = () => {

  const [categories, loading, colors] = useHomeCategory()

  return (
    <Container>
      <Subtitle title="Categories" btnTitle="See More" path="/allcategories" />
      <Row className="d-flex justify-content-between">
        {loading === false ? (
          categories ? (
            categories.data.splice(0, 5).map((item, index) => {
              return (
                <CategoryCard
                  background={colors[index]}
                  img={item.image}
                  title={item.name}
                />
              );
            })
          ) : (
            <h4> No Categories </h4>
          )
        ) : (
          <Spinner animation="border" variant="secondary" />
        )}
      </Row>
    </Container>
  );
};

export default Categories;
