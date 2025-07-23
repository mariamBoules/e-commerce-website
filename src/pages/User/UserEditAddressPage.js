import { Col, Container, Row } from "react-bootstrap";
import UserSidebar from "../../components/User/UserSidebar";
import UserEditAddress from "../../components/User/UserEditAddress";

const UserEditAddressPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <Col sm="3" md="2" lg="2">
          <UserSidebar />
        </Col>
        <Col sm="9" md="10" lg="10">
          <UserEditAddress />
        </Col>
      </Row>
    </Container>
  );
};

export default UserEditAddressPage;
