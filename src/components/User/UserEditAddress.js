import { Container, Row } from "react-bootstrap";

const UserEditAddress = () => {
  return (
    <Container>
      <Row className="admin-content-text mt-3 mx-3">Edit address</Row>
      <Row>
        <input
          type="text"
          placeholder="Home"
          className="user-input mt-4 mx-4"
          style={{ width: "600px" }}
        />
        <textarea
          placeholder="Pineapple House, Bikini Bottom"
          className="user-input mt-3 mx-4"
          style={{ width: "600px", height: "150px" }}
        />
        <input
          type="text"
          placeholder="0123424323"
          className="user-input mt-3 mx-4"
          style={{ width: "600px" }}
        />
      </Row>
      <Row className="d-flex justify-content-center mt-3">
        <button
          className="btn-save"
          style={{ width: "120px", marginLeft: "50px" }}
        >
          Save edit
        </button>
      </Row>
    </Container>
  );
};

export default UserEditAddress;
