import React from "react";
import { Container, Row, Spinner } from "react-bootstrap";
import useAddBrand from "../../useHook/Brands/useAddBrand";
import { ToastContainer } from "react-toastify";

const AdminAddBrand = () => {
  const [choosePhoto, img, submitted, submitBrands, name, loading, changeName] =
    useAddBrand();
  return (
    <Container>
      <Row className="admin-content-text mt-3">Add a Brand</Row>
      <Row>
        <div className="text-form py-3 mx-4">Brand Image</div>
        <div>
          <label for="upload-photo">
            <img
              src={img}
              alt="avatar"
              style={{ width: "140px", height: "100px", cursor: "pointer" }}
            />
          </label>
          <input
            id="upload-photo"
            type="file"
            name="photo"
            onChange={choosePhoto}
          />
        </div>
      </Row>
      <Row>
        <input
          className="input-form my-4 mx-3"
          placeholder="Enter the brand name"
          style={{ width: "600px" }}
          value={name}
          onChange={changeName}
        ></input>
      </Row>
      <Row>
        <button
          className="btn-a"
          style={{ width: "100px", marginLeft: "520px" }}
          onClick={submitBrands}
        >
          Save
        </button>
        {loading ? (
          submitted ? (
            <Spinner animation="border" variant="secondary" />
          ) : null
        ) : null}
        <ToastContainer />
      </Row>
    </Container>
  );
};

export default AdminAddBrand;
