import Navbar from "../../components/Utilities/NavBar";
import Slider from "../../components/Home/Slider";
import Subtitle from "../../components/Utilities/Subtitle";
import Categories from "../../components/Home/Categories";
import ProductCardContainer from "../../components/Products/ProductCardContainer";
import DiscountCard from "../../components/Home/DiscountCard";
import BrandSection from "../../components/Brands/BrandSection";
import Footer from "../../components/Utilities/Footer";
import useViewProducts from "../../useHook/Products/useViewProducts";

const HomePage = () => {
  const [items] = useViewProducts();
  return (
    <div className="font" style={{ minHeight: "670px" }}>
      <Slider />
      <Categories />
      <ProductCardContainer
        title={"Bestsellers"}
        btnTitle={"See More"}
        path="/products"
        products={items}
      />
      <DiscountCard />
      <ProductCardContainer
        title={"You would like"}
        btnTitle={"See More"}
        path="/products"
        products={items}
      />
      <BrandSection />
    </div>
  );
};

export default HomePage;
