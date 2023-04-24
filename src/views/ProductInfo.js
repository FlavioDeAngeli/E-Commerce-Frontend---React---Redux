import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import Product from "../components/Product";

function ProductInfo() {
  return (
    <div className="ProductInfo">
      <Navigation />
      <Product />
      <Footer />
    </div>
  );
}

export default ProductInfo;
