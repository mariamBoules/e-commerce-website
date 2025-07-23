import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import AdminAddBrand from "../../components/Admin/AdminAddBrand";

const AdminAddBrandPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <Col sm="3" md="2" lg="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" md="10" lg="10">
          <AdminAddBrand />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddBrandPage;
