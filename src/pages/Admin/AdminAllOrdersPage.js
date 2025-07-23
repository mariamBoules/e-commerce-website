import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import Pagination from "../../components/Utilities/Pagination";
import AdminAllOrders from "../../components/Admin/AdminAllOrders";

const AdminAllOrdersPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <Col sm="3" md="2" lg="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" md="10" lg="10">
          <AdminAllOrders />
        </Col>
        <Pagination />
      </Row>
    </Container>
  );
};

export default AdminAllOrdersPage;
