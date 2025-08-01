import { Button, Card, Modal } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

import { Link } from "react-router-dom";
import star from "../../images/rate.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../Redux/Actions/ProductAction";
import notify from "../../useHook/useNotify";
const AdminProductCard = ({ item }) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async () => {
    setLoading(true);
    await dispatch(deleteProduct(item._id));
    setLoading(false);
    setShow(false);
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  useEffect(() => {
    if (loading === false) {
      notify("Deleted Successfully", "success");
      setLoading(true);
    }
  }, [loading]);

  return (
    <Card
      className="shadow"
      style={{
        width: "18rem",
        padding: "15px",
        border: "none",
        margin: "20px",
        borderRadius: "5%",
      }}
    >
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="dark" onClick={handleDelete}>
            Yes, Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <div style={{ position: "relative" }}>
        <div className="justify-content-between d-flex flex-row">
          <div className="item-delete-edit " onClick={handleShow}>
            Remove
          </div>
          <Link
            to={`/admin/edit/${item._id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="item-delete-edit ">Edit</div>
          </Link>
        </div>
        <Link
          to={`/productDetails/${item._id}`}
        >
          <Card.Img
            variant="top"
            src={item.imageCover}
            style={{ width: "100%", height: "228px" }}
            className="mt-2"
          />
        </Link>
      </div>

      <Card.Body>
        <Card.Text>{item.title}</Card.Text>
      </Card.Body>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Card.Img
              variant="top"
              src={star}
              style={{ height: "20px", width: "20px", marginRight: "5px" }}
            />
            <Card.Text style={{ color: "#FFD700" }}>
              {item.ratingsQuantity}
            </Card.Text>
          </div>
          <Card.Text style={{ fontWeight: "bold" }}>EGP {item.price}</Card.Text>
        </div>
      </Card.Body>
      <ToastContainer />
    </Card>
  );
};

export default AdminProductCard;
