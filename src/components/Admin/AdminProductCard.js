import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import img from "../../images/laptop.png";
import star from "../../images/rate.png";
const AdminProductCard = () => {
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
      <div style={{ position: "relative" }}>
        <div className="justify-content-between d-flex flex-row">
          <div className="item-delete-edit ">Remove</div>
          <div className="item-delete-edit ">Update</div>
        </div>
        <Link to="/productDetails/:id" style={{ textDecoration: "false" }}>
          <Card.Img
            variant="top"
            src={img}
            style={{ width: "100%", height: "228px" }}
            className="mt-2"
          />
        </Link>
      </div>

      <Card.Body>
        <Card.Text>Descriptionnnnn</Card.Text>
      </Card.Body>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Card.Img
              variant="top"
              src={star}
              style={{ height: "20px", width: "20px", marginRight: "5px" }}
            />
            <Card.Text style={{ color: "#FFD700" }}>4.5</Card.Text>
          </div>
          <Card.Text style={{ fontWeight: "bold" }}>EGP 3000</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default AdminProductCard;
