import { Col, Container, Row } from "react-bootstrap";
import UserSidebar from "../../components/User/UserSidebar";
import UserAddAddress from "../../components/User/UserAddAddress";

const UserAddAddressPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <Col sm="3" md="2" lg="2">
          <UserSidebar />
        </Col>
        <Col sm="9" md="10" lg="10">
          <UserAddAddress />
        </Col>
      </Row>
    </Container>
  );
};

export default UserAddAddressPage;
