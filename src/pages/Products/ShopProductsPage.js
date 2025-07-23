import React from "react";
import CategoryHeader from "../../components/Categories/CategoryHeader";
import SortBy from "../../components/Utilities/SortBy";
import { Col, Container, Row } from "react-bootstrap";
import SideFilter from "../../components/Utilities/SideFilter";
import ProductCardContainer from "../../components/Products/ProductCardContainer";
import Pagination from "../../components/Utilities/Pagination";
import useViewShopProducts from "../../useHook/Products/useViewShopProducts";

const ShopProductsPage = () => {
  const [items] = useViewShopProducts();
  return (
    <div style={{ minHeight: "670px" }}>
      <Container>
        <CategoryHeader />
        <SortBy itemsLength={items.length}/>
        <Row className="d-flex flex-row">
          <Col xs="12" sm="4" md="3" lg="2" className="d-flex">
            <SideFilter />
          </Col>
          <Col xs="12" sm="8" md="9" lg="10">
            <ProductCardContainer products={items}/>
          </Col>
        </Row>
        <Pagination/>
      </Container>
    </div>
  );
};

export default ShopProductsPage;
