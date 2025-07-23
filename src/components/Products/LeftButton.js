import next from "../../images/next.png";

const LeftButton = ( onClick, onDisable ) => {
  return (
    <img
      src={next}
      alt=""
      width="35px"
      onClick={onClick}
      onDisable={onDisable}
      height="35px"
      style={{ float: "left", cursor: "pointer", marginTop: "220px" }}
    />
  );
};

export default LeftButton;
