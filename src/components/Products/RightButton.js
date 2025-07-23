import prev from "../../images/prev.png";

const RightButton = ( onClick, onDisable ) => {
  return (
    <img
      src={prev}
      alt=""
      width="35px"
      onClick={onClick}
      onDisable={onDisable}
      height="35px"
      style={{ float: "right", cursor: "pointer", marginTop: "220px" }}
    />
  );
};

export default RightButton;
