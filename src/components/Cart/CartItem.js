import image from "../../images/mobile.png";
import del from "../../images/delete.png";

const CartItem = () => {
  return (
    <div className="cart-item-body my-3" style={{ position: "relative" , boxShadow:"0 1px 1px"}}>
      <div className="d-flex justify-content-between align-items-start">
        <img
          src={image}
          alt="product"
          width="120px"
          height="170px"
          className="my-4 mx-2"
        />

        <div className="d-flex flex-column justify-content-center ms-3">
          <p className="cat-title my-2">Category</p>

          <p className="cat-text">
            Big Big Big description <span className="cat-rate">4.3</span>
          </p>
          <p className="cat-text">
            Brand : <span className="cat-title">Apple</span>
          </p>
          <div className="color" style={{ backgroundColor: "red" }} />
          <div className="d-flex">
            <p className="cat-text my-2">Quantity :</p>
            <input type="number" className="mx-2" style={{ width: "60px" }} />
          </div>
        </div>

        <div className="d-flex ms-auto my-3 mx-3">
          <img
            src={del}
            alt="delete"
            height="25px"
            width="25px"
            style={{ cursor: "pointer" }}
          />
          <p className="cat-title mx-1">Delete</p>
        </div>
        <div
          className="d-flex align-items-end"
          style={{ position: "absolute", bottom: "10px", right: "30px" }}
        >
          <p className="cat-title my-5">EGP 3,000</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
