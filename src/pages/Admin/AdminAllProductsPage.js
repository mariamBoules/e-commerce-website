import { Col, Container, Row } from "react-bootstrap";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import AdminAllProducts from "../../components/Admin/AdminAllProducts";
import Pagination from "../../components/Utilities/Pagination";
import useViewAdminProducts from "../../useHook/Admin/useViewAdminProducts";

const AdminAllProductsPage = () => {
  const [items, pageCount, getPage] = useViewAdminProducts();

  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <Col sm="3" md="2" lg="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" md="10" lg="10">
          <AdminAllProducts products={items} />
        </Col>
        {pageCount > 1 ? (
          <Pagination pageCount={pageCount} onPress={getPage} />
        ) : null}
      </Row>
    </Container>
  );
};

export default AdminAllProductsPage;
