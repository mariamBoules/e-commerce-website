import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserSidebar from "../../components/User/UserSidebar";
import UserFavorites from "../../components/User/UserFavorites";

const UserFavoritesPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <Col sm="3" md="2" lg="2">
          <UserSidebar />
        </Col>
        <Col sm="9" md="10" lg="10">
          <UserFavorites />
        </Col>
      </Row>
    </Container>
  );
};

export default UserFavoritesPage;
