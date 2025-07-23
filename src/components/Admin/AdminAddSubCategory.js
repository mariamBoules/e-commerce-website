import { Col, Container, Row } from "react-bootstrap";

import { ToastContainer } from "react-toastify";
import useCreateSubcategory from "../../useHook/Subcategory/useCreateSubcategory";

const AdminAddSubCategory = () => {
  const [name, id, categories, chooseCategory, changeName, saveChanges] =
    useCreateSubcategory();

  return (
    <Container>
      <Row>
        <div className="admin-content-text mt-3">Add Sub-Category</div>
      </Row>
      <Row>
        <input
          type="text"
          placeholder="Enter subcategory name"
          className="input-form my-4"
          style={{ width: "600px" }}
          value={name}
          onChange={changeName}
        />
      </Row>
      <Row>
        <select
          className="dropdown-custom"
          style={{ width: "600px" }}
          onChange={chooseCategory}
          value={id}
        >
          <option value="0">Choose Category</option>

          {categories.data
            ? categories.data.map((item) => {
                return (
                  <option key={item._id} value={item._id}>
                    {item.name}
                  </option>
                );
              })
            : null}
        </select>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <button className="btn-save d-inline mt-2" onClick={saveChanges}>
            Save
          </button>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default AdminAddSubCategory;
