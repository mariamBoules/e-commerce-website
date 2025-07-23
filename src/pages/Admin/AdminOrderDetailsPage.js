import { Col, Container, Dropdown, Row } from "react-bootstrap";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import Pagination from "../../components/Utilities/Pagination";
import AdminAllOrders from "../../components/Admin/AdminAllOrders";
import CartItem from "../../components/Cart/CartItem";

const AdminOrderDetailsPage = () => {
  return (
    <Container style={{ minHeight: "670px" }}>
      <Row>
        <Col sm="3" md="2" lg="2">
          <AdminSideBar />
        </Col>
        <Col sm="9" md="10" lg="10">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />

          <div className="user-data">
            <div
              className="mx-3 my-3"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                padding: "10px",
              }}
            >
              Customer's Details
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                padding: "5px",
                marginLeft: "20px",
              }}
            >
              Name :{" "}
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                Squidward Tentacles
              </span>
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                padding: "5px",
                marginLeft: "20px",
              }}
            >
              Phone :{" "}
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                01223948294
              </span>
            </div>
            <div
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                padding: "5px",
                marginLeft: "20px",
              }}
            >
              e-mail :{" "}
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "gray",
                }}
              >
                squid@bikinibottom.com
              </span>
            </div>
            <div
              className="d-flex justify-content-center align-items-center border"
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                padding: "10px",
              }}
            >
              Total : 9,000
            </div>
            <div>
              <div className="d-flex justify-content-center align-items-center">
                <select className="select w-50">
                  <option value="" disabled hidden>
                    Select a category
                  </option>
                  <option value="cat1">Category 1</option>
                  <option value="cat2">Category 2</option>
                  <option value="cat3">Category 3</option>
                </select>
                <button className="btn-a mx-3 px-3"> Save </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminOrderDetailsPage;
