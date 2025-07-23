import React from "react";
import { useEffect } from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import CategoryCard from "../Categories/CategoryCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../Redux/Actions/AllCategoriesAction";

const CategoriesContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const categories = useSelector((state) => state.allcategories.categories);
  const loading = useSelector((state) => state.allcategories.loading);

  const colors = ["pink", "blue", "yellow", "red", "orange", "brown"];
  return (
    <Container>
      <label
        style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}
      >
        All Categories
      </label>
      <Row className="d-flex justify-content-between">
        {loading === false ? (
          categories.data ? (
            categories.data.map((item, index) => {
              return (
                <CategoryCard
                  key={index}
                  background={colors[Math.floor(Math.random() * 5 + 1)]}
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

export default CategoriesContainer;
