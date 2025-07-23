import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import BrandCard from "./BrandCard";



const AllBrandsContainer = ({loading, brands}) => {
  return (
    <Container>
      <label
        style={{ fontSize: "20px", fontWeight: "bold", marginTop: "20px" }}
      >
        All Categories
      </label>
      <Row className="d-flex justify-content-between">
        {loading === false ? (
          brands.data ? (
            brands.data.map((item, index) => {
              return (
                <BrandCard
                  key={index}
                  img={item.image}
                />
              );
            })
          ) : (
            <h4> No Brands </h4>
          )
        ) : (
          <Spinner animation="border" variant="secondary" />
        )}
      
      </Row>
    </Container>
  );
};

export default AllBrandsContainer;
