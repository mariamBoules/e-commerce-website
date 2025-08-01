import { Container, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import Select from "react-select";
import add from "../../images/add.png";
import ImageUploading from "react-images-uploading";
import { Compact } from "@uiw/react-color";
import { useParams } from "react-router-dom";
import useEditProduct from "../../useHook/Products/useEditProduct";

const AdminEditProduct = () => {
  const { id } = useParams();
  const [
    handleChoosingColor,
    handlePad,
    handlePbd,
    handleProductQuantity,
    handleRemovingColor,
    handleSetDescription,
    handleSetProductName,
    handleSubCategory,
    onChangeImages,
    selectBrand,
    selectCategory,
    submitForm,
    options,
    categories,
    brands,
    ProductName,
    ProductCategoryId,
    ProductDescription,
    Pad,
    Pbd,
    BrandId,
    ProductQuantity,
    SelectedSubCategory,
    images,
    colors,
    showColor,
    handleReverseShowColor,
  ] = useEditProduct(id);
  return (
    <Container>
      <Row className="admin-content-text mt-3">Edit a Product</Row>
      <Row>
        <div className="text-form py-3 mx-4">Product Image</div>
        <div className="App">
          <ImageUploading
            multiple
            value={images}
            onChange={onChangeImages}
            maxNumber={5}
            dataURLKey="data_url"
            acceptType={["jpg", "png"]}
          >
            {({
              imageList,
              onImageUpload,
              onImageRemoveAll,
              onImageUpdate,
              onImageRemove,
              isDragging,
              dragProps,
            }) => (
              <div
                className="upload__image-wrapper"
                style={{ padding: "20px" }}
              >
                <button
                  style={{
                    backgroundColor: isDragging ? "#ff4d4f" : "#4CAF50",
                    color: "#fff",
                    padding: "10px 16px",
                    margin: "8px 4px",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  📁 Click or Drop here
                </button>
                &nbsp;
                <button
                  style={{
                    backgroundColor: "#f44336",
                    color: "#fff",
                    padding: "10px 16px",
                    margin: "8px 4px",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                  onClick={onImageRemoveAll}
                >
                  🗑️ Remove all images
                </button>
                {imageList.map((image, index) => (
                  <div
                    key={index}
                    className="image-item"
                    style={{
                      marginTop: "16px",
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      padding: "10px",
                      maxWidth: "200px",
                      justifyItems: "center",
                    }}
                  >
                    <img
                      src={image.data_url}
                      alt=""
                      width="100"
                      style={{
                        borderRadius: "6px",
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                      }}
                    />
                    <div
                      className="image-item__btn-wrapper"
                      style={{ marginTop: "8px", display: "flex", gap: "8px" }}
                    >
                      <button
                        style={{
                          backgroundColor: "#2196F3",
                          color: "#fff",
                          padding: "6px 12px",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                        }}
                        onClick={() => onImageUpdate(index)}
                      >
                        ✏️ Update
                      </button>
                      <button
                        style={{
                          backgroundColor: "#e91e63",
                          color: "#fff",
                          padding: "6px 12px",
                          border: "none",
                          borderRadius: "4px",
                          cursor: "pointer",
                        }}
                        onClick={() => onImageRemove(index)}
                      >
                        ❌ Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        </div>
      </Row>
      <Row>
        <input
          className="input-form my-1 mx-3 mt-3"
          placeholder="Product Name"
          style={{ width: "600px" }}
          value={ProductName}
          onChange={(e) => handleSetProductName(e.target.value)}
        ></input>
        <textarea
          className="input-form my-1 mx-3"
          placeholder="Product description"
          style={{ width: "600px", height: "100px" }}
          value={ProductDescription}
          onChange={(e) => handleSetDescription(e.target.value)}
        ></textarea>
        <input
          className="input-form my-1 mx-3"
          placeholder="Price before discount"
          style={{ width: "600px" }}
          value={Pbd}
          onChange={(e) => handlePbd(e.target.value)}
        ></input>
        <input
          className="input-form my-1 mx-3"
          placeholder="Price after discount"
          style={{ width: "600px" }}
          value={Pad}
          onChange={(e) => handlePad(e.target.value)}
        ></input>
        <input
          className="input-form my-1 mx-3"
          placeholder="Quantity"
          style={{ width: "600px" }}
          value={ProductQuantity}
          onChange={(e) => handleProductQuantity(e.target.value)}
        ></input>
        <select
          className="mx-3 my-1"
          style={{
            height: "37px",
            width: "600px",
            border: "1px solid #979797",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
          onChange={selectCategory}
          value={ProductCategoryId}
        >
          <option value="0">--- Select Category ---</option>
          {categories?.data?.length > 0
            ? categories.data.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                );
              })
            : null}
        </select>
        <Select
          defaultValue={[]}
          isMulti
          name="categories"
          options={options}
          className="my-1 mx-1"
          placeholder="Select sub-category"
          value={SelectedSubCategory}
          onChange={handleSubCategory}
          styles={{
            control: (base) => ({
              ...base,
              height: "37px",
              width: "600px",
              border: "1px solid #979797",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }),
          }}
        />
        <select
          className="mx-3 my-1"
          style={{
            height: "37px",
            width: "600px",
            border: "1px solid #979797",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
          value={BrandId}
          onChange={selectBrand}
        >
          <option value="0">--- Select Brand ---</option>
          {brands?.data?.length > 0
            ? brands.data.map((item, index) => {
                return (
                  <option key={index} value={item._id}>
                    {item.name}
                  </option>
                );
              })
            : null}
        </select>
        <div className="text-form mx-2 my-1">Available Colors</div>
        <div className="d-flex justify-content-start">
          {colors.length > 0
            ? colors.map((color, index) => {
                return (
                  <div
                    key={index}
                    className="color mx-1 my-2"
                    style={{ backgroundColor: color }}
                    onClick={() => handleRemovingColor(color)}
                  ></div>
                );
              })
            : null}

          <img
            src={add}
            alt="add"
            className="mx-1 my-1"
            height="35px"
            width="30px"
            style={{ cursor: "pointer" }}
            onClick={handleReverseShowColor}
          />
          {showColor && (
            <Compact
              style={{ marginLeft: 20 }}
              onChange={handleChoosingColor}
            />
          )}
        </div>
      </Row>

      <Row>
        <button
          className="btn-a my-3"
          style={{ width: "100px", marginLeft: "520px" }}
          onClick={submitForm}
        >
          Save
        </button>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default AdminEditProduct;
