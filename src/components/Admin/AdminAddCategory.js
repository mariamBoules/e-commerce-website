import { Container, Row, Spinner } from "react-bootstrap";

import { ToastContainer } from "react-toastify";
import useAddCategory from "../../useHook/Category/useAddCategory";
const AdminAddCategory = () => {
  const [
    choosePhoto,
    img,
    submitted,
    submitCategory,
    name,
    loading,
    changeName,
  ] = useAddCategory();

  return (
    <Container>
      <Row className="admin-content-text mt-3">Add a Category</Row>
      <Row>
        <div className="text-form py-3 mx-4">Category Image</div>
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
          onChange={changeName}
          value={name}
          className="input-form my-4 mx-3"
          placeholder="Enter the category name"
          style={{ width: "600px" }}
        ></input>
      </Row>
      <Row>
        <button
          onClick={submitCategory}
          className="btn-a"
          style={{ width: "100px", marginLeft: "520px" }}
        >
          Save
        </button>
      </Row>
      {loading ? (
        submitted ? (
          <Spinner animation="border" variant="secondary" />
        ) : null
      ) : null}
      <ToastContainer />
    </Container>
  );
};

export default AdminAddCategory;
