import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import LeftButton from "./LeftButton";
import RightButton from "./RightButton";
import { useParams } from "react-router-dom";
import useViewSpecificProduct from "../../useHook/Products/useViewSpecificProduct";

const ProductGallery = () => {
  const id = useParams();
  const [item, images] = useViewSpecificProduct(id)

  return (
    <div className="product-gallary-card d-flex justify-content-center align-items-center mt-3">
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showThumbnails={false}
        showPlayButton={false}
        renderLeftNav={(onClick, disabled) => LeftButton(onClick, disabled)}
        renderRightNav={(onClick, disabled) => RightButton(onClick, disabled)}
      />
    </div>
  );
};

export default ProductGallery;
